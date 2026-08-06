(function () {
  "use strict";

  const course = window.REASONING_COURSE;
  if (!course) return;
  const STORAGE_KEY = "applied-intelligence-progress:v1";
  const VALID_STATES = new Set(["in-progress", "completed"]);

  function emptyProgress() { return { version: 1, lessons: {} }; }
  function readProgress() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      return parsed && typeof parsed.lessons === "object" ? parsed : emptyProgress();
    } catch (_) { return emptyProgress(); }
  }
  function writeProgress(progress) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (_) { /* page remains usable */ }
  }
  function stateOf(progress, id) {
    const state = progress.lessons[id] && progress.lessons[id].state;
    return VALID_STATES.has(state) ? state : "not-started";
  }
  function setState(id, state) {
    const progress = readProgress();
    progress.lessons[id] = { state: state, updatedAt: Date.now() };
    writeProgress(progress);
  }
  function markInProgress(id) {
    const progress = readProgress();
    if (stateOf(progress, id) !== "completed") setState(id, "in-progress");
  }
  function allLessons() { return course.phases.reduce(function (all, phase) { return all.concat(phase.lessons); }, []); }
  function availableLessons() { return allLessons().filter(function (lesson) { return lesson.available && lesson.href; }); }
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function hrefFor(target, pageKind) { return new URL((pageKind === "lesson" ? "../" : "./") + target, document.baseURI).href; }
  function detectPage() {
    const filename = decodeURIComponent(location.pathname.split("/").pop() || "");
    if (filename === course.tocHref) return { kind: "course" };
    const lessonNumber = Number((filename.match(/^(\d{2})-/) || [])[1]);
    const lesson = allLessons().find(function (item) { return Number(item.id) === lessonNumber && item.available; });
    return lesson ? { kind: "lesson", lesson: lesson } : { kind: "other" };
  }
  function stats(progress) {
    const lessons = allLessons();
    const completed = lessons.filter(function (lesson) { return stateOf(progress, lesson.id) === "completed"; }).length;
    const inProgress = lessons.filter(function (lesson) { return stateOf(progress, lesson.id) === "in-progress"; }).length;
    return { completed: completed, inProgress: inProgress, total: lessons.length, percentage: Math.round(completed / lessons.length * 100) };
  }
  function phaseStats(progress, phase) {
    const completed = phase.lessons.filter(function (lesson) { return stateOf(progress, lesson.id) === "completed"; }).length;
    return { completed: completed, total: phase.lessons.length, percentage: Math.round(completed / phase.lessons.length * 100) };
  }
  function progressRing() {
    const ring = element("div", "cp-progress-ring");
    ring.setAttribute("role", "img");
    const value = element("span", "cp-progress-ring-value", "0%");
    ring.appendChild(value);
    return { node: ring, update: function (percentage) { ring.style.setProperty("--cp-progress", percentage + "%"); ring.setAttribute("aria-label", percentage + "% complete"); value.textContent = percentage + "%"; } };
  }
  function phaseBar() {
    const bar = element("div", "cp-phase-bar");
    const segments = course.phases.map(function (phase) {
      const segment = element("span", "cp-phase-segment");
      segment.style.flexGrow = String(phase.lessons.length);
      const fill = element("span", "cp-phase-segment-fill");
      segment.appendChild(fill); bar.appendChild(segment);
      return { phase: phase, segment: segment, fill: fill };
    });
    return { node: bar, update: function (progress) { segments.forEach(function (item) { const result = phaseStats(progress, item.phase); item.fill.style.width = result.percentage + "%"; item.segment.title = item.phase.title + ": " + result.completed + " of " + result.total + " complete"; }); } };
  }
  function nextCandidate(progress) {
    const available = availableLessons();
    const active = available.filter(function (lesson) { return stateOf(progress, lesson.id) === "in-progress"; }).sort(function (a, b) { return progress.lessons[b.id].updatedAt - progress.lessons[a.id].updatedAt; })[0];
    if (active) return { lesson: active, mode: "Resume lesson →" };
    const next = available.find(function (lesson) { return stateOf(progress, lesson.id) !== "completed"; });
    return next ? { lesson: next, mode: "Start lesson →" } : null;
  }

  function resetLesson(id) {
    const progress = readProgress();
    delete progress.lessons[id];
    writeProgress(progress);
  }

  function createResetDialog(options) {
    const backdrop = element("div", "cp-modal-backdrop");
    backdrop.hidden = true;
    const modal = element("section", "cp-modal");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", options.titleId);
    modal.appendChild(element("span", "callout-label", options.kicker));
    const title = element("h2", "", options.title);
    title.id = options.titleId;
    const copy = element("p", "", options.copy);
    const confirm = element("button", "cp-modal-danger", options.confirmLabel);
    confirm.type = "button";
    const cancel = element("button", "cp-modal-cancel", "Cancel");
    cancel.type = "button";
    modal.append(title, copy, confirm, cancel);
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    let opener = null;
    function close() {
      backdrop.hidden = true;
      if (opener) opener.focus();
    }
    function open(trigger) {
      opener = trigger;
      backdrop.hidden = false;
      confirm.focus();
    }
    cancel.addEventListener("click", close);
    backdrop.addEventListener("click", function (event) { if (event.target === backdrop) close(); });
    document.addEventListener("keydown", function (event) {
      if (backdrop.hidden) return;
      if (event.key === "Escape") { close(); return; }
      if (event.key !== "Tab") return;
      const focusable = [confirm, cancel];
      const current = focusable.indexOf(document.activeElement);
      const next = event.shiftKey ? (current - 1 + focusable.length) % focusable.length : (current + 1) % focusable.length;
      event.preventDefault();
      focusable[next].focus();
    });
    confirm.addEventListener("click", function () {
      backdrop.hidden = true;
      options.onConfirm();
    });
    return { open: open };
  }

  function initializeCourse() {
    const main = document.querySelector("main");
    const toc = main && main.querySelector(".book-toc");
    if (!main || !toc) return;
    if (!toc.children.length) {
      course.phases.forEach(function (phase) {
        const section = element("section", "toc-phase");
        section.appendChild(element("h2", "", phase.title));
        const list = element("ol");
        phase.lessons.forEach(function (lesson) {
          const item = element("li");
          const row = element(lesson.available ? "a" : "div", lesson.available ? "cp-lesson-row" : "cp-planned-row");
          row.setAttribute("data-lesson-id", lesson.id);
          if (lesson.available) row.href = lesson.href;
          row.append(
            element("span", "toc-number", String(Number(lesson.id)).padStart(2, "0")),
            element("span", "", lesson.title)
          );
          if (lesson.available) {
            const bubble = element("span", "cp-progress-bubble");
            bubble.setAttribute("aria-hidden", "true");
            row.appendChild(bubble);
          } else {
            row.appendChild(element("span", "cp-planned-badge", "Planned"));
          }
          item.appendChild(row); list.appendChild(item);
        });
        section.appendChild(list); toc.appendChild(section);
      });
    }
    const dashboard = element("section", "cp-course-progress");
    dashboard.appendChild(element("span", "callout-label", "Your progress"));
    const summary = element("div", "cp-course-summary");
    const ring = progressRing();
    const copy = element("div", "cp-course-summary-copy");
    const count = element("strong");
    const remaining = element("p");
    copy.append(count, remaining); summary.append(ring.node, copy); dashboard.appendChild(summary);
    const continueCard = element("section", "cp-continue-card");
    const continueLabel = element("span", "callout-label", "Continue learning");
    const continueCopy = element("p");
    const continueTitle = element("strong", "cp-continue-title");
    const continueMeta = element("span");
    const continueLink = element("a", "cp-continue-link");
    continueCopy.append(continueTitle, document.createElement("br"), continueMeta);
    continueCard.append(continueLabel, continueCopy, continueLink); dashboard.appendChild(continueCard);
    const bar = phaseBar(); dashboard.append(bar.node, element("p", "cp-phase-bar-label", "Progress by course phase"));
    toc.before(dashboard);

    const rows = new Map();
    toc.querySelectorAll("[data-lesson-id]").forEach(function (row) {
      const id = row.getAttribute("data-lesson-id");
      const bubble = row.querySelector(".cp-progress-bubble");
      if (bubble) rows.set(id, bubble);
    });
    const reset = element("section", "cp-course-reset");
    const resetButton = element("button", "cp-reset-link cp-course-reset-button", "Reset Course Lessons");
    resetButton.type = "button"; reset.appendChild(resetButton); toc.after(reset);
    const resetDialog = createResetDialog({
      titleId: "cp-reset-course-title",
      kicker: "Reset course progress",
      title: "Reset Applied Intelligence progress?",
      copy: "This clears every started and completed Applied Intelligence lesson on this browser. This cannot be undone.",
      confirmLabel: "Reset Applied Intelligence progress",
      onConfirm: function () {
        writeProgress(emptyProgress());
        render(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
    resetButton.addEventListener("click", function () { resetDialog.open(resetButton); });

    function render(showSuccess) {
      const existingSuccess = main.querySelector(".cp-reset-success");
      if (existingSuccess) existingSuccess.remove();
      if (showSuccess) {
        const success = element("div", "cp-reset-success", "Applied Intelligence course lessons were reset on this browser.");
        success.setAttribute("role", "status");
        success.tabIndex = -1;
        dashboard.before(success);
        success.focus();
      }
      const progress = readProgress();
      const result = stats(progress);
      ring.update(result.percentage); bar.update(progress);
      count.textContent = result.completed + " of " + result.total + " lessons complete";
      remaining.textContent = (result.total - result.completed) + " remaining across " + course.phases.length + " phases, " + result.inProgress + " in progress.";
      const candidate = nextCandidate(progress);
      if (candidate) {
        continueTitle.textContent = candidate.lesson.title;
        continueMeta.textContent = "Lesson " + candidate.lesson.id + " · available now";
        continueLink.hidden = false; continueLink.textContent = candidate.mode;
        continueLink.href = hrefFor(candidate.lesson.href, "course");
      } else {
        continueTitle.textContent = "All available lessons complete";
        continueMeta.textContent = "The next planned lesson will unlock when it is authored.";
        continueLink.hidden = true;
      }
      allLessons().forEach(function (lesson) {
        const bubble = rows.get(lesson.id);
        if (bubble) bubble.dataset.state = stateOf(progress, lesson.id);
      });
    }
    render(); window.addEventListener("storage", render);
  }

  function initializeLesson(lesson) {
    const main = document.querySelector("main");
    const footer = main && main.querySelector(".lesson-footer");
    if (!main || !footer) return;
    markInProgress(lesson.id);
    const utility = element("nav", "cp-lesson-utility");
    const contentsTop = element("a", "", "← Table of contents");
    contentsTop.href = hrefFor(course.tocHref, "lesson");
    const reset = element("button", "cp-reset-link", "Reset lesson"); reset.type = "button";
    utility.append(contentsTop, reset); main.prepend(utility);
    const kicker = main.querySelector(".kicker");
    const headingRow = element("div", "cp-lesson-heading-row");
    const statePill = element("span", "cp-lesson-state");
    if (kicker) { kicker.before(headingRow); headingRow.append(kicker, statePill); }

    const available = availableLessons();
    const index = available.findIndex(function (item) { return item.id === lesson.id; });
    const previous = index > 0 ? available[index - 1] : null;
    const next = index >= 0 ? available[index + 1] : null;
    const completion = element("section", "cp-completion-card");
    completion.append(element("span", "callout-label", "End of lesson " + Number(lesson.id)), element("h2", "", "Finished the explanation, quiz, and practice?"));
    const complete = element("button", "cp-complete-button", "Mark lesson complete"); complete.type = "button";
    const note = element("p", "cp-completion-note", "You can undo this anytime.");
    const nav = element("nav", "cp-lesson-nav-grid");
    const prevControl = previous ? element("a", "cp-lesson-nav-button", "← " + Number(previous.id) + " " + previous.title) : element("span", "cp-lesson-nav-button is-disabled", "Course start");
    if (previous) prevControl.href = hrefFor(previous.href, "lesson");
    const tocControl = element("a", "cp-lesson-nav-button", "Table of contents"); tocControl.href = hrefFor(course.tocHref, "lesson");
    const nextControl = next ? element("a", "cp-lesson-nav-button", Number(next.id) + " " + next.title + " →") : element("a", "cp-lesson-nav-button", "Course roadmap →");
    nextControl.href = hrefFor(next ? next.href : course.tocHref, "lesson");
    nav.append(prevControl, tocControl, nextControl); completion.append(complete, note, nav);
    footer.querySelector(".lesson-nav")?.remove(); footer.before(completion);

    const lessonName = (main.querySelector("h1") && main.querySelector("h1").textContent.trim()) || lesson.title;
    const resetDialog = createResetDialog({
      titleId: "cp-reset-lesson-" + lesson.id + "-title",
      kicker: "Reset lesson progress",
      title: "Reset " + lessonName + "?",
      copy: "This clears the progress of “" + lessonName + "” and returns you to the table of contents. This cannot be undone.",
      confirmLabel: "Reset lesson progress",
      onConfirm: function () {
        resetLesson(lesson.id);
        location.assign(hrefFor(course.tocHref, "lesson"));
      }
    });
    reset.addEventListener("click", function () { resetDialog.open(reset); });
    complete.addEventListener("click", function () { const completed = stateOf(readProgress(), lesson.id) === "completed"; setState(lesson.id, completed ? "in-progress" : "completed"); render(); });
    function render() {
      const completed = stateOf(readProgress(), lesson.id) === "completed";
      statePill.dataset.state = completed ? "completed" : "in-progress";
      statePill.textContent = completed ? "Completed" : "In progress";
      complete.textContent = completed ? "✓ Completed" : "Mark lesson complete";
      complete.setAttribute("aria-pressed", String(completed));
      note.textContent = completed ? "Click again to mark this lesson in progress." : "You can undo this anytime.";
    }
    render(); window.addEventListener("storage", render);
  }

  const page = detectPage();
  if (page.kind === "course") initializeCourse();
  if (page.kind === "lesson") initializeLesson(page.lesson);
  window.ReasoningCourseProgress = Object.freeze({ read: readProgress, resetLesson: resetLesson, setState: setState, storageKey: STORAGE_KEY });
}());

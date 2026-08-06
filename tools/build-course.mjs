import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import phase1 from "./content/phase-1.mjs";
import phase2 from "./content/phase-2.mjs";
import phase3 from "./content/phase-3.mjs";
import phase4 from "./content/phase-4.mjs";
import phase5 from "./content/phase-5.mjs";
import phase6 from "./content/phase-6.mjs";
import phase7 from "./content/phase-7.mjs";
import phase8 from "./content/phase-8.mjs";
import phase9 from "./content/phase-9.mjs";
import phase10 from "./content/phase-10.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const phases = [phase1, phase2, phase3, phase4, phase5, phase6, phase7, phase8, phase9, phase10];
const lessons = phases.flatMap((phase) => phase.lessons.map((lesson) => ({ ...lesson, phase })));
const totalLessons = Math.max(...lessons.map((lesson) => lesson.id));

function lessonId(id) {
  return String(id).padStart(4, "0");
}

function lessonFilenameNumber(id) {
  return String(id).padStart(2, "0");
}

function filename(lesson) {
  return `${lessonFilenameNumber(lesson.id)}-${lesson.slug}.html`;
}

function optionWordCount(option) {
  return option.trim().split(/\s+/).length;
}

function validate() {
  const quizErrors = [];
  const ids = lessons.map((lesson) => lesson.id);
  const expected = Array.from({ length: totalLessons - 1 }, (_, index) => index + 2);
  if (JSON.stringify(ids) !== JSON.stringify(expected)) {
    throw new Error(`Lesson IDs must be sequential from 2 through ${totalLessons}; received ${ids.join(", ")}`);
  }
  for (const lesson of lessons) {
    const required = ["slug", "title", "lede", "retrieval", "retrievalAnswer", "principle", "moves", "caseTitle", "caseBody", "exercise", "deliverable", "quiz", "transfer"];
    for (const key of required) {
      if (!lesson[key] || (Array.isArray(lesson[key]) && !lesson[key].length)) {
        throw new Error(`Lesson ${lesson.id} is missing ${key}`);
      }
    }
    const counts = lesson.quiz.options.map(optionWordCount);
    if (!counts.every((count) => count === counts[0])) {
      quizErrors.push(`Lesson ${lesson.id}: ${counts.join(", ")}`);
    }
    if (lesson.quiz.answer < 0 || lesson.quiz.answer >= lesson.quiz.options.length) {
      throw new Error(`Lesson ${lesson.id} has an invalid quiz answer index`);
    }
  }
  if (quizErrors.length) {
    throw new Error(`Quiz options must have equal word counts:\n${quizErrors.join("\n")}`);
  }
}

function lessonHtml(lesson) {
  const source = lesson.source || lesson.phase.source;
  const moves = lesson.moves.map((move) => `      <li>${move}</li>`).join("\n");
  const quiz = JSON.stringify([lesson.quiz], null, 2).replace(/<\//g, "<\\/");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lesson ${lesson.id} — ${lesson.title}</title>
  <link rel="stylesheet" href="../assets/course.css">
  <link rel="stylesheet" href="../assets/progress.css">
</head>
<body>
<main>
  <p class="kicker">Lesson ${lesson.id} of ${totalLessons} · 15–20 minutes</p>
  <h1>${lesson.title}</h1>
  <p class="lede">${lesson.lede}</p>

  <div class="mission">
    <span class="callout-label">Mission connection</span>
    <p>${lesson.mission || lesson.phase.mission}</p>
  </div>

  <h2>Retrieve before reading</h2>
  <div class="exercise retrieval-practice">
    <p>${lesson.retrieval}</p>
    <details><summary>Reveal after answering</summary><p>${lesson.retrievalAnswer}</p></details>
  </div>

  <h2>The mental model</h2>
  <p>${lesson.principle}</p>
  <ol>
${moves}
  </ol>

  <h2>Worked case: ${lesson.caseTitle}</h2>
  <div class="note"><p>${lesson.caseBody}</p></div>

  <h2>Deliberate practice</h2>
  <div class="exercise">
    <p>${lesson.exercise}</p>
    <p><strong>Deliverable:</strong> ${lesson.deliverable}</p>
  </div>

  <h2>Check your judgment</h2>
  <p>Answer before rereading. Feedback appears immediately.</p>
  <div id="quiz"></div>

  <h2>Transfer it</h2>
  <p>${lesson.transfer}</p>

  <div class="note">
    <span class="callout-label">Primary source</span>
    <p><a href="${source.url}">${source.label}</a> — ${source.note}</p>
  </div>

  <p>Ask your teacher about anything unclear, or paste your deliverable for critique. The feedback loop is part of the lesson.</p>

  <footer class="lesson-footer">
    <nav class="lesson-nav" aria-label="Lesson navigation">
      <p><a href="../index.html">Table of contents</a> · <a href="../reference/${lesson.phase.reference.slug}.html">${lesson.phase.reference.title}</a> · <a href="../CURRICULUM.md">Course rationale</a></p>
    </nav>
    <p class="authorship">Authored by: Abineet Singh | August 2026</p>
  </footer>
</main>
<script src="../assets/quiz.js"></script>
<script>renderQuiz("quiz", ${quiz});</script>
<script src="../assets/progress-data.js"></script>
<script src="../assets/progress.js"></script>
</body>
</html>
`;
}

function referenceHtml(phase) {
  const items = phase.reference.items.map((item) => `      <li>${item}</li>`).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${phase.reference.title} — Quick Reference</title>
  <link rel="stylesheet" href="../assets/course.css">
</head>
<body>
<main>
  <p class="kicker">Phase ${phase.number} quick reference</p>
  <h1>${phase.reference.title}</h1>
  <p class="lede">${phase.reference.lede}</p>
  <ol>
${items}
  </ol>
  <div class="note"><span class="callout-label">Guardrail</span><p>${phase.reference.guardrail}</p></div>
  <footer class="lesson-footer">
    <p><a href="../index.html">Course table of contents</a> · <a href="../CURRICULUM.md">Course rationale</a></p>
    <p class="authorship">Authored by: Abineet Singh | August 2026</p>
  </footer>
</main>
</body>
</html>
`;
}

function progressData() {
  const data = {
    id: "applied-intelligence",
    name: "Applied Intelligence Under Uncertainty",
    shortName: "Applied Intelligence",
    tocHref: "index.html",
    phases: phases.map((phase) => ({
      title: phase.title,
      lessons: phase.lessons.map((lesson) => ({
        id: lessonId(lesson.id),
        title: lesson.title,
        href: `lessons/${filename(lesson)}`,
        available: true
      }))
    }))
  };
  data.phases[0].lessons.unshift({
    id: "0001",
    title: "Separate decision quality from outcome quality",
    href: "lessons/01-separate-decisions-from-outcomes.html",
    available: true
  });
  return `// Generated by tools/build-course.mjs. Do not edit by hand.\nwindow.REASONING_COURSE = ${JSON.stringify(data, null, 2)};\n`;
}

validate();
fs.mkdirSync(path.join(root, "lessons"), { recursive: true });
fs.mkdirSync(path.join(root, "reference"), { recursive: true });
for (const lesson of lessons) {
  fs.writeFileSync(path.join(root, "lessons", filename(lesson)), lessonHtml(lesson));
}
for (const phase of phases) {
  fs.writeFileSync(path.join(root, "reference", `${phase.reference.slug}.html`), referenceHtml(phase));
}
fs.writeFileSync(path.join(root, "assets", "progress-data.js"), progressData());
console.log(`Generated ${lessons.length} lessons, ${phases.length} references, and progress data.`);

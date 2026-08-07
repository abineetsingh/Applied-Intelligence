/* Reusable decision-journal widget.
 * Keeps entries in the learner's browser and can copy a plain-text record.
 */
(function () {
  "use strict";

  function make(tag, attrs, text) {
    const node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (key) {
      if (key === "className") node.className = attrs[key];
      else node.setAttribute(key, attrs[key]);
    });
    if (text !== undefined) node.textContent = text;
    return node;
  }

  window.renderDecisionJournal = function (containerId, storageKey) {
    const root = document.getElementById(containerId);
    const fields = [
      ["decision", "Decision", "What choice must you make, by when?"],
      ["alternatives", "Alternatives", "List at least two actions, including wait or gather evidence if relevant."],
      ["information", "Information available now", "Record only what you could know before the outcome."],
      ["choice", "Current choice and reasoning", "What will you do, and which evidence or values drive it?"],
      ["confidence", "Confidence (0–100%)", "How likely is the result you are counting on?"],
      ["falsifier", "What would change your mind?", "Name an observable result, threshold, or date."]
    ];
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const controls = {};

    fields.forEach(function (field) {
      const wrap = make("label", { className: "journal-field" });
      wrap.appendChild(make("span", { className: "journal-label" }, field[1]));
      const input = field[0] === "confidence"
        ? make("input", { type: "number", min: "0", max: "100", placeholder: field[2] })
        : make("textarea", { rows: "3", placeholder: field[2] });
      input.value = saved[field[0]] || "";
      input.addEventListener("input", persist);
      controls[field[0]] = input;
      wrap.appendChild(input);
      root.appendChild(wrap);
    });

    const actions = make("div", { className: "journal-actions" });
    const copy = make("button", { type: "button" }, "Copy decision record");
    const status = make("span", { className: "journal-status", "aria-live": "polite" }, "Saved locally.");
    actions.appendChild(copy);
    actions.appendChild(status);
    root.appendChild(actions);

    function values() {
      const result = {};
      fields.forEach(function (field) { result[field[0]] = controls[field[0]].value.trim(); });
      return result;
    }

    function persist() {
      localStorage.setItem(storageKey, JSON.stringify(values()));
      status.textContent = "Saved locally.";
    }

    copy.addEventListener("click", function () {
      const record = values();
      const text = fields.map(function (field) {
        return field[1] + ":\n" + (record[field[0]] || "—");
      }).join("\n\n");
      navigator.clipboard.writeText(text).then(function () {
        status.textContent = "Copied—paste it into your AI conversation.";
      }, function () {
        status.textContent = "Copy failed; select the fields manually.";
      });
    });
  };
}());

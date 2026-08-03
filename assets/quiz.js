/* Reusable multiple-choice quiz widget for dsa_practice lessons.
 *
 * Usage in a lesson:
 *   <div id="quiz"></div>
 *   <script src="../assets/quiz.js"></script>
 *   <script>
 *     renderQuiz("quiz", [
 *       { code: "for x in arr:\n    print(x)",   // optional code block
 *         prompt: "What is the time complexity?",
 *         options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
 *         answer: 1,
 *         explain: "One pass over n elements." },
 *     ]);
 *   </script>
 *
 * Answers are revealed immediately (tight feedback loop). Options are
 * shuffled on each render so position never leaks the answer.
 */

function renderQuiz(containerId, questions) {
  const container = document.getElementById(containerId);
  container.classList.add("quiz");
  let answered = 0;
  let correct = 0;

  const scoreEl = document.createElement("p");
  scoreEl.className = "quiz-score";
  scoreEl.textContent = "0 of " + questions.length + " answered.";

  questions.forEach(function (q, i) {
    const box = document.createElement("div");
    box.className = "quiz-q";

    const num = document.createElement("div");
    num.className = "q-num";
    num.textContent = "Question " + (i + 1) + " of " + questions.length;
    box.appendChild(num);

    if (q.code) {
      const pre = document.createElement("pre");
      const codeEl = document.createElement("code");
      codeEl.textContent = q.code;
      pre.appendChild(codeEl);
      box.appendChild(pre);
    }

    const prompt = document.createElement("p");
    prompt.textContent = q.prompt;
    box.appendChild(prompt);

    // Shuffle options, remembering which is correct.
    const opts = q.options.map(function (text, idx) {
      return { text: text, isCorrect: idx === q.answer };
    });
    for (let j = opts.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      const tmp = opts[j]; opts[j] = opts[k]; opts[k] = tmp;
    }

    const optsRow = document.createElement("div");
    optsRow.className = "quiz-options";

    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback";

    opts.forEach(function (opt) {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.addEventListener("click", function () {
        optsRow.querySelectorAll("button").forEach(function (b) {
          b.disabled = true;
          const wasCorrect = opts[Array.prototype.indexOf.call(optsRow.children, b)].isCorrect;
          if (wasCorrect) b.classList.add("correct");
        });
        if (!opt.isCorrect) btn.classList.add("incorrect");

        const verdict = document.createElement("span");
        verdict.className = "verdict " + (opt.isCorrect ? "good" : "bad");
        verdict.textContent = opt.isCorrect ? "Correct. " : "Not quite. ";
        feedback.appendChild(verdict);
        feedback.appendChild(document.createTextNode(q.explain || ""));
        feedback.classList.add("shown");

        answered++;
        if (opt.isCorrect) correct++;
        scoreEl.textContent = answered === questions.length
          ? "Done: " + correct + " of " + questions.length + " correct." +
            (correct === questions.length ? " Full marks." : " Reread the ones you missed, then retake tomorrow.")
          : answered + " of " + questions.length + " answered.";
      });
      optsRow.appendChild(btn);
    });

    box.appendChild(optsRow);
    box.appendChild(feedback);
    container.appendChild(box);
  });

  container.appendChild(scoreEl);
}

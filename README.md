# Applied Intelligence Under Uncertainty

This repository contains a self-paced, 67-lesson course for developing stronger judgment under uncertainty. It is designed for an experienced software engineer, aspiring founder, and trader who wants to reason from first principles, interpret probability and evidence accurately, choose worthwhile product problems, and make faster decisions without sacrificing rigor.

Lessons are standalone, mobile-friendly HTML pages that can be opened directly in a browser. They combine concise mental models, retrieval practice, worked real-world cases, immediate-feedback quizzes, transfer prompts, primary sources, and concrete decision artifacts. The course compounds deliberately, so it is best completed in sequence. Start with the [interactive table of contents](./00-table_of_contents.html).

## Table of contents

- [Course](#course)
- [Using the repository](#using-the-repository)
- [Tech stack](#tech-stack)
- [Repository structure](#repository-structure)
- [Authoring and maintenance](#authoring-and-maintenance)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Future enhancements](#future-enhancements)
- [Authorship](#authorship)

## Course

The course contains 67 lessons across ten phases:

### Phase 1: Build the first-principles operating system

- Separate decision quality from outcome quality
- Turn vague situations into explicit decisions
- Atomize problems into primitives, constraints, variables, and unknowns
- Rebuild from primitives into competing mechanisms
- Complete an unfamiliar-problem decomposition case

### Phase 2: Learn the language of uncertainty

- Replace vague confidence words with probabilities
- Interpret probability as frequency and belief
- Combine and condition probabilities
- Select useful reference classes and base rates
- Think in natural frequencies and update with Bayes

### Phase 3: See signal, noise, and uncertainty in data

- Identify data-generating processes
- Distinguish populations, samples, parameters, and estimates
- Reason with distributions, variance, skew, tails, and path dependence
- Use simulation to develop statistical intuition
- Detect selection and measurement bias
- Interpret uncertainty intervals honestly

### Phase 4: Infer without fooling yourself

- Separate estimation from hypothesis testing
- Understand false positives, false negatives, and power
- Interpret p-values without common fallacies
- Separate statistical significance from practical importance
- Correct for repeated looks and multiple comparisons

### Phase 5: Reason about causes and experiments

- Ask counterfactual questions
- Draw causal diagrams
- Recognize confounders, colliders, mediators, and leakage
- Design decision-ready randomized experiments
- Use observational evidence carefully
- Resist story lock-in with competing explanations

### Phase 6: Choose under uncertainty

- Calculate expected value and recognize its limits
- Make utility and tradeoffs explicit
- Build sequential decision trees
- Identify asymmetric upside, ruin, and irreversible downside
- Price the value of additional information
- Prefer robust and reversible choices when models are fragile

### Phase 7: Find and test problems worth solving

- Separate customer problems from proposed solutions
- Rank assumptions by importance and evidence
- Interview for behavior, constraints, and existing workarounds
- Design the cheapest experiment capable of changing the decision
- Distinguish stated interest from costly behavior
- Interpret funnels, cohorts, retention, and denominators
- Make continue, pivot, or kill decisions

### Phase 8: Evaluate market and trading claims

- Define a falsifiable edge after costs
- Compare return distributions, drawdowns, tails, and paths
- Treat technical patterns as hypotheses rather than explanations
- Design chronological, leakage-resistant tests
- Correct for overfitting and strategy selection
- Size exposure around estimation error and ruin

### Phase 9: Develop strategic and executive judgment

- Determine when intuition is earned
- Use recognition-primed decisions without blind reflex
- Find bottlenecks, complementarities, feedback loops, and leverage
- Read incentives, information flow, and decision rights
- Construct portfolios of bounded-downside experiments
- Defend a consequential strategy before outcomes are known

### Phase 10: Apply game theory to real-world scenarios

- Model players, strategies, timing, information, outcomes, and payoffs
- Find dominated strategies, best responses, and Nash equilibria
- Solve sequential games and test credible commitments
- Build cooperation through repeated interaction and reputation
- Read costly signals and design ethical screens
- Bargain from credible alternatives and design better mechanisms
- Change harmful games by redesigning their rules and incentives

The full instructional rationale, artifacts, and lesson sequence live in [CURRICULUM.md](./CURRICULUM.md).

## Using the repository

No application server or package installation is required for the lessons themselves.

1. Open `00-table_of_contents.html` in a browser.
2. Start with Lesson 1 or continue from the lesson shown by the tracker.
3. Answer the retrieval prompt before revealing its explanation.
4. Work through the mental model and case.
5. Complete the deliberate-practice deliverable using a real decision when possible.
6. Answer the immediate-feedback quiz.
7. Mark the lesson complete at the bottom of the page.
8. Revisit the concept after a delay and use it in a different domain.

Progress is stored in browser-local storage. It remains private to that browser profile and device; publishing the static files does not publish a learner's progress. The table of contents shows overall completion, phase progress, lesson status, and a continue-learning shortcut. Lessons and the table of contents include reset controls with confirmation.

Every lesson recommends a primary source and ends with an invitation to ask an AI teacher a follow-up question or submit the practice deliverable for critique.

For consistent progress tracking across pages while working locally, serve the repository from its root:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/00-table_of_contents.html>. Direct `file://` tabs may isolate browser storage by file.

On macOS, you can open the course directly with:

```bash
open 00-table_of_contents.html
```

The course is intended for regular practice rather than a single reading pass. A pace of one 15–20 minute lesson per weekday leaves room for retrieval, real-world application, and spaced review.

## Tech stack

- Semantic HTML
- Shared CSS with print-friendly lesson and reference layouts
- Dependency-free browser JavaScript
- Browser `localStorage` for private progress state
- Node.js scripts for deterministic generation and validation
- Static hosting; no database, backend, build framework, or environment variables required

## Repository structure

```text
.
├── 00-table_of_contents.html       # Interactive course index and tracker
├── README.md                       # Repository documentation
├── CURRICULUM.md                   # Complete 67-day sequence and rationale
├── MISSION.md                      # Learning objective and success criteria
├── NOTES.md                        # Teaching and authoring notes
├── RESOURCES.md                    # Trusted sources and communities
├── assets/
│   ├── course.css                  # Shared lesson/reference presentation
│   ├── progress.css                # Tracker, status, and reset styling
│   ├── progress-data.js            # Generated 67-lesson manifest
│   ├── progress.js                 # Progress and reset behavior
│   ├── quiz.js                     # Immediate-feedback quiz component
│   ├── decision-journal.js         # Decision-journal interaction
│   ├── viz.css                     # Interactive visualization styling
│   └── viz.js                      # Reusable visual reasoning components
├── lessons/                        # 67 standalone lesson pages
├── reference/                      # 12 printable playbooks and checklists
├── learning-records/               # Durable records of learning decisions
└── tools/
    ├── build-course.mjs            # Generates lessons, references, and manifest
    ├── validate-course.mjs         # Validates structure, scripts, and local links
    └── content/
        ├── phase-1.mjs
        └── ... phase-10.mjs        # Structured source content for each phase
```

Lesson filenames use four-digit identifiers, from `0001` through `0067`. Every lesson footer includes authorship and the month and year written.

## Authoring and maintenance

Lessons 2–67, the ten generated phase references, and `assets/progress-data.js` are produced by `tools/build-course.mjs`. Lesson 1 and the two original reference documents are maintained directly.

After editing a phase module or changing the lesson sequence, regenerate the course:

```bash
node tools/build-course.mjs
```

The generator checks that lesson identifiers are sequential, required lesson fields exist, answer indices are valid, and quiz options have equal word counts so formatting does not reveal the answer.

Validate the finished course with:

```bash
node tools/validate-course.mjs
```

The validator checks:

- All 67 lesson files exist in sequence
- All ten phases and 67 progress entries are active
- Every tracked lesson exists
- Every local link and script reference resolves
- HTML pages include a doctype, viewport metadata, and authorship
- Inline JavaScript parses successfully
- Lessons include a primary source, teacher follow-up prompt, and progress integration

Generated files should be changed through the corresponding `tools/content/phase-*.mjs` source. Running the builder overwrites generated lesson and reference HTML.

## Deployment

The course is a static site. It can be hosted on GitHub Pages, Cloudflare Pages, Netlify, Vercel, an object-storage website, or any conventional web server without a build command.

For GitHub Pages, publish the repository root and use `00-table_of_contents.html` as the course entry point. If a platform expects `index.html`, either configure the entry URL explicitly or add a small index page linking or redirecting to the table of contents.

Browser progress is origin-specific. Progress recorded on a local server will not transfer automatically to a deployed domain, another browser, or another device.

## Troubleshooting

### Progress does not carry between local pages

Serve the repository with `python3 -m http.server 8000` instead of opening separate `file://` pages. Some browsers isolate local-file storage.

### A generated lesson edit disappeared

Edit the relevant module under `tools/content/`, then run `node tools/build-course.mjs`. Direct changes to generated lesson files are overwritten.

### A lesson is missing from the table of contents

Run the generator and validator:

```bash
node tools/build-course.mjs
node tools/validate-course.mjs
```

Then refresh the browser page. The table of contents reads its lesson inventory from `assets/progress-data.js`.

### Reset was clicked accidentally

Reset controls require confirmation. Once confirmed, the affected browser-local progress is removed and cannot be restored by the repository because no progress data is sent to a server.

## Future enhancements

- Add optional timed mixed-domain judgment drills
- Add export and import for private progress and decision records
- Add more interactive probability and game-theory simulations
- Add a structured spaced-review queue
- Add automated accessibility and browser-rendering checks
- Add advanced branches for Bayesian modeling, causal inference, market microstructure, experimentation platforms, and algorithmic game theory

## Authorship

Authored by **Abineet Singh** in August 2026.

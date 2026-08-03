export default {
  number: 6,
  title: "Phase 6: Choice under uncertainty",
  mission: "Insight becomes judgment only when it changes action while respecting values, downside, reversibility, and the cost of delay.",
  source: {
    label: "Risk and Decision Analysis — MIT OpenCourseWare",
    url: "https://ocw.mit.edu/courses/ids-333-risk-and-decision-analysis-fall-2021/",
    note: "a rigorous course on decision trees, utility, sensitivity, and value of information."
  },
  reference: {
    slug: "decision-under-uncertainty",
    title: "Decision Under Uncertainty",
    lede: "A compact set of calculations and guardrails for choosing when outcomes are unknown.",
    items: [
      "List actions before outcomes; do not confuse what you control with what happens.",
      "Compute expected value as the probability-weighted average of outcomes.",
      "Represent nonlinear preferences, constraints, and catastrophic thresholds explicitly.",
      "Use decision trees for sequential choices, information arrival, and future options.",
      "Protect against ruin and irreversible downside before optimizing average payoff.",
      "Buy information only when it can change action enough to exceed its full cost.",
      "Prefer robust, reversible actions when estimates are fragile."
    ],
    guardrail: "Expected value is a model output, not a command. Model error, dependence, utility, liquidity, and survival can dominate its arithmetic."
  },
  lessons: [
    {
      id: 34,
      slug: "calculate-expected-value",
      title: "Calculate expected value",
      lede: "Compare uncertain actions using probability-weighted consequences.",
      retrieval: "In sparse diagnosis, what makes an evidence request valuable?",
      retrievalAnswer: "It is inexpensive and produces different predicted results under competing mechanisms, so it can change their ranking or the action."
      ,principle: "Expected value multiplies each possible outcome by its probability and sums the results. It is most useful for repeated or portfolio decisions and for making assumptions explicit. It does not by itself represent risk tolerance or ruin.",
      moves: [
        "List mutually exclusive outcomes for each action.",
        "Assign probabilities that sum to one.",
        "Express consequences in a common decision-relevant unit.",
        "Multiply and sum.",
        "Stress-test probabilities and omitted outcomes."
      ],
      caseTitle: "a two-week validation sprint",
      caseBody: "A sprint costs $8,000. With 30% probability it reveals strong demand worth an estimated $100,000 in option value, 40% it yields modest learning worth $10,000, and 30% it yields no benefit. Rough EV is $30,000 + $4,000 − $8,000 = $26,000 before risk and opportunity cost.",
      exercise: "Build a three-outcome EV model for one live choice. Calculate a break-even probability for the upside case.",
      deliverable: "An outcome table, expected value, and break-even probability.",
      quiz: {
        prompt: "What does expected value combine?",
        options: ["Probabilities weighted by consequences", "Confidence multiplied by charisma", "Outcomes selected after observation", "Best cases minus worst"],
        answer: 0,
        explain: "Expected value is the sum of each outcome's consequence multiplied by its probability."
      },
      transfer: "A trade has positive EV only after realistic win probability, payoff distribution, slippage, fees, and adverse selection."
    },
    {
      id: 35,
      slug: "make-preferences-and-tradeoffs-explicit",
      title: "Make preferences and tradeoffs explicit",
      lede: "Replace vague priorities with explicit values, constraints, and exchange rates.",
      retrieval: "Why can a positive expected-value action still be unacceptable?",
      retrievalAnswer: "It may violate survival constraints, have intolerable downside, rely on fragile estimates, or conflict with nonlinear preferences and opportunity costs."
      ,principle: "Utility represents how outcomes matter to the decision maker, not merely their dollar amount. Additional gains may have diminishing value; some thresholds are unacceptable; multiple objectives require tradeoffs. Hidden values do not disappear—they enter decisions inconsistently.",
      moves: [
        "List objectives separately from alternatives.",
        "Distinguish hard constraints from weighted preferences.",
        "Define direction and measurement for each objective.",
        "State tradeoffs or rank-order under realistic ranges.",
        "Test whether the preferred action changes under plausible weights."
      ],
      caseTitle: "choosing between founder opportunities",
      caseBody: "One idea maximizes market size; another offers faster customer access, higher learning rate, and better personal fit. A single revenue estimate hides runway, motivation, control, reputation, and option value. Explicit objectives reveal which tradeoffs actually drive choice.",
      exercise: "Create an objective hierarchy for one decision. Give each objective a measurement, unacceptable threshold, and rough relative importance.",
      deliverable: "An objective table and one explicit tradeoff you previously left implicit.",
      quiz: {
        prompt: "What belongs outside weighted preferences?",
        options: ["True nonnegotiable decision constraints", "Every mildly important desire", "All uncertain future outcomes", "Any objective hard measuring"],
        answer: 0,
        explain: "A genuine hard constraint rules out alternatives; preferences compare remaining alternatives."
      },
      transfer: "Trading objectives can include growth, maximum drawdown, liquidity, time burden, and tax consequences; return alone is not utility."
    },
    {
      id: 36,
      slug: "build-sequential-decision-trees",
      title: "Build sequential decision trees",
      lede: "Model choices, uncertain events, and future options in the order they occur.",
      retrieval: "What is the difference between an objective and an alternative?",
      retrievalAnswer: "An objective states what matters; an alternative is an action available for pursuing those objectives."
      ,principle: "Decision trees separate choices from chance events and show how information changes later options. Solve backward: evaluate terminal outcomes, average chance branches, then select the best action at each decision node.",
      moves: [
        "Draw the first decision node.",
        "Add chance events that follow each action.",
        "Add later choices available after observing events.",
        "Assign probabilities and utilities at endpoints.",
        "Fold the tree backward and test sensitivity."
      ],
      caseTitle: "build versus prototype versus interview",
      caseBody: "A founder can build now, run a concierge prototype, or conduct interviews. The prototype costs time but reveals demand before the full build, preserving a later choice. Its value comes partly from information and partly from delaying irreversible commitment.",
      exercise: "Draw a two-stage tree for a live decision with at least one information-gathering action and one later choice. Solve it backward using rough values.",
      deliverable: "A decision tree and the branch where information changes action.",
      quiz: {
        prompt: "How are decision trees solved?",
        options: ["Evaluate backward from outcomes", "Choose earliest branch intuitively", "Average decision nodes randomly", "Ignore later available options"],
        answer: 0,
        explain: "Backward induction values terminal outcomes, chance nodes, and then optimal choices at decision nodes."
      },
      transfer: "A staged position entry is a sequential decision only if later sizing depends on new evidence rather than price-anchored emotion."
    },
    {
      id: 37,
      slug: "asymmetric-upside-ruin-and-irreversibility",
      title: "Asymmetric upside, ruin, and irreversibility",
      lede: "Seek large optional upside while preventing one error from ending participation.",
      retrieval: "What creates value in an information-gathering branch of a decision tree?",
      retrievalAnswer: "It changes the later action enough to improve expected utility, while preserving choices or delaying irreversible commitment."
      ,principle: "An asymmetric action has limited downside and materially larger upside, but ratios are insufficient if the downside threatens survival. Irreversible actions demand more evidence because mistakes cannot be cheaply undone.",
      moves: [
        "Bound direct and indirect downside.",
        "Identify ruin thresholds in money, time, trust, or health.",
        "Estimate upside magnitude and probability separately.",
        "Ask whether repeated losses remain survivable.",
        "Shrink, stage, insure, or reject irreversible exposure."
      ],
      caseTitle: "launching a narrow paid pilot",
      caseBody: "A two-week manual pilot risks limited time and reputation while testing willingness to pay and workflow value. Building a year-long platform first risks runway and locks architecture before evidence. The pilot creates information and preserves upside with bounded exposure.",
      exercise: "Redesign one attractive but risky opportunity into three staged commitments. State maximum loss, information gained, and scale condition at each stage.",
      deliverable: "An asymmetry ladder with ruin protection.",
      quiz: {
        prompt: "What comes before maximizing upside?",
        options: ["Protect continued participation first", "Assume losses reverse quickly", "Use maximum affordable leverage", "Ignore indirect downside entirely"],
        answer: 0,
        explain: "Survival preserves future opportunities; ruin eliminates even positive long-run expectation."
      },
      transfer: "Position size should be small enough that estimation error and losing streaks do not remove you from the market."
    },
    {
      id: 38,
      slug: "price-the-value-of-information",
      title: "Price the value of information",
      lede: "Research only when an answer can change action enough to justify cost and delay.",
      retrieval: "Why is a favorable upside-to-downside ratio insufficient?",
      retrievalAnswer: "The downside may cause ruin, repeat frequently, be correlated across bets, or be underestimated; survival and path matter."
      ,principle: "Information has decision value when different possible findings lead to different actions and those improved actions outweigh research cost, delay, and implementation. Interesting information with no action consequence has little decision value.",
      moves: [
        "Write the current best action without new information.",
        "List possible research findings.",
        "Map each finding to a changed or unchanged action.",
        "Estimate improvement from switching actions.",
        "Subtract research cost and delay risk."
      ],
      caseTitle: "another month of customer interviews",
      caseBody: "If every plausible interview outcome still leads to a cheap prototype, more interviews have low decision value. Run the prototype. If a specific buyer constraint would select between two expensive architectures, targeted research may be valuable.",
      exercise: "For one research task on your list, create a result-to-action table. Cancel, narrow, or proceed based on whether findings can alter action.",
      deliverable: "A value-of-information table and research decision.",
      quiz: {
        prompt: "When is information most valuable?",
        options: ["Findings change costly actions", "Findings confirm existing identity", "Research feels intellectually interesting", "Actions remain identical afterward"],
        answer: 0,
        explain: "Information earns its cost by improving action selection, especially where mistakes are expensive."
      },
      transfer: "Do not add another trading indicator unless its possible values produce different entries, exits, sizes, or rejection decisions."
    },
    {
      id: 39,
      slug: "prefer-robust-and-reversible-choices",
      title: "Prefer robust and reversible choices",
      lede: "Choose actions that remain acceptable when your estimates and models are wrong.",
      retrieval: "What two costs must be subtracted from the expected benefit of information?",
      retrievalAnswer: "The direct cost of research and the cost of delay, including lost opportunities or changed conditions."
      ,principle: "A robust action performs acceptably across plausible models and parameter ranges. A reversible action can be changed cheaply after feedback. When knowledge is fragile, robustness and reversibility can dominate a slightly higher modeled optimum.",
      moves: [
        "List plausible models, not only parameter ranges.",
        "Evaluate each action under adverse assumptions.",
        "Identify irreversible commitments and lock-in.",
        "Prefer small probes and modular commitments.",
        "Set review triggers before switching becomes emotional."
      ],
      caseTitle: "choosing a product architecture",
      caseBody: "A highly specialized architecture is optimal if scale and workflow assumptions are right. A simpler modular system is adequate across more futures and preserves migration options. Before product-market evidence, robustness may be worth more than theoretical efficiency.",
      exercise: "Create a three-scenario stress test for one decision. Score each alternative on outcome, reversibility, and recovery cost if the model fails.",
      deliverable: "A robustness matrix and chosen review trigger.",
      quiz: {
        prompt: "When is robustness especially valuable?",
        options: ["Models remain materially fragile", "One model seems certain", "Switching costs equal zero", "Outcomes never affect survival"],
        answer: 0,
        explain: "Robust actions reduce regret across plausible worlds when model selection and estimates are uncertain."
      },
      transfer: "A strategy diversified across independent mechanisms is more robust than many parameters expressing one hidden exposure."
    },
    {
      id: 40,
      slug: "mixed-case-build-test-wait-or-stop",
      title: "Mixed case: build, test, wait, or stop",
      lede: "Combine expected value, utility, information, asymmetry, and reversibility.",
      retrieval: "Distinguish robust from optimal in one sentence.",
      retrievalAnswer: "An optimal action performs best under one model; a robust action remains acceptable across several plausible models or parameter values."
      ,principle: "A high-quality choice integrates the whole decision architecture. The arithmetic disciplines intuition, while sensitivity reveals which assumptions actually drive the recommendation.",
      moves: [
        "Frame actions and objectives.",
        "Build a small sequential tree.",
        "Estimate values and ruin constraints.",
        "Price the next evidence step.",
        "Choose a robust action with a review trigger."
      ],
      caseTitle: "an enterprise product with one eager buyer",
      caseBody: "The buyer offers a paid pilot but requests custom infrastructure. Options are full build, manual pilot, wait for more buyers, or stop. The manual pilot caps cost, tests workflow and budget, and preserves the choice to build—unless customization creates commitments that contaminate learning.",
      exercise: "Analyze the case in fifteen minutes. Put rough numbers on the tree, identify the ruin constraint, and state what pilot evidence would trigger scaling.",
      deliverable: "A decision tree, VOI estimate, asymmetry design, and action memo.",
      quiz: {
        prompt: "Which action best preserves optionality?",
        options: ["Run bounded paid pilot", "Build complete platform immediately", "Wait without gathering evidence", "Reject customer without analysis"],
        answer: 0,
        explain: "A bounded paid pilot tests costly behavior and workflow while limiting irreversible investment."
      },
      transfer: "Use the same structure for a market thesis: reject, observe, paper-test, enter small, or scale—each is a distinct action."
    }
  ]
};

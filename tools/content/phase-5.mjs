export default {
  number: 5,
  title: "Phase 5: Causes and experiments",
  mission: "Strategic action changes systems. Causal reasoning predicts what an intervention will do, not merely what variables accompany one another.",
  source: {
    label: "Causal Inference: What If — Hernán & Robins",
    url: "https://www.hsph.harvard.edu/miguel-hernan/wp-content/uploads/sites/1268/2024/04/hernanrobins_WhatIf_26apr24.pdf",
    note: "a free, rigorous treatment of counterfactuals, randomized experiments, and observational causal inference."
  },
  reference: {
    slug: "causal-reasoning-checklist",
    title: "Causal Reasoning Checklist",
    lede: "A practical sequence for moving from association to intervention.",
    items: [
      "State the treatment, outcome, population, time horizon, and comparison condition.",
      "Write the counterfactual: what would happen to the same unit under the alternative action?",
      "Draw plausible common causes of treatment and outcome.",
      "Do not control for colliders or automatically adjust for variables caused by treatment.",
      "Use randomization when feasible; protect assignment, measurement, and analysis integrity.",
      "For observational evidence, make identification assumptions explicit and seek negative controls.",
      "Keep multiple live explanations until discriminating evidence arrives."
    ],
    guardrail: "Prediction and causation answer different questions. A variable can predict an outcome well while changing it has no benefit—or causes harm."
  },
  lessons: [
    {
      id: 27,
      slug: "ask-the-counterfactual-question",
      title: "Ask the counterfactual question",
      lede: "Define causation as the difference an action makes compared with a credible alternative.",
      retrieval: "Why was the AI engagement result in Lesson 26 exploratory rather than confirmatory?",
      retrievalAnswer: "The team selected one winner among many metrics and stopped flexibly, so a new fixed test was needed to separate effect from selection noise.",
      principle: "A causal effect compares potential outcomes under different actions for the same unit. Because only one can be observed, causal reasoning constructs a credible comparison using randomization, design, assumptions, or natural variation.",
      moves: [
        "Name the intervention precisely.",
        "Name the outcome and measurement horizon.",
        "Write the alternative action or no-action condition.",
        "Define the target population.",
        "Ask what makes the comparison group credible."
      ],
      caseTitle: "customers using a feature retain more",
      caseBody: "Feature users may retain because the feature helps, or motivated users may both discover the feature and remain. The causal question is whether enabling or encouraging comparable users to use it changes retention relative to not doing so.",
      exercise: "Rewrite three causal claims from work or news as treatment, comparison, outcome, population, and horizon. Identify the unobserved counterfactual in each.",
      deliverable: "Three explicit causal questions and their missing counterfactuals.",
      quiz: {
        prompt: "What defines a causal effect?",
        options: ["Difference between potential outcomes", "Correlation among measured variables", "Prediction from historical patterns", "Narrative matching observed sequence"],
        answer: 0,
        explain: "Causation compares what would happen under one action with what would happen under an alternative."
      },
      transfer: "A strategy's historical association with returns does not show that trading it will realize those returns after costs and crowd response."
    },
    {
      id: 28,
      slug: "draw-a-causal-diagram",
      title: "Draw a causal diagram",
      lede: "Expose assumed mechanisms and backdoor paths before touching the data.",
      retrieval: "Why can feature usage predict retention without causing retention?",
      retrievalAnswer: "Motivation or another common cause may increase both usage and retention, creating association without an intervention effect.",
      principle: "A causal diagram represents variables as nodes and direct causal assumptions as arrows. It clarifies which paths create the effect of interest, which create confounding, and which variables should not be adjusted for.",
      moves: [
        "Place treatment and outcome first.",
        "Add common causes of both.",
        "Add variables caused by treatment.",
        "Add selection mechanisms affecting observation.",
        "Use the graph to choose design and adjustment—not to decorate analysis."
      ],
      caseTitle: "discounts and customer retention",
      caseBody: "Salespeople give discounts to accounts judged likely to churn. Churn risk causes discount and retention, creating confounding. Comparing discounted with full-price accounts directly may make discounts look harmful even if they help within risk levels.",
      exercise: "Draw a five-to-eight-node causal graph for one product decision. Mark treatment, outcome, confounders, mediators, and selection variables in different colors.",
      deliverable: "A causal diagram plus the adjustment set you would consider.",
      quiz: {
        prompt: "What creates a backdoor path?",
        options: ["Common causes of variables", "Treatment causing final outcome", "Random assignment of treatment", "Accurate measurement of outcomes"],
        answer: 0,
        explain: "A common cause opens a noncausal association between treatment and outcome that can confound their relationship."
      },
      transfer: "Draw the graph behind “sentiment predicts price.” News, positioning, liquidity, and price itself may affect both measured sentiment and returns."
    },
    {
      id: 29,
      slug: "confounders-colliders-and-leakage",
      title: "Confounders, colliders, and leakage",
      lede: "Know when controlling for more variables creates rather than removes bias.",
      retrieval: "What belongs on a causal diagram before covariate adjustment?",
      retrievalAnswer: "Treatment, outcome, their common causes, variables caused by treatment, and mechanisms determining selection or observation.",
      principle: "A confounder causes both treatment and outcome and may need adjustment. A collider is caused by two variables; conditioning on it can create a false association. Leakage lets future or outcome-derived information enter a predictor, producing impossible performance.",
      moves: [
        "Classify variables by causal role, not correlation strength.",
        "Adjust for pre-treatment common causes when assumptions support it.",
        "Avoid automatic control for post-treatment variables.",
        "Audit selection criteria for colliders.",
        "Enforce timestamps so future information cannot leak backward."
      ],
      caseTitle: "analyzing only sales-qualified leads",
      caseBody: "Product fit and salesperson enthusiasm both affect qualification. Among qualified leads, low product fit may appear associated with high enthusiasm because either can secure entry. Conditioning on qualification, a collider, creates a misleading relationship.",
      exercise: "Take your previous causal graph. For every variable you planned to control, write why it is a confounder rather than mediator or collider. Add timestamp boundaries.",
      deliverable: "A variable-role table and leakage audit.",
      quiz: {
        prompt: "What can conditioning on colliders do?",
        options: ["Create spurious association paths", "Remove every causal effect", "Guarantee randomized comparison groups", "Prevent future data leakage"],
        answer: 0,
        explain: "Selecting or controlling on a shared effect can induce association between its causes."
      },
      transfer: "Using revised earnings data, index members selected after the period, or indicators computed with future bars creates trading leakage."
    },
    {
      id: 30,
      slug: "design-a-decision-ready-experiment",
      title: "Design a decision-ready experiment",
      lede: "Start with the action rule, then design the smallest credible comparison.",
      retrieval: "Distinguish a confounder from a collider.",
      retrievalAnswer: "A confounder is a common cause of treatment and outcome; a collider is a common effect of two variables, and conditioning on it can open bias."
      ,principle: "A useful experiment is not merely randomized. It has a target population, intervention, comparison, outcome, sample logic, guardrails, and a precommitted action rule. Design backward from what different results would cause you to do.",
      moves: [
        "Write the decision and smallest meaningful effect.",
        "Define eligibility before assignment.",
        "Randomize and protect treatment separation.",
        "Choose one primary outcome and guardrails.",
        "Predefine duration, stopping, analysis, and action thresholds."
      ],
      caseTitle: "testing concierge onboarding",
      caseBody: "Randomly offer concierge help to eligible new accounts, measure activation and four-week retention, track support cost, and predefine whether to automate, continue manually, or stop. Measuring only immediate activation could reward a costly intervention with no durable value.",
      exercise: "Design a one-page experiment for a real product or personal habit. Include the action you will take under positive, null, and harmful results.",
      deliverable: "A preregistered experiment card with decision branches.",
      quiz: {
        prompt: "What makes an experiment decision-ready?",
        options: ["Precommitted actions follow results", "Many metrics remain flexible", "Stopping occurs when exciting", "Assignment follows user preference"],
        answer: 0,
        explain: "A decision-ready design specifies how possible results map to action before outcomes invite rationalization."
      },
      transfer: "Paper trading is an experiment only if the rule, timestamps, costs, sample duration, and promotion threshold are fixed beforehand."
    },
    {
      id: 31,
      slug: "use-observational-evidence-carefully",
      title: "Use observational evidence carefully",
      lede: "Learn from reality without pretending adjustment automatically creates randomization.",
      retrieval: "Name four elements that must be precommitted in a decision-ready experiment.",
      retrievalAnswer: "Eligibility, intervention, comparison, primary outcome, guardrails, duration, stopping rule, analysis, and action threshold are valid elements.",
      principle: "Experiments may be infeasible, unethical, slow, or narrow. Observational evidence can still inform decisions when the causal graph, timing, natural variation, adjustment assumptions, and sensitivity to hidden bias are explicit.",
      moves: [
        "State the causal estimand and graph.",
        "Establish treatment precedes outcome.",
        "Seek natural contrasts or discontinuities.",
        "Adjust only under defensible causal assumptions.",
        "Test sensitivity and triangulate with different designs."
      ],
      caseTitle: "enterprise customers adopting an integration",
      caseBody: "Adopters expand more, but they may be larger and more sophisticated. Compare within pre-adoption trajectories, exploit staged availability, examine threshold-based eligibility, or use matched accounts—while stating what unmeasured motivation could still explain.",
      exercise: "Choose an observational claim. Propose two alternative designs that rely on different assumptions, then identify a result on which they should agree if the effect is real.",
      deliverable: "A triangulation plan and one hidden-bias sensitivity question.",
      quiz: {
        prompt: "What strengthens observational causal evidence?",
        options: ["Triangulate designs with assumptions", "Add controls without graphs", "Use correlations from future", "Ignore treatment timing entirely"],
        answer: 0,
        explain: "Different designs with different failure modes can increase confidence when they converge."
      },
      transfer: "Market evidence often cannot be randomized; robustness across assets, regimes, definitions, and truly later periods matters more than one fitted study."
    },
    {
      id: 32,
      slug: "premortems-and-competing-explanations",
      title: "Pre-mortems and competing explanations",
      lede: "Force hidden failure mechanisms into view before commitment makes them socially expensive.",
      retrieval: "Why does triangulation help observational inference?",
      retrievalAnswer: "Different designs rely on different assumptions; convergence is harder to explain with one design-specific bias."
      ,principle: "A pre-mortem imagines the decision failed and works backward to plausible causes. Competing explanations prevent narrative lock-in after surprising evidence. Both methods are useful only when they produce tests, safeguards, or changed allocation.",
      moves: [
        "Assume the plan failed at a specific future date.",
        "Generate independent causes before group discussion.",
        "Rank causes by likelihood and damage.",
        "Convert top causes into leading indicators and safeguards.",
        "Assign owners and trigger conditions."
      ],
      caseTitle: "a technically excellent product launch fails",
      caseBody: "Possible causes include no urgent budget, procurement friction, weak distribution, poor switching economics, inaccurate workflow assumptions, or a trust threshold the product cannot cross. Each suggests a different pre-launch probe.",
      exercise: "Run a ten-minute pre-mortem on one important plan. Produce at least eight mechanisms, then choose the two most decision-relevant and design leading indicators.",
      deliverable: "A ranked failure map with two safeguards and trigger owners.",
      quiz: {
        prompt: "When does a pre-mortem create value?",
        options: ["Failure causes change action", "Failure stories sound vivid", "Team anxiety increases greatly", "Every possible risk appears"],
        answer: 0,
        explain: "The method matters when identified mechanisms lead to evidence, safeguards, or allocation changes."
      },
      transfer: "Before entering a trade, imagine the thesis failed without price manipulation. List mechanisms, invalidation signals, and the planned exit response."
    },
    {
      id: 33,
      slug: "mixed-case-diagnose-from-sparse-clues",
      title: "Mixed case: diagnose from sparse clues",
      lede: "Build and test causal explanations when evidence is incomplete and time is limited.",
      retrieval: "What distinguishes a useful pre-mortem from imaginative pessimism?",
      retrievalAnswer: "Useful failure mechanisms change evidence gathering, safeguards, ownership, triggers, or allocation before failure occurs."
      ,principle: "Sparse evidence demands disciplined hypothesis management. Separate symptoms from causes, preserve multiple mechanisms, use temporal order, and seek the observation with the highest ability to discriminate under time pressure.",
      moves: [
        "Write observations without causal language.",
        "Generate at least three mechanisms.",
        "Draw a minimal graph for each.",
        "Predict one unseen fact under each mechanism.",
        "Acquire the cheapest high-discrimination evidence."
      ],
      caseTitle: "retention drops after a major release",
      caseBody: "The release coincides with a new acquisition campaign and a billing change. Aggregate retention drops, support tickets rise, and established accounts appear stable. Candidate causes include poor-fit acquisition, release friction for new users, or payment failures. Cohort, event, and billing splits discriminate better than debating the timeline.",
      exercise: "Analyze the case in twelve minutes. Rank three mechanisms, name their distinctive predictions, and request only two additional data cuts.",
      deliverable: "An observation ledger, causal graph, ranked hypotheses, and two evidence requests.",
      quiz: {
        prompt: "Which evidence request is strongest?",
        options: ["Split retention by cohort", "Collect more aggregate opinions", "Wait for stronger narratives", "Average every metric together"],
        answer: 0,
        explain: "A cohort split can distinguish acquisition composition from changes affecting all users."
      },
      transfer: "Diagnose strategy drawdown similarly: separate regime change, execution drift, crowding, cost change, and ordinary variance using predictions each mechanism makes."
    }
  ]
};

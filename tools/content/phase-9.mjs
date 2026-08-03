export default {
  number: 9,
  title: "Phase 9: Strategic and executive judgment",
  mission: "Top-tier judgment recognizes when intuition is earned, finds leverage in systems, aligns incentives, and scales asymmetric bets without confusing visibility with causality.",
  source: {
    label: "Conditions for Intuitive Expertise — Kahneman & Klein",
    url: "https://pubmed.ncbi.nlm.nih.gov/19739881/",
    note: "a joint account of when intuition is likely to reflect skill rather than unsupported confidence."
  },
  reference: {
    slug: "executive-judgment-playbook",
    title: "Executive Judgment Playbook",
    lede: "A compact operating system for high-leverage choices under ambiguity and organizational pressure.",
    items: [
      "Trust intuition only where cues are learnable, experience is relevant, and feedback is timely and diagnostic.",
      "Use recognition to generate a candidate action; mentally simulate it and search for anomalies before acting.",
      "Find the binding constraint before optimizing non-bottlenecks.",
      "Map incentives, information flows, decision rights, delays, and feedback loops.",
      "Model second-order reactions from customers, competitors, employees, regulators, and capital providers.",
      "Construct a portfolio of bounded experiments and scale exposure at explicit evidence gates.",
      "Record forecasts and decisions before outcomes; evaluate portfolio process over a meaningful horizon."
    ],
    guardrail: "Famous leaders are a selected sample. Extract testable mechanisms from cases, then compare with failures and base rates before generalizing."
  },
  lessons: [
    {
      id: 55,
      slug: "know-when-intuition-is-earned",
      title: "Know when intuition is earned",
      lede: "Distinguish fast expertise from fast confidence by examining the learning environment.",
      retrieval: "Why did the 2.1 Sharpe breakout system fail to justify capital?",
      retrievalAnswer: "Survivorship bias, same-close execution, excluded costs, extensive parameter search, and weak nearby performance contaminated the claim."
      ,principle: "Intuition becomes skilled when an environment has sufficiently stable cues and the decision maker receives repeated, timely, diagnostic feedback. Confidence and experience alone are not evidence. In low-validity environments, use intuition to generate hypotheses, not final probabilities.",
      moves: [
        "Rate environmental regularity and causal stability.",
        "Count genuinely comparable decisions experienced.",
        "Assess feedback delay, ambiguity, and selection.",
        "Check whether outcomes reveal process quality.",
        "Choose trust, verify, or override mode."
      ],
      caseTitle: "an executive's hiring intuition",
      caseBody: "The executive has interviewed hundreds of candidates, but feedback is delayed, promotions are selected, team context changes, and rejected candidates are never observed. Experience may train confidence faster than accuracy unless outcomes and counterfactuals are tracked systematically.",
      exercise: "Audit three domains where you trust your gut. Score regularity, repetitions, feedback speed, feedback clarity, and selection bias from 1 to 5.",
      deliverable: "An intuition-trust matrix with trust, verify, or override labels.",
      quiz: {
        prompt: "When is expert intuition most credible?",
        options: ["Stable cues with clear feedback", "Rare events with delayed feedback", "Selected outcomes with vivid stories", "Changing systems without useful repetition"],
        answer: 0,
        explain: "Learnable regularities plus repeated diagnostic feedback allow recognition to track reality."
      },
      transfer: "Markets provide rapid prices but not always clear causal feedback; regime change and selection can make apparent expertise unstable."
    },
    {
      id: 56,
      slug: "make-recognition-primed-decisions",
      title: "Make recognition-primed decisions",
      lede: "Use experience to generate a plausible action, then simulate it before execution.",
      retrieval: "What two environmental conditions support skilled intuition?",
      retrievalAnswer: "Learnable regularities and sufficient opportunities for timely, diagnostic feedback from genuinely comparable decisions."
      ,principle: "Experienced practitioners often recognize a situation and retrieve the first workable action rather than compare every option. The discipline is to diagnose anomalies and mentally simulate the candidate through likely consequences before acting.",
      moves: [
        "Recognize the situation prototype and relevant cues.",
        "Generate the first plausible action.",
        "Mentally simulate its sequence and side effects.",
        "Look for expectancies violated by current facts.",
        "Act, modify, or switch to deliberate comparison."
      ],
      caseTitle: "a production incident under time pressure",
      caseBody: "An experienced engineer recognizes database saturation and considers shedding load. Before acting, she simulates customer impact, checks whether queue growth and replica lag match the pattern, and notices an anomaly suggesting a retry storm. Recognition accelerates diagnosis; anomaly checking prevents rote response.",
      exercise: "Choose a familiar domain and reconstruct one fast judgment. List cues noticed, prototype retrieved, candidate action, mental simulation, and anomaly that would force slower reasoning.",
      deliverable: "A recognition-primed decision trace and stop condition.",
      quiz: {
        prompt: "What follows the first plausible action?",
        options: ["Mentally simulate likely sequence", "Execute without checking anomalies", "Generate every possible option", "Ignore learned situation cues"],
        answer: 0,
        explain: "Mental simulation tests whether the candidate action is workable and exposes mismatches before execution."
      },
      source: {
        label: "Recognition-Primed Decision Model — Gary Klein",
        url: "https://www.gary-klein.com/rpd",
        note: "a research-grounded model of rapid expert choice in natural settings."
      },
      transfer: "For unfamiliar product domains, you lack prototypes; slow down, seek base rates, and build experience through small feedback-rich experiments."
    },
    {
      id: 57,
      slug: "find-bottlenecks-and-leverage",
      title: "Find bottlenecks and leverage",
      lede: "Improve the constraint governing system output before optimizing everything else.",
      retrieval: "How does recognition-primed decision making avoid blind reflex?",
      retrievalAnswer: "The expert mentally simulates the first plausible action and checks anomalies or violated expectations before acting."
      ,principle: "System performance is often limited by one binding constraint. Improvements elsewhere accumulate inventory, complexity, or local vanity metrics. Leverage comes from changing a constraint, feedback loop, complement, or rule that affects many downstream outcomes.",
      moves: [
        "Define system output and boundary.",
        "Map stocks, flows, queues, and dependencies.",
        "Locate where demand persistently exceeds capacity.",
        "Test whether relieving it moves total output.",
        "Expect the constraint to migrate afterward."
      ],
      caseTitle: "a product team shipping faster",
      caseBody: "Engineering throughput doubles, but customer learning remains slow because recruiting qualified users takes six weeks. More code increases unvalidated inventory. The leverage point is continuous research access, not another development optimization.",
      exercise: "Map one system you control. Identify the current constraint, evidence it binds, an intervention, and the next likely constraint if relieved.",
      deliverable: "A constraint map and high-leverage experiment.",
      quiz: {
        prompt: "What happens when nonconstraints improve?",
        options: ["Local output may accumulate", "System throughput always doubles", "Every queue immediately disappears", "Constraints become permanently irrelevant"],
        answer: 0,
        explain: "Work piles up before the binding constraint; local efficiency may not improve total system output."
      },
      transfer: "In opportunity selection, distribution access can be the constraint even when product feasibility receives most attention."
    },
    {
      id: 58,
      slug: "read-incentives-and-information-flow",
      title: "Read incentives and information flow",
      lede: "Predict organizational behavior from rewards, decision rights, and who learns what when.",
      retrieval: "Why can improving engineering speed reduce rather than increase strategic learning?",
      retrievalAnswer: "If customer access is the constraint, faster development creates more unvalidated work without increasing evidence throughput."
      ,principle: "Organizations are information-processing systems populated by agents with different incentives. Metrics, ownership, career risk, delays, and escalation paths determine what leaders see and what employees rationally conceal or optimize.",
      moves: [
        "Map actors, objectives, incentives, and veto rights.",
        "Trace information from source to decision maker.",
        "Identify delay, filtering, and metric gaming.",
        "Separate responsibility from actual authority.",
        "Redesign feedback and rewards around system outcomes."
      ],
      caseTitle: "a sales organization promises unsupported features",
      caseBody: "Sales is rewarded for bookings, product bears delivery cost, and leadership sees pipeline before churn. The behavior is not a communication accident; incentives and delayed feedback make overpromising locally rational.",
      exercise: "Choose one recurring organizational failure. Create an actor-incentive-information map and redesign one reward, decision right, or feedback path.",
      deliverable: "An organizational mechanism map and one testable redesign.",
      quiz: {
        prompt: "Why do bad metrics persist?",
        options: ["They reward local optimization", "Everyone misunderstands arithmetic always", "Information travels without filtering", "Authority perfectly matches responsibility"],
        answer: 0,
        explain: "People adapt rationally to measured rewards even when local optimization damages the broader system."
      },
      transfer: "Market prices aggregate incentives and constraints, but not perfectly; ask who must transact, who can wait, and who bears financing pressure."
    },
    {
      id: 59,
      slug: "construct-and-scale-asymmetry",
      title: "Construct and scale asymmetry",
      lede: "Build a portfolio where losses teach cheaply and winners earn increasing commitment.",
      retrieval: "What three organizational elements often explain behavior better than stated intentions?",
      retrievalAnswer: "Incentives, information flows, and actual decision rights—along with delays, career risk, and metric design."
      ,principle: "Asymmetry is engineered through bounded experiments, preserved options, independent shots, and evidence-gated scaling. Reliability comes from portfolio process: many losses can coexist with superior outcomes if downside is capped and winners receive enough capital.",
      moves: [
        "Define maximum affordable loss per experiment.",
        "Diversify mechanisms, not labels.",
        "Set evidence gates before emotional commitment.",
        "Kill failed theses without starving live options.",
        "Scale winners while monitoring capacity and changed incentives."
      ],
      caseTitle: "a founder choosing three markets",
      caseBody: "Instead of fully building for the favorite market, run three bounded tests tied to costly customer behavior. Allocate the next month based on evidence, not equal fairness. The portfolio is designed for cheap disconfirmation and concentrated follow-through.",
      exercise: "Construct a portfolio of five current opportunities. For each, specify loss cap, independent thesis, evidence gate, kill rule, and scale rule.",
      deliverable: "An asymmetric opportunity portfolio and capital-allocation rule.",
      quiz: {
        prompt: "What makes asymmetric outcomes repeatable?",
        options: ["Bound losses and scale evidence", "Predict every single winner beforehand", "Avoid all failed experiments entirely", "Allocate equally after all results"],
        answer: 0,
        explain: "A repeatable process preserves survival through bounded losses and concentrates resources as evidence identifies winners."
      },
      source: {
        label: "Benchmarking the Returns to Venture — Cochrane",
        url: "https://www.nber.org/papers/w10202",
        note: "an empirical treatment of venture-type returns and the selection problems in measuring them."
      },
      transfer: "Do not call a concentrated position asymmetric merely because upside is large. Downside, dependence, liquidity, and survival must truly be bounded."
    },
    {
      id: 60,
      slug: "capstone-defend-a-consequential-strategy",
      title: "Capstone: defend a consequential strategy",
      lede: "Integrate first principles, probability, data, causality, decision analysis, product evidence, and executive judgment.",
      retrieval: "State the portfolio rule for creating asymmetric outcomes reliably.",
      retrievalAnswer: "Cap losses, preserve independent options, define evidence gates, kill failed theses, and concentrate resources behind validated winners."
      ,principle: "Exceptional judgment is not a performance of certainty. It is a traceable process that represents the right problem, quantifies uncertainty, distinguishes cause from correlation, constructs favorable exposure, and updates before reality forces it.",
      moves: [
        "Specify and atomize the consequential decision.",
        "Build competing models and calibrated forecasts.",
        "Audit data, causal assumptions, and missing evidence.",
        "Compare actions using utility, information, robustness, and ruin.",
        "Commit with falsifiers, owners, evidence gates, and review dates."
      ],
      caseTitle: "your real founder, market, or life strategy",
      caseBody: "Use a decision that matters enough to expose motivated reasoning but is still within your authority. Freeze the memo before the outcome. The grade comes from representation, calibration, evidence, and process—not whether uncertainty happens to favor you once.",
      exercise: "Write a two-page executive decision memo. Include the problem, primitives, models, base rates, probability ranges, causal assumptions, alternatives, expected utility, downside, value of information, action, and update rules. Defend it aloud in ten minutes, then invite adversarial questions.",
      deliverable: "A timestamped executive decision memo and a scheduled post-outcome audit.",
      quiz: {
        prompt: "What best demonstrates exceptional judgment?",
        options: ["Calibrated process survives scrutiny", "One spectacular outcome occurs", "Confidence remains permanently maximal", "Every decision avoids uncertainty"],
        answer: 0,
        explain: "Exceptional judgment is a repeatable, updateable process that produces superior decisions across a portfolio—not one lucky outcome."
      },
      transfer: "Carry this decision memo into Phase 10: identify every actor who can adapt to your strategy, then model how their incentives may change your outcome."
    }
  ]
};

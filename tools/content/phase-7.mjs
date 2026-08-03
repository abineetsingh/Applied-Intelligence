export default {
  number: 7,
  title: "Phase 7: Problems worth solving",
  mission: "Founder judgment creates asymmetry by finding costly, reachable problems and buying evidence before committing to a solution.",
  source: {
    label: "Testing Business Ideas — Bland & Osterwalder",
    url: "https://www.strategyzer.com/library/testing-business-ideas-book",
    note: "a practical field guide to assumptions, experiments, evidence strength, and venture-risk reduction."
  },
  reference: {
    slug: "problem-selection-scorecard",
    title: "Problem Selection Scorecard",
    lede: "A disciplined way to compare problems before falling in love with a solution.",
    items: [
      "Define the user, triggering context, desired progress, and current workaround.",
      "Measure frequency, intensity, urgency, and economic or emotional cost.",
      "Seek costly behavior: money, time, risk, political capital, or repeated workaround effort.",
      "Assess reachability, budget ownership, procurement, and distribution economics.",
      "Name your information, access, capability, or timing advantage.",
      "Map assumptions by importance and evidence strength; test the riskiest first.",
      "Compare problems as a portfolio and scale only after evidence gates are crossed."
    ],
    guardrail: "Complaints are not demand, interviews are not purchases, market size is not reachability, and technical novelty is not customer value."
  },
  lessons: [
    {
      id: 41,
      slug: "separate-problems-from-solutions",
      title: "Separate problems from solutions",
      lede: "Describe the customer's constrained progress without embedding your preferred product.",
      retrieval: "Why did the bounded paid pilot dominate the full build in Lesson 40?",
      retrievalAnswer: "It tested costly behavior and workflow, limited irreversible investment, and preserved the later option to scale."
      ,principle: "A problem exists in a user's context before your solution. Describe actor, trigger, desired progress, obstacle, consequence, and current workaround. Solution language narrows observation and invites confirmation bias.",
      moves: [
        "Name a specific user in a specific context.",
        "Describe the triggering event and desired progress.",
        "Identify constraints and consequences of failure.",
        "Observe current workarounds and alternatives.",
        "Write the problem without naming your technology."
      ],
      caseTitle: "an AI meeting-summary idea",
      caseBody: "“Teams need AI summaries” embeds a solution. A stronger thesis is: “After cross-functional customer calls, account owners spend 45 minutes reconciling commitments across tools, and missed handoffs delay deals.” This can be solved, measured, or disproven in multiple ways.",
      exercise: "Write three solution-free problem statements from opportunities you are considering. Ban product categories, features, and technologies from the wording.",
      deliverable: "Three problem theses containing user, context, progress, obstacle, consequence, and workaround.",
      quiz: {
        prompt: "Which statement describes a problem?",
        options: ["Handoffs lose customer commitments", "Teams need intelligent automation", "Build an AI copilot", "Launch collaborative dashboard software"],
        answer: 0,
        explain: "It describes an undesirable outcome in the user's workflow without prescribing a product."
      },
      transfer: "Separating problem from solution preserves strategic flexibility: the best intervention may be workflow, service, integration, policy, or software."
    },
    {
      id: 42,
      slug: "map-assumptions-by-risk-and-evidence",
      title: "Map assumptions by risk and evidence",
      lede: "Attack the belief that can kill the opportunity and currently rests on the weakest evidence.",
      retrieval: "What six elements make a solution-free problem statement useful?",
      retrievalAnswer: "User, context or trigger, desired progress, obstacle, consequence, and current workaround."
      ,principle: "Every venture thesis bundles desirability, viability, feasibility, and adaptability assumptions. Prioritize by impact if false and weakness of current evidence. Testing easy assumptions first creates motion without reducing existential risk.",
      moves: [
        "Write assumptions as falsifiable statements.",
        "Classify them by customer, market, channel, economics, and capability.",
        "Score importance if false.",
        "Score evidence strength from opinion to costly behavior.",
        "Test high-importance, low-evidence assumptions first."
      ],
      caseTitle: "a developer security product",
      caseBody: "Technical detection accuracy may be demonstrable while the existential assumptions are that engineering leaders feel urgent pain, can deploy the tool, trust its output, and control budget. Building more detection features may leave the riskiest beliefs untouched.",
      exercise: "Decompose one product thesis into at least fifteen assumptions. Place them on an importance-versus-evidence matrix and select the top three risks.",
      deliverable: "An assumption map with three prioritized tests.",
      quiz: {
        prompt: "Which assumption should be tested first?",
        options: ["Critical belief with weak evidence", "Minor belief with weak evidence", "Critical belief with strong evidence", "Minor belief with strong evidence"],
        answer: 0,
        explain: "Its failure can kill the thesis, and current evidence offers little protection."
      },
      transfer: "For a trade, separate signal validity, execution, liquidity, cost, capacity, and risk assumptions before optimizing the entry rule."
    },
    {
      id: 43,
      slug: "interview-for-behavior-and-workarounds",
      title: "Interview for behavior and workarounds",
      lede: "Collect episodes, constraints, and sacrifices—not compliments about hypothetical futures.",
      retrieval: "What two dimensions determine assumption-testing priority?",
      retrievalAnswer: "The consequence if the assumption is false and the weakness of current evidence supporting it."
      ,principle: "People are poor predictors of hypothetical behavior and often try to be helpful. Ask about a recent concrete episode: trigger, sequence, workaround, cost, stakeholders, attempted alternatives, and what happened next.",
      moves: [
        "Recruit people who recently experienced the context.",
        "Ask for the last specific occurrence.",
        "Reconstruct actions and timeline before opinions.",
        "Probe money, time, risk, and organizational friction.",
        "End with evidence access or a next costly step."
      ],
      caseTitle: "interviewing for reporting pain",
      caseBody: "“Would automated reporting help?” invites agreement. “Walk me through the last report you delivered late” reveals data sources, rework, approval, consequences, frequency, and whether anyone tried to buy a solution.",
      exercise: "Write a ten-question interview guide for one problem thesis. Replace every “would,” “could,” and “do you want” question with a past-behavior prompt.",
      deliverable: "A behavior-first interview guide and evidence-capture template.",
      quiz: {
        prompt: "Which question yields stronger evidence?",
        options: ["Describe the last incident", "Would this product help", "Do you like automation", "Might your team purchase"],
        answer: 0,
        explain: "A concrete past episode exposes actual behavior, constraints, and consequences instead of polite speculation."
      },
      transfer: "Interviewing does not prove market size, but it can reveal mechanisms and vocabulary for stronger behavioral tests."
    },
    {
      id: 44,
      slug: "choose-the-cheapest-decisive-experiment",
      title: "Choose the cheapest decisive experiment",
      lede: "Match experiment strength to the assumption and the commitment it must justify.",
      retrieval: "Why are concrete past-behavior questions stronger than hypothetical interest questions?",
      retrievalAnswer: "They reveal actual actions, constraints, costs, and consequences rather than politeness or inaccurate forecasts of future behavior."
      ,principle: "An experiment is valuable when it can change a decision. Use the cheapest test that creates evidence strong enough for the next commitment—not the cheapest activity or the most realistic prototype by default.",
      moves: [
        "Select one critical assumption.",
        "Define pass, fail, and ambiguous thresholds.",
        "List experiments from weak to strong evidence.",
        "Choose minimum cost at adequate strength.",
        "Precommit the decision following each result."
      ],
      caseTitle: "testing willingness to pay",
      caseBody: "Interviews can refine the problem, but a paid pilot, deposit, signed procurement step, or real checkout creates stronger pricing evidence. A polished free prototype may test usability while leaving willingness to pay untouched.",
      exercise: "For one top assumption, design three tests at increasing cost and evidence strength. Select the cheapest that can justify the next irreversible commitment.",
      deliverable: "An experiment ladder with thresholds, cost, duration, and result-to-action mapping.",
      quiz: {
        prompt: "What defines the cheapest useful test?",
        options: ["Adequate evidence for decision", "Minimum spending under all", "Maximum realism before learning", "Largest sample regardless relevance"],
        answer: 0,
        explain: "Cheap evidence is valuable only if it is strong and relevant enough to alter the pending decision."
      },
      transfer: "A landing page can test clicks, not durable use; a paper backtest can test code logic, not live execution quality."
    },
    {
      id: 45,
      slug: "distinguish-interest-from-costly-behavior",
      title: "Distinguish interest from costly behavior",
      lede: "Weight evidence by what the customer had to sacrifice to produce it.",
      retrieval: "Why can a polished free prototype fail to test willingness to pay?",
      retrievalAnswer: "It asks users to spend attention, not budget or procurement effort; it can validate usability while pricing remains unknown."
      ,principle: "Evidence becomes stronger when behavior carries cost: money, time, data access, workflow change, reputation, or political capital. The relevant cost must resemble the commitment your business will ultimately require.",
      moves: [
        "List what the user sacrificed for each signal.",
        "Check whether the actor controls the final purchase.",
        "Separate reversible clicks from workflow commitment.",
        "Discount subsidized or socially rewarded behavior.",
        "Seek a next step with greater but ethical cost."
      ],
      caseTitle: "a waitlist with ten thousand signups",
      caseBody: "A viral waitlist shows message resonance and low-cost curiosity. It says less about repeated workflow adoption or payment. Asking qualified users to connect data, schedule implementation, or place a refundable deposit creates stronger evidence.",
      exercise: "Rank every signal supporting one venture from 1 to 5 by customer sacrifice and closeness to final behavior. Identify the largest evidence gap.",
      deliverable: "An evidence-strength ladder and next costly-behavior test.",
      quiz: {
        prompt: "Which signal usually indicates stronger demand?",
        options: ["Paid pilot with integration", "Positive survey response only", "Social media like alone", "Unqualified waitlist signup only"],
        answer: 0,
        explain: "Payment plus integration effort is costly behavior close to actual adoption, though retention must still be tested."
      },
      transfer: "A trader's real-time, cost-inclusive execution record is stronger evidence than excitement about a historical chart."
    },
    {
      id: 46,
      slug: "read-funnels-cohorts-and-retention",
      title: "Read funnels, cohorts, and retention",
      lede: "Follow groups through time without letting changing denominators manufacture progress.",
      retrieval: "What makes behavioral evidence strong?",
      retrievalAnswer: "The actor sacrifices something relevant—money, time, data, workflow effort, risk, or political capital—close to the eventual desired behavior."
      ,principle: "Funnels describe transitions between stages; cohorts hold entry period or characteristics fixed; retention measures continued value over time. Aggregate metrics mix acquisition quality, product changes, seasonality, and maturity.",
      moves: [
        "Define stages with observable events.",
        "Use a stable eligible denominator.",
        "Group users by entry cohort and relevant segment.",
        "Compare curves at equal ages.",
        "Connect drop-offs to mechanisms and interventions."
      ],
      caseTitle: "activation rises while retention falls",
      caseBody: "A simplified signup flow can push more users into activation while admitting low-intent users who churn. Aggregate active users may still rise briefly. Cohort curves and segment composition expose whether value improved.",
      exercise: "Draw a funnel and cohort table for a product you use or imagine. Define every numerator, denominator, time window, and exclusion.",
      deliverable: "A metric specification and two competing explanations for one drop-off.",
      quiz: {
        prompt: "Why compare equal cohort ages?",
        options: ["Exposure time becomes comparable", "Every cohort becomes identical", "Seasonality disappears completely forever", "Selection bias becomes impossible"],
        answer: 0,
        explain: "Users need equal opportunity to reach the measured age; otherwise mature cohorts mechanically look more retained."
      },
      transfer: "Strategy performance should also be compared across comparable regimes and holding periods, not mixed into one flattering aggregate."
    },
    {
      id: 47,
      slug: "mixed-case-continue-pivot-or-kill",
      title: "Mixed case: continue, pivot, or kill",
      lede: "Compare problem strength, evidence quality, reachability, advantage, and remaining test cost.",
      retrieval: "How can activation improve while product value worsens?",
      retrievalAnswer: "Lower friction can admit more low-intent users; activation rises while retention, value, or segment quality declines."
      ,principle: "A venture decision should update a portfolio, not defend an identity. Continue when critical evidence strengthens; pivot when a valuable problem remains but mechanism or segment changes; kill when core assumptions fail or superior opportunities dominate.",
      moves: [
        "Restate the problem without the current solution.",
        "Update each critical assumption from evidence.",
        "Compare opportunity value with alternatives.",
        "Price the next decisive evidence step.",
        "Choose continue, pivot, pause, or kill with triggers."
      ],
      caseTitle: "high usage, no budget",
      caseBody: "Individual analysts use a tool weekly, but managers will not pay and security blocks expansion. The problem may be real while the buyer, channel, or economics fail. A pivot to a team workflow needs fresh evidence; continued feature work does not repair budget ownership.",
      exercise: "Write an investment-committee memo for the case. Argue each option fairly, then choose based on expected opportunity value and next-test asymmetry.",
      deliverable: "A one-page continue/pivot/kill memo with evidence gates.",
      quiz: {
        prompt: "When is a pivot justified?",
        options: ["Problem survives but mechanism changes", "Evidence fails every core belief", "Team strongly dislikes admitting failure", "Features remain easy to build"],
        answer: 0,
        explain: "A pivot preserves validated learning while changing a failed segment, channel, solution, or economic mechanism."
      },
      transfer: "Treat product ideas as a portfolio: the relevant comparison is not idea versus nothing, but this next dollar versus the best alternative experiment."
    }
  ]
};

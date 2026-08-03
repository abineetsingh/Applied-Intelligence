export default {
  number: 1,
  title: "Phase 1: First-principles operating system",
  mission: "Exceptional judgment starts by representing the right problem. A clean representation prevents speed from becoming fast confusion.",
  source: {
    label: "Defining Decision Quality — Decision Education Foundation",
    url: "https://www.decisioneducation.org/principles-of-decision-quality/defining-decision-quality",
    note: "a practical framework for frames, alternatives, information, values, reasoning, and committed action."
  },
  reference: {
    slug: "first-principles-operating-system",
    title: "First-Principles Operating System",
    lede: "A compact sequence for converting an ambiguous situation into a decision-ready model.",
    items: [
      "<strong>Specify:</strong> name the decision, owner, deadline, objective, and scope.",
      "<strong>Atomize:</strong> list primitives, constraints, controllable variables, and unknowns.",
      "<strong>Separate:</strong> label observations, assumptions, inferences, forecasts, and preferences.",
      "<strong>Model:</strong> construct at least two plausible mechanisms or strategies.",
      "<strong>Quantify:</strong> estimate base rates, ranges, sensitivities, and thresholds.",
      "<strong>Target:</strong> seek the cheapest evidence capable of changing the action.",
      "<strong>Act:</strong> choose with a downside limit, falsifier, and review condition."
    ],
    guardrail: "First principles do not mean ignoring accumulated knowledge. Use primitives to test whether an analogy fits; use base rates to avoid rebuilding reality from imagination."
  },
  lessons: [
    {
      id: 2,
      slug: "turn-a-situation-into-a-decision",
      title: "Turn a situation into a decision",
      lede: "Replace a cloud of concern with one choice that has an owner and a clock.",
      retrieval: "Why can a bad outcome follow a sound decision? Answer in one sentence.",
      retrievalAnswer: "Outcomes include uncertainty outside the decision maker's control; process quality must be judged using information available when the choice was made.",
      principle: "Problems become tractable when phrased as decisions. “Growth is slowing” is a situation; “Which customer segment should we prioritize for the next six weeks?” is a decision. A usable frame names the choice, decision maker, deadline, objective, and boundaries.",
      moves: [
        "Write <strong>We must choose whether/which…</strong>",
        "Name the <strong>owner</strong>; advice without ownership is not a decision.",
        "Set the <strong>decision deadline</strong>, distinct from the outcome date.",
        "State the <strong>objective</strong> and one important constraint.",
        "List what the frame deliberately excludes."
      ],
      caseTitle: "a founder facing weak growth",
      caseBody: "“Our product is not growing” invites endless analysis. Reframe it as: “By Friday, should we spend the next six-week cycle improving activation for current design partners, prospecting a second segment, or pausing development to revalidate the problem?” The new frame exposes alternatives, a deadline, and an allocation decision.",
      exercise: "Take one concern currently occupying your attention. Write three different decision frames around it: narrow, medium, and broad. Select the frame whose answer would most change your next action.",
      deliverable: "One sentence containing the choice, owner, deadline, objective, and scope.",
      quiz: {
        prompt: "Which statement is a decision-ready frame?",
        options: ["Revenue feels disappointing lately", "Choose one segment Friday", "Users seem mildly confused", "Competition appears increasingly dangerous"],
        answer: 1,
        explain: "It names an action class, a unit of choice, and a deadline. The others describe situations without a decision."
      },
      transfer: "Apply the same frame to a trade: not “Is the market bullish?” but “Given this horizon and risk limit, do I enter, wait, or reject this setup by the close?”"
    },
    {
      id: 3,
      slug: "atomize-a-problem",
      title: "Atomize a problem",
      lede: "Reduce complexity into primitives you can observe, change, estimate, or constrain.",
      retrieval: "Turn “I should start a company” into a decision with an owner, deadline, and alternatives.",
      retrievalAnswer: "Example: “By August 15, I will choose whether to validate problem A, validate problem B, or keep searching, based on access to users and evidence of costly pain.”",
      principle: "Atomic reasoning is not making a longer list. It is finding the smallest decision-relevant units: actors, resources, constraints, incentives, flows, states, actions, and uncertainties. Stop decomposing when each unit can be observed, estimated, changed, or treated as a hard constraint.",
      moves: [
        "Name the <strong>actors</strong> and what each controls.",
        "Trace the <strong>flows</strong>: money, attention, information, inventory, or risk.",
        "Separate <strong>hard constraints</strong> from negotiable preferences.",
        "Mark variables as controllable, observable, latent, or external.",
        "Stop when further detail would not alter the decision."
      ],
      caseTitle: "customers abandoning onboarding",
      caseBody: "“Onboarding is bad” decomposes into acquisition source, expectation set before signup, first required action, time-to-value, permission friction, error rate, user motivation, and follow-up. This reveals several mechanisms; a redesign is only one possible intervention.",
      exercise: "Choose a product or personal problem. Draw five columns: actors, flows, constraints, controllables, unknowns. Put at least three items in each, then circle only the items capable of changing your choice.",
      deliverable: "A one-page atomic map with decision-relevant elements circled.",
      quiz: {
        prompt: "When should decomposition stop?",
        options: ["When details feel exhaustive", "When units guide action", "When diagrams look elegant", "When uncertainty reaches zero"],
        answer: 1,
        explain: "The purpose is decision leverage. Detail that cannot change estimation, evidence gathering, or action is usually waste."
      },
      transfer: "For a chart pattern, atomize the claim into instrument, horizon, entry rule, exit rule, market regime, costs, and forecast. The pattern's name is not a primitive."
    },
    {
      id: 4,
      slug: "rebuild-from-primitives",
      title: "Rebuild from primitives",
      lede: "Turn parts into competing mechanisms instead of a single persuasive story.",
      retrieval: "Name the four tests that tell you an element is atomic enough for decision work.",
      retrievalAnswer: "It can be observed, estimated, changed, or treated as a genuine hard constraint—and further detail would not alter the choice.",
      principle: "Decomposition creates parts; modeling proposes relationships. Build upward by connecting causes to effects, then force at least one competing model. A model earns attention by making different predictions, not by sounding coherent.",
      moves: [
        "Connect primitives with explicit <strong>because</strong> statements.",
        "Write the mechanism as <strong>if → then → because</strong>.",
        "Construct a rival explanation using the same observations.",
        "Name one observation on which the models disagree.",
        "Prefer the next test that best separates them."
      ],
      caseTitle: "a sudden retention decline",
      caseBody: "Model A says a new onboarding step blocks activation; it predicts the decline is concentrated among new accounts exposed to the step. Model B says the acquired cohort changed; it predicts lower retention even among users who complete onboarding. The same aggregate chart fits both stories, but a cohort split distinguishes them.",
      exercise: "Take one belief you currently hold strongly. Write its mechanism in three arrows, then create a rival mechanism that explains the same observations. Identify the cheapest discriminating observation.",
      deliverable: "Two causal chains and one discriminating test.",
      quiz: {
        prompt: "What makes competing models useful?",
        options: ["They sound equally plausible", "They predict different evidence", "They contain similar details", "They require deeper research"],
        answer: 1,
        explain: "Competing models improve judgment only when some possible observation favors one over the other."
      },
      transfer: "When assessing a market move, compare at least two mechanisms—new information versus liquidity-driven flow—and ask what each predicts beyond the price move itself."
    },
    {
      id: 5,
      slug: "mixed-case-atomic-decomposition",
      title: "Mixed case: atomic decomposition",
      lede: "Integrate framing, atomization, and competing models on an unfamiliar decision.",
      retrieval: "Without looking back, recite the first four moves of the first-principles loop.",
      retrievalAnswer: "Specify, atomize, separate, and model. Quantify, target, and act follow in later phases.",
      principle: "A mixed case tests transfer rather than recognition of yesterday's vocabulary. Work from the decision backward: only model detail that could change the choice, and resist committing to the first coherent explanation.",
      moves: [
        "Spend two minutes framing before analyzing.",
        "Spend four minutes producing the atomic map.",
        "Spend four minutes building two mechanisms.",
        "Spend three minutes choosing discriminating evidence.",
        "Use the final minutes to state a provisional action and confidence."
      ],
      caseTitle: "an AI support tool with enthusiastic pilots",
      caseBody: "Five companies praise a support copilot during pilots, yet only one renews. Decide whether to keep building, change the target user, alter pricing, or stop. Possible primitives include user versus buyer, pilot subsidy, integration cost, accuracy threshold, workflow frequency, switching cost, budget owner, and measurable economic value.",
      exercise: "Analyze the case under a 13-minute timer. Then repeat untimed and compare what the timer caused you to omit. Do not research external facts; the exercise is representation under scarcity.",
      deliverable: "A decision frame, atomic map, two mechanisms, one discriminating test, and a provisional choice with confidence.",
      quiz: {
        prompt: "What should come before more building?",
        options: ["Test renewal mechanism cheaply", "Add requested features quickly", "Increase pilot volume broadly", "Rewrite positioning language entirely"],
        answer: 0,
        explain: "The central uncertainty is why praise fails to convert into renewal. Test the mechanism before increasing exposure."
      },
      transfer: "Repeat this exercise on a real opportunity this week. Keep the first timed version so future lessons can measure improved speed at comparable quality."
    }
  ]
};

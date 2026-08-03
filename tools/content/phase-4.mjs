export default {
  number: 4,
  title: "Phase 4: Inference without self-deception",
  mission: "Exceptional judgment distinguishes a noisy estimate from evidence strong enough to change a costly action.",
  source: {
    label: "Introduction to Modern Statistics — OpenIntro",
    url: "https://openintro.org/book/ims/online/",
    note: "a simulation-forward introduction to estimation, testing, power, and statistical inference."
  },
  reference: {
    slug: "inference-checklist",
    title: "Inference Checklist",
    lede: "A compact defense against false discoveries, weak experiments, and practically irrelevant results.",
    items: [
      "State whether the goal is estimation, detection, prediction, or decision.",
      "Define the null, alternative, effect size, and decision threshold before examining results.",
      "Account for false-positive cost, false-negative cost, base rate, and power.",
      "Interpret a p-value as data extremity under a model—not the probability the hypothesis is true.",
      "Report effect size and uncertainty, not significance alone.",
      "Count every outcome, subgroup, model, parameter, and stopping rule tried.",
      "Demand replication or out-of-sample confirmation when selection was flexible."
    ],
    guardrail: "Statistical machinery cannot rescue a vague hypothesis, biased sample, broken measurement, or result selected after many invisible attempts."
  },
  lessons: [
    {
      id: 21,
      slug: "estimation-versus-hypothesis-testing",
      title: "Estimation versus hypothesis testing",
      lede: "Ask how large an effect is before asking whether it crossed a ritual threshold.",
      retrieval: "What separates a structural analogy from surface resemblance?",
      retrievalAnswer: "Shared mechanisms and constraints produce new testable predictions; similar labels or shapes alone do not.",
      principle: "Estimation asks the likely magnitude and uncertainty of a quantity. Hypothesis testing asks how compatible data are with a specified null model. Decisions usually need magnitude, downside, and cost—not only a rejection label.",
      moves: [
        "Name the decision-relevant quantity.",
        "Estimate its magnitude and interval.",
        "Specify a null model only if comparison helps.",
        "Define the smallest practically important effect.",
        "Choose action using consequences across plausible values."
      ],
      caseTitle: "a pricing experiment",
      caseBody: "A price increase may produce a statistically detectable conversion decline while increasing revenue substantially. The decision needs estimated revenue, retention, and segment effects—not a binary statement that conversion changed.",
      exercise: "Take a recent metric comparison. Rewrite the analysis as an estimation question and define the smallest effect that would alter action.",
      deliverable: "One estimand, a practical threshold, and an action rule.",
      quiz: {
        prompt: "Which question is estimation?",
        options: ["How large is uplift", "Is null rejected today", "Was threshold crossed once", "Does significance equal truth"],
        answer: 0,
        explain: "Estimation targets magnitude and uncertainty; testing evaluates compatibility with a specified model."
      },
      transfer: "For a strategy, estimate edge after costs and its uncertainty. “Statistically different from zero” is not a position-sizing rule."
    },
    {
      id: 22,
      slug: "false-positives-false-negatives-and-power",
      title: "False positives, false negatives, and power",
      lede: "Design evidence around the cost of each mistake and the chance of detecting what matters.",
      retrieval: "Why is statistical detection insufficient for a product decision?",
      retrievalAnswer: "A decision needs effect magnitude, uncertainty, implementation costs, reversibility, and practical thresholds—not only whether a null was rejected.",
      principle: "A false positive acts on an effect that is not real; a false negative misses one that is. Power is the probability a design detects a specified real effect. Error rates become decisions only after attaching consequences.",
      moves: [
        "Write the action caused by a positive result.",
        "Price the consequence of a false positive.",
        "Price the consequence of a false negative.",
        "Choose the minimum effect worth detecting.",
        "Check whether sample size and noise provide adequate power."
      ],
      caseTitle: "fraud blocking versus feature testing",
      caseBody: "A false fraud flag harms a legitimate customer immediately; a missed fraud creates financial loss. In a reversible UI test, a temporary false positive may be cheap. The same statistical threshold should not govern both decisions.",
      exercise: "Build a two-by-two error table for one live decision. Put a concrete action and cost in every cell, then state which error deserves more protection.",
      deliverable: "An error-cost matrix and minimum detectable effect.",
      quiz: {
        prompt: "What does statistical power measure?",
        options: ["Chance of detecting effect", "Chance hypothesis is true", "Cost of false alarms", "Size of observed sample"],
        answer: 0,
        explain: "Power is the probability of detecting a specified effect when that effect is real under the design assumptions."
      },
      transfer: "A low-power backtest can miss useful edges; testing thousands of weak strategies creates the opposite problem—many false discoveries."
    },
    {
      id: 23,
      slug: "interpret-p-values-correctly",
      title: "Interpret p-values correctly",
      lede: "Read a p-value as a conditional statement about data, not a verdict about truth.",
      retrieval: "What determines whether false positives or false negatives deserve more protection?",
      retrievalAnswer: "Their decision consequences, reversibility, base rates, and the value of the effects that could be missed.",
      principle: "A p-value is the probability, assuming the null model and analysis are valid, of obtaining data at least as incompatible with that model as what was observed. It is not the probability the null is true, the probability results arose by chance, or the effect's importance.",
      moves: [
        "State the null model precisely.",
        "Verify the analysis was not selected after seeing data.",
        "Read p as P(data this extreme | null), not P(null | data).",
        "Pair p with effect size and interval.",
        "Return to the decision and error costs."
      ],
      caseTitle: "a p-value of 0.03",
      caseBody: "Under the specified null and procedure, results this extreme or more would occur about 3% of the time. This does not mean a 97% chance the product change works. Prior plausibility, design quality, multiplicity, magnitude, and costs remain.",
      exercise: "Find or invent a p-value claim. Write three incorrect interpretations and one correct interpretation, then add the missing decision information.",
      deliverable: "A corrected p-value statement plus effect size and decision threshold.",
      quiz: {
        prompt: "What does p equals .03 mean?",
        options: ["Extreme data occur rarely", "Null has three percent", "Effect has proven importance", "Replication will certainly succeed"],
        answer: 0,
        explain: "Under the null model and valid procedure, data this extreme or more occur with probability .03."
      },
      transfer: "Treat a strategy's small p-value cautiously when the rule, assets, horizon, or sample was chosen after inspecting results."
    },
    {
      id: 24,
      slug: "statistical-versus-practical-importance",
      title: "Statistical versus practical importance",
      lede: "A tiny effect can be certain and useless; a valuable effect can remain uncertain.",
      retrieval: "State the p-value inversion error in symbols or words.",
      retrievalAnswer: "P(data | null) is not P(null | data); a p-value does not directly give the probability that the null hypothesis is true.",
      principle: "Statistical significance depends on effect, noise, sample size, and procedure. Practical importance depends on value, costs, risk, and alternatives. Large samples can detect trivial effects; small samples can leave valuable effects unresolved.",
      moves: [
        "Define the action threshold before looking at significance.",
        "Translate effect size into money, time, risk, or user outcome.",
        "Include implementation and opportunity costs.",
        "Inspect uncertainty around net value.",
        "Choose whether to act, test, or ignore."
      ],
      caseTitle: "a measurable latency improvement",
      caseBody: "A 5-millisecond improvement may be statistically decisive across billions of requests yet irrelevant to users—or highly valuable if it crosses a real-time bidding deadline. Context converts effect size into utility.",
      exercise: "Take one significant or impressive metric. Convert its effect into a unit the decision values and subtract implementation cost. Evaluate low, central, and high estimates.",
      deliverable: "A practical-impact calculation and action threshold.",
      quiz: {
        prompt: "What determines practical importance?",
        options: ["Consequences relative to costs", "Sample size taken alone", "P-value taken entirely alone", "Chart color chosen carefully"],
        answer: 0,
        explain: "Practical importance is about consequences, tradeoffs, and alternatives—not a statistical label."
      },
      transfer: "A statistically detectable trading edge below transaction costs has negative practical value."
    },
    {
      id: 25,
      slug: "correct-for-repeated-looks",
      title: "Correct for repeated looks",
      lede: "Count every chance you gave noise to impersonate discovery.",
      retrieval: "Give an example of a statistically clear effect that could still be practically irrelevant.",
      retrievalAnswer: "Any precisely measured change smaller than implementation cost or user relevance—for example, a tiny latency reduction outside a binding threshold.",
      principle: "If you test enough metrics, segments, dates, models, or rules, some will look impressive by chance. Optional stopping adds more chances. The final reported result must account for the entire search, not only the winning test.",
      moves: [
        "Record every hypothesis, metric, subgroup, and parameter tried.",
        "Separate confirmatory tests from exploratory search.",
        "Pre-register decisions and stopping rules when possible.",
        "Correct thresholds or use held-out confirmation.",
        "Report the search budget with the winner."
      ],
      caseTitle: "finding a winning customer segment",
      caseBody: "A team tests twenty segments and celebrates one with p = .04. Under no real differences, seeing at least one such result is unsurprising. Treat it as a hypothesis to confirm on new data, not a finished discovery.",
      exercise: "Audit one analysis or backtest. Count all visible and invisible researcher degrees of freedom, including choices you considered but discarded.",
      deliverable: "A trial ledger and a clean confirmation plan.",
      quiz: {
        prompt: "What repairs exploratory discovery best?",
        options: ["Confirm on untouched data", "Hide unsuccessful trials completely", "Add more flexible parameters", "Stop when significance appears"],
        answer: 0,
        explain: "Untouched data tests whether the selected pattern survives outside the search that found it."
      },
      transfer: "Every indicator, parameter grid, asset, timeframe, and entry rule increases a trading strategy's effective trial count."
    },
    {
      id: 26,
      slug: "mixed-case-is-the-effect-real",
      title: "Mixed case: is the effect real?",
      lede: "Integrate effect size, uncertainty, errors, power, and search flexibility.",
      retrieval: "Why is the best result among twenty tests not equivalent to one preregistered test?",
      retrievalAnswer: "The search created many opportunities for noise to win; selection changes the result's false-positive probability and requires correction or new confirmation.",
      principle: "Evidence strength is a property of the full design and search path. A small p-value cannot be interpreted without the estimand, sample, power, multiplicity, measurement, and practical threshold.",
      moves: [
        "Reconstruct the question asked before data.",
        "Estimate effect and uncertainty.",
        "Build the error-cost matrix.",
        "Count analysis flexibility and repeated looks.",
        "Choose act, confirm, redesign, or abandon."
      ],
      caseTitle: "an AI feature lifts engagement",
      caseBody: "One of twelve engagement metrics rises 8% with p = .02 after the team stops the test on a strong day. Retention is unchanged and inference cost rises. The result is exploratory; confirm the chosen primary metric and net value on a fixed new sample.",
      exercise: "Write a one-page evidence memo for the case. Include the strongest argument for shipping and the strongest argument that the result is selection noise.",
      deliverable: "An estimand, search audit, net-impact range, and next decision.",
      quiz: {
        prompt: "What is the strongest next step?",
        options: ["Confirm preregistered metric prospectively", "Ship permanently without limits", "Ignore inference costs entirely", "Select another winning metric"],
        answer: 0,
        explain: "A fixed confirmatory test on new data addresses metric selection and optional stopping while measuring net value."
      },
      transfer: "Use the same memo structure before allocating capital to any strategy discovered through extensive backtesting."
    }
  ]
};

export default {
  number: 3,
  title: "Phase 3: Signal, noise, and data",
  mission: "Data becomes leverage only when you understand how it was generated, how it varies, and what selection hid from view.",
  source: {
    label: "Introduction to Modern Statistics — OpenIntro",
    url: "https://openintro.org/book/ims/online/",
    note: "a modern foundation for sampling, distributions, simulation, and inference."
  },
  reference: {
    slug: "data-claim-audit",
    title: "Data-Claim Audit",
    lede: "Questions to ask before allowing a chart, metric, or dataset to influence a decision.",
    items: [
      "What process generated each observation, and what process is the claim about?",
      "What is the population, sampling frame, sample, parameter, and estimate?",
      "Which denominator, time window, and unit of analysis are being used?",
      "What does the full distribution show beyond the average?",
      "How large is ordinary variation, and are tails or path dependence decision-relevant?",
      "Which observations were selected, excluded, censored, or never measured?",
      "What range of values remains plausible, and would that range change the action?"
    ],
    guardrail: "A clean visualization cannot repair a contaminated data-generating process. Investigate provenance before precision."
  },
  lessons: [
    {
      id: 13,
      slug: "identify-the-data-generating-process",
      title: "Identify the data-generating process",
      lede: "Ask how rows came to exist before calculating anything from them.",
      retrieval: "Why should correlated signals be discounted during an update?",
      retrievalAnswer: "They contain overlapping information because shared causes can produce them together; counting each fully exaggerates evidence.",
      principle: "A dataset is the output of a process: who entered, what was measured, when measurement occurred, and which events made records visible. The same columns can mean different things under experiments, surveys, logs, convenience samples, or survivor-only databases.",
      moves: [
        "Name the unit represented by one row.",
        "Trace how a unit becomes eligible, observed, recorded, and retained.",
        "Identify human or system choices at each step.",
        "Mark missing paths that produce no row.",
        "Restrict conclusions to the process actually observed."
      ],
      caseTitle: "support tickets as product evidence",
      caseBody: "Ticket counts reflect product problems, willingness to contact support, account value, channel discovery, and support categorization. Silent churners create no ticket. A falling ticket count could signal improvement—or users giving up.",
      exercise: "Choose one dashboard you use. Draw the pipeline from real-world event to displayed metric, including eligibility filters, joins, missing events, and manual classifications.",
      deliverable: "A data-provenance diagram and three ways the metric could mislead.",
      quiz: {
        prompt: "What should precede metric interpretation?",
        options: ["Inspect generation process first", "Calculate averages immediately now", "Choose preferred narrative early", "Remove inconvenient records quietly"],
        answer: 0,
        explain: "Meaning and bias depend on how observations entered the dataset. Calculation comes afterward."
      },
      transfer: "Before testing a trading signal, trace vendor adjustments, survivorship rules, timestamps, corporate actions, and missing instruments."
    },
    {
      id: 14,
      slug: "population-sample-parameter-estimate",
      title: "Population, sample, parameter, estimate",
      lede: "Keep the group you observed separate from the quantity you want to know.",
      retrieval: "Name four stages through which a real event becomes a dashboard value.",
      retrievalAnswer: "A unit becomes eligible, observed, recorded, retained, transformed, and displayed; any four reveal selection points.",
      principle: "The population is the target group; the sample is what you observed. A parameter is the unknown population quantity; an estimate is calculated from the sample. Confusing these pairs turns measurement into unjustified certainty.",
      moves: [
        "Write the target population in operational terms.",
        "Describe the sampling frame actually reachable.",
        "List inclusion and exclusion mechanisms.",
        "Name the parameter required by the decision.",
        "Report the estimate with sampling and measurement limitations."
      ],
      caseTitle: "ten enthusiastic design partners",
      caseBody: "The ten partners estimate reactions among highly engaged early adopters recruited through the founder's network—not the broader market's willingness to buy. The sample may be excellent for workflow discovery and poor for estimating conversion.",
      exercise: "For one customer study or market dataset, write five lines: target population, sampling frame, sample, parameter, and estimate. Circle every mismatch.",
      deliverable: "A population-to-estimate map with mismatch risks.",
      quiz: {
        prompt: "What is a sample estimate?",
        options: ["Observed approximation of parameter", "Complete truth about population", "Unmeasured property of population", "Random subset without purpose"],
        answer: 0,
        explain: "An estimate uses observed sample data to approximate an unknown population parameter."
      },
      transfer: "A backtest sample estimates performance in a future population of market conditions. Regime mismatch is a population mismatch."
    },
    {
      id: 15,
      slug: "reason-with-distributions",
      title: "Reason with distributions",
      lede: "Replace the typical case with shape, spread, and meaningful subgroups.",
      retrieval: "Distinguish a parameter from an estimate in one sentence.",
      retrievalAnswer: "A parameter is an unknown property of the target population; an estimate is the sample-derived approximation of it.",
      principle: "An average compresses a distribution and discards information. Decision quality may depend on dispersion, skew, multimodality, or subgroup differences. Always ask what different distributions could share the same mean.",
      moves: [
        "Plot or imagine the full distribution before summarizing.",
        "Locate center with mean and median.",
        "Measure spread and inspect tails.",
        "Look for clusters caused by mixed populations.",
        "Choose summaries aligned with the decision's loss function."
      ],
      caseTitle: "average customer value",
      caseBody: "Average annual revenue of $10,000 could describe uniform accounts near $10,000 or a few $500,000 accounts plus many near zero. The first supports a standardized motion; the second demands segment economics and concentration risk.",
      exercise: "Create two imaginary ten-value datasets with the same mean but opposite business implications. Compute median and range, then state which decision each supports.",
      deliverable: "Two distributions, three summaries, and contrasting decisions.",
      quiz: {
        prompt: "Why can equal means mislead?",
        options: ["Distributions may differ radically", "Means contain every observation", "Medians always equal means", "Spread never changes decisions"],
        answer: 0,
        explain: "Different spread, skew, tails, or clusters can produce the same average and very different risks."
      },
      transfer: "Compare strategies using return distributions and drawdowns, not average return alone."
    },
    {
      id: 16,
      slug: "variance-tails-skew-and-path",
      title: "Variance, tails, skew, and path",
      lede: "Understand why identical averages can produce survival or ruin.",
      retrieval: "Name three distribution features an average can hide.",
      retrievalAnswer: "Spread, skew, tails, multimodality, and subgroup structure are all valid examples.",
      principle: "Variance describes dispersion; skew describes asymmetry; tails describe rare extremes. Path dependence means the order of outcomes changes what remains possible. A favorable average cannot compensate for an early loss that removes you from the game.",
      moves: [
        "Estimate ordinary spread around the center.",
        "Inspect which tail contains the consequential extremes.",
        "Ask whether losses compound or trigger constraints.",
        "Simulate adverse ordering, not only final averages.",
        "Protect survival before maximizing expected payoff."
      ],
      caseTitle: "two acquisition channels",
      caseBody: "Both channels average $100 acquisition cost. Channel A stays between $80 and $120; Channel B alternates between $10 and $1,000 with limited warning. If cash is constrained, Channel B's variance can end the experiment before its low-cost periods arrive.",
      exercise: "Take one repeated decision with upside and downside. Sketch best, typical, and severe-tail outcomes, then reorder them into the worst survivable sequence.",
      deliverable: "A tail-risk table and one survival constraint.",
      quiz: {
        prompt: "Why does outcome order matter?",
        options: ["Constraints can bind early", "Averages change arithmetic rules", "Skew removes every loss", "Tails guarantee later recovery"],
        answer: 0,
        explain: "Early drawdowns can exhaust capital, trust, or time, preventing participation in later gains."
      },
      transfer: "In trading, a strategy can have positive arithmetic expectation and still be unusable because leverage and drawdown create path-dependent ruin."
    },
    {
      id: 17,
      slug: "make-probability-tangible-with-simulation",
      title: "Make probability tangible with simulation",
      lede: "Run the process many times when intuition cannot track interacting uncertainty.",
      retrieval: "What is path dependence? Give one nonfinancial example.",
      retrievalAnswer: "The order of events changes available future states—for example, early customer trust loss can prevent later product improvements from being evaluated.",
      principle: "Simulation turns assumptions into repeated synthetic outcomes. It is useful when several uncertain inputs interact or when tails and sequences matter. It does not validate assumptions; it reveals their implications.",
      moves: [
        "Define uncertain inputs as ranges or distributions.",
        "Specify relationships and constraints.",
        "Generate many plausible runs.",
        "Inspect distributions, tail frequency, and failure paths.",
        "Vary assumptions to find sensitivity."
      ],
      caseTitle: "startup runway",
      caseBody: "A single forecast says runway is twelve months. A simulation samples sales timing, churn, hiring dates, and collection delays. It may show a 25% chance of running out within eight months—decision-relevant information hidden by the average.",
      exercise: "Use a spreadsheet, short script, or paper dice to simulate 100 runs of a decision with two uncertain inputs. Record median, 10th percentile, and failure rate.",
      deliverable: "A simulated outcome distribution plus the assumption with greatest sensitivity.",
      quiz: {
        prompt: "What can simulation establish directly?",
        options: ["Implications of chosen assumptions", "Truth of chosen assumptions", "Certainty about future outcomes", "Absence of model errors"],
        answer: 0,
        explain: "Simulation propagates assumptions; it cannot prove those assumptions represent reality."
      },
      transfer: "Simulate sequences of wins and losses for a trading rule to expose drawdown and ruin that a mean return conceals."
    },
    {
      id: 18,
      slug: "recognize-selection-and-measurement-bias",
      title: "Recognize selection and measurement bias",
      lede: "Study who is missing, why they are missing, and how labels were produced.",
      retrieval: "What is the key limitation of simulation?",
      retrievalAnswer: "It reveals consequences of modeled assumptions but does not establish that the assumptions or structure are true.",
      principle: "Selection bias changes which cases become visible. Survivorship removes failures; nonresponse removes people who decline; measurement bias shifts recorded values away from the intended construct. More data repeats these distortions more precisely.",
      moves: [
        "Define the cases that could have appeared but did not.",
        "Ask whether visibility depends on outcome or exposure.",
        "Separate the construct from its proxy measurement.",
        "Identify incentives affecting reports and labels.",
        "Seek negative cases and alternative measurements."
      ],
      caseTitle: "learning from famous founders",
      caseBody: "Biographies select visible winners, reconstruct decisions after outcomes, and omit similar founders who behaved alike but failed. Their stories can generate hypotheses, but cannot estimate whether the behavior caused success without comparison cases.",
      exercise: "Choose one dataset or set of anecdotes influencing you. Write the invisible population, the mechanism selecting visible cases, and one proxy that may not measure the intended construct.",
      deliverable: "A missing-cases ledger and a repair strategy.",
      quiz: {
        prompt: "Can larger samples remove selection bias?",
        options: ["No bias can persist", "Yes size fixes everything", "Only averages remove bias", "Only charts remove bias"],
        answer: 0,
        explain: "A larger biased sample estimates the wrong target more precisely. Repair requires changing design or assumptions."
      },
      transfer: "A database containing only currently listed stocks cannot honestly test strategies on firms that disappeared."
    },
    {
      id: 19,
      slug: "interpret-intervals",
      title: "Interpret intervals",
      lede: "Make uncertainty visible as a range, then ask whether it changes the action.",
      retrieval: "Why can biographies of successful executives mislead even when every fact is accurate?",
      retrievalAnswer: "The sample selects winners, omits comparable failures, and reconstructs choices after outcomes, so causal lessons are distorted.",
      principle: "Point estimates imply more knowledge than samples support. An interval expresses a range compatible with the model and data. Its exact interpretation depends on method, but decision use is consistent: test actions across plausible values.",
      moves: [
        "Report the estimate and interval together.",
        "Name what uncertainty the interval includes and excludes.",
        "Compare the entire range with decision thresholds.",
        "Avoid turning every value inside into equally likely truth.",
        "Gather more data only if narrower uncertainty can change action."
      ],
      caseTitle: "an experiment with modest uplift",
      caseBody: "Estimated conversion uplift is 4 points with a plausible interval from −1 to +9. If shipping is nearly free and reversible, acting may be sensible despite uncertainty. If migration is expensive and irreversible, the same interval may justify more evidence.",
      exercise: "Take a point estimate you recently used. Construct an honest low-to-high range from sampling error, measurement uncertainty, or scenarios. Evaluate the action at both ends.",
      deliverable: "An interval, included uncertainties, excluded uncertainties, and threshold analysis.",
      quiz: {
        prompt: "How should an interval guide action?",
        options: ["Test decisions across range", "Choose midpoint with certainty", "Ignore endpoints as impossible", "Wait until width vanishes"],
        answer: 0,
        explain: "A robust action performs acceptably across plausible values; fragile actions require better evidence or protection."
      },
      transfer: "Treat estimated trading edge as a range. Position sizing based on the optimistic endpoint is an overconfidence machine."
    },
    {
      id: 20,
      slug: "mixed-case-deep-pattern-or-resemblance",
      title: "Mixed case: deep pattern or resemblance?",
      lede: "Distinguish a transferable mechanism from a compelling surface analogy.",
      retrieval: "What question turns an interval into a decision tool?",
      retrievalAnswer: "Would the chosen action remain acceptable across the plausible range, especially at the adverse endpoint?",
      principle: "Pattern recognition transfers when the causal structure, constraints, and feedback resemble prior cases. Matching labels, shapes, or outcomes is weaker. A proposed analogy should generate a prediction that surface resemblance alone would not.",
      moves: [
        "State the old and new cases without metaphor.",
        "Map actors, incentives, flows, constraints, and timescales.",
        "List structural matches and structural breaks.",
        "Derive one novel prediction from the shared mechanism.",
        "Downgrade the analogy if that prediction fails."
      ],
      caseTitle: "calling a product 'Uber for experts'",
      caseBody: "The phrase matches a two-sided interface but may miss dispatch frequency, geographic density, trust, supply utilization, regulation, and repeat behavior. If those mechanisms differ, the analogy transfers branding while hiding economics.",
      exercise: "Choose a product or market analogy you find persuasive. Create a two-column structural map and identify the single mechanism whose absence would invalidate transfer.",
      deliverable: "A structural analogy audit and one falsifiable prediction.",
      quiz: {
        prompt: "What validates a transferable analogy?",
        options: ["Shared mechanisms predict evidence", "Shared labels sound memorable", "Shared outcomes appear once", "Shared founders tell stories"],
        answer: 0,
        explain: "A deep analogy connects mechanisms that generate new, testable expectations in the target domain."
      },
      transfer: "Audit every historical market analogy by comparing policy, positioning, liquidity, valuation, and participant constraints—not chart shape alone."
    }
  ]
};

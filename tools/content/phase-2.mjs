export default {
  number: 2,
  title: "Phase 2: Language of uncertainty",
  mission: "Limited information never disappears. Exceptional judgment makes uncertainty explicit, comparable, updateable, and accountable.",
  source: {
    label: "Introduction to Modern Statistics — OpenIntro",
    url: "https://openintro.org/book/ims/online/",
    note: "a free, transparent foundation for probability, data, and statistical reasoning."
  },
  reference: {
    slug: "probability-and-updating",
    title: "Probability and Updating",
    lede: "A compact guide for translating uncertainty into numbers and revising them when evidence arrives.",
    items: [
      "Define the event, deadline, and resolution rule before assigning a probability.",
      "Begin with a relevant base rate, then adjust for case-specific evidence.",
      "Use complements: P(not A) = 1 − P(A).",
      "Distinguish joint probability P(A and B) from conditional probability P(A given B).",
      "Translate percentages into natural frequencies when conditional reasoning feels slippery.",
      "Update according to likelihood: evidence matters when competing hypotheses predict it differently.",
      "Score resolved binary forecasts with Brier score: (forecast − outcome)²."
    ],
    guardrail: "A precise number can conceal a vague event or invented evidence. Precision in notation does not create precision in knowledge."
  },
  lessons: [
    {
      id: 6,
      slug: "replace-vague-uncertainty-with-probabilities",
      title: "Replace vague uncertainty with probabilities",
      lede: "Turn “likely” and “risky” into forecasts that can be compared and scored.",
      retrieval: "What observation makes two competing explanations decision-useful?",
      retrievalAnswer: "An observation they predict differently, so seeing it changes their relative support.",
      principle: "Words such as likely, possible, and confident hide disagreement. A forecast needs a clearly resolved event, deadline, and number between 0 and 100 percent. The number is not certainty; it is a commitment that can later be calibrated.",
      moves: [
        "Write a binary event with an observable resolution rule.",
        "Set the deadline before estimating.",
        "Give an initial probability without false decimal precision.",
        "Write the strongest reason for and against.",
        "Name evidence that would move the estimate by at least ten points."
      ],
      caseTitle: "shipping a product experiment",
      caseBody: "“The experiment will probably work” is not auditable. “There is a 60% chance that at least 15% of qualified visitors request a demo by August 31, using the preregistered denominator” defines the event, threshold, population, and deadline.",
      exercise: "Convert five vague beliefs from your current work or life into resolvable binary forecasts. Avoid events you can influence after forecasting unless the intended action is specified.",
      deliverable: "Five dated forecasts with probabilities and resolution rules.",
      quiz: {
        prompt: "Which forecast is most auditable?",
        options: ["Demand will probably improve", "Signups should rise soon", "Retention reaches thirty percent", "Customers may really care"],
        answer: 2,
        explain: "It provides a numeric threshold. A complete version would also specify cohort, time window, and resolution date."
      },
      transfer: "Use the same structure for a trade thesis: instrument, horizon, price or return threshold, costs, and resolution source."
    },
    {
      id: 7,
      slug: "two-meanings-of-probability",
      title: "Understand two meanings of probability",
      lede: "Use frequency for repeatable processes and calibrated belief for one-off events.",
      retrieval: "What three elements turn a vague belief into a scoreable forecast?",
      retrievalAnswer: "A resolvable event, a deadline, and a numeric probability; a clear resolution rule makes the event genuinely scoreable.",
      principle: "Probability can describe a long-run rate in repeatable trials or a degree of belief about a unique event. The mathematics can be shared, but the evidence differs. Frequencies come from comparable repetitions; belief probabilities combine base rates, mechanisms, and judgment.",
      moves: [
        "Ask whether the event has a stable repeatable process.",
        "If yes, estimate from relevant frequencies and uncertainty around them.",
        "If no, decompose the event and use comparable reference classes.",
        "Keep aleatory randomness separate from epistemic ignorance.",
        "State which interpretation supports your number."
      ],
      caseTitle: "a startup raising its next round",
      caseBody: "The company raises only once under its exact conditions, but the forecast is not arbitrary. Start with rates for similar companies at the same stage, then adjust for runway, growth, market, team, and investor access. The result is a calibrated belief grounded in frequencies.",
      exercise: "Classify ten uncertainties as mostly repeatable randomness, mostly missing knowledge, or both. For each, name one data source and one mechanism that could inform it.",
      deliverable: "A three-column uncertainty inventory with evidence sources.",
      quiz: {
        prompt: "A unique event probability should begin where?",
        options: ["Pure intuition alone", "Relevant reference classes", "Maximum confidence always", "Historical analogy only"],
        answer: 1,
        explain: "Unique events still belong to broader classes. Case-specific evidence should adjust, not erase, the starting rate."
      },
      transfer: "When a market regime feels unprecedented, separate truly new mechanisms from features that still belong to older reference classes."
    },
    {
      id: 8,
      slug: "combine-and-condition-probabilities",
      title: "Combine and condition probabilities",
      lede: "Stop confusing “and,” “or,” and “given”—three words that change the calculation.",
      retrieval: "What is the difference between aleatory uncertainty and epistemic uncertainty?",
      retrievalAnswer: "Aleatory uncertainty is variation inherent in a process; epistemic uncertainty comes from missing knowledge and may shrink with evidence.",
      principle: "The complement covers what does not happen. A joint event requires multiple things together. A conditional probability restricts attention to cases where another fact is true. Most real mistakes come from using the right number for the wrong relationship.",
      moves: [
        "Translate the sentence into events A and B.",
        "Mark the operator: not, and, or, or given.",
        "Draw 100 hypothetical cases if notation feels abstract.",
        "Never multiply probabilities unless independence is justified or conditionals are used.",
        "Check that the result lies between zero and one."
      ],
      caseTitle: "a product funnel",
      caseBody: "If 40% activate and 50% of activated users retain, retention among all signups is 0.40 × 0.50 = 20% only because the second number is conditional on activation. Treating 50% as an unconditional rate would misstate the funnel.",
      exercise: "Take one funnel or trading rule and express four quantities: event, complement, joint event, and conditional event. Explain each in plain English before calculating.",
      deliverable: "Four event statements plus a 100-case diagram.",
      quiz: {
        prompt: "Which phrase signals conditional probability?",
        options: ["A and B", "A or B", "A given B", "A excludes B"],
        answer: 2,
        explain: "“Given B” restricts the reference set to cases where B occurred."
      },
      transfer: "For trading, distinguish P(price rises and signal fires) from P(price rises given signal fires). Only the latter begins to describe predictive usefulness."
    },
    {
      id: 9,
      slug: "start-outside-with-reference-classes",
      title: "Start outside with reference classes",
      lede: "Anchor forecasts in comparable reality before the details seduce you.",
      retrieval: "Why is multiplying two unconditional probabilities often wrong?",
      retrievalAnswer: "The events may be dependent. Use P(A and B) = P(A) × P(B given A), or justify independence explicitly.",
      principle: "The inside view builds a story from case details. The outside view asks what happened in similar cases. A useful reference class is neither so broad that it ignores mechanisms nor so narrow that it contains no data.",
      moves: [
        "Define the target event and horizon.",
        "List three candidate reference classes from broad to narrow.",
        "Identify mechanisms that make cases genuinely comparable.",
        "Begin with the class rate and document each adjustment.",
        "Run the forecast under a second defensible class."
      ],
      caseTitle: "estimating product delivery",
      caseBody: "The team estimates six weeks by summing ideal task times. The outside view examines the last ten similarly scoped launches, whose median was eleven weeks. Specific improvements may justify an adjustment, but the burden is now explicit rather than buried in optimism.",
      exercise: "Choose a live forecast. Find three plausible reference classes and calculate or approximate their base rates. Explain which class best matches the causal structure.",
      deliverable: "A base-rate table and an adjustment ledger.",
      quiz: {
        prompt: "What makes a reference class useful?",
        options: ["Maximum sample size alone", "Matching causal structure well", "Identical surface details only", "Most optimistic outcome rate"],
        answer: 1,
        explain: "Relevance depends on mechanisms and decision context, not size or visual similarity alone."
      },
      transfer: "Before pursuing a startup problem, examine outcomes for products with similar buyer, urgency, distribution, and switching behavior—not merely the same industry label."
    },
    {
      id: 10,
      slug: "think-in-natural-frequencies",
      title: "Think in natural frequencies",
      lede: "Convert conditional percentages into countable cases your mind can inspect.",
      retrieval: "What is the outside view, and what should happen before case-specific adjustment?",
      retrievalAnswer: "It starts from outcomes in a causally relevant reference class; the class rate becomes the prior before documented adjustments.",
      principle: "Conditional percentages hide denominators. Natural frequencies express the same information as counts that preserve the sampling structure: out of 1,000 cases, how many belong to each branch? This often makes Bayesian reasoning almost mechanical.",
      moves: [
        "Choose a convenient population such as 1,000 cases.",
        "Apply the base rate first.",
        "Split true cases by sensitivity or hit rate.",
        "Split false cases by false-positive rate.",
        "Compare true hits with all observed hits."
      ],
      caseTitle: "a noisy fraud alert",
      caseBody: "Suppose 1% of 1,000 transactions are fraudulent: 10 frauds. A system catches 90%, yielding 9 true alerts. If it falsely flags 5% of 990 legitimate transactions, that adds about 50 false alerts. Only about 9 of 59 alerts indicate fraud—roughly 15%, not 90%.",
      exercise: "Build a 1,000-case frequency tree for a product lead score, medical test, or trading signal. Use invented but clearly labeled assumptions if real rates are unavailable.",
      deliverable: "A frequency tree showing true hits, misses, false alarms, and correct rejections.",
      quiz: {
        prompt: "Why can accurate alerts mislead?",
        options: ["Base rates remain small", "Percentages are always false", "Signals remove every denominator", "Accuracy guarantees useful predictions"],
        answer: 0,
        explain: "When the target is rare, false positives from the much larger negative class can dominate observed alerts."
      },
      transfer: "Any rare chart pattern needs this treatment: start with how often the desired move occurs without the pattern, then count true and false signals."
    },
    {
      id: 11,
      slug: "update-beliefs-with-bayes",
      title: "Update beliefs with Bayes",
      lede: "Change confidence according to how differently competing hypotheses predict the evidence.",
      retrieval: "In the fraud example, why did a 90% hit rate yield only about 15% fraud among alerts?",
      retrievalAnswer: "Fraud was rare. False alerts from the large legitimate population outnumbered true alerts from the small fraud population.",
      principle: "Bayesian updating combines a prior with evidence. Evidence is powerful when it is much more likely under one hypothesis than another. Ask not “Does this fit my story?” but “How surprising would this be if the rival story were true?”",
      moves: [
        "State mutually exclusive working hypotheses.",
        "Assign prior odds from base rates.",
        "Estimate how likely the evidence is under each hypothesis.",
        "Multiply prior odds by the likelihood ratio.",
        "Translate back to probability and record the update."
      ],
      caseTitle: "three customers request the same feature",
      caseBody: "The requests support broad demand only if they are more expected under “many target customers need this” than under rivals such as “one sales channel recruited similar edge cases.” Shared source or incentives can make three comments much less independent than they appear.",
      exercise: "Choose a belief and one new observation. Estimate the observation's likelihood under your preferred hypothesis and its strongest rival. Update qualitatively—small, medium, or large—or calculate odds.",
      deliverable: "Prior, two likelihoods, posterior, and one sentence explaining update size.",
      quiz: {
        prompt: "When is evidence strongly diagnostic?",
        options: ["Both models predict it", "One model predicts it", "Neither model permits it", "Many people repeat it"],
        answer: 1,
        explain: "Evidence shifts beliefs when competing hypotheses assign meaningfully different likelihoods to it."
      },
      transfer: "A price move after news is weak evidence for your narrative if many rival mechanisms predicted the same move. Seek differential predictions."
    },
    {
      id: 12,
      slug: "mixed-case-update-from-imperfect-signals",
      title: "Mixed case: update from imperfect signals",
      lede: "Combine base rates, natural frequencies, dependence, and Bayesian updating.",
      retrieval: "Complete the sentence: evidence is diagnostic when…",
      retrievalAnswer: "…it is substantially more likely under one hypothesis than under its competitors.",
      principle: "Real signals arrive in clusters, share causes, and tempt double counting. Begin with the outside view, translate the strongest conditional claim into frequencies, then discount evidence that is redundant with evidence already counted.",
      moves: [
        "Define the forecast and relevant reference class.",
        "List signals and their plausible common causes.",
        "Convert the strongest signal into a frequency tree.",
        "Update once for correlated evidence, not once per observation.",
        "State the posterior as a range if inputs are fragile."
      ],
      caseTitle: "choosing whether to build an analytics product",
      caseBody: "Four founders request the tool, keyword traffic is rising, and two competitors raised money. These are not three independent confirmations: attention from the same trend may drive all of them. Start with the base rate for tools sold to this buyer, then ask for costly behavior such as data access, implementation effort, or a paid design partnership.",
      exercise: "Under a 15-minute timer, estimate whether this opportunity deserves a two-week validation sprint. Use a range, identify correlated signals, and specify the one observation with highest expected information value.",
      deliverable: "A probability range, dependency map, and next-evidence decision.",
      quiz: {
        prompt: "How should correlated signals update belief?",
        options: ["Count every signal fully", "Discount shared causes substantially", "Ignore all evidence permanently", "Average the signals equally"],
        answer: 1,
        explain: "Evidence sharing a cause contains overlapping information; treating it as independent creates false confidence."
      },
      transfer: "Use the same dependency check on multiple technical indicators derived from the same price and volume history."
    }
  ]
};

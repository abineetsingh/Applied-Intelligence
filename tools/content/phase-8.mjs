export default {
  number: 8,
  title: "Phase 8: Market and trading claims",
  mission: "Market judgment demands falsifiable edges, honest chronology, realistic costs, survival-focused sizing, and resistance to backtest seduction.",
  source: {
    label: "What do we know about technical analysis? — Park & Irwin",
    url: "https://experts.illinois.edu/en/publications/what-do-we-know-about-the-profitability-of-technical-analysis/",
    note: "a peer-reviewed review finding mixed evidence and recurring problems with data snooping, rule selection, risk, and costs."
  },
  reference: {
    slug: "honest-strategy-test",
    title: "Honest Strategy Test",
    lede: "A pre-capital checklist for turning market patterns into falsifiable, cost-inclusive claims.",
    items: [
      "Define instrument universe, horizon, signal, entry, exit, sizing, and benchmark before testing.",
      "Use information available at each historical timestamp; audit leakage and survivorship.",
      "Include spreads, fees, slippage, borrow, funding, taxes, and market impact where relevant.",
      "Report the complete return and drawdown distribution across regimes—not average return alone.",
      "Count every strategy, parameter, asset, feature, and sample tried.",
      "Reserve untouched chronological data and demand robustness around nearby parameters.",
      "Size for estimation error, correlation, losing sequences, and continued participation."
    ],
    guardrail: "This material develops analytical discipline, not personalized financial advice or a promise that technical analysis produces profitable signals."
  },
  lessons: [
    {
      id: 48,
      slug: "define-an-edge-after-costs",
      title: "Define an edge after costs",
      lede: "Turn a market story into a forecast, benchmark, and executable payoff distribution.",
      retrieval: "What distinguishes pivoting from continuing or killing?",
      retrievalAnswer: "A pivot preserves validated learning about a real problem while changing a failed segment, channel, solution, or economic mechanism."
      ,principle: "An edge is positive expected value relative to a relevant benchmark after all implementation costs and constraints. A pattern is not an edge until it specifies what happens, over what horizon, how it is traded, and what comparison it beats.",
      moves: [
        "Define signal using only observable contemporaneous data.",
        "Specify entry, exit, horizon, and sizing.",
        "Choose a benchmark reflecting available alternatives.",
        "Include execution and financing costs.",
        "State the forecast and falsification threshold."
      ],
      caseTitle: "momentum appears strong",
      caseBody: "“Buy strong charts” is not testable. A claim might be: among liquid U.S. equities, rank twelve-month returns excluding the latest month, hold the top decile for one month, rebalance monthly, and exceed a specified benchmark after estimated turnover costs.",
      exercise: "Translate one trading belief into a complete strategy specification without adjectives such as strong, clean, or oversold unless numerically defined.",
      deliverable: "A falsifiable edge statement with benchmark and cost model.",
      quiz: {
        prompt: "When does a pattern become edge?",
        options: ["Expected payoff beats benchmark", "Chart appearance feels convincing", "Many traders discuss pattern", "Backtest excludes every cost"],
        answer: 0,
        explain: "An executable rule must produce positive expected value relative to alternatives after realistic costs and constraints."
      },
      transfer: "Use the same discipline for product growth claims: define intervention, outcome, horizon, benchmark, and full cost."
    },
    {
      id: 49,
      slug: "compare-return-distributions",
      title: "Compare return distributions",
      lede: "Evaluate volatility, drawdown, tails, and path—not annual return alone.",
      retrieval: "List five elements needed to turn a chart belief into an edge claim.",
      retrievalAnswer: "Signal, instrument universe, entry, exit, horizon, sizing, benchmark, cost model, and falsification threshold are valid elements."
      ,principle: "Returns compound multiplicatively. Volatility reduces geometric growth, drawdown affects survival, skew and tails concentrate outcomes, and correlation can make apparently separate trades one exposure. Performance must be a distribution through time.",
      moves: [
        "Compute arithmetic and geometric returns.",
        "Inspect volatility and maximum drawdown.",
        "Examine skew, tails, and worst sequences.",
        "Compare recovery time and capital requirements.",
        "Decompose exposure by common risk drivers."
      ],
      caseTitle: "two strategies with equal average return",
      caseBody: "Strategy A earns steady small gains with rare large losses; Strategy B has frequent small losses and rare large gains. Equal mean return hides opposite skew, margin risk, behavioral difficulty, and performance under stress.",
      exercise: "Create two ten-period return paths with the same arithmetic mean. Calculate compounded wealth and maximum drawdown, then compare which you could actually sustain.",
      deliverable: "Two paths, geometric outcomes, drawdowns, and a survivability judgment.",
      quiz: {
        prompt: "Why can equal averages compound differently?",
        options: ["Return order and variance matter", "Arithmetic changes across different traders", "Benchmarks remove every possible drawdown", "Costs guarantee equal final wealth"],
        answer: 0,
        explain: "Multiplicative compounding, volatility, and path-dependent constraints make return sequences economically different."
      },
      transfer: "Founder outcomes are also skewed and path-dependent: runway can expire before a high-upside thesis resolves."
    },
    {
      id: 50,
      slug: "treat-technical-patterns-as-hypotheses",
      title: "Treat technical patterns as hypotheses",
      lede: "Convert chart vocabulary into explicit features and mechanisms that can fail.",
      retrieval: "Why is arithmetic average return insufficient for comparing strategies?",
      retrievalAnswer: "It hides compounding, volatility, drawdown, skew, tails, correlation, and whether the path remains survivable."
      ,principle: "Technical analysis can propose features of price and volume, but names and visual discretion invite hindsight. Formalize the pattern, hypothesize a mechanism, and compare predictive performance against simple alternatives after costs.",
      moves: [
        "Define the visual pattern numerically.",
        "Specify when pattern recognition occurs in real time.",
        "Propose a mechanism and rival explanation.",
        "Choose outcome, horizon, and baseline.",
        "Test robustness and false discovery."
      ],
      caseTitle: "a breakout pattern",
      caseBody: "Define breakout as a close above the prior 60-day high with volume above a rolling percentile, executed next period. Possible mechanisms include information diffusion and forced positioning; rivals include volatility exposure and selection after obvious winners.",
      exercise: "Formalize one pattern you use or find interesting. Have another person or deterministic function label examples without seeing future returns.",
      deliverable: "A pattern specification, mechanism, rival, benchmark, and labeling test.",
      quiz: {
        prompt: "What makes a chart pattern testable?",
        options: ["Rules fixed before outcomes", "Examples selected after rallies", "Labels depend on hindsight", "Mechanism remains purely mystical"],
        answer: 0,
        explain: "Real-time fixed rules prevent future outcomes from shaping which patterns count."
      },
      transfer: "Product pattern language—viral, sticky, platform—also needs numerical definitions and causal mechanisms."
    },
    {
      id: 51,
      slug: "build-an-honest-chronological-test",
      title: "Build an honest chronological test",
      lede: "Make the simulated decision know only what the real decision maker could know.",
      retrieval: "What two steps prevent hindsight from defining a technical pattern?",
      retrievalAnswer: "Fix numerical labeling rules before outcomes and determine the signal using only information available at the real-time decision point."
      ,principle: "Financial data are ordered and adaptive. Random shuffling can leak regimes and overlapping labels. An honest test preserves chronology, uses point-in-time universes and features, models execution delay, and reserves truly later data.",
      moves: [
        "Freeze the research question and development sample.",
        "Audit every feature timestamp and data revision.",
        "Use point-in-time membership and delisted assets.",
        "Model next-executable prices and costs.",
        "Evaluate once on untouched later periods."
      ],
      caseTitle: "backtesting index constituents",
      caseBody: "Testing today's index members back through history removes firms that failed or were dropped. Using the day's close to generate and execute a signal at that same close may also be impossible. Both inflate apparent performance.",
      exercise: "Draw a timeline for one strategy: observation availability, computation, order submission, execution, and outcome. Mark every place future information could enter.",
      deliverable: "A point-in-time audit and chronological evaluation plan.",
      quiz: {
        prompt: "What is look-ahead bias?",
        options: ["Future information enters decisions", "Past information receives weights", "Execution occurs after signals", "Benchmarks use available prices"],
        answer: 0,
        explain: "Look-ahead bias lets a historical decision use data unavailable at its simulated decision time."
      },
      transfer: "Product analyses also leak future information when defining successful users by behavior that occurs after the prediction point."
    },
    {
      id: 52,
      slug: "correct-for-overfitting-and-selection",
      title: "Correct for overfitting and selection",
      lede: "Penalize the winning strategy for the search that produced it.",
      retrieval: "Name three sources of temporal dishonesty in a backtest.",
      retrievalAnswer: "Look-ahead features, revised data, current-only universes, same-bar execution, random splits across time, and overlapping outcomes are valid examples."
      ,principle: "The best result among many trials combines any true signal with selection luck. Financial noise, flexible parameters, and short histories make overfitting especially severe. The research log and untouched data are part of the evidence.",
      moves: [
        "Count strategies, features, parameters, assets, and samples tried.",
        "Record abandoned ideas and researcher choices.",
        "Prefer simple rules with stable nearby performance.",
        "Adjust performance for selection and non-normality.",
        "Demand chronological out-of-sample replication."
      ],
      caseTitle: "the best of five hundred strategies",
      caseBody: "Even random strategies produce an impressive winner when enough are tried. Reporting its Sharpe ratio without the 499 failures treats selection luck as skill. The Deflated Sharpe Ratio and related methods attempt to correct this inflation.",
      exercise: "Create a research ledger for a strategy project, including every variation remembered. Write what evidence would survive if the winning parameter were moved slightly.",
      deliverable: "A trial-count audit, robustness map, and untouched confirmation rule.",
      quiz: {
        prompt: "Why is the best backtest biased?",
        options: ["Selection captures lucky noise", "Markets forbid every signal", "Returns are always normal", "Costs improve historical performance"],
        answer: 0,
        explain: "Selecting the maximum among many noisy estimates systematically inflates expected reported performance."
      },
      source: {
        label: "The Deflated Sharpe Ratio — Bailey & López de Prado",
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2460551",
        note: "a correction for selection bias, non-normal returns, and backtest overfitting."
      },
      transfer: "Product teams create the same bias when they choose the best segment, metric, attribution window, or experiment after broad exploration."
    },
    {
      id: 53,
      slug: "size-exposure-around-ruin",
      title: "Size exposure around ruin",
      lede: "Treat uncertain edge estimates as fragile and keep losing sequences survivable.",
      retrieval: "Why must the number of failed strategy trials accompany the winning result?",
      retrievalAnswer: "Selecting the maximum among many noisy trials inflates apparent performance; the search budget determines how much luck to expect."
      ,principle: "Position size converts a forecast into survival risk. Full Kelly-style sizing assumes known probabilities and repeated opportunities; real estimates are uncertain and returns can be dependent. Conservative fractions, caps, and correlation limits protect against model error.",
      moves: [
        "Estimate edge as a range, not a point.",
        "Model worst plausible loss and losing streak.",
        "Aggregate correlated positions into common exposures.",
        "Set drawdown, liquidity, and leverage constraints.",
        "Scale slowly from live evidence."
      ],
      caseTitle: "a seemingly high-confidence setup",
      caseBody: "An estimated 60% win rate from 50 selected trades has wide uncertainty. Sizing as though 60% were known can overbet dramatically. Use conservative probability, fractional sizing, and hard exposure caps.",
      exercise: "For a hypothetical binary trade, compare size under optimistic, central, and conservative edge estimates. Simulate or calculate ten consecutive losses.",
      deliverable: "A sizing range, drawdown result, and maximum-risk rule.",
      quiz: {
        prompt: "Why use fractional sizing?",
        options: ["Edge estimates remain uncertain", "Losses become mathematically impossible", "Correlation disappears from portfolios", "Execution costs turn positive"],
        answer: 0,
        explain: "Sizing below a model optimum creates protection against estimation error, dependence, and unmodeled downside."
      },
      source: {
        label: "On Kelly Betting: Some Limitations — Hsieh & Barmish",
        url: "https://arxiv.org/abs/1710.01787",
        note: "a treatment of Kelly-style allocation limits, including drawdown concerns."
      },
      transfer: "Founders also size bets: headcount, runway, reputation, and strategic lock-in should increase only with evidence."
    },
    {
      id: 54,
      slug: "mixed-case-reject-test-or-fund",
      title: "Mixed case: reject, test, or fund",
      lede: "Evaluate a strategy as a skeptical investment committee before risking capital.",
      retrieval: "Why should position size use a conservative edge estimate?",
      retrievalAnswer: "Observed performance is noisy and selected; probabilities, dependence, costs, and tails are uncertain, so point-optimal sizing can overbet."
      ,principle: "A strategy decision integrates hypothesis quality, chronology, costs, multiplicity, robustness, capacity, correlation, and sizing. “Promising” should map to a staged action, not immediate full exposure.",
      moves: [
        "Restate the edge and mechanism.",
        "Audit data, chronology, and costs.",
        "Reconstruct the complete search.",
        "Stress regimes, parameters, and execution.",
        "Choose reject, redesign, paper-test, pilot, or scale."
      ],
      caseTitle: "a 2.1 Sharpe breakout system",
      caseBody: "The result comes from 150 parameter combinations on current index members, uses same-close execution, and excludes slippage. Nearby parameters are weaker. Reject the performance claim; repair point-in-time data and execution, then treat the fixed rule as a new hypothesis for untouched data.",
      exercise: "Write a go/no-go memo for the case with red flags, repair steps, promotion gates, and a maximum live pilot size.",
      deliverable: "A skeptical strategy memo and evidence-gated capital plan.",
      quiz: {
        prompt: "What is the correct immediate action?",
        options: ["Repair test before funding", "Fund using reported Sharpe", "Optimize parameters even further", "Ignore point-in-time membership completely"],
        answer: 0,
        explain: "The current result is contaminated by survivorship, execution bias, and selection; it cannot justify capital."
      },
      transfer: "Use this committee discipline on your own favorite thesis, where motivated reasoning is most likely."
    }
  ]
};

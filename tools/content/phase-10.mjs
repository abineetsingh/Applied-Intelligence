export default {
  number: 10,
  title: "Phase 10: Applied game theory to real-world scenarios",
  mission: "Exceptional judgment anticipates adaptation. Game theory turns customers, competitors, partners, employees, and market participants from static assumptions into agents with incentives, information, and responses of their own.",
  source: {
    label: "Game Theory — Open Yale Courses",
    url: "https://oyc.yale.edu/economics/econ-159",
    note: "Ben Polak's complete university course on strategic interaction, equilibrium, commitment, repeated games, bargaining, and asymmetric information."
  },
  reference: {
    slug: "applied-game-theory-playbook",
    title: "Applied Game Theory Playbook",
    lede: "A compact field guide for decisions whose outcomes depend on how other agents respond.",
    items: [
      "Define the players, feasible actions, sequence, information, payoffs, and rules before naming a familiar game.",
      "Separate stated objectives from revealed incentives; include outside options, delays, switching costs, and risks in payoffs.",
      "Delete dominated strategies, map best responses, and find stable outcomes—then ask whether equilibrium is desirable or merely self-reinforcing.",
      "For sequential games, work backward from each future decision and reject threats or promises that would not be rational when reached.",
      "For repeated games, model patience, observability, error, reputation, punishment, forgiveness, and the probability of meeting again.",
      "Under asymmetric information, test whether a signal is differentially costly and design screens that make different types select different options.",
      "When the equilibrium is harmful, change the game: alter information, timing, commitments, payoffs, participation, or enforcement.",
      "Treat the model as a decision aid, not mind reading; test assumptions about rationality, common knowledge, and available strategies."
    ],
    guardrail: "A payoff matrix can create false precision. Real people misperceive games, value fairness and identity, learn over time, and change the rules. Use multiple plausible models and update from behavior."
  },
  lessons: [
    {
      id: 61,
      slug: "model-the-strategic-game",
      title: "Model the strategic game",
      lede: "Recognize when your outcome depends on another agent's response, then represent the interaction before choosing.",
      retrieval: "What must a consequential strategy memo specify before outcomes are known?",
      retrievalAnswer: "The decision, primitives, competing models, base rates, probabilities, causal assumptions, alternatives, downside, evidence gates, falsifiers, owners, and review dates.",
      principle: "A decision is strategic when each player's best action depends on what others do. Model the players, available strategies, timing, information, outcomes, and payoffs. Payoffs must represent what actors actually value—not only money, and not what they publicly claim to value.",
      moves: [
        "Name the smallest set of decision-relevant players.",
        "List feasible strategies rather than vague intentions.",
        "Specify who moves when and who observes what.",
        "Estimate payoffs including risk, status, delay, and outside options.",
        "Write at least one rival model of the game."
      ],
      caseTitle: "two SaaS competitors consider a price cut",
      caseBody: "A founder models only the revenue gained from a lower price. A strategic model also asks whether the rival will match, whether buyers will wait for further cuts, and whether both firms prefer today's margins to the likely price-war outcome. The crucial uncertainty is not demand alone; it is the rival's incentives and ability to respond.",
      exercise: "Choose a live product, negotiation, hiring, or market decision. Write the players, strategies, move order, information, and ordinal payoffs. Then create a second model with different opponent incentives.",
      deliverable: "Two compact game models and the assumption that changes your action.",
      quiz: {
        prompt: "What makes a decision strategically interactive?",
        options: ["Others' responses change your payoff", "More data improves your estimate", "The outcome contains random variation", "Your preferences include several objectives"],
        answer: 0,
        explain: "Strategic interaction exists when the value of your action depends on actions chosen by other agents."
      },
      source: {
        label: "Introduction: Five First Lessons — Open Yale Courses",
        url: "https://oyc.yale.edu/economics/econ-159/lecture-1",
        note: "introduces players, strategies, payoffs, dominance, prisoners' dilemmas, and coordination problems."
      },
      transfer: "Before predicting a competitor, ask whether you have modeled their actual constraints and incentives or merely projected your own."
    },
    {
      id: 62,
      slug: "find-best-responses-and-equilibria",
      title: "Find best responses and equilibria",
      lede: "Predict stable behavior by asking what each player would choose against every plausible opposing action.",
      retrieval: "What six elements turn a situation into a usable strategic game?",
      retrievalAnswer: "Players, feasible strategies, move order, available information, possible outcomes, and the payoffs each player actually experiences.",
      principle: "A best response is the highest-payoff action against a given opposing action. A Nash equilibrium is a strategy profile where no player benefits from changing alone. It predicts stability, not goodness: price wars, bank runs, and incompatible standards can all be equilibria.",
      moves: [
        "Remove strictly dominated strategies first.",
        "Mark each player's best response to every opposing strategy.",
        "Find cells where best responses intersect.",
        "Test whether multiple equilibria create coordination risk.",
        "Look for a rule or focal point that selects a better equilibrium."
      ],
      caseTitle: "a platform chooses an integration standard",
      caseBody: "Two complementary products gain most when they adopt the same standard, but each prefers its own. There are two stable equilibria and no purely technical answer. Early commitment, an industry convention, compatibility, or a credible neutral standard can coordinate expectations on one outcome.",
      exercise: "Build a 2×2 payoff matrix for a real coordination or competition problem. Mark best responses, equilibria, dominated strategies, and the equilibrium you prefer.",
      deliverable: "An annotated payoff matrix plus one equilibrium-selection intervention.",
      quiz: {
        prompt: "What does Nash equilibrium guarantee?",
        options: ["No profitable unilateral deviation exists", "The jointly best outcome occurs", "Every player receives equal value", "The outcome remains morally desirable"],
        answer: 0,
        explain: "Equilibrium means each strategy is a best response to the others; it need not maximize joint welfare."
      },
      source: {
        label: "Nash Equilibrium: Bad Fashion and Bank Runs — Open Yale Courses",
        url: "https://oyc.yale.edu/economics/econ-159/lecture-5",
        note: "applies equilibrium reasoning to coordination, conventions, and self-reinforcing outcomes."
      },
      transfer: "In product adoption, ask not only whether your product is better but whether each participant expects the complementary participants to adopt."
    },
    {
      id: 63,
      slug: "reason-backward-and-test-commitments",
      title: "Reason backward and test commitments",
      lede: "In sequential games, evaluate future incentives before believing present threats, promises, or first-mover advantages.",
      retrieval: "Why can a Nash equilibrium be strategically stable yet collectively bad?",
      retrievalAnswer: "Because it prevents profitable unilateral deviation without guaranteeing the joint optimum, fairness, resilience, or the best equilibrium among several stable outcomes.",
      principle: "Solve a sequential game from the end: at each future decision node, choose what that player would rationally do there, then work backward. A threat or promise changes current behavior only when it will remain optimal—or is enforced—after the moment arrives.",
      moves: [
        "Draw the move order and observable actions.",
        "Start at the final decision nodes.",
        "Choose the best response at each reached node.",
        "Work backward to today's choice.",
        "Separate credible commitments from cheap announcements."
      ],
      caseTitle: "an incumbent threatens a price war",
      caseBody: "A startup considers entering a niche. The incumbent threatens to cut prices permanently, but doing so after entry would destroy its own margin and might invite antitrust scrutiny. Unless the incumbent has precommitted capacity, contracts, or incentives that make retaliation rational, the threat may not survive backward induction.",
      exercise: "Draw a small game tree for a negotiation, launch, or competitive response. Solve it backward, then identify one commitment device that would genuinely change the result.",
      deliverable: "A solved game tree labeling one credible and one noncredible move.",
      quiz: {
        prompt: "What makes a strategic threat credible?",
        options: ["Following through remains rational later", "The speaker sounds extremely confident", "The threatened cost appears enormous", "The announcement arrives before negotiation"],
        answer: 0,
        explain: "A threat influences rational play only if execution is optimal or effectively committed when its decision node arrives."
      },
      source: {
        label: "Sequential Games: Moral Hazard, Incentives, and Hungry Lions — Open Yale Courses",
        url: "https://oyc.yale.edu/economics/econ-159/lecture-13",
        note: "develops backward induction, incentive design, and commitment strategies in sequential settings."
      },
      transfer: "A first move is valuable only when it changes later options, information, or incentives; moving first by itself is not an advantage."
    },
    {
      id: 64,
      slug: "build-cooperation-in-repeated-games",
      title: "Build cooperation in repeated games",
      lede: "Design reputation, monitoring, punishment, and repair so that long-run cooperation beats short-run defection.",
      retrieval: "How do you test a threat or promise in a sequential game?",
      retrievalAnswer: "Work backward from the future decision node and ask whether following through remains rational there or is secured by a real commitment device.",
      principle: "Repeated interaction can support cooperation when future gains matter, behavior is observable, and defection produces a proportionate consequence. Cooperation collapses when the end is known, identities reset cheaply, monitoring is noisy, or punishment is so unforgiving that mistakes trigger permanent conflict.",
      moves: [
        "Estimate the value and probability of future interaction.",
        "Define observable cooperative and defective behavior.",
        "Choose prompt, proportionate, explainable consequences.",
        "Add forgiveness and repair for noisy signals.",
        "Protect reputation systems against manipulation and reset."
      ],
      caseTitle: "a marketplace suffers off-platform leakage",
      caseBody: "Buyers and providers save fees by transacting privately once matched. Moral appeals are weak against immediate savings. The marketplace can increase the shadow of the future with guarantees, reputation portability, repeat-booking convenience, and proportionate consequences—while preserving an appeal path for measurement errors.",
      exercise: "Analyze one recurring relationship with a customer, supplier, employee, or community. Specify temptation, future surplus, observability, punishment, false-positive risk, and repair.",
      deliverable: "A repeated-game cooperation design with a forgiveness rule.",
      quiz: {
        prompt: "What most supports durable cooperation?",
        options: ["Valuable future with observable conduct", "Anonymous players with easy resets", "Certain ending with hidden behavior", "Maximum punishment after every ambiguity"],
        answer: 0,
        explain: "Cooperation becomes incentive-compatible when future surplus matters and conduct can be observed with tolerable error."
      },
      source: {
        label: "Repeated Games: Cooperation versus the End Game — Open Yale Courses",
        url: "https://oyc.yale.edu/economics/econ-159/lecture-21",
        note: "examines how repetition, patience, and known endings alter incentives to cooperate."
      },
      transfer: "In organizations, a culture of cooperation is partly a repeated-game equilibrium created by promotion, memory, mobility, and enforcement systems."
    },
    {
      id: 65,
      slug: "read-signals-and-design-screens",
      title: "Read signals and design screens",
      lede: "When information is asymmetric, distinguish cheap claims from costly signals and make hidden types reveal themselves through choices.",
      retrieval: "Why should a repeated-game strategy include forgiveness?",
      retrievalAnswer: "Monitoring is noisy; without repair, an accidental or misclassified defection can trigger retaliation that destroys otherwise valuable long-run cooperation.",
      principle: "A signal is informative when it is sufficiently easier or more valuable for one hidden type to produce than another. Screening reverses the direction: the less-informed party offers choices designed so different types select different options. Words alone usually pool good and bad types.",
      moves: [
        "Name the private information and relevant hidden types.",
        "List current signals and their costs by type.",
        "Reject signals equally cheap for imitators.",
        "Design choices that produce useful self-selection.",
        "Audit exclusion, gaming, and unintended selection."
      ],
      caseTitle: "a startup screens design partners",
      caseBody: "Many prospects say the problem is urgent. A useful screen offers two paths: a paid pilot requiring data access and weekly operator time, or a free newsletter. Prospects with severe problems can rationally bear the first path's cost; casual interest selects the second. The commitment is evidence, though not perfect proof, of type.",
      exercise: "Choose a hiring, sales, investing, or marketplace problem with hidden quality. Identify cheap signals, a differentially costly signal, and a self-selection screen.",
      deliverable: "A signal-cost table and an ethical screening mechanism.",
      quiz: {
        prompt: "When is a signal informative?",
        options: ["Its cost differs across hidden types", "Every type can imitate it cheaply", "It confirms the receiver's prior belief", "Its message contains impressive detail alone"],
        answer: 0,
        explain: "Separation requires the signal's cost or benefit to differ enough that types choose differently."
      },
      source: {
        label: "The Prize in Economic Sciences 2001 — Nobel Prize",
        url: "https://www.nobelprize.org/prizes/economic-sciences/2001/ceremony-speech/",
        note: "summarizes foundational work on adverse selection, signaling, and screening under asymmetric information."
      },
      transfer: "A founder's own commitment can signal quality to partners, but only if low-conviction founders would find the same commitment meaningfully harder to copy."
    },
    {
      id: 66,
      slug: "bargain-and-design-better-rules",
      title: "Bargain and design better rules",
      lede: "Improve outcomes by understanding outside options, patience, and the rules that convert private incentives into collective behavior.",
      retrieval: "What separates an informative signal from persuasive theater?",
      retrievalAnswer: "The signal must impose a sufficiently different cost or benefit across hidden types, making imitation unattractive for the type it is meant to exclude.",
      principle: "Bargaining power comes from credible alternatives, patience, information, and the cost of delay—not theatrical aggression. Mechanism design goes one level higher: instead of choosing within fixed rules, design participation, messages, allocation, and payments so self-interested behavior produces a better result.",
      moves: [
        "Estimate each side's outside option and delay cost.",
        "Identify private information and possible misrepresentation.",
        "Separate value creation from value division.",
        "Test whether truth telling and participation are rational.",
        "Simulate gaming, collusion, exclusion, and failure modes."
      ],
      caseTitle: "a marketplace allocates scarce expert time",
      caseBody: "First-come allocation rewards speed rather than value and invites bots. A sealed-bid auction may reveal willingness to pay but can exclude strategically important users. A credit-based mechanism, reserve, identity controls, and transparent allocation rule can better balance revenue, access, and manipulation resistance. The objective determines the mechanism.",
      exercise: "Choose a negotiation or allocation problem. Map outside options and delay costs, then redesign one rule so individually rational behavior better serves the system objective.",
      deliverable: "A bargaining map or mechanism brief with three gaming tests.",
      quiz: {
        prompt: "What usually strengthens bargaining power?",
        options: ["Credible alternatives and lower delay costs", "Aggressive language and much longer meetings", "Hiding every possible shared interest deliberately", "Making commitments nobody can reliably verify"],
        answer: 0,
        explain: "Outside options and patience change the payoffs; performance without a credible alternative often does not."
      },
      source: {
        label: "Mechanism Design Theory — Nobel Prize",
        url: "https://www.nobelprize.org/prizes/economic-sciences/2007/popular-information/",
        note: "explains incentive compatibility and how rules can align private behavior with collective objectives."
      },
      transfer: "Pricing, quotas, rankings, commissions, promotions, and API limits are mechanisms: each creates a game whether or not its designer models one."
    },
    {
      id: 67,
      slug: "game-theory-real-world-capstone",
      title: "Capstone: change the game",
      lede: "Integrate equilibrium, commitment, repetition, information, and mechanism design in a live strategic decision.",
      retrieval: "What determines bargaining power more reliably than forceful performance?",
      retrievalAnswer: "Credible outside options, relative patience, information, commitment, and each side's cost of delay determine leverage more reliably than aggressive presentation.",
      principle: "The strongest game-theoretic move is often not selecting a clever strategy inside the current game. It is changing participation, information, timing, payoffs, commitments, or enforcement so the desirable behavior becomes individually rational and stable.",
      moves: [
        "Model the current game and at least one rival representation.",
        "Find best responses, equilibria, and unstable assumptions.",
        "Solve sequential branches and test credibility.",
        "Add repetition, information asymmetry, and bounded rationality.",
        "Redesign one rule and predict adaptation before acting."
      ],
      caseTitle: "a platform faces a subsidy war",
      caseBody: "Two platforms subsidize users while suppliers multi-home. Matching the rival may be a dominated race toward weak unit economics; exiting may surrender network density. The operator compares regional focus, exclusive supply contracts, interoperability, loyalty benefits, and a differentiated segment. Each move changes rivals' and participants' incentives, so the strategy must include their likely adaptation and a stop rule.",
      exercise: "Select one consequential live scenario involving competitors, customers, partners, employees, investors, or market participants. Produce a one-page game brief: players, strategies, payoffs, information, timing, equilibrium, credible commitments, repeated-game effects, signals, screens, and one rule change. Red-team it from another player's perspective.",
      deliverable: "A timestamped applied game-theory brief with forecasts, falsifiers, and an adaptation tree.",
      quiz: {
        prompt: "What is often the highest-leverage move?",
        options: ["Change rules shaping everyone's strategic incentives", "Optimize harder within a harmful equilibrium", "Assume rivals will remain static forever", "Hide models from all disconfirming evidence"],
        answer: 0,
        explain: "Changing information, timing, payoffs, participation, or enforcement can replace a harmful equilibrium with a better stable game."
      },
      source: {
        label: "Game Theory — Open Yale Courses",
        url: "https://oyc.yale.edu/economics/econ-159",
        note: "a full applied sequence covering dominance, equilibrium, sequential play, commitment, bargaining, repetition, signaling, and auctions."
      },
      transfer: "Revisit the brief after real behavior appears. Score the forecast, update payoffs and information assumptions, and distinguish a wrong strategy from a wrong game model."
    }
  ]
};

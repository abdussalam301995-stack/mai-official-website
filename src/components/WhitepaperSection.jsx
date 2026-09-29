
/*
  MAI NETWORK — WHITEPAPER SECTION (UPGRADED)
  ------------------------------------------------------------
  This version intentionally preserves the original Whitepaper
  section structure and visual layers:
  - futuristic background + particles
  - main card
  - metadata
  - 3D document visual
  - orbits + floating TON / 10B data
  - topics
  - token summary
  - transparency
  - future vision

  Upgrade:
  - professional inline SVG icons replace text-symbol icons
  - Read PDF opens the PDF already stored in /public
  - existing classNames are preserved so your App.css effects remain
*/

const MaiIcon = ({ type, className = "" }) => {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const icons = {
    network: (
      <svg {...common}>
        <circle cx="12" cy="12" r="2.4" />
        <circle cx="5" cy="6" r="1.7" />
        <circle cx="19" cy="6" r="1.7" />
        <circle cx="5" cy="18" r="1.7" />
        <circle cx="19" cy="18" r="1.7" />
        <path d="M6.5 7.1 10.2 10M17.5 7.1 13.8 10M6.5 16.9 10.2 14M17.5 16.9 13.8 14" />
      </svg>
    ),

    mining: (
      <svg {...common}>
        <path d="m4 18 6.7-6.7" />
        <path d="m9.2 5.2 2.5-2.2 4.1 4.1-2.2 2.5" />
        <path d="m8.3 6.1 9.6 9.6" />
        <path d="m15.9 13.7 3.2 3.2-2.2 2.2-3.2-3.2" />
      </svg>
    ),

    tokenomics: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.2" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 3.8v5M20.2 12h-5M12 20.2v-5M3.8 12h5" />
      </svg>
    ),

    ton: (
      <svg {...common}>
        <path d="M4.4 5.2h15.2L12 19.3 4.4 5.2Z" />
        <path d="M8.2 8.3 12 15.5l3.8-7.2H8.2Z" />
      </svg>
    ),

    security: (
      <svg {...common}>
        <path d="M12 3 19 6v5c0 4.8-2.9 8.1-7 10-4.1-1.9-7-5.2-7-10V6l7-3Z" />
        <path d="m9.1 12 1.9 1.9 4-4.2" />
      </svg>
    ),

    future: (
      <svg {...common}>
        <circle cx="6" cy="17" r="2" />
        <circle cx="12" cy="7" r="2" />
        <circle cx="18" cy="17" r="2" />
        <path d="m7.2 15.4 3.6-6.8M13.2 8.6l3.6 6.8M8 17h8" />
      </svg>
    ),

    document: (
      <svg {...common}>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5M10 12h5M10 16h5" />
      </svg>
    ),

    transparency: (
      <svg {...common}>
        <path d="M2.8 12s3.4-5.3 9.2-5.3S21.2 12 21.2 12s-3.4 5.3-9.2 5.3S2.8 12 2.8 12Z" />
        <circle cx="12" cy="12" r="2.8" />
      </svg>
    ),

    arrow: (
      <svg {...common}>
        <path d="M5 19 19 5M9 5h10v10" />
      </svg>
    ),
  };

  return icons[type] || icons.network;
};

const WhitepaperSection = ({ t }) => {
  const w = t?.whitepaperPage ?? {};

  const fallbackTopics = [
    {
      number: "01",
      icon: "network",
      title: "MAI Network",
      description:
        "Discover the foundation, vision, architecture, and long-term direction behind the MAI Network ecosystem.",
    },
    {
      number: "02",
      icon: "mining",
      title: "Mining System",
      description:
        "Explore how MAI mining, reward distribution, participation, and ecosystem incentives are designed to work together.",
    },
    {
      number: "03",
      icon: "tokenomics",
      title: "Tokenomics",
      description:
        "Understand MAI token supply, allocation structure, utility, distribution strategy, and sustainable ecosystem model.",
    },
    {
      number: "04",
      icon: "ton",
      title: "TON Ecosystem",
      description:
        "Learn how MAI Network connects with TON infrastructure, wallets, Telegram users, and decentralized services.",
    },
    {
      number: "05",
      icon: "security",
      title: "Security",
      description:
        "Review the principles designed around transparency, secure participation, responsible distribution, and system protection.",
    },
    {
      number: "06",
      icon: "future",
      title: "Future Vision",
      description:
        "Follow the long-term direction of MAI Network as it evolves from mining participation into a broader decentralized ecosystem.",
    },
  ];

  const topics = fallbackTopics.map((topic, index) => {
    const translatedTopic = w?.topics?.[index];

    return {
      ...topic,
      title: translatedTopic?.title ?? topic.title,
      description:
        translatedTopic?.description ?? topic.description,
    };
  });

  const pdfPath =
    "/MAI_Network_Official_Whitepaper_English.pdf";

  return (
    <section className="whitepaper-section" id="whitepaper">
      {/* ================================
          FUTURISTIC BACKGROUND
      ================================= */}

      <div className="whitepaper-future-bg" aria-hidden="true">
        <div className="whitepaper-grid" />

        <div className="whitepaper-glow whitepaper-glow-left" />
        <div className="whitepaper-glow whitepaper-glow-right" />
        <div className="whitepaper-glow whitepaper-glow-center" />

        <div className="whitepaper-beam whitepaper-beam-one" />
        <div className="whitepaper-beam whitepaper-beam-two" />

        <div className="whitepaper-particles">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="whitepaper-container">
        {/* ================================
            SECTION HEADING
        ================================= */}

        <div className="whitepaper-heading">
          <div className="whitepaper-heading-badge">
            <span className="whitepaper-heading-dot" />
            {w.officialDocument ?? "OFFICIAL DOCUMENT"}
          </div>

          <h2>
            {w.headingTitle ?? "Explore the"}
            <span>
              {w.headingHighlight ?? " MAI Whitepaper"}
            </span>
          </h2>

          <p>
            {w.headingDescription ??
              "Discover the technology, token economy, mining ecosystem, transparency model, and long-term vision behind MAI Network."}
          </p>
        </div>

        {/* ================================
            MAIN WHITEPAPER CARD
        ================================= */}

        <div className="whitepaper-main-card">
          <div className="whitepaper-main-card-shine" />

          {/* LEFT CONTENT */}

          <div className="whitepaper-main-content">
            <span className="whitepaper-document-label">
              {w.documentLabel ?? "MAI NETWORK • WHITEPAPER"}
            </span>

            <h3>
              {w.mainTitle ?? "Building a New"}
              <span className="whitepaper-title-gradient">
                {" "}
                {w.mainTitleHighlight ??
                  "Digital Mining Ecosystem"}
              </span>
            </h3>

            <p>
              {w.mainDescription ??
                "The MAI Network Whitepaper introduces the core structure of the ecosystem — including mining, token utility, distribution, transparency, TON integration, and the future development path of the network."}
            </p>

            {/* META DATA */}

            <div className="whitepaper-meta">
              <div>
                <small>{w.networkLabel ?? "NETWORK"}</small>
                <strong>TON</strong>
              </div>

              <div>
                <small>{w.symbolLabel ?? "SYMBOL"}</small>
                <strong>MAI</strong>
              </div>

              <div>
                <small>{w.supplyLabel ?? "SUPPLY"}</small>
                <strong>10B</strong>
              </div>

              <div>
                <small>{w.statusLabel ?? "STATUS"}</small>

                <strong className="whitepaper-status">
                  <i />
                  {w.live ?? "LIVE"}
                </strong>
              </div>
            </div>

            {/* BUTTONS */}

            <div className="whitepaper-actions">
              <a
                href="#whitepaper-topics"
                className="whitepaper-primary-button"
              >
                <span>
                  {w.exploreButton ?? "Explore Whitepaper"}
                </span>

                <MaiIcon
                  type="arrow"
                  className="whitepaper-button-svg"
                />
              </a>

              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="whitepaper-secondary-button"
              >
                <MaiIcon
                  type="document"
                  className="whitepaper-button-svg"
                />

                <span>{w.readPdf ?? "Read PDF"}</span>

                <MaiIcon
                  type="arrow"
                  className="whitepaper-button-svg"
                />
              </a>
            </div>
          </div>

          {/* ================================
              3D DOCUMENT VISUAL
          ================================= */}

          <div className="whitepaper-document-visual">
            <div className="whitepaper-visual-glow" />

            {/* ORBITS */}

            <div className="whitepaper-orbit orbit-one">
              <i className="whitepaper-orbit-node node-one" />
              <i className="whitepaper-orbit-node node-two" />
            </div>

            <div className="whitepaper-orbit orbit-two">
              <i className="whitepaper-orbit-node node-three" />
            </div>

            <div className="whitepaper-orbit orbit-three">
              <i className="whitepaper-orbit-node node-four" />
            </div>

            {/* FLOATING DATA */}

            <div className="whitepaper-floating-data data-one">
              <span>TON</span>
              <small>{w.networkLabel ?? "NETWORK"}</small>
            </div>

            <div className="whitepaper-floating-data data-two">
              <span>10B</span>
              <small>{w.supplyLabel ?? "SUPPLY"}</small>
            </div>

            {/* DOCUMENT */}

            <div className="whitepaper-document-wrapper">
              <div className="whitepaper-document-shadow" />

              <div className="whitepaper-document">
                <div className="whitepaper-document-light" />

                <div className="whitepaper-document-top">
                  <span>MAI</span>
                  <small>NETWORK</small>
                </div>

                <div className="whitepaper-document-center">
                  <div className="whitepaper-document-logo">
                    <div className="whitepaper-logo-ring" />
                    <span>M</span>
                  </div>

                  <h4>WHITEPAPER</h4>

                  <p>
                    {w.documentSubtitle ??
                      "DECENTRALIZED MINING ECOSYSTEM"}
                  </p>

                  <div className="whitepaper-document-line" />

                  <small className="whitepaper-document-version">
                    {w.version ?? "VERSION 1.0"}
                  </small>
                </div>

                <div className="whitepaper-document-bottom">
                  <span>MAI NETWORK</span>
                  <span>2026</span>
                </div>
              </div>
            </div>

            {/* DECORATIVE ENERGY DOTS */}

            <span className="whitepaper-energy-dot energy-one" />
            <span className="whitepaper-energy-dot energy-two" />
            <span className="whitepaper-energy-dot energy-three" />
          </div>
        </div>

        {/* ================================
            WHITEPAPER TOPICS
        ================================= */}

        <div
          className="whitepaper-topics"
          id="whitepaper-topics"
        >
          <div className="whitepaper-topics-header">
            <div>
              <span className="section-label">
                {w.topicsLabel ?? "INSIDE THE WHITEPAPER"}
              </span>

              <h3>
                {w.topicsTitle ?? "Explore the"}

                <span className="whitepaper-title-gradient">
                  {" "}
                  {w.topicsTitleHighlight ?? "Core System"}
                </span>
              </h3>
            </div>

            <p>
              {w.topicsDescription ??
                "A complete overview of the key systems, technology, economics, security principles, and long-term direction of MAI Network."}
            </p>
          </div>

          <div className="whitepaper-topics-grid">
            {topics.map((topic) => (
              <article
                className="whitepaper-topic-card"
                key={topic.number}
              >
                <div className="whitepaper-topic-glow" />

                <span className="whitepaper-topic-number">
                  {topic.number}
                </span>

                <div className="whitepaper-topic-icon">
                  <MaiIcon
                    type={topic.icon}
                    className="whitepaper-topic-svg"
                  />
                </div>

                <h4>{topic.title}</h4>

                <p>{topic.description}</p>

                <div className="whitepaper-topic-line">
                  <span />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================================
            TOKEN SUMMARY
        ================================= */}

        <div className="whitepaper-token-summary">
          <div className="whitepaper-summary-glow" />

          <div className="whitepaper-summary-heading">
            <span className="section-label">
              {w.tokenEconomyLabel ?? "TOKEN ECONOMY"}
            </span>

            <h3>
              {w.tokenTitle ?? "MAI Token"}

              <span className="whitepaper-title-gradient">
                {" "}
                {w.tokenTitleHighlight ?? "Distribution"}
              </span>
            </h3>

            <p>
              {w.tokenDescription ??
                "A transparent allocation structure designed to support mining, ecosystem development, liquidity, community participation, and the long-term growth of MAI Network."}
            </p>
          </div>

          {/* DISTRIBUTION BAR */}

          <div className="whitepaper-distribution-bar">
            <div className="whitepaper-distribution mining">
              <strong>70%</strong>
              <span>{w.mining ?? "Mining"}</span>
            </div>

            <div className="whitepaper-distribution community">
              <strong>10%</strong>
              <span>{w.community ?? "Community"}</span>
            </div>

            <div className="whitepaper-distribution founder">
              <strong>10%</strong>
              <span>{w.founder ?? "Founder"}</span>
            </div>

            <div className="whitepaper-distribution dex">
              <strong>10%</strong>
              <span>DEX</span>
            </div>
          </div>

          {/* SUPPLY INFORMATION */}

          <div className="whitepaper-supply">
            <div>
              <strong>10B</strong>
              <span>{w.totalSupply ?? "Total Supply"}</span>
            </div>

            <div className="whitepaper-supply-divider" />

            <div>
              <strong>MAI</strong>
              <span>{w.tokenSymbol ?? "Token Symbol"}</span>
            </div>

            <div className="whitepaper-supply-divider" />

            <div>
              <strong>TON</strong>
              <span>{w.blockchain ?? "Blockchain"}</span>
            </div>

            <div className="whitepaper-supply-divider" />

            <div>
              <strong>100%</strong>
              <span>{w.transparent ?? "Transparent"}</span>
            </div>
          </div>
        </div>

        {/* ================================
            TRANSPARENCY
        ================================= */}

        <div className="whitepaper-transparency">
          <div className="whitepaper-transparency-icon">
            <MaiIcon
              type="transparency"
              className="whitepaper-transparency-svg"
            />
          </div>

          <div>
            <span>
              {w.transparencyLabel ?? "TRANSPARENCY FIRST"}
            </span>

            <h3>
              {w.transparencyTitle ??
                "Built Around an Open Ecosystem"}
            </h3>

            <p>
              {w.transparencyDescription ??
                "MAI Network is designed around transparent token distribution, visible ecosystem development, community participation, and blockchain-based infrastructure."}
            </p>
          </div>

          <div className="whitepaper-transparency-light" />
        </div>

        {/* ================================
            FUTURE VISION
        ================================= */}

        <div className="whitepaper-vision">
          <div className="whitepaper-vision-grid" />
          <div className="whitepaper-vision-glow" />

          <span className="section-label">
            {w.futureLabel ?? "THE FUTURE"}
          </span>

          <h3>
            {w.futureTitle ?? "From Mining to a"}

            <span>
              {w.futureTitleHighlight ??
                " Connected Digital Ecosystem"}
            </span>
          </h3>

          <p>
            {w.futureDescription ??
              "MAI Network aims to grow beyond a mining experience into an interconnected ecosystem where users, blockchain technology, community participation, and decentralized services can evolve together."}
          </p>

          <div className="whitepaper-vision-flow">
            <div>
              <strong>01</strong>
              <span>{w.visionMining ?? "Mining"}</span>
            </div>

            <span>→</span>

            <div>
              <strong>02</strong>
              <span>{w.visionCommunity ?? "Community"}</span>
            </div>

            <span>→</span>

            <div>
              <strong>03</strong>
              <span>{w.visionUtility ?? "Utility"}</span>
            </div>

            <span>→</span>

            <div>
              <strong>04</strong>
              <span>{w.visionEcosystem ?? "Ecosystem"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection;

/* =========================================================
   MAI TOKENOMICS ICON SYSTEM
   No external icon package required.
   ========================================================= */

const TokenomicsIcon = ({ name }) => {
  const commonProps = {
    className: "tokenomics-svg-icon",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  if (name === "mining") {
    return (
      <svg {...commonProps}>
        <path
          d="M12 36L31 17M27 12L36 21M24.5 14.5L33.5 23.5M10 34L15 39"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13H17M13 9V17"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "dex") {
    return (
      <svg {...commonProps}>
        <path
          d="M15 14H36M30 8L36 14L30 20"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 34H12M18 28L12 34L18 40"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="24"
          cy="24"
          r="5"
          stroke="currentColor"
          strokeWidth="2.2"
        />
      </svg>
    );
  }

  if (name === "community") {
    return (
      <svg {...commonProps}>
        <circle
          cx="24"
          cy="16"
          r="5"
          stroke="currentColor"
          strokeWidth="2.3"
        />
        <circle
          cx="12.5"
          cy="20"
          r="4"
          stroke="currentColor"
          strokeWidth="2.1"
        />
        <circle
          cx="35.5"
          cy="20"
          r="4"
          stroke="currentColor"
          strokeWidth="2.1"
        />
        <path
          d="M15.5 36C16.2 29.9 19.3 27 24 27C28.7 27 31.8 29.9 32.5 36"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        <path
          d="M5 35C5.6 30.2 8 27.8 12 27.8C14 27.8 15.7 28.4 17 29.5M43 35C42.4 30.2 40 27.8 36 27.8C34 27.8 32.3 28.4 31 29.5"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "founder") {
    return (
      <svg {...commonProps}>
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <circle
          cx="24"
          cy="24"
          r="14"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.72"
        />
        <path
          d="M14.5 32V16H18.8L24 24.1L29.2 16H33.5V32H29V23.3L24 30.5L19 23.3V32H14.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return null;
};

const TokenomicsSection = ({ t }) => {
  const tokenomics = t?.tokenomicsPage ?? {};

  const allocations = [
    {
      number: "01",
      icon: "mining",
      title:
        tokenomics?.allocations?.mining?.title ??
        "Mining Rewards",
      percentage: "70%",
      amount: "7,000,000,000 MAI",
      description:
        tokenomics?.allocations?.mining?.description ??
        "The largest allocation is dedicated to mining rewards, supporting long-term participation and sustainable growth across the MAI Network.",
      className: "mining",
    },
    {
      number: "02",
      icon: "dex",
      title:
        tokenomics?.allocations?.dex?.title ??
        "DEX & Liquidity",
      percentage: "10%",
      amount: "1,000,000,000 MAI",
      description:
        tokenomics?.allocations?.dex?.description ??
        "Reserved for decentralized exchange liquidity and future market infrastructure within the MAI ecosystem.",
      className: "dex",
    },
    {
      number: "03",
      icon: "community",
      title:
        tokenomics?.allocations?.community?.title ??
        "Community",
      percentage: "10%",
      amount: "1,000,000,000 MAI",
      description:
        tokenomics?.allocations?.community?.description ??
        "Allocated to community development, ecosystem activities, campaigns and long-term community growth.",
      className: "community-allocation",
    },
    {
      number: "04",
      icon: "founder",
      title:
        tokenomics?.allocations?.founder?.title ??
        "Founder",
      percentage: "10%",
      amount: "1,000,000,000 MAI",
      description:
        tokenomics?.allocations?.founder?.description ??
        "Allocated to the founder to support long-term project development, operations and continued ecosystem expansion.",
      className: "founder",
    },
  ];

  return (
    <section
      className="tokenomics-section"
      id="tokenomics"
    >
      <div className="tokenomics-glow tokenomics-glow-left"></div>
      <div className="tokenomics-glow tokenomics-glow-right"></div>

      <div className="tokenomics-container">
        {/* HEADER */}

        <div className="tokenomics-heading">
          <span className="section-label">
            {tokenomics.badge ?? "MAI TOKENOMICS"}
          </span>

          <h2>
            {tokenomics.titleMain ??
              "Built for Sustainable"}
            <span>
              {tokenomics.titleHighlight ??
                " Ecosystem Growth."}
            </span>
          </h2>

          <p>
            {tokenomics.description ??
              "MAI token distribution is structured to prioritize community mining while supporting liquidity, ecosystem development and long-term project growth."}
          </p>
        </div>

        {/* SUPPLY OVERVIEW */}

        <div className="tokenomics-overview">
          <div className="tokenomics-supply">
            <span className="tokenomics-card-number">
              01
            </span>

            <div className="supply-label">
              {tokenomics.totalSupplyLabel ??
                "TOTAL SUPPLY"}
            </div>

            <div className="supply-value">
              <strong>10</strong>

              <span>
                {tokenomics.billion ?? "BILLION"}
              </span>
            </div>

            <h3>MAI</h3>

            <p>
              {tokenomics.supplyDescription ??
                "A fixed ecosystem supply designed around mining participation, community growth and future decentralized market development."}
            </p>

            <div className="supply-meta">
              <div>
                <small>
                  {tokenomics.networkLabel ??
                    "NETWORK"}
                </small>
                <strong>TON</strong>
              </div>

              <div>
                <small>
                  {tokenomics.tokenLabel ?? "TOKEN"}
                </small>
                <strong>MAI</strong>
              </div>

              <div>
                <small>
                  {tokenomics.supplyLabel ?? "SUPPLY"}
                </small>
                <strong>10B</strong>
              </div>
            </div>
          </div>

          {/* ALLOCATION VISUAL */}

          <div className="tokenomics-visual">
            <span className="tokenomics-card-number">
              02
            </span>

            <div className="tokenomics-ring-shell">
              <div className="tokenomics-ring-orbit tokenomics-ring-orbit--one"></div>
              <div className="tokenomics-ring-orbit tokenomics-ring-orbit--two"></div>

              <div className="tokenomics-ring">
                <div className="tokenomics-ring-glow"></div>

                <div className="tokenomics-ring-center">
                  <span>
                    {tokenomics.totalSupplyLabel ??
                      "TOTAL SUPPLY"}
                  </span>
                  <strong>10B</strong>
                  <small>MAI</small>
                </div>
              </div>
            </div>

            <div className="ring-legend">
              <div>
                <span className="legend-dot mining-dot"></span>
                <p>
                  {tokenomics?.allocations?.mining
                    ?.shortTitle ?? "Mining"}
                  <strong>70%</strong>
                </p>
              </div>

              <div>
                <span className="legend-dot dex-dot"></span>
                <p>
                  {tokenomics?.allocations?.dex
                    ?.shortTitle ?? "DEX"}
                  <strong>10%</strong>
                </p>
              </div>

              <div>
                <span className="legend-dot community-dot"></span>
                <p>
                  {tokenomics?.allocations?.community
                    ?.shortTitle ?? "Community"}
                  <strong>10%</strong>
                </p>
              </div>

              <div>
                <span className="legend-dot founder-dot"></span>
                <p>
                  {tokenomics?.allocations?.founder
                    ?.shortTitle ?? "Founder"}
                  <strong>10%</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ALLOCATION HEADER */}

        <div className="allocation-heading">
          <div>
            <span className="section-label">
              {tokenomics.distributionLabel ??
                "TOKEN DISTRIBUTION"}
            </span>

            <h3>
              {tokenomics.allocationStructureTitle ??
                "MAI Allocation Structure"}
            </h3>
          </div>

          <p>
            {tokenomics.allocationStructureDescription ??
              "Every MAI token is assigned to a defined ecosystem allocation. Together, all allocations represent the complete 10 billion MAI supply."}
          </p>
        </div>

        {/* ALLOCATION CARDS */}

        <div className="token-allocation-grid">
          {allocations.map((item) => (
            <div
              className={`token-allocation-card ${item.className}`}
              key={item.number}
            >
              <div className="allocation-card-top">
                <div className="allocation-card-icon">
                  <TokenomicsIcon name={item.icon} />
                </div>

                <span>{item.number}</span>
              </div>

              <div className="allocation-percentage">
                {item.percentage}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="allocation-amount">
                <span>
                  {tokenomics.allocationLabel ??
                    "ALLOCATION"}
                </span>

                <strong>{item.amount}</strong>
              </div>

              <div className="token-progress">
                <div
                  className="token-progress-fill"
                  style={{
                    width: item.percentage,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* DISTRIBUTION BAR */}

        <div className="distribution-summary">
          <div className="distribution-title">
            <span>
              {tokenomics.supplyDistributionLabel ??
                "MAI SUPPLY DISTRIBUTION"}
            </span>

            <strong>100%</strong>
          </div>

          <div className="distribution-bar">
            <div className="distribution-mining">
              70%
            </div>

            <div className="distribution-dex">
              10%
            </div>

            <div className="distribution-community">
              10%
            </div>

            <div className="distribution-founder">
              10%
            </div>
          </div>

          <div className="distribution-labels">
            <span>
              {tokenomics?.allocations?.mining?.title ??
                "Mining Rewards"}
            </span>

            <span>
              {tokenomics?.allocations?.dex?.shortTitle ??
                "DEX"}
            </span>

            <span>
              {tokenomics?.allocations?.community
                ?.shortTitle ?? "Community"}
            </span>

            <span>
              {tokenomics?.allocations?.founder
                ?.shortTitle ?? "Founder"}
            </span>
          </div>
        </div>

        {/* BOTTOM STATS */}

        <div className="tokenomics-stats">
          <div className="tokenomics-stat">
            <strong>10B</strong>

            <span>
              {tokenomics.totalMaiSupply ??
                "Total MAI Supply"}
            </span>
          </div>

          <div className="tokenomics-stat-divider"></div>

          <div className="tokenomics-stat">
            <strong>70%</strong>

            <span>
              {tokenomics?.allocations?.mining?.title ??
                "Mining Rewards"}
            </span>
          </div>

          <div className="tokenomics-stat-divider"></div>

          <div className="tokenomics-stat">
            <strong>30%</strong>

            <span>
              {tokenomics.ecosystemAllocation ??
                "Ecosystem Allocation"}
            </span>
          </div>

          <div className="tokenomics-stat-divider"></div>

          <div className="tokenomics-stat">
            <strong>TON</strong>

            <span>
              {tokenomics.blockchainEcosystem ??
                "Blockchain Ecosystem"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
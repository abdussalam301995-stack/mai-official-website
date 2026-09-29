import React from "react";

/* =========================================================
   MAI MINING SECTION
   VS CODE READY — NO EXTERNAL ICON PACKAGE REQUIRED
   Uses the same Telegram / TON / MAI visual language as About
   ========================================================= */

const MaiMiningIcon = ({ name }) => {
  if (name === "telegram") {
    return (
      <svg
        className="mining-svg-icon"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M41 8L35 39C34.7 40.7 33.6 41.1 32.2 40.2L22.8 33.3L18.3 37.7C17.8 38.2 17.4 38.6 16.5 38.6L17.2 29.1L34.5 13.5C35.2 12.8 34.3 12.5 33.3 13.1L11.9 26.6L2.7 23.7C0.7 23.1 0.7 21.7 3.1 20.8L38.8 7C40.5 6.4 41.8 7.4 41 8Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "ton") {
    return (
      <svg
        className="mining-svg-icon"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 13C10.2 10.6 12.6 9 15.3 9H32.7C35.4 9 37.8 10.6 39 13C39.9 14.7 39.7 16.7 38.6 18.2L27 36.2C25.6 38.4 22.4 38.4 21 36.2L9.4 18.2C8.3 16.7 8.1 14.7 9 13Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M15 15H33L24 33L15 15Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M24 15.5V33"
          stroke="currentColor"
          strokeWidth="2.2"
        />
      </svg>
    );
  }

  if (name === "mai") {
    return (
      <svg
        className="mining-svg-icon"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
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

  if (name === "mining") {
    return (
      <svg
        className="mining-svg-icon"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
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

  if (name === "community") {
    return (
      <svg
        className="mining-svg-icon"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="16"
          r="5"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <circle
          cx="11.5"
          cy="20"
          r="4"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <circle
          cx="36.5"
          cy="20"
          r="4"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M14 37C14 30.8 18.3 27 24 27C29.7 27 34 30.8 34 37"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M3.5 36C3.5 31.5 6.7 28.7 11 28.7C13.1 28.7 15 29.4 16.4 30.7M44.5 36C44.5 31.5 41.3 28.7 37 28.7C34.9 28.7 33 29.4 31.6 30.7"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return null;
};

const MiningSection = ({ t }) => {
  const mining = t?.miningPage ?? {};

  const miningSteps = [
    {
      number: "01",
      icon: "telegram",
      title:
        mining?.steps?.telegram?.title ??
        "Access via Telegram",
      text:
        mining?.steps?.telegram?.text ??
        "Open the MAI Mining Mini App directly through Telegram.",
    },
    {
      number: "02",
      icon: "mining",
      title:
        mining?.steps?.mining?.title ??
        "Start Mining",
      text:
        mining?.steps?.mining?.text ??
        "Activate your mining session and participate in the MAI ecosystem.",
    },
    {
      number: "03",
      icon: "mai",
      title:
        mining?.steps?.rewards?.title ??
        "Earn MAI Rewards",
      text:
        mining?.steps?.rewards?.text ??
        "Receive MAI mining rewards according to the ecosystem distribution rules.",
    },
    {
      number: "04",
      icon: "community",
      title:
        mining?.steps?.community?.title ??
        "Grow Together",
      text:
        mining?.steps?.community?.text ??
        "Take part in the wider MAI Network and help strengthen the ecosystem.",
    },
  ];

  return (
    <section
      className="mining-section"
      id="mining"
    >
      <div
        className="mining-background"
        aria-hidden="true"
      >
        <div className="mining-grid-background"></div>

        <div className="mining-glow mining-glow-left"></div>
        <div className="mining-glow mining-glow-right"></div>
        <div className="mining-glow mining-glow-center"></div>

        <div className="mining-particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="mining-container">
        {/* =============================================
            HEADING
        ============================================== */}

        <div className="mining-heading">
          <div className="mining-heading__badge">
            <span className="mining-heading__pulse"></span>

            <span>
              {mining.badge ?? "MAI MINING"}
            </span>
          </div>

          <h2>
            {mining.title ?? "Mine MAI."}
            <span>
              {mining.titleHighlight ??
                " Earn Together."}
            </span>
          </h2>

          <p>
            {mining.description ??
              "Start mining, complete tasks, invite friends and grow your MAI rewards. Every contribution helps build a stronger ecosystem."}
          </p>
        </div>

        {/* =============================================
            MAIN CARDS
        ============================================== */}

        <div className="mining-main-grid">
          {/* COMMUNITY MINING */}

          <article className="mining-intro-card">
            <div className="mining-card-light"></div>
            <div className="mining-card-shine"></div>

            <div className="mining-card-top">
              <span className="mining-card-number">
                01
              </span>

              <div className="mining-live-status">
                <span></span>

                {mining.networkActive ??
                  "NETWORK ACTIVE"}
              </div>
            </div>

            <div
              className="mining-core-scene"
              aria-hidden="true"
            >
              <div className="mining-core-orbit mining-core-orbit--one">
                <span></span>
              </div>

              <div className="mining-core-orbit mining-core-orbit--two">
                <span></span>
              </div>

              <div className="mining-core-orbit mining-core-orbit--three">
                <span></span>
              </div>

              <div className="mining-core-energy"></div>

              <div className="mining-core">
                <div className="mining-core__inner">
                  <MaiMiningIcon name="mining" />
                </div>
              </div>

              <span className="mining-core-particle mining-core-particle--1"></span>
              <span className="mining-core-particle mining-core-particle--2"></span>
              <span className="mining-core-particle mining-core-particle--3"></span>
              <span className="mining-core-particle mining-core-particle--4"></span>
            </div>

            <div className="mining-intro-content">
              <span className="mining-card-kicker">
                {mining.communityParticipation ??
                  "COMMUNITY PARTICIPATION"}
              </span>

              <h3>
                {mining.communityMiningTitle ??
                  "Community Mining"}
              </h3>

              <p>
                {mining.communityMiningDescription ??
                  "The MAI Mining system is designed to make participation simple and accessible through the MAI Telegram Mini App."}
              </p>

              <p>
                {mining.communityMiningRewards ??
                  "Mining rewards form the largest part of the MAI token distribution, supporting long-term community participation."}
              </p>

              <div className="mining-tags">
                <span>TELEGRAM</span>
                <span>MINI APP</span>
                <span>TON</span>
                <span>MAI</span>
              </div>
            </div>
          </article>

          {/* TOKEN ALLOCATION */}

          <article className="mining-allocation-card">
            <div className="mining-card-light"></div>
            <div className="mining-card-shine"></div>

            <div className="mining-card-top">
              <span className="mining-card-number">
                02
              </span>

              <span className="mining-allocation-label">
                {mining.tokenAllocation ??
                  "TOKEN ALLOCATION"}
              </span>
            </div>

            <div className="allocation-visual">
              <div className="allocation-outer-glow"></div>

              <div className="allocation-circle">
                <svg
                  viewBox="0 0 220 220"
                  className="allocation-svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="maiMiningGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#fff0a8"
                      />

                      <stop
                        offset="40%"
                        stopColor="#ffc44f"
                      />

                      <stop
                        offset="75%"
                        stopColor="#ff941f"
                      />

                      <stop
                        offset="100%"
                        stopColor="#ff6500"
                      />
                    </linearGradient>
                  </defs>

                  <circle
                    cx="110"
                    cy="110"
                    r="88"
                    className="allocation-track"
                  />

                  <circle
                    cx="110"
                    cy="110"
                    r="88"
                    className="allocation-progress-ring"
                  />
                </svg>

                <div className="allocation-inner">
                  <span>
                    {mining.allocationLabel ??
                      "ALLOCATION"}
                  </span>

                  <strong>70%</strong>

                  <small>
                    {mining.miningLabel ??
                      "MINING"}
                  </small>
                </div>
              </div>
            </div>

            <div className="allocation-content">
              <h3>
                {mining.allocationTitle ??
                  "Mining Allocation"}
              </h3>

              <p>
                {mining.allocationDescription ??
                  "70% of the total MAI token supply is allocated to mining rewards and community participation."}
              </p>

              <div className="allocation-bar">
                <div className="allocation-progress">
                  <span></span>
                </div>
              </div>

              <div className="allocation-values">
                <div>
                  <span>
                    {mining.miningRewards ??
                      "Mining Rewards"}
                  </span>

                  <small>
                    {mining.totalSupplyPercent ??
                      "70% OF TOTAL SUPPLY"}
                  </small>
                </div>

                <strong>
                  7,000,000,000 <small>MAI</small>
                </strong>
              </div>

              <div className="allocation-total">
                <span>
                  {mining.totalSupply ??
                    "Total Supply"}
                </span>

                <strong>
                  10,000,000,000 MAI
                </strong>
              </div>
            </div>
          </article>
        </div>

        {/* =============================================
            MINING PROCESS
        ============================================== */}

        <div className="mining-process">
          <div className="process-header">
            <div>
              <span className="section-label">
                {mining.processLabel ??
                  "MINING PROCESS"}
              </span>

              <h3>
                {mining.processTitle ??
                  "How MAI Mining Works"}
              </h3>
            </div>

            <p>
              {mining.processDescription ??
                "A simple participation flow designed around Telegram and the MAI ecosystem."}
            </p>
          </div>

          <div className="process-grid">
            {miningSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <article className="process-card">
                  <div className="process-card__glow"></div>
                  <div className="process-card__shine"></div>

                  <span className="process-number">
                    {step.number}
                  </span>

                  <div className="process-icon">
                    <MaiMiningIcon
                      name={step.icon}
                    />
                  </div>

                  <h4>{step.title}</h4>

                  <p>{step.text}</p>

                  <div className="process-card__status">
                    <span></span>
                    <i></i>
                  </div>
                </article>

                {index <
                  miningSteps.length - 1 && (
                  <div
                    className="process-connector"
                    aria-hidden="true"
                  >
                    <div className="process-connector__track">
                      <span></span>
                    </div>

                    <div className="process-connector__arrow">
                      ›
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* =============================================
            STATS
        ============================================== */}

        <div className="mining-stats">
          <div className="mining-stats__glow"></div>

          <div className="mining-stat">
            <span className="mining-stat__indicator"></span>

            <strong>70%</strong>

            <span>
              {mining?.stats?.allocation ??
                "Mining Allocation"}
            </span>
          </div>

          <div className="stat-divider"></div>

          <div className="mining-stat">
            <span className="mining-stat__indicator"></span>

            <strong>7B</strong>

            <span>
              {mining?.stats?.supply ??
                "MAI Mining Supply"}
            </span>
          </div>

          <div className="stat-divider"></div>

          <div className="mining-stat">
            <span className="mining-stat__indicator"></span>

            <strong>TON</strong>

            <span>
              {mining?.stats?.blockchain ??
                "Blockchain Ecosystem"}
            </span>
          </div>

          <div className="stat-divider"></div>

          <div className="mining-stat">
            <span className="mining-stat__indicator"></span>

            <strong>24/7</strong>

            <span>
              {mining?.stats?.access ??
                "Digital Access"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiningSection;
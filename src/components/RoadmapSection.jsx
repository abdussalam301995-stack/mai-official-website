import React from "react";

/* =========================================================
   MAI ROADMAP ICON SYSTEM
   Inline SVG only — no external icon package required.
========================================================= */

const RoadmapIcon = ({ name }) => {
  const common = {
    className: "roadmap-svg-icon",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  if (name === "foundation") {
    return (
      <svg {...common}>
        <path
          d="M9 37H39M13 37V21M35 37V21M9 21H39L24 10L9 21Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 37V27H28V37"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "platform") {
    return (
      <svg {...common}>
        <rect
          x="9"
          y="11"
          width="30"
          height="23"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <path
          d="M18 39H30M24 34V39M15 18H33M15 24H26"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle
          cx="33"
          cy="27"
          r="2.2"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "security") {
    return (
      <svg {...common}>
        <path
          d="M24 7L37 12V22C37 31 31.5 37.5 24 41C16.5 37.5 11 31 11 22V12L24 7Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 24L22.5 28L30.5 19.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "economy") {
    return (
      <svg {...common}>
        <circle
          cx="24"
          cy="24"
          r="15"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <circle
          cx="24"
          cy="24"
          r="10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M18 30V18H21.2L24 22.5L26.8 18H30V30H26.8V23.6L24 27.8L21.2 23.6V30H18Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M12 35L35 12M23 12H35V24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V35H29"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="14"
        cy="14"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="34"
        cy="34"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

const RoadmapSection = ({ t }) => {
  const roadmap = t?.roadmapPage ?? {};

  const fallbackPhases = [
    {
      phase: "PHASE 01",
      title: "Foundation",
      status: "COMPLETED",
      items: [
        "MAI Network concept development",
        "MAI token creation on TON",
        "Tokenomics structure",
        "Telegram ecosystem foundation",
        "Mining architecture planning",
        "Community foundation",
      ],
    },
    {
      phase: "PHASE 02",
      title: "Platform Development",
      status: "IN PROGRESS",
      items: [
        "Telegram Mining Mini App",
        "Mining and level system",
        "Tasks and referral system",
        "TON wallet integration",
        "Backend infrastructure",
        "Persistent database system",
      ],
    },
    {
      phase: "PHASE 03",
      title: "Security & Scalability",
      status: "UPCOMING",
      items: [
        "Backend-authoritative reward system",
        "Anti-cheat protection",
        "API security and protection",
        "Database optimization",
        "Infrastructure monitoring",
        "Security auditing and scalability",
      ],
    },
    {
      phase: "PHASE 04",
      title: "Token Economy",
      status: "PLANNED",
      items: [
        "MAI utility expansion",
        "Mining and holding integration",
        "Liquidity deployment",
        "DEX integration",
        "Token circulation strategy",
        "Ecosystem partnerships",
      ],
    },
    {
      phase: "PHASE 05",
      title: "Ecosystem Expansion",
      status: "FUTURE",
      items: [
        "Additional MAI utilities",
        "Partner integrations",
        "Community programs",
        "Advanced account features",
        "Broader TON ecosystem integration",
        "Governance research and additional MAI services",
      ],
    },
  ];

  const phaseIcons = [
    "foundation",
    "platform",
    "security",
    "economy",
    "expansion",
  ];

  const phases = fallbackPhases.map((fallbackPhase, index) => {
    const translatedPhase = roadmap?.phases?.[index];

    return {
      number: String(index + 1).padStart(2, "0"),
      phase:
        translatedPhase?.phase ??
        fallbackPhase.phase,
      title:
        translatedPhase?.title ??
        fallbackPhase.title,
      status:
        translatedPhase?.status ??
        fallbackPhase.status,
      icon: phaseIcons[index],
      items:
        translatedPhase?.items ??
        fallbackPhase.items,
    };
  });

  const visionSteps = roadmap?.vision?.steps ?? {};

  const getVisionStep = (number) => {
    if (number === "01") {
      return visionSteps.foundation ?? "Foundation";
    }

    if (number === "02") {
      return visionSteps.platform ?? "Platform";
    }

    if (number === "03") {
      return visionSteps.security ?? "Security";
    }

    if (number === "04") {
      return visionSteps.economy ?? "Economy";
    }

    return visionSteps.expansion ?? "Expansion";
  };

  return (
    <section
      className="roadmap-section"
      id="roadmap"
    >
      <div className="roadmap-glow roadmap-glow-left"></div>
      <div className="roadmap-glow roadmap-glow-right"></div>

      <div className="roadmap-container">
        <div className="roadmap-heading">
          <span className="section-label">
            {roadmap.badge ?? "MAI ROADMAP"}
          </span>

          <h2>
            {roadmap.title ??
              "Building the Future."}

            <span>
              {roadmap.titleHighlight ??
                " Step by Step."}
            </span>
          </h2>

          <p>
            {roadmap.description ??
              "The MAI Network roadmap outlines the progressive development of the ecosystem — from its foundation and mining infrastructure to security, token utility and long-term ecosystem expansion."}
          </p>
        </div>

        <div className="roadmap-timeline">
          <div className="roadmap-line">
            <span className="roadmap-line-energy"></span>
          </div>

          {phases.map((phase, index) => (
            <div
              className={`roadmap-phase ${
                index % 2 === 0
                  ? "roadmap-left"
                  : "roadmap-right"
              }`}
              key={phase.number}
            >
              <div
                className={`roadmap-marker roadmap-marker-${phase.number}`}
              >
                <span className="roadmap-marker-orbit"></span>

                <RoadmapIcon name={phase.icon} />

                <small>{phase.number}</small>
              </div>

              <div className="roadmap-card">
                <div className="roadmap-card-shine"></div>
                <div className="roadmap-card-glow"></div>

                <div className="roadmap-card-top">
                  <div className="roadmap-title-group">
                    <div className="roadmap-title-icon">
                      <RoadmapIcon
                        name={phase.icon}
                      />
                    </div>

                    <div>
                      <span className="roadmap-phase-label">
                        {phase.phase}
                      </span>

                      <h3>{phase.title}</h3>
                    </div>
                  </div>

                  <span
                    className={`roadmap-status status-${phase.status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <i></i>
                    {phase.status}
                  </span>
                </div>

                <div className="roadmap-card-line">
                  <span></span>
                </div>

                <div className="roadmap-items">
                  {phase.items.map(
                    (item, itemIndex) => (
                      <div
                        className="roadmap-item"
                        key={`${phase.number}-${itemIndex}`}
                      >
                        <span className="roadmap-check">
                          ✓
                        </span>

                        <p>{item}</p>
                      </div>
                    )
                  )}
                </div>

                <div className="roadmap-card-number">
                  {phase.number}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="roadmap-vision">
          <div className="roadmap-vision-glow"></div>

          <div className="roadmap-vision-label">
            {roadmap?.vision?.label ??
              "LONG-TERM VISION"}
          </div>

          <h3>
            {roadmap?.vision?.title ??
              "From Mining Platform"}

            <span>
              {roadmap?.vision?.titleHighlight ??
                " to a Growing TON Ecosystem."}
            </span>
          </h3>

          <p>
            {roadmap?.vision?.description ??
              "MAI Network is designed to evolve progressively while maintaining a focus on community participation, sustainable token distribution, security and long-term ecosystem development."}
          </p>

          <div className="roadmap-vision-flow">
            {phases.map((phase, index) => (
              <React.Fragment key={phase.number}>
                <div
                  className={`roadmap-flow-step roadmap-flow-${phase.number}`}
                >
                  <div className="roadmap-flow-icon">
                    <RoadmapIcon
                      name={phase.icon}
                    />
                  </div>

                  <strong>{phase.number}</strong>

                  <span>
                    {getVisionStep(
                      phase.number
                    )}
                  </span>
                </div>

                {index <
                  phases.length - 1 && (
                  <div className="roadmap-flow-connector">
                    <span></span>
                    <i>›</i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
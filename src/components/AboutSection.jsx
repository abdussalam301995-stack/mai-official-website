import React from "react";

/* =========================================================
   MAI ABOUT SECTION
   VS CODE READY — NO EXTERNAL ICON PACKAGE REQUIRED
   ========================================================= */

const MaiIcon = ({ name }) => {
  if (name === "telegram") {
    return (
      <svg className="mai-svg-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
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
      <svg className="mai-svg-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
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
        <path d="M24 15.5V33" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    );
  }

  if (name === "mai") {
    return (
      <svg className="mai-svg-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.72" />
        <path
          d="M14.5 32V16H18.8L24 24.1L29.2 16H33.5V32H29V23.3L24 30.5L19 23.3V32H14.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "access") {
    return (
      <svg className="mai-svg-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2.4" />
        <path
          d="M15 24H33M27 18L33 24L27 30"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "community") {
    return (
      <svg className="mai-svg-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="16" r="5" stroke="currentColor" strokeWidth="2.3" />
        <circle cx="12.5" cy="20" r="4" stroke="currentColor" strokeWidth="2.1" />
        <circle cx="35.5" cy="20" r="4" stroke="currentColor" strokeWidth="2.1" />
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

  if (name === "shield") {
    return (
      <svg className="mai-svg-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 6L38 11V21.5C38 30.6 32.3 37.6 24 42C15.7 37.6 10 30.6 10 21.5V11L24 6Z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 24L21.7 28.2L30.5 19.2"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "mining") {
    return (
      <svg className="mai-svg-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
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

  return null;
};

const AboutSection = ({ t }) => {
  const featureCards = [
    {
      number: "02",
      icon: "access",
      title: t.about.features.simpleAccess.title,
      text: t.about.features.simpleAccess.text,
    },
    {
      number: "03",
      icon: "ton",
      title: t.about.features.poweredByTon.title,
      text: t.about.features.poweredByTon.text,
    },
    {
      number: "04",
      icon: "community",
      title: t.about.features.communityDriven.title,
      text: t.about.features.communityDriven.text,
    },
    {
      number: "05",
      icon: "shield",
      title: t.about.features.transparentEcosystem.title,
      text: t.about.features.transparentEcosystem.text,
    },
  ];

  const ecosystemItems = [
    {
      icon: "telegram",
      title: t.about.architecture.telegram.title,
      subtitle: t.about.architecture.telegram.subtitle,
    },
    {
      icon: "mining",
      title: t.about.architecture.miningApp.title,
      subtitle: t.about.architecture.miningApp.subtitle,
    },
    {
      icon: "mai",
      title: t.about.architecture.maiToken.title,
      subtitle: t.about.architecture.maiToken.subtitle,
    },
    {
      icon: "ton",
      title: t.about.architecture.ton.title,
      subtitle: t.about.architecture.ton.subtitle,
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-background" aria-hidden="true">
        <div className="about-grid-pattern"></div>

        <div className="about-glow about-glow-left"></div>
        <div className="about-glow about-glow-right"></div>
        <div className="about-glow about-glow-center"></div>

        <div className="about-particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="about-container">
        <div className="about-heading">
          <div className="about-heading__badge">
            <span className="about-heading__dot"></span>
            <span>{t.about.badge}</span>
          </div>

          <h2>
            {t.about.title}
            <span>{t.about.titleHighlight}</span>
          </h2>

          <p>{t.about.description}</p>
        </div>

        <div className="about-grid">
          <article className="about-main-card">
            <div className="about-card-shine"></div>
            <div className="about-card-orb"></div>

            <div className="about-main-card__top">
              <span className="card-number">01</span>

              <div className="about-card-icon">
                <MaiIcon name="mai" />
              </div>
            </div>

            <div className="about-main-card__content">
              <span className="about-card-kicker">
                {t.about.mainCard.kicker}
              </span>

              <h3>{t.about.mainCard.title}</h3>

              <p>{t.about.mainCard.description1}</p>

              <p>{t.about.mainCard.description2}</p>
            </div>

            <div className="about-network-line">
              <div className="about-network-node">
                <span className="about-network-node__icon">
                  <MaiIcon name="telegram" />
                </span>
                <strong>{t.about.mainCard.telegram}</strong>
              </div>

              <div className="about-energy-line">
                <span></span>
              </div>

              <div className="about-network-node">
                <span className="about-network-node__icon">
                  <MaiIcon name="ton" />
                </span>
                <strong>{t.about.mainCard.ton}</strong>
              </div>

              <div className="about-energy-line">
                <span></span>
              </div>

              <div className="about-network-node about-network-node--mai">
                <span className="about-network-node__icon">
                  <MaiIcon name="mai" />
                </span>
                <strong>{t.about.mainCard.mai}</strong>
              </div>
            </div>
          </article>

          <div className="about-small-cards">
            {featureCards.map((card) => (
              <article className="about-info-card" key={card.number}>
                <div className="about-info-card__glow"></div>
                <div className="about-info-card__shine"></div>

                <div className="info-top">
                  <div className="info-icon">
                    <MaiIcon name={card.icon} />
                  </div>

                  <span className="info-number">
                    {card.number}
                  </span>
                </div>

                <h3>{card.title}</h3>
                <p>{card.text}</p>

                <div className="about-info-card__bottom">
                  <span></span>
                  <i></i>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="ecosystem-flow">
          <div className="ecosystem-flow__header">
            <span className="ecosystem-flow__line"></span>

            <div className="flow-title">
              {t.about.architecture.title}
            </div>

            <span className="ecosystem-flow__line"></span>
          </div>

          <div className="flow-items">
            {ecosystemItems.map((item, index) => (
              <React.Fragment key={item.title}>
                <div className="flow-item">
                  <div className="flow-item__glow"></div>

                  <span className="flow-icon">
                    <MaiIcon name={item.icon} />
                  </span>

                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </div>

                {index < ecosystemItems.length - 1 && (
                  <div className="flow-connector">
                    <div className="flow-connector__line">
                      <span></span>
                    </div>

                    <span className="flow-arrow">›</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="ecosystem-flow__status">
            <span></span>
            <small>
              {t.about.architecture.status}
            </small>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
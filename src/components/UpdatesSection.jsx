function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M14 7L19 12L14 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UpdatesSection({ t }) {
  const updates = t?.updatesPage ?? {};

  const fallbackItems = [
    {
      category: "PROJECT UPDATE",
      date: "Coming Soon",
      title: "MAI Network Development Updates",
      description:
        "Official development news, platform improvements and important MAI Network announcements will be published here.",
    },
    {
      category: "SECURITY",
      date: "Coming Soon",
      title: "Security & Platform Notices",
      description:
        "Important security notices, maintenance information and official user protection updates from MAI Network.",
    },
    {
      category: "ECOSYSTEM",
      date: "Coming Soon",
      title: "MAI Ecosystem Updates",
      description:
        "Follow future updates about the MAI token, mining ecosystem, TON integration and ecosystem development.",
    },
  ];

  const items = fallbackItems.map((fallback, index) => ({
    category:
      updates?.items?.[index]?.category ??
      fallback.category,

    date:
      updates?.items?.[index]?.date ??
      fallback.date,

    title:
      updates?.items?.[index]?.title ??
      fallback.title,

    description:
      updates?.items?.[index]?.description ??
      fallback.description,
  }));

  return (
    <section
      className="updates-section"
      id="updates"
    >
      {/* BACKGROUND */}

      <div
        className="updates-background"
        aria-hidden="true"
      >
        <div className="updates-grid"></div>

        <div className="updates-glow updates-glow--left"></div>

        <div className="updates-glow updates-glow--right"></div>
      </div>

      <div className="updates-container">
        {/* HEADER */}

        <div className="updates-header">
          <div className="updates-heading">
            <span className="updates-badge">
              <span className="updates-badge__dot"></span>

              {updates.badge ??
                "MAI NETWORK UPDATES"}
            </span>

            <h2>
              {updates.title ??
                "Latest From"}

              <span>
                {updates.titleHighlight ??
                  " MAI Network."}
              </span>
            </h2>

            <p>
              {updates.description ??
                "Official announcements, development progress, security notices and ecosystem updates from MAI Network."}
            </p>
          </div>

          <div className="updates-status">
            <span className="updates-status__dot"></span>

            <div>
              <small>
                {updates.statusLabel ??
                  "OFFICIAL FEED"}
              </small>

              <strong>
                {updates.statusText ??
                  "MAI Network Updates"}
              </strong>
            </div>
          </div>
        </div>

        {/* UPDATE CARDS */}

        <div className="updates-grid-cards">
          {items.map((item, index) => (
            <article
              className="updates-card"
              key={`${item.category}-${index}`}
            >
              <div className="updates-card__top">
                <span className="updates-card__number">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span className="updates-card__category">
                  {item.category}
                </span>
              </div>

              <div className="updates-card__content">
                <span className="updates-card__date">
                  {item.date}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              <div className="updates-card__bottom">
                <span>
                  {updates.officialUpdate ??
                    "Official Update"}
                </span>

                <span className="updates-card__arrow">
                  <ArrowIcon />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM INFORMATION */}

        <div className="updates-bottom">
          <div className="updates-bottom__content">
            <span className="updates-bottom__icon">
              M
            </span>

            <div>
              <strong>
                {updates.bottomTitle ??
                  "Official information. One trusted source."}
              </strong>

              <p>
                {updates.bottomDescription ??
                  "Important MAI Network announcements will be published through official MAI channels. Always verify information before taking action."}
              </p>
            </div>
          </div>

          <a
            href="https://t.me/MAI_News_Official"
            target="_blank"
            rel="noopener noreferrer"
            className="updates-telegram-button"
          >
            <span>
              {updates.telegramButton ??
                "Follow Official Telegram"}
            </span>

            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;
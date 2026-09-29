import { useState } from "react";

function PlusIcon({ open }) {
  return (
    <span
      className={`faq-toggle-icon ${open ? "is-open" : ""}`}
      aria-hidden="true"
    >
      <span className="faq-toggle-line faq-toggle-line--horizontal"></span>
      <span className="faq-toggle-line faq-toggle-line--vertical"></span>
    </span>
  );
}

function FAQSection({ t }) {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const faq = t?.faqPage ?? {};

  const fallbackItems = [
    {
      question: "What is MAI Network?",
      answer:
        "MAI Network is a TON-based ecosystem built around Telegram, community participation, mining, token utility, and long-term ecosystem development.",
    },
    {
      question: "How does MAI Mining work?",
      answer:
        "MAI Mining is designed around participation through the MAI Telegram Mini App. Users can access supported mining features, complete available activities, and participate in the MAI ecosystem through the platform.",
    },
    {
      question: "Is MAI built on TON Blockchain?",
      answer:
        "Yes. The MAI token is deployed on The Open Network (TON), while the MAI ecosystem is designed to integrate with TON wallets, Telegram Mini Apps, and TON-based services.",
    },
    {
      question: "What is the official MAI contract address?",
      answer:
        "The official MAI contract address is EQD5pWilwl9ypQ1JFxoDktsQl_LAALALnqHjZoxhx_2nET-r. Always verify the contract address through official MAI Network sources before interacting with the token.",
    },
    {
      question: "Where can I buy MAI?",
      answer:
        "MAI can be accessed through the official Buy MAI link provided on this website. The current direct trading route connects users to the MAI token page on DeDust through Tonkeeper.",
    },
    {
      question: "How do I access the MAI Mining Mini App?",
      answer:
        "Use the official Launch Mining App button on the MAI Network website. It will take you to the official MAI Access Telegram bot, where you can continue to the supported Mini App experience.",
    },
    {
      question: "How can I identify official MAI links?",
      answer:
        "Use links published through the official MAI Network website and official MAI community channels. Avoid unknown links, unofficial contract addresses, and unsolicited messages claiming to represent MAI Network.",
    },
    {
      question: "Is MAI Network development complete?",
      answer:
        "MAI Network is being developed progressively. The roadmap covers platform development, security and scalability, token economy development, and broader ecosystem expansion.",
    },
  ];

  const faqItems = fallbackItems.map((item, index) => ({
    id: index + 1,
    question:
      faq?.items?.[index]?.question ??
      item.question,
    answer:
      faq?.items?.[index]?.answer ??
      item.answer,
  }));

  const fallbackTrust = [
    {
      title: "TON Based",
      subtitle: "Blockchain Infrastructure",
    },
    {
      title: "Telegram Native",
      subtitle: "Mini App Ecosystem",
    },
    {
      title: "Official Access",
      subtitle: "Verified MAI Links",
    },
  ];

  const trustItems = fallbackTrust.map((item, index) => ({
    title:
      faq?.trust?.[index]?.title ??
      item.title,
    subtitle:
      faq?.trust?.[index]?.subtitle ??
      item.subtitle,
  }));

  const toggleFAQ = (index) => {
    setActiveFAQ((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="faq-section" id="faq">
      {/* Background effects */}

      <div
        className="faq-background"
        aria-hidden="true"
      >
        <div className="faq-grid"></div>

        <div className="faq-glow faq-glow--left"></div>
        <div className="faq-glow faq-glow--right"></div>
      </div>

      <div className="faq-container">
        {/* Header */}

        <div className="faq-heading">
          <span className="faq-section-label">
            {faq.badge ?? "FAQ"}
          </span>

          <h2>
            {faq.title ?? "Frequently Asked"}

            <span>
              {faq.titleHighlight ??
                " Questions."}
            </span>
          </h2>

          <p>
            {faq.description ??
              "Everything you need to know about MAI Network, mining, TON integration, the MAI token and official ecosystem access."}
          </p>
        </div>

        {/* FAQ Content */}

        <div className="faq-layout">
          {/* Left information card */}

          <aside className="faq-info-card">
            <div className="faq-info-glow"></div>

            <span className="faq-info-eyebrow">
              {faq?.info?.eyebrow ??
                "NEED TO KNOW"}
            </span>

            <h3>
              {faq?.info?.title ??
                "Learn More About"}

              <span>
                {faq?.info?.titleHighlight ??
                  " MAI Network."}
              </span>
            </h3>

            <p>
              {faq?.info?.description ??
                "Find quick answers about the MAI ecosystem, official access points, token information and platform development."}
            </p>

            <div className="faq-info-divider"></div>

            <div className="faq-info-stat">
              <span className="faq-info-stat-icon">
                M
              </span>

              <div>
                <strong>MAI Network</strong>

                <small>
                  {t?.hero?.slogan ??
                    "Mining • Access • Innovation"}
                </small>
              </div>
            </div>

            <div className="faq-info-stat">
              <span className="faq-info-stat-icon">
                TON
              </span>

              <div>
                <strong>
                  {faq?.info?.builtOnTon ??
                    "Built on TON"}
                </strong>

                <small>
                  {faq?.info?.telegramNative ??
                    "Telegram-native ecosystem"}
                </small>
              </div>
            </div>

            <a
              href="https://t.me/mai_accesstoken_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="faq-launch-button"
            >
              <span>
                {faq.launchMiningApp ??
                  "Launch Mining App"}
              </span>

              <span>↗</span>
            </a>
          </aside>

          {/* Accordion */}

          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen =
                activeFAQ === index;

              return (
                <article
                  className={`faq-item ${
                    isOpen ? "is-open" : ""
                  }`}
                  key={item.id}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      toggleFAQ(index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="faq-question-number">
                      {String(item.id).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="faq-question-text">
                      {item.question}
                    </span>

                    <PlusIcon open={isOpen} />
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      <div className="faq-answer-line"></div>

                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom trust strip */}

        <div className="faq-trust-strip">
          {trustItems.map((item, index) => (
            <div
              style={{ display: "contents" }}
              key={item.title}
            >
              <div className="faq-trust-item">
                <span className="faq-trust-dot"></span>

                <div>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </div>
              </div>

              {index <
                trustItems.length - 1 && (
                <span className="faq-trust-divider"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
import { useState } from "react";
import maiLogo from "../assets/mai-logo.png";

const MAI_CONTRACT =
  "EQD5pWilwl9ypQ1JFxoDktsQl_LAALALnqHjZoxhx_2nET-r";

const MAI_DEX_LINK =
  "https://app.tonkeeper.com/dapp/https%3A%2F%2Fdedust.io%2Fcoins%2FEQD5pWilwl9ypQ1JFxoDktsQl_LAALALnqHjZoxhx_2nET-r";

const WHITEPAPER_LINK =
  "/MAI_Network_Official_Whitepaper_English.pdf";

function TonIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="hero__network-svg"
      aria-hidden="true"
    >
      <path
        d="M9.5 12.5C11 9.8 13.6 8.5 17 8.5h14c3.4 0 6 1.3 7.5 4 1.2 2.1.9 4.4-.7 6.5L25.9 37.6c-.9 1.4-2.9 1.4-3.8 0L10.2 19c-1.6-2.1-1.9-4.4-.7-6.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />

      <path
        d="M14 15.5h20L24 32.2 14 15.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M24 15.5v16.7"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="hero__network-svg"
      aria-hidden="true"
    >
      <path
        d="M39.5 9.5 33.8 37c-.4 2-1.7 2.5-3.4 1.5l-8.7-6.4-4.2 4c-.5.5-.9.9-1.8.9l.6-8.9 16.2-14.6c.7-.6-.2-1-1.1-.4L11.4 25.7l-8.6-2.7c-1.9-.6-1.9-1.9.4-2.8L36.8 7.3c1.6-.6 3 .4 2.7 2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MaiIcon() {
  return (
    <span
      className="hero__mai-symbol"
      aria-hidden="true"
    >
      M
    </span>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="hero__copy-svg"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="8"
        width="11"
        height="11"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BuyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="hero__buy-svg"
      aria-hidden="true"
    >
      <path
        d="M4 6h2l1.6 8.1a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 1.9-1.5L20.5 9H7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="10"
        cy="19"
        r="1.3"
        fill="currentColor"
      />

      <circle
        cx="17"
        cy="19"
        r="1.3"
        fill="currentColor"
      />
    </svg>
  );
}

function Hero({ t }) {
  const [copied, setCopied] = useState(false);

  const copyContractAddress = async () => {
    try {
      await navigator.clipboard.writeText(MAI_CONTRACT);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Unable to copy MAI contract address:",
        error
      );
    }
  };

  return (
    <section className="hero" id="home">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="hero__background"
        aria-hidden="true"
      >
        <div className="hero__grid"></div>

        <div className="hero__glow hero__glow--one"></div>
        <div className="hero__glow hero__glow--two"></div>
        <div className="hero__glow hero__glow--three"></div>

        <div className="hero__stars">
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

      <div className="hero__container">
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>

            <span>
              {t?.hero?.poweredByTon ?? "POWERED BY TON"}
            </span>
          </div>

          <p className="hero__eyebrow">
            MAI NETWORK
          </p>

          <h1 className="hero__title">
            <span className="hero__title-main">
              {t.hero.titleMain}
            </span>

            <span className="hero__title-gradient">
              {t.hero.slogan}
            </span>
          </h1>

          <p className="hero__description">
            {t.hero.description}
          </p>

          {/* =================================================
              MAIN ACTION BUTTONS
          ================================================= */}

          <div className="hero__actions">
            <a
              href="https://t.me/mai_accesstoken_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--primary"
            >
              <span>
                {t?.hero?.launchMiningApp ??
                  "Launch Mining App"}
              </span>

              <span className="hero__button-arrow">
                ↗
              </span>
            </a>

            <a
              href={WHITEPAPER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--secondary"
            >
              <span className="hero__document-icon">
                ▱
              </span>

              <span>
                {t?.hero?.readWhitepaper ??
                  "Read Whitepaper"}
              </span>
            </a>

            <a
              href={MAI_DEX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--buy"
            >
              <span className="hero__buy-icon">
                <BuyIcon />
              </span>

              <span>
                {t?.hero?.buyMai ?? "Buy MAI"}
              </span>

              <span className="hero__button-arrow">
                ↗
              </span>
            </a>
          </div>

          {/* =================================================
              PREMIUM NETWORK CARDS
          ================================================= */}

          <div className="hero__network-info">
            {/* TON */}

            <div className="hero__network-item hero__network-item--ton">
              <div className="hero__network-shine"></div>

              <span className="hero__network-icon">
                <span className="hero__network-icon-glow"></span>
                <TonIcon />
              </span>

              <div className="hero__network-text">
                <strong>
                  {t?.hero?.networkCards?.ton?.title ??
                    "TON"}
                </strong>

                <small>
                  {t?.hero?.networkCards?.ton?.subtitle ??
                    "Blockchain"}
                </small>
              </div>
            </div>

            {/* TELEGRAM */}

            <div className="hero__network-item hero__network-item--telegram">
              <div className="hero__network-shine"></div>

              <span className="hero__network-icon">
                <span className="hero__network-icon-glow"></span>
                <TelegramIcon />
              </span>

              <div className="hero__network-text">
                <strong>
                  {t?.hero?.networkCards?.telegram?.title ??
                    "Telegram"}
                </strong>

                <small>
                  {t?.hero?.networkCards?.telegram
                    ?.subtitle ?? "Mini App"}
                </small>
              </div>
            </div>

            {/* MAI */}

            <div className="hero__network-item hero__network-item--mai">
              <div className="hero__network-shine"></div>

              <span className="hero__network-icon">
                <span className="hero__network-icon-glow"></span>
                <MaiIcon />
              </span>

              <div className="hero__network-text">
                <strong>
                  {t?.hero?.networkCards?.mai?.title ??
                    "MAI"}
                </strong>

                <small>
                  {t?.hero?.networkCards?.mai?.subtitle ??
                    "Ecosystem"}
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE — MAI 3D LOGO
        ===================================================== */}

        <div className="hero__visual">
          <div className="mai-3d-scene">
            <div className="mai-3d-scene__energy"></div>
            <div className="mai-3d-scene__halo"></div>

            <div className="mai-3d-orbit mai-3d-orbit--one">
              <span className="mai-orbit-light mai-orbit-light--one"></span>
            </div>

            <div className="mai-3d-orbit mai-3d-orbit--two">
              <span className="mai-orbit-light mai-orbit-light--two"></span>
            </div>

            <div className="mai-3d-orbit mai-3d-orbit--three">
              <span className="mai-orbit-light mai-orbit-light--three"></span>
            </div>

            <div className="mai-particle mai-particle--1"></div>
            <div className="mai-particle mai-particle--2"></div>
            <div className="mai-particle mai-particle--3"></div>
            <div className="mai-particle mai-particle--4"></div>
            <div className="mai-particle mai-particle--5"></div>
            <div className="mai-particle mai-particle--6"></div>
            <div className="mai-particle mai-particle--7"></div>
            <div className="mai-particle mai-particle--8"></div>

            <div className="mai-logo-stage">
              <div className="mai-logo-aura"></div>

              <img
                src={maiLogo}
                alt="MAI Network"
                className="mai-hero-logo"
              />

              <div className="mai-logo-shine"></div>
            </div>

            {/* ===============================================
                CONTRACT ADDRESS
            =============================================== */}

            <div className="hero__contract">
              <div className="hero__contract-glow"></div>

              <div className="hero__contract-header">
                <span className="hero__contract-dot"></span>

                <span>
                  {t?.hero?.contractAddress ??
                    "MAI CONTRACT ADDRESS"}
                </span>
              </div>

              <button
                type="button"
                className={`hero__contract-copy ${
                  copied ? "is-copied" : ""
                }`}
                onClick={copyContractAddress}
                aria-label="Copy MAI contract address"
              >
                <span className="hero__contract-address">
                  {MAI_CONTRACT}
                </span>

                <span className="hero__contract-copy-action">
                  <CopyIcon />

                  <span>
                    {copied
                      ? t.hero.copied
                      : t.hero.copy}
                  </span>
                </span>
              </button>

              <span className="hero__contract-hint">
                {copied
                  ? t?.hero?.contractCopiedHint ??
                    "Contract address copied to clipboard"
                  : t?.hero?.contractCopyHint ??
                    "Tap to copy"}
              </span>
            </div>

            {/* ===============================================
                HOLOGRAM BASE
            =============================================== */}

            <div
              className="mai-hologram"
              aria-hidden="true"
            >
              <div className="mai-hologram__beam"></div>

              <div className="mai-hologram__ring mai-hologram__ring--1"></div>

              <div className="mai-hologram__ring mai-hologram__ring--2"></div>

              <div className="mai-hologram__core"></div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About section"
      >
        <span>
          {t?.hero?.scrollExplore ??
            "SCROLL TO EXPLORE"}
        </span>

        <div className="hero__scroll-line">
          <i></i>
        </div>
      </a>
    </section>
  );
}

export default Hero;
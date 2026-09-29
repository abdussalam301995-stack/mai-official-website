import { useState } from "react";
import maiLogo from "../assets/mai-logo.png";

const MAI_CONTRACT =
  "EQD5pWilwl9ypQ1JFxoDktsQl_LAALALnqHjZoxhx_2nET-r";

const MINING_APP_URL = "https://t.me/mai_accesstoken_bot";

const TELEGRAM_URL = "https://t.me/MAI_News_Official";

const BUY_MAI_URL =
  "https://app.tonkeeper.com/dapp/https%3A%2F%2Fdedust.io%2Fcoins%2FEQD5pWilwl9ypQ1JFxoDktsQl_LAALALnqHjZoxhx_2nET-r";

function Footer({ t }) {
  const [copied, setCopied] = useState(false);

  const footer = t?.footer ?? {};

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(MAI_CONTRACT);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Failed to copy contract address:", error);
    }
  };

  return (
    <footer className="mai-footer">
      <div className="mai-footer__glow" aria-hidden="true"></div>

      <div className="mai-footer__container">
        {/* =========================
            TOP AREA
        ========================== */}
        <div className="mai-footer__top">
          {/* BRAND */}
          <div className="mai-footer__brand">
            <a href="#home" className="mai-footer__logo-link">
              <img
                src={maiLogo}
                alt="MAI Network"
                className="mai-footer__logo"
              />

              <div className="mai-footer__brand-name">
                <strong>MAI</strong>
                <span>NETWORK</span>
              </div>
            </a>

            <p className="mai-footer__description">
              {footer.description ??
                "A community-driven digital mining ecosystem built on The Open Network (TON), designed to make blockchain participation simple, transparent and accessible through Telegram."}
            </p>

            <div className="mai-footer__network">
              <span className="mai-footer__network-dot"></span>

              <div>
                <strong>
                  {footer.builtOnTon ?? "Built on TON"}
                </strong>

                <small>
                  {footer.telegramNative ??
                    "Telegram-native ecosystem"}
                </small>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="mai-footer__column">
            <p className="mai-footer__column-title">
              {footer.quickLinks ?? "QUICK LINKS"}
            </p>

            <nav className="mai-footer__links">
              <a href="#home">
                {footer.home ?? t?.nav?.home ?? "Home"}
              </a>

              <a href="#about">
                {footer.about ?? t?.nav?.about ?? "About"}
              </a>

              <a href="#mining">
                {footer.mining ?? t?.nav?.mining ?? "Mining"}
              </a>

              <a href="#tokenomics">
                {footer.tokenomics ??
                  t?.nav?.tokenomics ??
                  "Tokenomics"}
              </a>

              <a href="#roadmap">
                {footer.roadmap ?? t?.nav?.roadmap ?? "Roadmap"}
              </a>

              <a href="#whitepaper">
                {footer.whitepaper ??
                  t?.nav?.whitepaper ??
                  "Whitepaper"}
              </a>

              <a href="#faq">
                {footer.faq ?? "FAQ"}
              </a>
            </nav>
          </div>

          {/* ECOSYSTEM */}
          <div className="mai-footer__column">
            <p className="mai-footer__column-title">
              {footer.ecosystem ?? "ECOSYSTEM"}
            </p>

            <div className="mai-footer__links">
              <a
                href={MINING_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footer.miningMiniApp ?? "Mining Mini App"}
                <span>↗</span>
              </a>

              <a
                href={BUY_MAI_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footer.buyMai ?? "Buy MAI"}
                <span>↗</span>
              </a>

              <a
                href="/MAI_Network_Official_Whitepaper_English.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {footer.whitepaper ?? "Whitepaper"}
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* OFFICIAL */}
          <div className="mai-footer__column">
            <p className="mai-footer__column-title">
              {footer.official ?? "OFFICIAL"}
            </p>

            <div className="mai-footer__links">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footer.telegram ?? "Telegram"}
                <span>↗</span>
              </a>

              <div className="mai-footer__coming-link">
                <span>X</span>

                <small>
                  {footer.comingSoon ?? "COMING SOON"}
                </small>
              </div>

              <div className="mai-footer__coming-link">
                <span>YouTube</span>

                <small>
                  {footer.comingSoon ?? "COMING SOON"}
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            CONTRACT AREA
        ========================== */}
        <div className="mai-footer__contract">
          <div className="mai-footer__contract-heading">
            <span className="mai-footer__contract-dot"></span>

            <div>
              <small>
                {footer.officialMaiToken ??
                  "OFFICIAL MAI TOKEN"}
              </small>

              <strong>
                {footer.contractAddress ??
                  "Contract Address"}
              </strong>
            </div>
          </div>

          <button
            type="button"
            className={`mai-footer__contract-copy ${
              copied ? "copied" : ""
            }`}
            onClick={copyContract}
            title={
              footer.copyContractTitle ??
              "Copy MAI contract address"
            }
          >
            <span className="mai-footer__contract-address">
              {MAI_CONTRACT}
            </span>

            <span className="mai-footer__copy-button">
              <span className="mai-footer__copy-icon">▣</span>

              {copied
                ? footer.copied ?? "Copied"
                : footer.copy ?? "Copy"}
            </span>
          </button>
        </div>

        {/* =========================
            BOTTOM AREA
        ========================== */}
        <div className="mai-footer__bottom">
          <p>
            © {new Date().getFullYear()} MAI Network.{" "}
            {footer.allRightsReserved ??
              "All rights reserved."}
          </p>

          <div className="mai-footer__bottom-center">
            <span></span>

            <p>
              {footer.slogan ??
                t?.hero?.slogan ??
                "Mining • Access • Innovation"}
            </p>
          </div>

          <p className="mai-footer__official-note">
            {footer.officialAccessOnly ??
              "Official MAI Network access only"}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { useState } from "react";

const MAI_CONTRACT =
  "EQD5pWilwl9ypQ1JFxoDktsQl_LAALALnqHjZoxhx_2nET-r";

const MINING_APP_URL =
  "https://t.me/mai_accesstoken_bot";

const TELEGRAM_URL =
  "https://t.me/MAI_News_Official";

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11C19 15.8 16.2 19.4 12 21C7.8 19.4 5 15.8 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M9 12L11 14L15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 14L14 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M8.5 16.5L6.8 18.2C5.3 19.7 2.9 19.7 1.5 18.2C0 16.8 0 14.4 1.5 12.9L5.2 9.2C6.7 7.7 9.1 7.7 10.6 9.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M13.4 14.8C14.9 16.3 17.3 16.3 18.8 14.8L22.5 11.1C24 9.6 24 7.2 22.5 5.8C21.1 4.3 18.7 4.3 17.2 5.8L15.5 7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SecuritySection({ t }) {
  const [copied, setCopied] = useState(false);

  const security = t?.securityPage ?? {};

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(
        MAI_CONTRACT
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error(
        "Failed to copy MAI contract:",
        error
      );
    }
  };

  return (
    <section
      className="security-section"
      id="security"
    >
      <div
        className="security-background"
        aria-hidden="true"
      >
        <div className="security-grid"></div>

        <div className="security-glow security-glow--left"></div>

        <div className="security-glow security-glow--right"></div>
      </div>

      <div className="security-container">
        {/* HEADER */}

        <div className="security-heading">
          <span className="security-badge">
            <ShieldIcon />

            {security.badge ??
              "OFFICIAL VERIFICATION"}
          </span>

          <h2>
            {security.title ??
              "Verify Before You"}

            <span>
              {security.titleHighlight ??
                " Connect."}
            </span>
          </h2>

          <p>
            {security.description ??
              "Always verify official MAI Network links and the token contract before connecting your wallet or interacting with the ecosystem."}
          </p>
        </div>

        {/* MAIN CONTENT */}

        <div className="security-layout">
          {/* OFFICIAL SOURCES */}

          <div className="security-official-card">
            <div className="security-card-top">
              <div className="security-shield">
                <ShieldIcon />
              </div>

              <div>
                <span>
                  {security.verifiedLabel ??
                    "VERIFIED SOURCES"}
                </span>

                <h3>
                  {security.officialTitle ??
                    "Official MAI Network"}
                </h3>
              </div>
            </div>

            <p className="security-card-description">
              {security.officialDescription ??
                "Use only the official access points listed below when interacting with MAI Network."}
            </p>

            {/* CONTRACT */}

            <div className="security-source">
              <div className="security-source__heading">
                <span className="security-source__dot"></span>

                <div>
                  <small>
                    {security.tokenLabel ??
                      "OFFICIAL TOKEN"}
                  </small>

                  <strong>
                    {security.contractTitle ??
                      "MAI Contract Address"}
                  </strong>
                </div>
              </div>

              <button
                type="button"
                className={`security-contract ${
                  copied ? "is-copied" : ""
                }`}
                onClick={copyContract}
                title={
                  security.copyTitle ??
                  "Copy MAI contract address"
                }
              >
                <span className="security-contract__address">
                  {MAI_CONTRACT}
                </span>

                <span className="security-contract__copy">
                  {copied
                    ? security.copied ??
                      "Copied"
                    : security.copy ??
                      "Copy"}
                </span>
              </button>
            </div>

            {/* MINING APP */}

            <div className="security-source">
              <div className="security-source__heading">
                <span className="security-source__dot"></span>

                <div>
                  <small>
                    {security.miningLabel ??
                      "OFFICIAL MINING APP"}
                  </small>

                  <strong>
                    {security.miningTitle ??
                      "MAI Mining Mini App"}
                  </strong>
                </div>
              </div>

              <a
                href={MINING_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="security-source-link"
              >
                <span>
                  @mai_accesstoken_bot
                </span>

                <span className="security-link-icon">
                  <LinkIcon />
                </span>
              </a>
            </div>

            {/* TELEGRAM */}

            <div className="security-source">
              <div className="security-source__heading">
                <span className="security-source__dot"></span>

                <div>
                  <small>
                    {security.telegramLabel ??
                      "OFFICIAL TELEGRAM"}
                  </small>

                  <strong>
                    {security.telegramTitle ??
                      "MAI News & Updates"}
                  </strong>
                </div>
              </div>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="security-source-link"
              >
                <span>
                  @MAI_News_Official
                </span>

                <span className="security-link-icon">
                  <LinkIcon />
                </span>
              </a>
            </div>
          </div>

          {/* SECURITY WARNING */}

          <aside className="security-warning-card">
            <span className="security-warning-label">
              {security.warningLabel ??
                "SECURITY NOTICE"}
            </span>

            <h3>
              {security.warningTitle ??
                "Protect Your Wallet."}
            </h3>

            <p>
              {security.warningDescription ??
                "MAI Network will never ask for your wallet seed phrase, private key, password or recovery phrase."}
            </p>

            <div className="security-warning-divider"></div>

            <div className="security-warning-list">
              <div className="security-warning-item">
                <span>01</span>

                <p>
                  {security.warningOne ??
                    "Never share your seed phrase or private key with anyone."}
                </p>
              </div>

              <div className="security-warning-item">
                <span>02</span>

                <p>
                  {security.warningTwo ??
                    "Verify the MAI token contract before buying, swapping or transferring tokens."}
                </p>
              </div>

              <div className="security-warning-item">
                <span>03</span>

                <p>
                  {security.warningThree ??
                    "Use only official MAI Network links published through verified channels."}
                </p>
              </div>

              <div className="security-warning-item">
                <span>04</span>

                <p>
                  {security.warningFour ??
                    "Be careful with unsolicited messages, fake support accounts and unknown wallet connection requests."}
                </p>
              </div>
            </div>

            <div className="security-safe-note">
              <ShieldIcon />

              <div>
                <strong>
                  {security.safeTitle ??
                    "Stay Secure"}
                </strong>

                <small>
                  {security.safeText ??
                    "Verify first. Connect second."}
                </small>
              </div>
            </div>
          </aside>
        </div>

        {/* BOTTOM TRUST STRIP */}

        <div className="security-trust-strip">
          <div className="security-trust-item">
            <span className="security-trust-dot"></span>

            <div>
              <strong>
                {security.trustContract ??
                  "Verified Contract"}
              </strong>

              <small>
                {security.trustContractText ??
                  "Official MAI token address"}
              </small>
            </div>
          </div>

          <div className="security-trust-divider"></div>

          <div className="security-trust-item">
            <span className="security-trust-dot"></span>

            <div>
              <strong>
                {security.trustTelegram ??
                  "Official Telegram"}
              </strong>

              <small>
                {security.trustTelegramText ??
                  "Verified MAI access"}
              </small>
            </div>
          </div>

          <div className="security-trust-divider"></div>

          <div className="security-trust-item">
            <span className="security-trust-dot"></span>

            <div>
              <strong>
                {security.trustTon ??
                  "Built on TON"}
              </strong>

              <small>
                {security.trustTonText ??
                  "Blockchain infrastructure"}
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;
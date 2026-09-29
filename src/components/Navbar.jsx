import { useEffect, useRef, useState } from "react";
import maiLogo from "../assets/mai-logo.png";

function Navbar({
  t,
  languages,
  languageCode,
  currentLanguage,
  changeLanguage,
}) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const languageRef = useRef(null);

  useEffect(() => {
    const closeLanguageMenu = (event) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", closeLanguageMenu);

    return () => {
      document.removeEventListener("mousedown", closeLanguageMenu);
    };
  }, []);

  const navItems = [
    {
      label: t?.nav?.home ?? "Home",
      href: "#home",
    },
    {
      label: t?.nav?.about ?? "About",
      href: "#about",
    },
    {
      label: t?.nav?.mining ?? "Mining",
      href: "#mining",
    },
    {
      label: t?.nav?.tokenomics ?? "Tokenomics",
      href: "#tokenomics",
    },
    {
      label: t?.nav?.roadmap ?? "Roadmap",
      href: "#roadmap",
    },
    {
      label: t?.nav?.whitepaper ?? "Whitepaper",
      href: "#whitepaper",
    },
  ];

  const selectLanguage = (code) => {
    changeLanguage(code);
    setLanguageOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <a className="navbar__brand" href="#home">
          <div className="navbar__logo">
            <img
              src={maiLogo}
              alt="MAI Network Logo"
            />
          </div>

          <div className="navbar__brand-text">
            <strong>MAI</strong>
            <span>NETWORK</span>
          </div>
        </a>

        <div className="navbar__links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <div
            className="language-selector"
            ref={languageRef}
          >
            <button
              type="button"
              className="language-selector__button"
              onClick={() =>
                setLanguageOpen((open) => !open)
              }
              aria-expanded={languageOpen}
            >
              <span>
                {currentLanguage.flag}
              </span>

              <span className="language-selector__code">
                {currentLanguage.shortName}
              </span>

              <span
                className={`language-selector__arrow ${
                  languageOpen ? "open" : ""
                }`}
              >
                ▾
              </span>
            </button>

            <div
              className={`language-selector__menu ${
                languageOpen ? "open" : ""
              }`}
            >
              {languages.map((language) => (
                <button
                  type="button"
                  key={language.code}
                  onClick={() =>
                    selectLanguage(language.code)
                  }
                  className={
                    language.code === languageCode
                      ? "active"
                      : ""
                  }
                >
                  <span className="language-selector__flag">
                    {language.flag}
                  </span>

                  <span>
                    <strong>
                      {language.nativeName}
                    </strong>

                    <small>
                      {language.name}
                    </small>
                  </span>

                  {language.code ===
                    languageCode && (
                    <span className="language-selector__check">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <a
            className="navbar__launch"
            href="https://t.me/mai_accesstoken_bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              {t?.nav?.launchApp ??
                "Launch App"}
            </span>

            <span>↗</span>
          </a>

          <button
            type="button"
            className={`mobile-toggle ${
              mobileOpen ? "open" : ""
            }`}
            onClick={() =>
              setMobileOpen((open) => !open)
            }
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={`mobile-menu ${
            mobileOpen ? "open" : ""
          }`}
        >
          <div className="mobile-menu__links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() =>
                  setMobileOpen(false)
                }
              >
                {item.label}
                <span>→</span>
              </a>
            ))}
          </div>

          <div className="mobile-menu__languages">
            {languages.map((language) => (
              <button
                type="button"
                key={language.code}
                onClick={() =>
                  selectLanguage(language.code)
                }
                className={
                  language.code === languageCode
                    ? "active"
                    : ""
                }
              >
                <span>{language.flag}</span>

                <span>
                  {language.nativeName}
                </span>
              </button>
            ))}
          </div>

          <a
            className="mobile-menu__launch"
            href="#mining"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            {t?.nav?.launchApp ??
              "Launch App"}

            <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
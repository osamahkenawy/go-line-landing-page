import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";

const Header = ({ extraClass }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  // mobile menu
  const [mobileToggle, setMobileToggle] = useState(false);

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <header className={extraClass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="header-style">
              <Link href="/">
                <img src="/assets/img/full_logo_colored.png" alt="Go-Line" style={{ height: 60, maxWidth: '100%', objectFit: 'contain' }} />
              </Link>
              <div className="extras bag" style={{ flexShrink: 0 }}>
                <div className="bar-menu" onClick={() => setMobileToggle(true)}>
                  <i className="fa-solid fa-bars" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <nav className="navbar">
              <ul className="navbar-links">
                <li className="navbar-dropdown">
                  <Link href="/">{t("nav.home")}</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="/about">{t("nav.about")}</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="/services">{t("nav.services")}</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="/contacts">{t("nav.contacts")}</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-4">
            <div className="desktop-actions d-none d-lg-flex" style={{ alignItems: "center", gap: "12px", justifyContent: "flex-end" }}>
              <Link href="/contacts" className="button button-2">
                {t("contacts.heroTitle") === "Get in touch with Go-Line"
                  ? t("home.getQuote")
                  : t("home.getQuote")}
              </Link>
              <button
                onClick={toggleLocale}
                style={{
                  background: "none",
                  border: "2px solid #ff6a00",
                  borderRadius: "6px",
                  padding: "6px 14px",
                  cursor: "pointer",
                  fontWeight: 600,
                  color: "#ff6a00",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                }}
              >
                {t("switchLang")}
              </button>
            </div>
          </div>
          {/* Mobile overlay */}
          {mobileToggle && (
            <div
              className="mobile-overlay"
              onClick={() => setMobileToggle(false)}
            />
          )}
          <div
            className={`mobile-nav hmburger-menu ${mobileToggle ? "open" : ""}`}
            id="mobile-nav"
          >
            <div className="res-log">
              <Link href="/">
                <img src="/assets/img/full_logo_colored.png" alt="Go-Line" style={{ height: 45, objectFit: 'contain' }} />
              </Link>
              <button
                className="res-cross-btn"
                onClick={() => setMobileToggle(false)}
                aria-label="Close menu"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <MobileMenu onLinkClick={() => setMobileToggle(false)} />
            <div className="mobile-nav-actions">
              <Link href="/contacts" className="button button-2" onClick={() => setMobileToggle(false)}>
                {t("home.getQuote")}
              </Link>
              <button
                onClick={() => { toggleLocale(); setMobileToggle(false); }}
                className="mobile-lang-btn"
              >
                {t("switchLang")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;


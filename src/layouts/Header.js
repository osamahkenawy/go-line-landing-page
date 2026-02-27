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
          <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
            <div className="header-style">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={163}
                  height={38}
                  viewBox="0 0 163 38"
                >
                  <text
                    transform="translate(0 28)"
                    fill="#363636"
                    fontSize={26}
                    fontFamily="Poppins"
                    fontWeight={700}
                  >
                    <tspan x={0} y={0}>GO</tspan>
                    <tspan y={0} fill="#ff6a00">-LINE</tspan>
                  </text>
                </svg>
              </Link>
              <div className="extras bag" style={{ flexShrink: 0 }}>
                <div className="bar-menu" onClick={() => setMobileToggle(true)}>
                  <i className="fa-solid fa-bars" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="navbar">
              <ul className="navbar-links">
                <li className="navbar-dropdown">
                  <Link href="/">{t("nav.home")}</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="about">{t("nav.about")}</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="services">{t("nav.services")}</Link>
                  <div className="dropdown">
                    <Link href="services">{t("nav.allServices")}</Link>
                    <Link href="pricing-table">{t("nav.pricing")}</Link>
                    <Link href="become-partner">{t("nav.becomePartner")}</Link>
                  </div>
                </li>
                <li className="navbar-dropdown">
                  <Link href="#">{t("nav.pages")}</Link>
                  <div className="dropdown">
                    <Link href="blog">{t("nav.blog")}</Link>
                    <Link href="single-blog">{t("nav.singleArticle")}</Link>
                    <Link href="faq">{t("nav.faq")}</Link>
                    <Link href="404">{t("nav.error404")}</Link>
                  </div>
                </li>
                <li className="navbar-dropdown">
                  <Link href="contacts">{t("nav.contacts")}</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-4">
            <div className="desktop-actions d-none d-lg-flex" style={{ alignItems: "center", gap: "12px", justifyContent: "flex-end" }}>
              <Link href="contacts" className="button button-2">
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
          <div
            className={`mobile-nav hmburger-menu ${mobileToggle ? "open" : ""}`}
            id="mobile-nav"
            style={{ display: "block" }}
          >
            <div className="res-log">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={163}
                  height={38}
                  viewBox="0 0 163 38"
                >
                  <text
                    transform="translate(0 28)"
                    fill="#fff"
                    fontSize={26}
                    fontFamily="Poppins"
                    fontWeight={700}
                  >
                    <tspan x={0} y={0}>GO</tspan>
                    <tspan y={0} fill="#ff6a00">-LINE</tspan>
                  </text>
                </svg>
              </Link>
              <span
                className="res-cross"
                onClick={() => setMobileToggle(false)}
              >
                <i className="fa-solid fa-xmark" />
              </span>
            </div>
            <MobileMenu />
            <div style={{ padding: "20px", display: "flex", gap: "12px", alignItems: "center" }}>
              <Link href="contacts" className="button button-2">
                {t("home.getQuote")}
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
                }}
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


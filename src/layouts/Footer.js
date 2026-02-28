import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#363636" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="footer-description">
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
              <h2>{t("footer.tagline")}</h2>
              <p>{t("footer.description")}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="menu">
              <h4>{t("footer.quickLinks")}</h4>
              <ul className="footer-menu">
                <li>
                  <Link href="/">
                    {t("nav.home")}
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="about">
                    {t("nav.about")}
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="services">
                    {t("nav.services")}
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    {t("nav.faq")}
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="contacts">
                    {t("nav.contacts")}
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="menu contacts">
              <h4>{t("footer.contactUs")}</h4>
              <div className="footer-location">
                <i className="fa-solid fa-location-dot" />
                <p>{t("footer.address")}</p>
              </div>
              <a href="mailto:info@go-line.ae">
                <i className="fa-solid fa-envelope" />
                {t("footer.email")}
              </a>
              <a href="callto:+971500000000">
                <i className="fa-solid fa-phone" />
                {t("footer.phone")}
              </a>
            </div>
            <ul className="social-media">
              <li>
                {" "}
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-two gap no-bottom">
          <p>{t("footer.copyright")}</p>
          <div className="privacy">
            {" "}
            <Link href="/privacy-policy">{t("footer.privacy")}</Link>{" "}
            <Link href="/terms-and-conditions">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;


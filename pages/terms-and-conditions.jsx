import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TermsAndConditions = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <section className="hero-section about gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="/">{t("breadcrumbs.home")}</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      {t("terms.breadcrumb")}
                    </Link>
                  </li>
                </ul>
                <h2>{t("terms.title")}</h2>
                <p>{t("terms.lastUpdated")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="legal-content">
                <h3>{t("terms.s1Title")}</h3>
                <p>{t("terms.s1Text")}</p>

                <h3>{t("terms.s2Title")}</h3>
                <p>{t("terms.s2Text")}</p>

                <h3>{t("terms.s3Title")}</h3>
                <p>{t("terms.s3Text")}</p>

                <h3>{t("terms.s4Title")}</h3>
                <p>{t("terms.s4Text")}</p>

                <h3>{t("terms.s5Title")}</h3>
                <p>{t("terms.s5Text")}</p>

                <h3>{t("terms.s6Title")}</h3>
                <p>{t("terms.s6Text")}</p>

                <h3>{t("terms.s7Title")}</h3>
                <p>{t("terms.s7Text")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default TermsAndConditions;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

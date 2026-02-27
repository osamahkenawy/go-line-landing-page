import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const PricingTable = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(assets/img/background-3.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about-text pricing-table">
                <ul className="crumbs d-flex"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={300}
                >
                  <li>
                    <Link href="/">{t("breadcrumbs.home")}</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      {t("breadcrumbs.pricingTable")}
                    </Link>
                  </li>
                </ul>
                <h2
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={400}
                >
                  {t("pricing.heroTitle")}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={500}
                >
                  {t("pricing.heroSubtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pricing-table-cards */}
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div
                className="pricing-table-cards"
                style={{ backgroundImage: "url(assets/img/blur-1.png)" }}
              >
                <img alt="food" src="assets/img/food-5.png" />
                <div className="pricing-table-cards-pric">
                  <h6>
                    <i className="fa-solid fa-box" />
                    x3
                  </h6>
                  <h4>
                    $112<span>{t("pricing.plan1Period")}</span>
                  </h4>
                <h3>{t("pricing.plan1Name")}</h3>
                </div>
                <p>{t("pricing.plan1Desc")}</p>
                <ul className="pricing-plan-list">
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature1")}</h5></li>
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature2")}</h5></li>
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature3")}</h5></li>
                  <li className="color"><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature4")}</h5></li>
                  <li className="color"><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature5")}</h5></li>
                  <li className="color"><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature6")}</h5></li>
                </ul>
                <button className="button-price">{t("pricing.orderNow")}</button>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div
                className="pricing-table-cards"
                style={{ backgroundImage: "url(assets/img/blur-2.png)" }}
              >
                <img alt="food" src="assets/img/food-6.png" />
                <div className="pricing-table-cards-pric">
                  <h6><i className="fa-solid fa-box" />x6</h6>
                  <h4>$270<span>{t("pricing.plan1Period")}</span></h4>
                  <h3>{t("pricing.plan2Name")}</h3>
                </div>
                <p>{t("pricing.plan2Desc")}</p>
                <ul className="pricing-plan-list">
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature1")}</h5></li>
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature2")}</h5></li>
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature3")}</h5></li>
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature4")}</h5></li>
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature5")}</h5></li>
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature6")}</h5></li>
                </ul>
                <button className="button-price">{t("pricing.orderNow")}</button>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div
                className="pricing-table-cards"
                style={{ backgroundImage: "url(assets/img/blur-3.png)" }}
              >
                <img alt="food" src="assets/img/food-7.png" />
                <div className="pricing-table-cards-pric">
                  <h6><i className="fa-solid fa-box" />x4</h6>
                  <h4>$180<span>{t("pricing.plan1Period")}</span></h4>
                  <h3>{t("pricing.plan3Name")}</h3>
                </div>
                <p>{t("pricing.plan3Desc")}</p>
                <ul className="pricing-plan-list">
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature1")}</h5></li>
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature2")}</h5></li>
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature3")}</h5></li>
                  <li><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature4")}</h5></li>
                  <li className="color"><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature5")}</h5></li>
                  <li className="color"><h5><i className="fa-solid fa-circle-check" />{t("pricing.feature6")}</h5></li>
                </ul>
                <button className="button-price">{t("pricing.orderNow")}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe-section */}
      <Subscribe />
    </Layout>
  );
};
export default PricingTable;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

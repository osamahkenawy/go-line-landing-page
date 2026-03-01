import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Services = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(/assets/img/background.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
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
                      {t("breadcrumbs.services")}
                    </Link>
                  </li>
                </ul>
                <h2>{t("services.heroTitle")}</h2>
                <p>{t("services.heroSubtitle")}</p>{" "}
                <Link href="/contacts" className="button button-2">
                  {t("services.getQuote")}
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="hero-section-img-service">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img">
                      <img alt="driver" src="/assets/img/man-1-goline.jpg" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img-data">
                      <h2>5K+</h2>
                      <span>{t("services.packagesDelivered")}</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img-data black">
                      <h2>50+</h2>
                      <span>{t("services.deliveryZones")}</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img">
                      <img alt="team" src="/assets/img/man-3-goline.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Cards */}
      <section className="services-cards gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="services-info">
                <h2>{t("services.sectionTitle")}</h2>
                <p>{t("services.sectionDesc")}</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-truck-fast" />
                <h4><a href="#">{t("services.service1Title")}</a></h4>
                <p>{t("services.service1Desc")}</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-clock" />
                <h4><a href="#">{t("services.service2Title")}</a></h4>
                <p>{t("services.service2Desc")}</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={600}
              data-aos-duration={700}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-hand-holding-dollar" />
                <h4><a href="#">{t("services.service3Title")}</a></h4>
                <p>{t("services.service3Desc")}</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={700}
              data-aos-duration={800}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-globe" />
                <h4><a href="#">{t("services.service4Title")}</a></h4>
                <p>{t("services.service4Desc")}</p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={900}
              data-aos-duration={1000}
            >
              <div className="services-cards-text">
                <h2>{t("services.trustedTitle")}</h2>
                <ul className="paragraph">
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>{t("services.trusted1")}</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>{t("services.trusted2")}</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>{t("services.trusted3")}</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>{t("services.trusted4")}</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* works-section */}
      <section className="works-section gap" style={{ background: "#fcfcfc" }}>
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>{t("services.howTitle")}</h2>
            <p>{t("services.howSubtitle")}</p>
          </div>
          <div className="row ">
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-1.jpg" />
                <h4>{t("services.step1Title")}</h4>
                <p>{t("services.step1Desc")}</p>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-2.jpg" />
                <h4>{t("services.step2Title")}</h4>
                <p>{t("services.step2Desc")}</p>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-3.jpg" />
                <h4>{t("services.step3Title")}</h4>
                <p>{t("services.step3Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sit at Home Section */}
      <section className="sit-at-home-section gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="sit-at-img">
                <img alt="man" src="/assets/img/man-3-goline-new.jpg" />
                <div className="counter-img-data">
                  <h2>5K+</h2>
                  <span>
                    Packages
                    <br />
                    Delivered
                  </span>
                </div>
              </div>
            </div>
            <div
              className="offset-xl-1 col-xl-5 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="sit-at-home-description">
                <h2>{t("services.heroTitle")}</h2>
                <p>{t("services.heroSubtitle")}</p>
                <ul className="food-dishes">
                  <li><a href="#"><i className="fa-solid fa-bolt" />{t("home.tagExpress")}</a></li>
                  <li><a href="#"><i className="fa-solid fa-sun" />{t("home.tagSameDay")}</a></li>
                  <li><a href="#"><i className="fa-solid fa-boxes-stacked" />{t("home.tagBulk")}</a></li>
                  <li><a href="#"><i className="fa-solid fa-calendar-check" />{t("services.service2Title")}</a></li>
                  <li><a href="#"><i className="fa-solid fa-satellite-dish" />{t("services.service4Title")}</a></li>
                </ul>{" "}
                <Link href="/contacts" className="button button-2">
                  {t("services.getQuote")}
                </Link>
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
export default Services;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(/assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="/">{t("breadcrumbs.home")}</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" /> {t("breadcrumbs.about")}
                    </Link>
                  </li>
                </ul>
                <h2>{t("about.heroTitle")}</h2>
                <p>{t("about.heroSubtitle")}</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="about-img">
                <img alt="man" src="/assets/img/photo-9-goline.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our-mission-section */}
      <section className="our-mission-section gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="our-mission-img">
                <img alt="Illustration" src="/assets/img/illustration-5-goline.jpg" />
              </div>
            </div>
            <div
              className="offset-xl-1 col-lg-5 col-md-12 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="our-mission-text">
                <h2>{t("about.missionTitle")}</h2>
                <p>{t("about.missionDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cards-section */}
      <section className="cards-section gap no-top">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="card-text-data">
                <img
                  className="on"
                  alt="icon"
                  src="/assets/img/service-icon-2.svg"
                />
                <img
                  className="off"
                  alt="icon"
                  src="/assets/img/service-icon-1.svg"
                />
                <h3>{t("about.card1Title")}</h3>
                <p>{t("about.card1Desc")}</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="card-text-data two">
                <img
                  className="on"
                  alt="icon"
                  src="/assets/img/service-icon-3.svg"
                />
                <img
                  className="off"
                  alt="icon"
                  src="/assets/img/service-icon-4.svg"
                />
                <h3>{t("about.card2Title")}</h3>
                <p>{t("about.card2Desc")}</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="card-text-data">
                <img
                  className="on"
                  alt="icon"
                  src="/assets/img/service-icon-5.svg"
                />
                <img
                  className="off"
                  alt="icon"
                  src="/assets/img/service-icon-6.svg"
                />
                <h3>{t("about.card3Title")}</h3>
                <p>{t("about.card3Desc")}</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="card-text-data two">
                <img
                  className="on"
                  alt="icon"
                  src="/assets/img/service-icon-7.svg"
                />
                <img
                  className="off"
                  alt="icon"
                  src="/assets/img/service-icon-8.svg"
                />
                <h3>{t("about.card4Title")}</h3>
                <p>{t("about.card4Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video-section */}
      <section className="video-section gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="wait-a-minute">
                <h2>{t("about.whyTitle")}</h2>
                <p>{t("about.whyDesc")}</p>
                <h6>{t("about.whatSetsApart")}</h6>
                <ul className="paragraph">
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>{t("about.bullet1")}</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>{t("about.bullet2")}</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>{t("about.bullet3")}</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>{t("about.bullet4")}</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="video-section-img">
                <img alt="elements" src="/assets/img/lements-1-goline.jpg" />
                <a
                  data-fancybox
                  href="https://www.youtube.com/watch?v=CKnGXZxK7zs"
                >
                  <i className="fa-solid fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
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
                <img alt="man" src="assets/img/photo-9.jpg" />
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
                <img alt="Illustration" src="assets/img/illustration-5.png" />
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
                  src="assets/img/service-icon-2.svg"
                />
                <img
                  className="off"
                  alt="icon"
                  src="assets/img/service-icon-1.svg"
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
                  src="assets/img/service-icon-3.svg"
                />
                <img
                  className="off"
                  alt="icon"
                  src="assets/img/service-icon-4.svg"
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
                  src="assets/img/service-icon-5.svg"
                />
                <img
                  className="off"
                  alt="icon"
                  src="assets/img/service-icon-6.svg"
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
                  src="assets/img/service-icon-7.svg"
                />
                <img
                  className="off"
                  alt="icon"
                  src="assets/img/service-icon-8.svg"
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
                <img alt="elements" src="assets/img/elements-1.jpg" />
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
      {/* about-counters-section */}
      <section
        className="about-counters-section gap"
        style={{ backgroundImage: "url(assets/img/background.png)" }}
      >
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>{t("about.counterTitle")}</h2>
                <img alt="girl" src="assets/img/photo-10.png" />
              </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="counter-hading">
                    <h2>Our numbers speak for themselves.</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="count-time">
                    <h2
                      className="timer count-title count-number"
                      data-to={5000}
                      data-speed={2000}
                    >
                      5K+
                    </h2>
                <p>{t("about.counter1Label")}</p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="flip-up"
                  data-aos-delay={300}
                  data-aos-duration={400}
                >
                  <div className="count-time">
                    <h2
                      className="timer count-title count-number"
                      data-to={50}
                      data-speed={2000}
                    >
                      50+
                    </h2>
                  <p>{t("about.counter2Label")}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="count-time sp">
                    <h2
                      className="timer count-title count-number"
                      data-to={200}
                      data-speed={2000}
                    >
                      200
                    </h2>
                    <span>+</span>
                  <p>{t("about.counter3Label")}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      {/* Our Team Section */}
      <section className="our-team-section gap">
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>{t("about.teamTitle")}</h2>
            <p>{t("about.teamDesc")}</p>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="our-team">
                <img alt="team-img" src="assets/img/team-1.png" />
                <h4>
                  {" "}
                  <a href="#">Khalid Al-Farsi</a>
                </h4>
                <p>Head of Operations — 10+ years in logistics and supply chain management.</p>
                <ul className="social-media">
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="our-team">
                <img alt="team-img" src="assets/img/team-2.png" />
                <h4>
                  {" "}
                  <a href="#">Sara Al-Zahrani</a>
                </h4>
                <p>
                  Chief Technology Officer — leading our delivery platform and driver app development.
                </p>
                <ul className="social-media">
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="our-team">
                <img alt="team-img" src="assets/img/team-3.png" />
                <h4>
                  {" "}
                  <a href="#">Omar Al-Rashidi</a>
                </h4>
                <p>Business Development Lead — building partnerships across the UAE and the wider region.</p>
                <ul className="social-media">
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our partners Section */}
      <section
        className="our-partners-section gap"
        style={{ background: "#fcfcfc" }}
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="container">
          <div className="hading">
            <h2>{t("about.partnersTitle")}</h2>
          </div>
          <Swiper
            {...sliderProps.logodata}
            className="row align-items-center logodata owl-carousel owl-theme"
          >
            <SwiperSlide className="item">
              <div className="logo-img">
                <img alt="logo-img" src="assets/img/logo-1.png" />
                <h5>Noon</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="logo-img">
                <img alt="logo-img" src="assets/img/logo-2.png" />
                <h5>Tamimi</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="logo-img">
                <img alt="logo-img" src="assets/img/logo-3.png" />
                <h5>Jarir</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="logo-img">
                <img alt="logo-img" src="assets/img/logo-4.png" />
                <h5>Saco</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="logo-img">
                <img alt="logo-img" src="assets/img/logo-5.png" />
                <h5>Nana</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="logo-img">
                <img alt="logo-img" src="assets/img/logo-1.png" />
                <h5>Mrsool</h5>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Our partners Section */}
      <section
        className="service-shows gap"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="good-taste">
                <h2>{t("about.sloganTitle")}</h2>
                <p>{t("about.sloganDesc")}</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <Swiper
                {...sliderProps.commentSlide}
                className="comment-data comment-slide owl-carousel owl-theme"
              >
                <SwiperSlide>
                  <div className="author-text item">
                    <p>
                      {t("about.review1Text")}
                    </p>
                    <div className="thomas">
                      <img alt="reviewer" src="assets/img/photo-5.jpg" />
                      <div>
                        <h6>{t("about.review1Author")}</h6>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="author-text item">
                    <p>
                      {t("about.review2Text")}
                    </p>
                    <div className="thomas">
                      <img alt="reviewer" src="assets/img/photo-5.jpg" />
                      <div>
                        <h6>{t("about.review2Author")}</h6>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="author-text item">
                    <p>
                      {t("about.review3Text")}
                    </p>
                    <div className="thomas">
                      <img alt="reviewer" src="assets/img/photo-5.jpg" />
                      <div>
                        <h6>{t("about.review3Author")}</h6>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="author-text item">
                    <p>
                      {t("about.review4Text")}
                    </p>
                    <div className="thomas">
                      <img alt="reviewer" src="assets/img/photo-5.jpg" />
                      <div>
                        <h6>{t("about.review4Author")}</h6>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe-section */}
      <section
        className="subscribe-section about gap"
        style={{ backgroundImage: "url(assets/img/background-img.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="get-the-menu">
                <h2
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={300}
                >
                  {t("subscribe.heading")}
                </h2>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={400}
                >
                  <i className="fa-regular fa-bell" />
                  <input
                    type="text"
                    name="email"
                    placeholder={t("subscribe.placeholder")}
                  />
                  <button className="button button-2">{t("subscribe.button")}</button>
                </form>
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

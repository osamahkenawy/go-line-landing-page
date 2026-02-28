import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <section
        className="hero-section gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="restaurant">
                <h1>{t("home.heroTitle")}</h1>
                <p>{t("home.heroSubtitle")}</p>
                <div className="nice-select-one">
                  <Link href="contacts" className="button button-2">
                    {t("home.getQuote")}
                  </Link>{" "}
                  <Link href="services" className="button button-2" style={{ marginLeft: 12 }}>
                    {t("home.ourServices")} <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="img-restaurant">
                <img alt="man" src="assets/img/photo-1-go-line.jpg" />
                <div className="wilmington">
                  {/* <img alt="img" src="assets/img/photo-2.jpg" /> */}
                  <div>
                    <p>Delivery of the Day</p>
                    <h6>Express Shipment</h6>
                    <div>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
                <div className="wilmington location-restaurant">
                  <i className="fa-solid fa-location-dot" />
                  <div>
                    <h6>{t("home.zonesLabel")}</h6>
                    <p>{t("home.zonesCovered")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* works-section */}
      <section className="works-section gap no-top">
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>{t("home.howItWorksTitle")}</h2>
            <p>{t("home.howItWorksSubtitle")}</p>
          </div>
          <div className="row ">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/Illustration-1.jpg" />
                <h4>
                  <span>01</span> {t("home.step1Title")}
                </h4>
                <p>{t("home.step1Desc")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/Illustration-2.jpg" />
                <h4>
                  <span>02</span> {t("home.step2Title")}
                </h4>
                <p>{t("home.step2Desc")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/Illustration-3.jpg" />
                <h4>
                  <span>03</span> {t("home.step3Title")}
                </h4>
                <p>{t("home.step3Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why-choose-us */}
      <section
        className="best-restaurants gap"
        style={{ background: "#fcfcfc" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="city-restaurants">
                <h2>{t("home.whyTitle")}</h2>
                <p>{t("home.whySubtitle")}</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="logos-card">
                <img alt="logo" src="assets/img/map_100_100.jpg" />
                <div className="cafa">
                  <h4>{t("home.feature1Title")}</h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">{t("home.feature1Tag1")}</a>{" "}
                    <a href="#">{t("home.feature1Tag2")}</a>{" "}
                    <a className="end" href="#">
                      {t("home.feature1Tag3")}
                    </a>
                  </div>
                  <p>{t("home.feature1Desc")}</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="logos-card two">
                <img alt="logo" src="assets/img/real_time_tracking.jpg" />
                <div className="cafa">
                  <h4>{t("home.feature2Title")}</h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">{t("home.feature2Tag1")}</a>{" "}
                    <a href="#">{t("home.feature2Tag2")}</a>{" "}
                    <a className="end" href="#">
                      {t("home.feature2Tag3")}
                    </a>
                  </div>
                  <p>{t("home.feature2Desc")}</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="logos-card three">
                <img alt="logo" src="assets/img/dedicated_support.jpg" />
                <div className="cafa">
                  <h4>{t("home.feature3Title")}</h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star-half-stroke" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">{t("home.feature3Tag1")}</a>{" "}
                    <a href="#">{t("home.feature3Tag2")}</a>{" "}
                    <a className="end" href="#">
                      {t("home.feature3Tag3")}
                    </a>
                  </div>
                  <p>{t("home.feature3Desc")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-gap">
            <Link href="services" className="button button-2 non">
              {t("home.allServicesBtn")}
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* your-favorite-food */}
      <section
        className="your-favorite-food gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="food-photo-section">
                <img alt="img" src="assets/img/photo-3.png" />{" "}
                <a href="#" className="one">
                  <i className="fa-solid fa-bolt" />
                  {t("home.tagExpress")}
                </a>{" "}
                <a href="#" className="two">
                  <i className="fa-solid fa-calendar-day" />
                  {t("home.tagSameDay")}
                </a>{" "}
                <a href="#" className="three">
                  <i className="fa-solid fa-boxes-stacked" />
                  {t("home.tagBulk")}
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 offset-lg-1 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="food-content-section">
                <h2>{t("home.solutionsTitle")}</h2>
                <p>{t("home.solutionsDesc")}</p>{" "}
                <Link href="services" className="button button-2">
                  {t("home.exploreServices")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters-section */}
      <section className="counters-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div>
                <h2>{t("home.counterTitle")}</h2>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="count-time">
                <h2
                  className="timer count-title count-number"
                  data-to={5000}
                  data-speed={2000}
                >
                  5000
                </h2>
                <p>{t("home.counter1Label")}</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="count-time">
                <h2
                  className="timer count-title count-number"
                  data-to={50}
                  data-speed={2000}
                >
                  50
                </h2>
                <p>{t("home.counter2Label")}</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="count-time sp">
                <h2
                  className="timer count-title count-number"
                  data-to={200}
                  data-speed={2000}
                >
                  200
                </h2>
                <span>+</span>
                <p>{t("home.counter3Label")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* reviews-sections */}
      <section className="reviews-sections gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="reviews-content">
                <h2>{t("home.reviewsTitle")}</h2>
                <div className="custome owl-carousel">
                  <Swiper {...sliderProps.index1Testmoninal}>
                    <SwiperSlide className="item">
                      <h4>{t("home.review1Text")}</h4>
                      <div className="thomas">
                        <img alt="client" src="assets/img/photo-5.jpg" />
                        <div>
                          <h6>{t("home.review1Author")}</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                      <h4>{t("home.review2Text")}</h4>
                      <div className="thomas">
                        <img alt="client" src="assets/img/man-2.jpg" />
                        <div>
                          <h6>{t("home.review2Author")}</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                      <h4>{t("home.review3Text")}</h4>
                      <div className="thomas">
                        <img alt="client" src="assets/img/photo-5.jpg" />
                        <div>
                          <h6>{t("home.review3Author")}</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star-half-stroke" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="owl-nav mt-4">
                    <button className="owl-prev">
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="owl-next ms-3">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="reviews-img">
                <img alt="photo" src="assets/img/photo-4.png" />
                <i className="fa-regular fa-thumbs-up" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* join-partnership */}
      <section
        className="join-partnership gap"
        style={{ backgroundColor: "#363636" }}
      >
        <div className="container">
          <h2>{t("home.growTitle")}</h2>
          <div className="row">
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="join-img">
                <img alt="courier" src="assets/img/photo-6.jpg" />
                <div className="Join-courier">
                  <h3>{t("home.driverCTA")}</h3>
                  <Link href="become-partner" className="button button-2">
                    {t("home.joinNow")} <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="join-img">
                <img alt="business" src="assets/img/photo-7.jpg" />
                <div className="Join-courier">
                  <h3>{t("home.businessCTA")}</h3>
                  <Link href="become-partner" className="button button-2">
                    {t("home.joinNow")} <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
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
export default Index;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

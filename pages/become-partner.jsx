import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const BecomePartner = () => {
  const { t } = useTranslation("common");
  return (
    <Layout headerExtaClass={"two"}>
      <section
        className="hero-section about blog-page gap"
        style={{ backgroundImage: "url(assets/img/blog-img-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
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
                      {t("breadcrumbs.becomePartner")}
                    </Link>
                  </li>
                </ul>
                <h2>{t("partner.heroTitle")}</h2>
                <p>{t("partner.heroSubtitle")}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="join-courier">
                <h3>{t("partner.formTitle")}</h3>
                <p>{t("partner.formSubtitle")}</p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="blog-form"
                >
                  <div className="name-form">
                    <i className="fa-regular fa-user" />
                    <input type="text" name="name" placeholder={t("partner.namePlaceholder")} />
                  </div>
                  <div className="name-form">
                    <i className="fa-solid fa-phone" />
                    <input type="text" name="phone" placeholder={t("partner.phonePlaceholder")} />
                  </div>
                  <div className="name-form">
                    <i className="fa-regular fa-envelope" />
                    <input type="text" name="email" placeholder={t("partner.emailPlaceholder")} />
                  </div>
                  <textarea placeholder={t("partner.messagePlaceholder")} defaultValue={""} />
                  <button className="button-price">{t("partner.submitBtn")}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Benefit-section gap">
        <div className="container">
          <div className="row">
            <div
              className="offset-xl-1 col-lg-5"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="benefit-text">
                <h2>{t("partner.benefitsTitle")}</h2>
                <p>{t("partner.benefitsDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Benefit-team gap no-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="team-description">
                <h4><i className="fa-solid fa-people-group" />{t("partner.benefit1Title")}</h4>
                <p>{t("partner.benefit1Desc")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="team-description">
                <h4><i className="fa-regular fa-calendar-days" />{t("partner.benefit2Title")}</h4>
                <p>{t("partner.benefit2Desc")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="team-description">
                <h4><i className="fa-solid fa-briefcase" />{t("partner.benefit3Title")}</h4>
                <p>{t("partner.benefit3Desc")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="team-description end">
                <h4><i className="fa-solid fa-money-bill-1-wave" />{t("partner.benefit4Title")}</h4>
                <p>{t("partner.benefit4Desc")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="team-description end">
                <h4><i className="fa-solid fa-arrow-up-right-dots" />{t("partner.benefit5Title")}</h4>
                <p>{t("partner.benefit5Desc")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="team-description end">
                <h4><i className="fa-solid fa-folder-open" />{t("partner.benefit6Title")}</h4>
                <p>{t("partner.benefit6Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join-community-section gap no-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="join-img-blog">
                <img alt="join" src="assets/img/join-img.jpg" />
              </div>
            </div>
            <div
              className="offset-xl-1 col-lg-5"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="join-the">
                <h2>{t("partner.joinTitle")}</h2>
                <p>{t("partner.joinDesc")}</p>
              </div>
              <div className="counter-blog">
                <div className="counter-img-data">
                  <h2>500+</h2>
                  <span>{t("partner.activeDrivers")}</span>
                </div>
                <div className="counter-img-data">
                  <h2>50+</h2>
                  <span>{t("partner.deliveryZones")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-about-us gap">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one blog">
                <img alt="man" src="assets/img/news-1.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">logistics</a> <a href="#">go-line</a>
                </div>
                <h3>{t("partner.news1Title")}</h3>
                <p>{t("partner.news1Excerpt")}</p>{" "}
                <Link href="/single-blog">{t("partner.readMore")}<i className="fa-solid fa-arrow-right" /></Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      by Go-Line
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      15. Mar. 2026
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      248
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="news-posts-one blog">
                <img alt="man" src="assets/img/news-2.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">partners</a> <a href="#">go-line</a>
                </div>
                <h3>{t("partner.news2Title")}</h3>
                <p>{t("partner.news2Excerpt")}</p>{" "}
                <Link href="/single-blog">{t("partner.readMore")}<i className="fa-solid fa-arrow-right" /></Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      by Go-Line
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      02. Feb. 2026
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      187
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="news-posts-one blog">
                <img alt="man" src="assets/img/news-3.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">drivers</a> <a href="#">go-line</a>
                </div>
                <h3>{t("partner.news3Title")}</h3>
                <p>{t("partner.news3Excerpt")}</p>{" "}
                <Link href="/single-blog">{t("partner.readMore")}<i className="fa-solid fa-arrow-right" /></Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      by Go-Line
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      10. Jan. 2026
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      312
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="button-gap"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              {" "}
              <Link href="/blog" className="button button-2 non">{t("partner.seeAll")}<i className="fa-solid fa-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BecomePartner;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

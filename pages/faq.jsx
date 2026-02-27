import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Faq = () => {
  const { t } = useTranslation("common");
  const [tab, setTab] = useState(1);
  return (
    <Layout>
      <section className="hero-section about gap">
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
                      {t("breadcrumbs.faq")}
                    </Link>
                  </li>
                </ul>
                <h2>{t("faq.heroTitle")}</h2>
                <p>{t("faq.heroSubtitle")}</p>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="join-img-blog">
                <img alt="join" src="assets/img/faq.jpg" />
                <i className="fa-solid fa-question" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tabs questions */}
      <section className="tabs gap no-bottom">
        <div className="container">
          <div className="tabs-img-back">
            <div className="row">
              <div className="col-lg-12">
                <div className="Provides">
                  <div
                    className="nav nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className={`nav-link ${tab == 1 ? "active" : ""}`}
                      onClick={() => setTab(1)}
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      {t("faq.tabDelivery")}
                    </button>
                    <button
                      className={`nav-link ${tab == 2 ? "active" : ""}`}
                      onClick={() => setTab(2)}
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      {t("faq.tabTracking")}
                    </button>
                    <button
                      className={`nav-link ${tab == 3 ? "active" : ""}`}
                      onClick={() => setTab(3)}
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      {t("faq.tabPricing")}
                    </button>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder={t("faq.searchPlaceholder")} />
                    <button>
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-12 gap">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className={`tab-pane ${tab == 1 ? "fade show active" : ""}`}
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>{t("faq.d_q1")}</h6>
                    </div>
                    <div className="questions answer">
                      <p>{t("faq.d_a1")}</p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>{t("faq.d_q2")}</h6>
                    </div>
                    <div className="questions answer">
                      <p>{t("faq.d_a2")}</p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>{t("faq.d_q3")}</h6>
                    </div>
                    <div className="questions answer">
                      <p>{t("faq.d_a3")}</p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>{t("faq.d_q4")}</h6>
                    </div>
                    <div className="questions answer">
                      <p>{t("faq.d_a4")}</p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="button-gap">
                      {" "}
                      <a href="#" className="button button-2 non">
                        {t("faq.seeAll")}
                        <i className="fa-solid fa-chevron-down" />
                      </a>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${tab == 2 ? "fade show active" : ""}`}
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>{t("faq.t_q1")}</h6>
                    </div>
                    <div className="questions answer">
                      <p>{t("faq.t_a1")}</p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>{t("faq.t_q2")}</h6>
                    </div>
                    <div className="questions answer">
                      <p>{t("faq.t_a2")}</p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>{t("faq.t_q3")}</h6>
                    </div>
                    <div className="questions answer">
                      <p>{t("faq.t_a3")}</p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="button-gap">
                      {" "}
                      <a href="#" className="button button-2 non">
                        {t("faq.seeAll")}
                        <i className="fa-solid fa-chevron-down" />
                      </a>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${tab == 3 ? "fade show active" : ""}`}
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>{t("faq.p_q1")}</h6>
                    </div>
                    <div className="questions answer">
                      <p>{t("faq.p_a1")}</p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>{t("faq.p_q2")}</h6>
                    </div>
                    <div className="questions answer">
                      <p>{t("faq.p_a2")}</p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>{t("faq.p_q3")}</h6>
                    </div>
                    <div className="questions answer">
                      <p>{t("faq.p_a3")}</p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="button-gap">
                      {" "}
                      <a href="#" className="button button-2 non">
                        {t("faq.seeAll")}
                        <i className="fa-solid fa-chevron-down" />
                      </a>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </section>
      {/* form-section */}
      <section className="form-section gap " style={{ background: "#fcfcfc" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-section-img">
                <img
                  alt="form-section-img"
                  src="assets/img/form-section-img.png"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="join-courier">
                <h3>{t("faq.formTitle")}</h3>
                <p>{t("faq.formDesc")}</p>
                <form onSubmit={(e) => e.preventDefault()} className="blog-form">
                  <div className="name-form">
                    <i className="fa-regular fa-user" />
                    <input type="text" name="name" placeholder={t("faq.namePlaceholder")} />
                  </div>
                  <div className="name-form">
                    <i className="fa-regular fa-envelope" />
                    <input type="text" name="email" placeholder={t("faq.emailPlaceholder")} />
                  </div>
                  <textarea placeholder={t("faq.messagePlaceholder")} defaultValue={""} />
                  <button className="button-price">{t("faq.submitBtn")}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Faq;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

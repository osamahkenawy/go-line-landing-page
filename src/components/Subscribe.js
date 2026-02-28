import { useTranslation } from "next-i18next";

const Subscribe = () => {
  const { t } = useTranslation("common");
  return (
    <section
      className="subscribe-section gap"
      style={{ background: "#fcfcfc" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6"
            data-aos="flip-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <div className="img-subscribe">
              <img alt="Illustration" src="assets/img/illustration-4-go-line-new.jpg" />
            </div>
          </div>
          <div
            className="col-lg-5 offset-lg-1"
            data-aos="flip-up"
            data-aos-delay={300}
            data-aos-duration={400}
          >
            <div className="get-the-menu">
              <h2>{t("subscribe.heading")}</h2>
              <form onSubmit={(e) => e.preventDefault()}>
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
  );
};
export default Subscribe;


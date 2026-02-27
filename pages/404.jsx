import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const E404 = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <section className="error-section">
        <div className="container">
          <div className="error-page">
            <form
              onSubmit={(e) => e.preventDefault()}
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <input
                type="text"
                name="email"
                placeholder={t("notFound.searchPlaceholder")}
              />
              <button className="button button-2">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </form>
            <img
              alt="girl"
              src="assets/img/404.png"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            />
            <h2>{t("notFound.title")}</h2>
            <h4 data-aos="flip-up" data-aos-delay={400} data-aos-duration={500}>
              {t("notFound.heading")}
            </h4>
            <p data-aos="flip-up" data-aos-delay={600} data-aos-duration={700}>
              {t("notFound.message")}
            </p>
            <Link href="/">
              <i className="fa-solid fa-house" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default E404;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

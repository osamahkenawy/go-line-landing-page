import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Blog = () => {
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
                      {t("breadcrumbs.blogPage")}
                    </Link>
                  </li>
                </ul>
                <h2>{t("blog.heroTitle")}</h2>
                <p>{t("blog.heroSubtitle")}</p>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="restaurants-girl-img blog food-photo-section">
                <img alt="man" src="/assets/img/blog-1.png" />{" "}
                <a href="#" className="one">
                  <i className="fa-brands fa-facebook-f" />
                </a>{" "}
                <a href="#" className="two">
                  <i className="fa-brands fa-instagram" />
                </a>{" "}
                <a href="#" className="three">
                  <i className="fa-brands fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* posts-section-blog */}
      <section className="posts-section-blog gap">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one full">
                <div className="blog-post-data-img">
                  <img alt="man" src="/assets/img/blog-2.jpg" />
                  <div className="quickeat">
                    {" "}
                    <a href="#">news</a> <a href="#">go-line</a>
                  </div>
                </div>
                <div className="blog-post-data-img">
                  <h3>{t("blog.article1Title")}</h3>
                  <p>{t("blog.articleExcerpt")}</p>{" "}
                  <Link href="/single-blog">{t("blog.readMore")}<i className="fa-solid fa-arrow-right" /></Link>
                  <ul className="data">
                    <li><h6><i className="fa-solid fa-user" />{t("blog.byLine")}</h6></li>
                    <li><h6><i className="fa-regular fa-calendar-days" />01.Jan. 2022</h6></li>
                    <li><h6><i className="fa-solid fa-eye" />132</h6></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one blog">
                <img alt="man" src="/assets/img/news-2.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">go-line</a>
                </div>
                <h3>{t("blog.article2Title")}</h3>
                <p>{t("blog.articleExcerpt")}</p>{" "}
                <Link href="/single-blog">{t("blog.readMore")}<i className="fa-solid fa-arrow-right" /></Link>
                <ul className="data">
                  <li><h6><i className="fa-solid fa-user" />{t("blog.byLine")}</h6></li>
                  <li><h6><i className="fa-regular fa-calendar-days" />01.Jan. 2022</h6></li>
                  <li><h6><i className="fa-solid fa-eye" />132</h6></li>
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
                <img alt="man" src="/assets/img/news-3.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">go-line</a>
                </div>
                <h3>{t("blog.article3Title")}</h3>
                <p>{t("blog.articleExcerpt")}</p>{" "}
                <Link href="/single-blog">{t("blog.readMore")}<i className="fa-solid fa-arrow-right" /></Link>
                <ul className="data">
                  <li><h6><i className="fa-solid fa-user" />{t("blog.byLine")}</h6></li>
                  <li><h6><i className="fa-regular fa-calendar-days" />01.Jan. 2022</h6></li>
                  <li><h6><i className="fa-solid fa-eye" />132</h6></li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one blog">
                <img alt="man" src="/assets/img/news-4.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">go-line</a>
                </div>
                <h3>{t("blog.article4Title")}</h3>
                <p>{t("blog.articleExcerpt")}</p>{" "}
                <Link href="/single-blog">{t("blog.readMore")}<i className="fa-solid fa-arrow-right" /></Link>
                <ul className="data">
                  <li><h6><i className="fa-solid fa-user" />{t("blog.byLine")}</h6></li>
                  <li><h6><i className="fa-regular fa-calendar-days" />01.Jan. 2022</h6></li>
                  <li><h6><i className="fa-solid fa-eye" />132</h6></li>
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
                <img alt="man" src="/assets/img/news-5.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">go-line</a>
                </div>
                <h3>{t("blog.article5Title")}</h3>
                <p>{t("blog.articleExcerpt")}</p>{" "}
                <Link href="/single-blog">{t("blog.readMore")}<i className="fa-solid fa-arrow-right" /></Link>
                <ul className="data">
                  <li><h6><i className="fa-solid fa-user" />{t("blog.byLine")}</h6></li>
                  <li><h6><i className="fa-regular fa-calendar-days" />01.Jan. 2022</h6></li>
                  <li><h6><i className="fa-solid fa-eye" />132</h6></li>
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
                <img alt="man" src="/assets/img/news-6.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">go-line</a>
                </div>
                <h3>{t("blog.article6Title")}</h3>
                <p>{t("blog.articleExcerpt")}</p>{" "}
                <Link href="/single-blog">{t("blog.readMore")}<i className="fa-solid fa-arrow-right" /></Link>
                <ul className="data">
                  <li><h6><i className="fa-solid fa-user" />{t("blog.byLine")}</h6></li>
                  <li><h6><i className="fa-regular fa-calendar-days" />01.Jan. 2022</h6></li>
                  <li><h6><i className="fa-solid fa-eye" />132</h6></li>
                </ul>
              </div>
            </div>
            <div
              className="button-gap"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              {" "}
              <Link href="/single-blog" className="button button-2 non">{t("blog.loadMore")}<i className="fa-solid fa-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe-section */}
      <Subscribe />
    </Layout>
  );
};
export default Blog;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

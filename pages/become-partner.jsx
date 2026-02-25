import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const BecomePartner = () => {
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
                    <Link href="/">Home</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      Blog
                    </Link>
                  </li>
                </ul>
                <h2>Join the Go-Line network today</h2>
                <p>
                  Whether you&apos;re a delivery driver or a business owner —
                  Go-Line has a place for you. Apply now and start earning or
                  growing.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="join-courier">
                <h3>Apply as a Driver or Business Partner</h3>
                <p>
                  Fill in the form below and our team will review your
                  application and get back to you within 48 hours.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="blog-form"
                >
                  <div className="name-form">
                    <i className="fa-regular fa-user" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="name-form">
                    <i className="fa-solid fa-phone" />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div className="name-form">
                    <i className="fa-regular fa-envelope" />
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <textarea
                    placeholder="Enter your message"
                    defaultValue={""}
                  />
                  <button className="button-price">Submit Application</button>
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
                <h2>Benefits of joining Go-Line</h2>
                <p>
                  Our partners enjoy competitive pay, flexible hours, and full
                  support from our dedicated operations team. Join hundreds of
                  drivers and businesses already growing with Go-Line.
                </p>
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
                <h4>
                  <i className="fa-solid fa-people-group" />
                  Supportive Team
                </h4>
                <p>
                  Our operations and driver support teams are available 7 days
                  a week to assist with any questions or delivery issues.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="team-description">
                <h4>
                  <i className="fa-regular fa-calendar-days" />
                  Flexible Schedule
                </h4>
                <p>
                  Drivers choose their own working hours. Work full-time or
                  part-time — the choice is yours. Our platform makes it easy
                  to manage deliveries on your terms.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="team-description">
                <h4>
                  <i className="fa-solid fa-briefcase" />
                  Dedicated Account Manager
                </h4>
                <p>
                  Every business partner gets a personal account manager to handle onboarding, billing, and daily operational support.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="team-description end">
                <h4>
                  <i className="fa-solid fa-money-bill-1-wave" />
                  Competitive Revenue Share
                </h4>
                <p>
                  Drivers earn competitive per-delivery rates with weekly payouts. Business partners benefit from volume pricing and invoice-based billing.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="team-description end">
                <h4>
                  <i className="fa-solid fa-arrow-up-right-dots" />
                  Business Growth Tools
                </h4>
                <p>
                  Access analytics dashboards, delivery reports, and performance insights to optimize your shipping strategy and reduce costs.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="team-description end">
                <h4>
                  <i className="fa-solid fa-folder-open" />
                  End-to-End Support
                </h4>
                <p>
                  From API integration to SLA management, our team provides full technical and operational support to keep your deliveries running smoothly.
                </p>
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
                <h2>Common questions about joining Go-Line</h2>
                <p>
                  Not sure how to get started? Here are quick answers to the most common questions from drivers and business partners.
                </p>
              </div>
              <div className="counter-blog">
                <div className="counter-img-data">
                  <h2>500+</h2>
                  <span>
                    Active<br />
                    Drivers
                  </span>
                </div>
                <div className="counter-img-data">
                  <h2>50+</h2>
                  <span>
                    Delivery<br />
                    Zones
                  </span>
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
                <h3>Go-Line Expands Coverage to 10 New Cities</h3>
                <p>
                  We are proud to announce our expansion into 10 additional cities across the Kingdom, bringing fast last-mile delivery to more businesses than ever.
                </p>{" "}
                <Link href="/single-blog">
                  Read More
                  <i className="fa-solid fa-arrow-right" />
                </Link>
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
                <h3>How Businesses Are Cutting Shipping Costs with Go-Line</h3>
                <p>
                  Our business partners report up to 30% savings on delivery costs after switching to Go-Line's consolidated shipping model...
                </p>{" "}
                <Link href="/single-blog">
                  Read More
                  <i className="fa-solid fa-arrow-right" />
                </Link>
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
                <h3>500+ Active Drivers Now on the Go-Line Network!</h3>
                <p>
                  Our driver community has surpassed 500 active members, providing faster pickups and broader coverage across all major zones...
                </p>{" "}
                <Link href="/single-blog">
                  Read More
                  <i className="fa-solid fa-arrow-right" />
                </Link>
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
              <Link href="/blog" className="button button-2 non">
                See All
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BecomePartner;

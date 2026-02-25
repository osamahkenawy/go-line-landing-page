import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Contacts = () => {
  return (
    <Layout>
      <section className="hero-section about gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
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
                      Contacts
                    </Link>
                  </li>
                </ul>
                <h2>Get in touch with Go-Line</h2>
                <p>
                  We&apos;re here to help with any delivery questions, partnership
                  inquiries, or support requests. Reach out and we&apos;ll respond
                  promptly.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="address">
                    <i className="fa-solid fa-location-dot" />
                    <h5>
                      King Fahd Road, Riyadh 12271, Saudi Arabia
                    </h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="address">
                    <i className="fa-solid fa-envelope" />
                    <a href="mailto:info@go-line.sa">
                      <h6>info@go-line.sa</h6>
                    </a>
                    <span>General inquiries &amp; support</span>
                    <a href="mailto:partners@go-line.sa">
                      <h6>partners@go-line.sa</h6>
                    </a>
                    <span>Partnership requests</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="address">
                    <i className="fa-solid fa-phone" />
                    <a href="callto:+966500000000">
                      <h6>+966 50 000 0000</h6>
                    </a>
                    <span>Customer support line</span>
                    <a href="callto:+966500000001">
                      <h6>+966 50 000 0001</h6>
                    </a>
                    <span>Business &amp; sales team</span>
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
              <div className="contact-us-img">
                <img alt="contacts-img-girl" src="assets/img/contacts-1.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact map */}
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="contact-map-data">
                <div className="join-courier content">
                  <h3>Send us a message</h3>
                  <p>
                    Fill in the form and our team will get back to you within
                    24 hours. For urgent delivery issues, please call us directly.
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
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.3929839093!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKing%20Fahd%20Road%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
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
export default Contacts;

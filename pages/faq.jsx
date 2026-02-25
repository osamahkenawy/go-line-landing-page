import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useState } from "react";
const Faq = () => {
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
                    <Link href="/">Home</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      FAQ
                    </Link>
                  </li>
                </ul>
                <h2>Frequently Asked Questions</h2>
                <p>
                  Find answers to the most common questions about Go-Line
                  delivery services, tracking, and partnerships.
                </p>
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
                      Delivery
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
                      Tracking & Technology
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
                      Pricing & Plans
                    </button>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Enter question keywords" />
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
                      <h6>
                        Question 1. How do I place a delivery order with Go-Line?
                      </h6>
                    </div>
                    <div className="questions answer">
                      <p>
                        Placing an order is simple. You can request a pickup through our website or mobile app. Fill in the pickup and drop-off addresses, select your delivery type (Express, Same-Day, or Scheduled), and confirm. Our nearest driver will be assigned immediately.
                        <br />
                        <br />
                        For business accounts, you can also submit bulk orders via our business portal or API integration.
                      </p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>
                        Question 2. What delivery zones does Go-Line currently cover?
                      </h6>
                    </div>
                    <div className="questions answer">
                      <p>
                        Go-Line currently operates across 50+ delivery zones in Saudi Arabia, with primary focus on Riyadh, Jeddah, and Dammam. We are continuously expanding our coverage to more cities.
                        <br />
                        <br />
                        <b>To check if your area is covered, enter your postal code on our coverage map.</b>
                        <br />
                        <br />
                        For inter-city and bulk shipments, contact our business team at partners@go-line.sa for a custom quote.
                      </p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>
                        Question 3. What happens if my delivery is late or the package is damaged?
                      </h6>
                    </div>
                    <div className="questions answer">
                      <p>
                        Go-Line offers an SLA-backed on-time delivery guarantee. If a delivery is late due to our error, you will receive credit on your next order.
                        <br />
                        <br />
                        For damaged packages, file a claim within 24 hours through your account dashboard. Our support team will review and resolve the case within 2 business days.
                      </p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>
                        Question 4. Can I schedule recurring deliveries for my business?
                      </h6>
                    </div>
                    <div className="questions answer">
                      <p>
                        Yes. Business accounts can set up recurring pickup schedules — daily, weekly, or on custom intervals. Our scheduler lets you define time windows, preferred drivers, and automatic notifications for each run.
                        <br />
                        <br />
                        Contact our sales team to activate scheduled delivery on your account and get a volume discount.
                      </p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="button-gap">
                      {" "}
                      <a href="#" className="button button-2 non">
                        See all questions
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
                      <h6>
                        Question 1. How does Go-Line real-time tracking work?
                      </h6>
                    </div>
                    <div className="questions answer">
                      <p>
                        Every shipment is assigned a unique tracking ID upon pickup. You can monitor live location, estimated arrival time, and delivery status through your Go-Line dashboard or via the tracking link sent to your phone.
                        <br />
                        <br />
                        Notifications are sent at key milestones: pickup confirmed, in transit, out for delivery, and delivered.
                      </p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>
                        Question 2. Can I integrate Go-Line's tracking API with my e-commerce platform?
                      </h6>
                    </div>
                    <div className="questions answer">
                      <p>
                        Yes. Go-Line provides a RESTful API that supports order creation, tracking, proof-of-delivery retrieval, and webhook notifications. Our integration documentation is available in the developer portal.
                        <br />
                        <br />
                        <b>We support native plugins for Shopify, WooCommerce, and Magento.</b>
                        <br />
                        <br />
                        For custom integrations, contact our technical team at tech@go-line.sa for onboarding assistance.
                      </p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>
                        Question 3. Is my shipment data secure on the Go-Line platform?
                      </h6>
                    </div>
                    <div className="questions answer">
                      <p>
                        All data transmitted through the Go-Line platform is encrypted using TLS 1.3. Shipment records, customer details, and delivery histories are stored on ISO 27001-certified cloud infrastructure.
                        <br />
                        <br />
                        We comply with Saudi data protection regulations and do not share client data with third parties without consent.
                      </p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="button-gap">
                      {" "}
                      <a href="#" className="button button-2 non">
                        See all questions
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
                      <h6>
                        Question 1. What pricing plans does Go-Line offer for businesses?
                      </h6>
                    </div>
                    <div className="questions answer">
                      <p>
                        Go-Line offers three main plans: <b>Starter</b> (pay-per-delivery for small businesses), <b>Growth</b> (monthly volume bundles with discounted rates), and <b>Enterprise</b> (custom SLA-based contracts for high-volume shippers).
                        <br />
                        <br />
                        All plans include real-time tracking, digital proof of delivery, and dedicated customer support. Contact our sales team for a tailored quote.
                      </p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>
                        Question 2. Are there any hidden fees or surcharges?
                      </h6>
                    </div>
                    <div className="questions answer">
                      <p>
                        No. Go-Line operates on a fully transparent pricing model. The price quoted at order placement is the final price — no fuel surcharges, no weekend fees, and no surprise charges.
                        <br />
                        <br />
                        <b>Volume discounts apply automatically once your monthly shipment count crosses 100 deliveries.</b>
                        <br />
                        <br />
                        For custom zone pricing or inter-city rates, contact partners@go-line.sa.
                      </p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="questions">
                      <i className="fa-solid fa-q" />
                      <h6>
                        Question 3. How do I become a Go-Line business partner?
                      </h6>
                    </div>
                    <div className="questions answer">
                      <p>
                        Businesses can apply through our Become a Partner page. Fill in your company details, expected shipment volume, and preferred service type. Our partnerships team will review your application within 2 business days.
                        <br />
                        <br />
                        Approved partners receive a dedicated account manager, priority support, and access to our business analytics dashboard.
                      </p>
                      <i className="fa-solid fa-a" />
                    </div>
                    <div className="button-gap">
                      {" "}
                      <a href="#" className="button button-2 non">
                        See all questions
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
                <h3>Didn't find the answer you are looking for?</h3>
                <p>
                  Magna sit amet purus gravida quis blandit turpis cursus.
                  Venenatis tellus in metus vulputate eu scelerisque felis.
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Faq;

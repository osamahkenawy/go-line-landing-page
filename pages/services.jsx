import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Services = () => {
  return (
    <Layout>
      <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(assets/img/background.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
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
                      Service
                    </Link>
                  </li>
                </ul>
                <h2>Delivery services that drive your business forward</h2>
                <p>
                  From express shipments to bulk logistics — Go-Line offers
                  flexible, scalable delivery solutions built for modern
                  businesses.
                </p>{" "}
                <Link href="/contacts" className="button button-2">
                  Get a Quote
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="hero-section-img-service">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img">
                      <img alt="driver" src="/assets/img/man-1.jpg" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img-data">
                      <h2>5K+</h2>
                      <span>
                        Packages
                        <br /> Delivered
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img-data black">
                      <h2>50+</h2>
                      <span>
                        Delivery
                        <br />
                        Zones
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img">
                      <img alt="team" src="/assets/img/man-3.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Cards */}
      <section className="services-cards gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="services-info">
                <h2>Everything your business needs to ship smarter</h2>
                <p>
                  Go-Line delivers flexible, scalable shipping solutions — from same-day express to bulk logistics. We handle the last mile so you can focus on growing your business.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-bolt" />
                <h4>
                  {" "}
                  <a href="#">
                    Express
                    <br />
                    Delivery
                  </a>
                </h4>
                <p>
                  Same-hour and next-hour delivery available across all major zones. Ideal for urgent, time-sensitive shipments.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-calendar-check" />
                <h4>
                  {" "}
                  <a href="#">
                    Scheduled
                    <br />
                    Runs
                  </a>
                </h4>
                <p>
                  Plan recurring pickups and deliveries on your schedule — daily, weekly, or custom intervals to fit your operations.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={600}
              data-aos-duration={700}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-boxes-stacked" />
                <h4>
                  {" "}
                  <a href="#">
                    Bulk
                    <br />
                    Logistics
                  </a>
                </h4>
                <p>
                  Manage large-volume shipments with ease. Our bulk logistics solutions offer competitive rates and dedicated handling.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={700}
              data-aos-duration={800}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-satellite-dish" />
                <h4>
                  {" "}
                  <a href="#">
                    Live
                    <br />
                    Tracking
                  </a>
                </h4>
                <p>
                  Track every shipment in real time. Clients and recipients receive instant updates at every delivery milestone.
                </p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={900}
              data-aos-duration={1000}
            >
              <div className="services-cards-text">
                <h2>Trusted by 200+ business partners</h2>
                <ul className="paragraph">
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>Dedicated account manager for every client;</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>Real-time delivery tracking and reporting;</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>Transparent pricing with no hidden fees;</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>SLA-backed on-time delivery guarantee.</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* works-section */}
      <section className="works-section gap" style={{ background: "#fcfcfc" }}>
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>How it works</h2>
            <p>
              Shipping with Go-Line is fast and simple. Place your order in minutes and we handle the rest — pickup, delivery, and real-time updates all the way.
            </p>
          </div>
          <div className="row ">
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-1.png" />
                <h4>Place Your Order</h4>
                <p>
                  Submit your shipment details online or via our app. Choose your delivery speed — express, same-day, or scheduled — and confirm pickup time.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-2.png" />
                <h4>We Pick It Up</h4>
                <p>
                  Our driver arrives at your location on time, verifies the package, and assigns a live tracking number for full visibility.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/illustration-3.png" />
                <h4>Fast Delivery</h4>
                <p>
                  Your shipment is delivered on time with a digital proof of delivery. Automatic notifications keep both sender and recipient informed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sit at Home Section */}
      <section className="sit-at-home-section gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="sit-at-img">
                <img alt="man" src="/assets/img/man-3.jpg" />
                <div className="counter-img-data">
                  <h2>5K+</h2>
                  <span>
                    Packages
                    <br />
                    Delivered
                  </span>
                </div>
              </div>
            </div>
            <div
              className="offset-xl-1 col-xl-5 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="sit-at-home-description">
                <h2>Your Business, Delivered — Every Time</h2>
                <p>
                  Go-Line offers comprehensive last-mile delivery for businesses of all sizes. Reliable, transparent, and built around your schedule.
                </p>
                <ul className="food-dishes">
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-bolt" />
                      Express
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-sun" />
                      Same-Day
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-boxes-stacked" />
                      Bulk
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-calendar-check" />
                      Scheduled
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-satellite-dish" />
                      Tracked
                    </a>
                  </li>
                </ul>{" "}
                <Link href="/contacts" className="button button-2">
                  Get a Quote
                </Link>
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
export default Services;

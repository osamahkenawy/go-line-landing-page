import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  return (
    <Layout>
      <section
        className="hero-section gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="restaurant">
                <h1>Fast, Reliable Last-Mile Delivery Service</h1>
                <p>
                  Go-Line connects businesses with trusted couriers —
                  delivering packages across 50+ zones with speed, safety, and
                  full tracking visibility.
                </p>
                <div className="nice-select-one">
                  <Link href="contacts" className="button button-2">
                    Get a Quote
                  </Link>{" "}
                  <Link href="services" className="button button-2" style={{ marginLeft: 12 }}>
                    Our Services <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="img-restaurant">
                <img alt="man" src="assets/img/photo-1.png" />
                <div className="wilmington">
                  <img alt="img" src="assets/img/photo-2.jpg" />
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
                    <h6>50+ Zones</h6>
                    <p>Covered Nationwide</p>
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
            <h2>How It Works</h2>
            <p>
              Shipping with Go-Line is simple and transparent. From pickup to
              <br /> delivery — every step tracked in real time.
            </p>
          </div>
          <div className="row ">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/Illustration-1.png" />
                <h4>
                  <span>01</span> Place Your Order
                </h4>
                <p>
                  Submit your delivery request online or via phone. Tell us the
                  pickup location, destination, and package details — we handle
                  the rest.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/Illustration-2.png" />
                <h4>
                  <span>02</span> We Pick It Up
                </h4>
                <p>
                  Our trained courier picks up your package from your location
                  promptly. We scan, verify, and secure every shipment before
                  dispatch.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/illustration-3.png" />
                <h4>
                  <span>03</span> Fast Delivery
                </h4>
                <p>
                  Your package is delivered to its destination with real-time
                  tracking updates. Recipient confirms delivery and you get an
                  instant notification.
                </p>
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
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="city-restaurants">
                <h2>Why Businesses Choose Go-Line</h2>
                <p>
                  We combine technology, trained couriers, and deep local
                  knowledge to deliver results you can count on.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="logos-card">
                <img alt="logo" src="assets/img/logos-2.jpg" />
                <div className="cafa">
                  <h4>Real-Time Tracking</h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">GPS Tracking</a> <a href="#">Live Updates</a>{" "}
                    <a className="end" href="#">
                      Notifications
                    </a>
                  </div>
                  <p>
                    Track every shipment in real time with our smart dashboard.
                    Get instant SMS and email notifications at every delivery
                    milestone.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="logos-card two">
                <img alt="logo" src="assets/img/logos-1.jpg" />
                <div className="cafa">
                  <h4>Nationwide Coverage</h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">50+ Zones</a> <a href="#">Same-Day</a>{" "}
                    <a className="end" href="#">
                      Cross-City
                    </a>
                  </div>
                  <p>
                    Our delivery network spans 50+ zones across the country.
                    Whether local or cross-city, we get it there fast.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="logos-card three">
                <img alt="logo" src="assets/img/logos-3.jpg" />
                <div className="cafa">
                  <h4>Dedicated Support</h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star-half-stroke" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">24/7 Support</a> <a href="#">Dedicated Agent</a>{" "}
                    <a className="end" href="#">
                      Fast Response
                    </a>
                  </div>
                  <p>
                    Our customer support team is available around the clock to
                    assist with any delivery concerns or urgent requests.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-gap">
            <Link href="services" className="button button-2 non">
              All Services
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
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="food-photo-section">
                <img alt="img" src="assets/img/photo-3.png" />{" "}
                <a href="#" className="one">
                  <i className="fa-solid fa-bolt" />
                  Express
                </a>{" "}
                <a href="#" className="two">
                  <i className="fa-solid fa-calendar-day" />
                  Same-Day
                </a>{" "}
                <a href="#" className="three">
                  <i className="fa-solid fa-boxes-stacked" />
                  Bulk
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 offset-lg-1"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="food-content-section">
                <h2>Delivery solutions tailored for your business needs</h2>
                <p>
                  Whether you ship 10 parcels or 10,000 — Go-Line has a plan
                  that fits. Scale your delivery operations effortlessly with
                  our flexible service tiers.
                </p>{" "}
                <Link href="services" className="button button-2">
                  Explore Services
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
                <h2>Delivering excellence, every shipment.</h2>
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
                <p>
                  Successful
                  <br />
                  Deliveries
                </p>
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
                <p>
                  Zones
                  <br />
                  Covered
                </p>
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
                <p>
                  Business
                  <br />
                  Partners
                </p>
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
                <h2>What customers say about us</h2>
                <div className="custome owl-carousel">
                  <Swiper {...sliderProps.index1Testmoninal}>
                    <SwiperSlide className="item">
                      <h4>
                        “Go-Line transformed our e-commerce business. Our
                        customers now receive their orders the same day in most
                        zones. The tracking system is outstanding and the team
                        is always responsive.”
                      </h4>
                      <div className="thomas">
                        <img alt="client" src="assets/img/photo-5.jpg" />
                        <div>
                          <h6>Ahmed Al-Rashidi — E-Commerce Manager</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                      <h4>
                        “We ship hundreds of parcels weekly and Go-Line handles
                        every single one without a hitch. Their dedicated
                        account manager keeps us updated at every stage. Highly
                        recommended for growing businesses.”
                      </h4>
                      <div className="thomas">
                        <img alt="client" src="assets/img/man-2.jpg" />
                        <div>
                          <h6>Sara Khalid — Operations Director</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                      <h4>
                        “The best courier service I have used. Fast pickups,
                        real-time tracking, and zero damaged packages. Go-Line
                        is now the backbone of our fulfillment operation.”
                      </h4>
                      <div className="thomas">
                        <img alt="client" src="assets/img/photo-5.jpg" />
                        <div>
                          <h6>Khaled Bin Nasser — Retail Business Owner</h6>
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
          <h2>Grow With Go-Line</h2>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="join-img">
                <img alt="courier" src="assets/img/photo-6.jpg" />
                <div className="Join-courier">
                  <h3>Become a Driver</h3>
                  <Link href="become-partner" className="button button-2">
                    Join Now <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="join-img">
                <img alt="business" src="assets/img/photo-7.jpg" />
                <div className="Join-courier">
                  <h3>Partner Your Business</h3>
                  <Link href="become-partner" className="button button-2">
                    Join Now <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news-section */}
      <section className="news-section gap">
        <div className="container">
          <h2>Latest News &amp; Insights</h2>
          <div className="row">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one">
                <img alt="news" src="assets/img/photo-8.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">go-line</a>
                </div>
                <h3>Go-Line Expands Coverage to 10 New Cities in 2026</h3>
                <p>
                  We are thrilled to announce our expansion into 10 new cities
                  this year, bringing fast and reliable last-mile delivery to
                  thousands of new businesses and consumers.
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
                      15.Feb. 2026
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
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="news-post-two">
                <img alt="blog-img" src="assets/img/food-1.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#">logistics</a> <a href="#">tips</a>
                  </div>
                  <h6>
                    <Link href="single-blog">
                      5 Ways to Reduce Last-Mile Delivery Costs for Your Business
                    </Link>
                  </h6>
                  <p>
                    Discover proven strategies that help e-commerce businesses
                    cut shipping costs without sacrificing speed or quality...
                  </p>
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
                        10.Feb. 2026
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-solid fa-eye" />
                        184
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="news-post-two">
                <img alt="blog-img" src="assets/img/food-2.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#">couriers</a> <a href="#">hiring</a>
                  </div>
                  <h6>
                    <Link href="single-blog">300+ Active Drivers Now On The Go-Line Network</Link>
                  </h6>
                  <p>
                    Our courier fleet has grown to over 300 active drivers,
                    enabling us to serve more clients faster than ever before...
                  </p>
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
                        05.Feb. 2026
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-solid fa-eye" />
                        321
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="news-post-two end">
                <img alt="blog-img" src="assets/img/food-3.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#">business</a> <a href="#">delivery</a>
                  </div>
                  <h6>
                    <Link href="single-blog">
                      How Real-Time Tracking Builds Customer Trust in Delivery
                    </Link>
                  </h6>
                  <p>
                    Transparency is the new competitive advantage. Learn how
                    live tracking technology is reshaping customer expectations...
                  </p>
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
                        01.Feb. 2026
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-solid fa-eye" />
                        197
                      </h6>
                    </li>
                  </ul>
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

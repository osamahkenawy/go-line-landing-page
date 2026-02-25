import Link from "next/link";

const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#363636" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="footer-description">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={163}
                  height={38}
                  viewBox="0 0 163 38"
                >
                  <text
                    transform="translate(0 28)"
                    fill="#fff"
                    fontSize={26}
                    fontFamily="Poppins"
                    fontWeight={700}
                  >
                    <tspan x={0} y={0}>GO</tspan>
                    <tspan y={0} fill="#ff6a00">-LINE</tspan>
                  </text>
                </svg>
              </Link>
              <h2>Fast, Reliable Delivery For Your Business</h2>
              <p>
                Go-Line is your trusted last-mile delivery partner. We connect
                businesses with fast, reliable couriers ensuring every shipment
                arrives safely and on time.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="menu">
              <h4>Quick Links</h4>
              <ul className="footer-menu">
                <li>
                  <Link href="/">
                    Home
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="about">
                    About Us
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="services">
                    Services
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="become-partner">
                    Become A Partner
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="faq">
                    FAQ
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="contacts">
                    Contacts
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="menu contacts">
              <h4>Contact Us</h4>
              <div className="footer-location">
                <i className="fa-solid fa-location-dot" />
                <p>King Fahd Road, Riyadh 12271, Saudi Arabia</p>
              </div>
              <a href="mailto:info@go-line.sa">
                <i className="fa-solid fa-envelope" />
                info@go-line.sa
              </a>
              <a href="callto:+966500000000">
                <i className="fa-solid fa-phone" />
                +966 50 000 0000
              </a>
            </div>
            <ul className="social-media">
              <li>
                {" "}
                <a href="https://facebook.com" target="_blank">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://instagram.com" target="_blank">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://twitter.com" target="_blank">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://linkedin.com" target="_blank">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-two gap no-bottom">
          <p>Copyright &copy; 2026. Go-Line Delivery. All rights reserved.</p>
          <div className="privacy">
            {" "}
            <a href="#">Privacy Policy</a> <a href="#">Terms &amp; Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

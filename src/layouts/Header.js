import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = ({ extraClass }) => {
  // mobile menu
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <header className={extraClass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2">
            <div className="header-style">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={163}
                  height={38}
                  viewBox="0 0 163 38"
                >
                  <text
                    transform="translate(0 28)"
                    fill="#363636"
                    fontSize={26}
                    fontFamily="Poppins"
                    fontWeight={700}
                  >
                    <tspan x={0} y={0}>GO</tspan>
                    <tspan y={0} fill="#ff6a00">-LINE</tspan>
                  </text>
                </svg>
              </Link>
              <div className="extras bag">
                <div className="bar-menu" onClick={() => setMobileToggle(true)}>
                  <i className="fa-solid fa-bars" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <nav className="navbar">
              <ul className="navbar-links">
                <li className="navbar-dropdown">
                  <Link href="/">Home</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="about">About Us</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="services">Services</Link>
                  <div className="dropdown">
                    <Link href="services">All Services</Link>
                    <Link href="pricing-table">Pricing</Link>
                    <Link href="become-partner">Become A Partner</Link>
                  </div>
                </li>
                <li className="navbar-dropdown">
                  <Link href="#">Pages</Link>
                  <div className="dropdown">
                    <Link href="blog">Blog</Link>
                    <Link href="single-blog">Single Article</Link>
                    <Link href="faq">FAQ</Link>
                    <Link href="404">404</Link>
                  </div>
                </li>
                <li className="navbar-dropdown">
                  <Link href="contacts">Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="extras bag">
              <Link href="contacts" className="button button-2">
                Get a Quote
              </Link>
            </div>
          </div>
          <div
            className={`mobile-nav hmburger-menu ${mobileToggle ? "open" : ""}`}
            id="mobile-nav"
            style={{ display: "block" }}
          >
            <div className="res-log">
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
              <span
                className="res-cross"
                onClick={() => setMobileToggle(false)}
              >
                <i className="fa-solid fa-xmark" />
              </span>
            </div>
            <MobileMenu />
            <div style={{ padding: "20px" }}>
              <Link href="contacts" className="button button-2">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "active" : "");
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="about">About Us</Link>
      </li>
      <li className={`menu-item-has-children ${activeLi("Services")}`}>
        <a href="#" onClick={() => activeMenuSet("Services")}>
          Services
        </a>
        <ul className="sub-menu">
          <li>
            <Link href="services">All Services</Link>
          </li>
          <li>
            <Link href="pricing-table">Pricing</Link>
          </li>
          <li>
            <Link href="become-partner">Become A Partner</Link>
          </li>
        </ul>
      </li>
      <li className={`menu-item-has-children ${activeLi("Pages")}`}>
        <a href="#" onClick={() => activeMenuSet("Pages")}>
          Pages
        </a>
        <ul className="sub-menu">
          <li>
            <Link href="blog">Blog</Link>
          </li>
          <li>
            <Link href="single-blog">Single Article</Link>
          </li>
          <li>
            <Link href="faq">FAQ</Link>
          </li>
          <li>
            <Link href="404">404</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="contacts">Contacts</Link>
      </li>
    </ul>
  );
};
export default MobileMenu;

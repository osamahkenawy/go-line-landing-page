import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const MobileMenu = () => {
  const { t } = useTranslation("common");
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "active" : "");
  return (
    <ul>
      <li>
        <Link href="/">{t("nav.home")}</Link>
      </li>
      <li>
        <Link href="about">{t("nav.about")}</Link>
      </li>
      <li className={`menu-item-has-children ${activeLi("Services")}`}>
        <a href="#" onClick={() => activeMenuSet("Services")}>
          {t("nav.services")}
        </a>
        <ul className="sub-menu">
          <li>
            <Link href="services">{t("nav.allServices")}</Link>
          </li>
          <li>
            <Link href="pricing-table">{t("nav.pricing")}</Link>
          </li>
          <li>
            <Link href="become-partner">{t("nav.becomePartner")}</Link>
          </li>
        </ul>
      </li>
      <li className={`menu-item-has-children ${activeLi("Pages")}`}>
        <a href="#" onClick={() => activeMenuSet("Pages")}>
          {t("nav.pages")}
        </a>
        <ul className="sub-menu">
          <li>
            <Link href="blog">{t("nav.blog")}</Link>
          </li>
          <li>
            <Link href="single-blog">{t("nav.singleArticle")}</Link>
          </li>
          <li>
            <Link href="faq">{t("nav.faq")}</Link>
          </li>
          <li>
            <Link href="404">{t("nav.error404")}</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="contacts">{t("nav.contacts")}</Link>
      </li>
    </ul>
  );
};
export default MobileMenu;


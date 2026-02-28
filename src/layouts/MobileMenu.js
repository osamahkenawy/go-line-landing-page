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
      <li>
        <Link href="services">{t("nav.services")}</Link>
      </li>
      <li>
        <Link href="contacts">{t("nav.contacts")}</Link>
      </li>
    </ul>
  );
};
export default MobileMenu;


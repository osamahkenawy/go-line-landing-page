import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const MobileMenu = ({ onLinkClick }) => {
  const { t } = useTranslation("common");
  return (
    <ul>
      <li>
        <Link href="/" onClick={onLinkClick}>{t("nav.home")}</Link>
      </li>
      <li>
        <Link href="/about" onClick={onLinkClick}>{t("nav.about")}</Link>
      </li>
      <li>
        <Link href="/services" onClick={onLinkClick}>{t("nav.services")}</Link>
      </li>
      <li>
        <Link href="/contacts" onClick={onLinkClick}>{t("nav.contacts")}</Link>
      </li>
    </ul>
  );
};
export default MobileMenu;


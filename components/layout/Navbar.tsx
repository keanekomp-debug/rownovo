"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <nav className="border-b border-border bg-surface/70 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-heading text-xl text-primary">
          Rowbot
        </Link>

        <div className="hidden md:flex gap-6 text-sm text-muted">
          <Link href="/about">{t("about")}</Link>
          <Link href="/technology">{t("technology")}</Link>
          <Link href="/hardware">{t("hardware")}</Link>
          <Link href="/tracker">{t("tracker")}</Link>
          <Link href="/data">{t("data")}</Link>
        </div>

        <LanguageToggle />
      </div>
    </nav>
  );
}

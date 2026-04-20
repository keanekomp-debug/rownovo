"use client";

import { usePathname } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 text-sm">
      <a href={`/en${pathname.replace(/^\/(en|pt)/, "")}`}>EN</a>
      <a href={`/pt${pathname.replace(/^\/(en|pt)/, "")}`}>PT</a>
    </div>
  );
}

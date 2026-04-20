import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-heading mb-10">{t("title")}</h1>

      <p className="text-muted max-w-3xl mb-8">
        {t("intro")}
      </p>

      <h2 className="text-2xl font-heading mt-12 mb-4">{t("originTitle")}</h2>
      <p className="text-muted max-w-3xl">{t("origin")}</p>

      <h2 className="text-2xl font-heading mt-12 mb-4">{t("timelineTitle")}</h2>
      <ul className="text-muted space-y-2">
        <li>2023 — Concept + early prototypes</li>
        <li>2024 — First working buoy deployed in Portugal</li>
        <li>2024 — Real-time tracker launched</li>
      </ul>

      <h2 className="text-2xl font-heading mt-12 mb-4">{t("creatorTitle")}</h2>
      <p className="text-muted max-w-3xl">{t("creator")}</p>
    </div>
  );
}

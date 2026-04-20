import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import MissionSection from "@/components/home/MissionSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CTASection from "@/components/home/CTASection";
import WaveDivider from "@/components/ui/WaveDivider";
import Card from "@/components/ui/Card";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      <WaveDivider />

      {/* STATS */}
      <StatsStrip />

      {/* MISSION */}
      <MissionSection />

      {/* HOW IT WORKS */}
      <HowItWorksSection />

      {/* 🔥 IMPACT / GRANT-READY SECTION (THIS IS THE NEW PART) */}
      <section className="container py-20 grid md:grid-cols-2 gap-6">

        {/* POLICY BLOCK */}
        <Card>
          <h3 className="font-heading mb-2">Policy Alignment</h3>
          <ul className="text-muted text-sm space-y-2">
            <li>EU Water Framework Directive</li>
            <li>UN SDG 6 — Clean Water</li>
            <li>Climate resilience infrastructure</li>
          </ul>
        </Card>

        {/* TIMELINE BLOCK */}
        <Card>
          <h3 className="font-heading mb-2">Deployment Timeline</h3>
          <ul className="text-muted text-sm space-y-2">
            <li>Month 1–2: Build 10 units</li>
            <li>Month 3: Field deployment</li>
            <li>Month 4–6: Data validation & scaling</li>
          </ul>
        </Card>

      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

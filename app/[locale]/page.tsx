import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import MissionSection from "@/components/home/MissionSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CTASection from "@/components/home/CTASection";
import WaveDivider from "@/components/ui/WaveDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WaveDivider />
      <StatsStrip />
      <MissionSection />
      <HowItWorksSection />
      <CTASection />
    </>
  );
}

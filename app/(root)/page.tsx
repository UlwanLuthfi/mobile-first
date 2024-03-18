import HeroSection from "@/components/hero-section";
import LearnAndApply from "@/components/learn-and-apply";
import ToolsAndResources from "@/components/tools-and-resources";
import WhyMobileFirst from "@/components/why-mobile-first";

export default function Home() {
  return (
    <div className="m-4 space-y-20">
      <HeroSection />
      <WhyMobileFirst />
      <ToolsAndResources />
      <LearnAndApply />
    </div>
  );
}

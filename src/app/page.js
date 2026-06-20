import Banner from "@/components/HomePage/Banner";
import SuccessStories from "@/components/HomePage/SuccessStories";
import WhyJoinStartupForge from "@/components/HomePage/WhyJoinStartupForge";
import Testimonials from "@/components/HomePage/Testimonials";
import StartupStatistics from "@/components/HomePage/StartupStatistics";
import CommunityHighlights from "@/components/HomePage/CommunityHighlights";
import Pricing from "@/components/HomePage/Pricing";
import FAQ from "@/components/HomePage/FAQ";

export default function Home() {
  return (
    <>
      <Banner />
      <SuccessStories />
      <WhyJoinStartupForge />
      <Pricing />
      <StartupStatistics />
      <Testimonials />
      <CommunityHighlights />
      <FAQ />
    </>
  );
}

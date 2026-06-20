import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";
import SuccessStories from "@/components/Banner/SuccessStories";
import WhyJoinStartupForge from "@/components/Banner/WhyJoinStartupForge";
import Testimonials from "@/components/Banner/Testimonials";
import StartupStatistics from "@/components/Banner/StartupStatistics";
import CommunityHighlights from "@/components/Banner/CommunityHighlights";
import Pricing from "@/components/Banner/Pricing";
import FAQ from "@/components/Banner/FAQ";

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
      <Footer />
    </>
  );
}

import Footer from "@/components/Footer/Footer";
import { inter } from "./layout";
import Banner from "@/components/Banner/Banner";
import SuccessStories from "@/components/Banner/SuccessStories";
import WhyJoinStartupForge from "@/components/Banner/WhyJoinStartupForge";
import Testimonials from "@/components/Banner/Testimonials";

export default function Home() {
  return (
    <div>
      <div className={inter.className}>This is homepage</div>
      <Banner />
      <SuccessStories />
      <WhyJoinStartupForge />
      <Testimonials/>
      <Footer />
    </div>
  );
}

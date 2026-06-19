import Footer from "@/components/Footer/Footer";
import { inter } from "./layout";
import Banner from "@/components/Banner/Banner";
import SuccessStories from "@/components/Banner/SuccessStories";

export default function Home() {
  return (
    <div>
      <div className={inter.className}>This is homepage</div>
      <Banner />
      <SuccessStories />
      <Footer />
    </div>
  );
}

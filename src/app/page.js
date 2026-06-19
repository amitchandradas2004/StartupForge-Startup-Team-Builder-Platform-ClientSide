import Footer from "@/components/Footer/Footer";
import { inter } from "./layout";

export default function Home() {
  return (
    <div className="text-center">
      <div className={inter.className}>This is homepage</div>
      <Footer/>
    </div>
  );
}

import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "./Providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "StartupForge || Home Page",
  description: "StartupForge-Startup-Team-Builder-Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${spaceGrotesk.className} ${inter.className} h-full antialiased`}
    >
      <body className="h-full">
        <Providers>
          <Navbar />

          {children}

          <Toaster position="top-center" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

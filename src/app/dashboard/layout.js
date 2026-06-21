import { Inter, Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Providers } from "../Providers";
import DashboardSideBar from "@/components/dashboard/DashboardSidebar";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${spaceGrotesk.className} ${inter.className} h-full antialiased`}
    >
      <body className="h-full">
        <Providers>
          <main className="flex gap-10 mt-5">
            <DashboardSideBar />
            {children}
          </main>
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}

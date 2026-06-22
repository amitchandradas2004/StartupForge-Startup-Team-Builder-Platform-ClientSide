import Link from "next/link";
import StartupCard from "../dashboard/founder/StartupCard";
import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturedStartup = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/startups`, {
    cache: "no-store",
  });

  const startups = await res.json();

  const featuredStartups = startups.slice(0, 6);

  return (
    <section className="dark:bg-slate-950">
      {" "}
      <div className="container mx-auto px-4 py-12">
        {/* Header */}

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-10">
          <div className="text-center md:text-start">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Featured Startups
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Discover top curated startups
            </p>
          </div>

          <Link href="/browseStartups">
            <Button className="inline-flex items-center gap-2 rounded-full bg-[#4F39F6] hover:bg-[#331ddd] transition-all duration-300 h-10">
              Show All Srartups
              <FaArrowRightLong className="text-sm" />
            </Button>
          </Link>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredStartups.map((startup) => (
            <StartupCard key={startup._id} startup={startup} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartup;

import Link from "next/link";
import OpportunityCard from "../dashboard/founder/OpportunityCard";
import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturedOpportunities = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/opportunities`, {
    cache: "no-store",
  });

  const opportunities = await res.json();
  const featuredOpportunities = opportunities.data.slice(0, 6);
  // const featuredOpportunitiesData = featuredOpportunities.data;

  return (
    <section className="dark:bg-slate-950">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-10">
          <div className="text-center md:text-start">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Featured Opportunities
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Discover exciting startup roles and join innovative teams.
            </p>
          </div>

          <Link href="/browseOpportunities">
            <Button className="inline-flex items-center gap-2 rounded-full bg-[#4F39F6] hover:bg-[#331ddd] transition-all duration-300 h-10">
              Show All Opportunities
              <FaArrowRightLong className="text-sm" />
            </Button>
          </Link>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity._id} opportunity={opportunity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOpportunities;

import { getFounderOpportunity } from "@/lib/api/opportunity";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import FounderAddOppturnityPage from "./FounderAddOppturnityPage";
import Link from "next/link";
import { redirect } from "next/navigation";

const FounderOpportunityPage = async () => {
  const userSession = await auth.api.getSession({
    headers: await headers(),
  });
  if (!userSession) {
    redirect("/login");
  }
  if (userSession?.user?.role !== "founder") {
    redirect("/unauthorized");
  }

  const founderEmail = userSession?.user?.email;
  const founderPlan = userSession?.user?.plan;
  const totalFounderOpportunity = await getFounderOpportunity(founderEmail);
  const hasReachedLimit =
    totalFounderOpportunity.length >= 3 && founderPlan !== "premium";

  if (hasReachedLimit) {
    return (
      <div className="w-full mx-auto px-4 py-20 dark:bg-slate-950">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">
            Free Plan Limit Reached
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            You have already posted{" "}
            <span className="font-semibold">
              {totalFounderOpportunity.length}
            </span>{" "}
            opportunities.
          </p>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Upgrade to the Premium Founder plan to post unlimited opportunities
            and unlock premium features.
          </p>

          <Link href={"/pricing"}>
            {" "}
            <button className="mt-6 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Upgrade to Premium
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return <FounderAddOppturnityPage />;
};

export default FounderOpportunityPage;

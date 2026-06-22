import { OpportunityTable } from "@/components/dashboard/founder/OpportunityTable";
import { getFounderOpportunity } from "@/lib/api/opportunity";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";

const ManageOpportunityPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const founderEmail = user?.email;

  const opportunities = await getFounderOpportunity(founderEmail);

  return (
    <div className="pb-20 pt-10 dark:bg-slate-950 mx-auto w-full px-5 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between p-5 gap-3 ">
        {" "}
        <h2>Manage opportunity from here</h2>
        <Link href={"/dashboard/founder/add-opportunity"}>
          <Button> Add new opportunity</Button>
        </Link>{" "}
      </div>
      {opportunities.length > 0 ? (
        <OpportunityTable opportunities={opportunities} />
      ) : (
        <div className="flex flex-col items-center justify-center mx-auto rounded-3xl border border-dashed border-slate-300 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 p-12 text-center mr-5 md:mr-0">
          <div className="mb-4 text-6xl">🚀</div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            No opportunitiy Created Yet
          </h2>
          <p className="mt-2 max-w-md text-slate-500 dark:text-slate-400">
            You have not created any opportunity yet. Create your first
            opportunity to showcase your idea, attract collaborators, and start
            building your team.
          </p>

          <Link href={"/dashboard/founder/add-opportunity"}>
            <button className="mt-6 rounded-full bg-indigo-600 px-6 py-3 text-white font-medium transition-all hover:bg-indigo-700 hover:scale-105">
              Create Opportunity
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ManageOpportunityPage;

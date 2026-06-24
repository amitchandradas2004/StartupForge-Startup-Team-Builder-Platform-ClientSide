import { StartupTable } from "@/components/dashboard/founder/StartupTable";
import { getFounderStartup } from "@/lib/api/startup";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";

const StartupsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const founderEmail = user?.email;
  const startups = await getFounderStartup(founderEmail);

  return (
    <div className="pb-20 pt-10 dark:bg-slate-950 mx-auto  w-full px-5 md:px-10">
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Startup Management
          </p>

          <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
            Manage Your Startups : {startups.length}
          </h2>

          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Create, update, and monitor all your startup profiles from one
            place.
          </p>
        </div>

        <Link href="/dashboard/founder/startups/new">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5">
            + Add New Startup
          </Button>
        </Link>
      </div>
      {startups.length > 0 ? (
        <StartupTable startups={startups} />
      ) : (
        <div className="flex flex-col items-center w-full justify-center mx-auto rounded-3xl border border-dashed border-slate-300 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 p-12 text-center mr-5 md:mr-0">
          <div className="mb-4 text-6xl">🚀</div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            No Startup Created Yet
          </h2>
          <p className="mt-2 max-w-md text-slate-500 dark:text-slate-400">
            You have not created any startup yet. Create your first startup to
            showcase your idea, attract collaborators, and start building your
            team.
          </p>

          <Link href={"/dashboard/founder/startups/new"}>
            <button className="mt-6 rounded-full bg-indigo-600 px-6 py-3 text-white font-medium transition-all hover:bg-indigo-700 hover:scale-105">
              Create Startup
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default StartupsPage;

import { getFounderAllApplications } from "@/lib/api/application";
import { ApplicationTable } from "./ApplicationTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ApplicationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const founderEmail = user?.email;
  // console.log(founderEmail, "email");

  const applications = await getFounderAllApplications(founderEmail);
  console.log(applications.length, "length");

  return (
    <div className="dark:bg-slate-950 py-10 px-5 w-full">
      {applications.length === 0 ? (
        <section className="dark:bg-slate-950 w-full">
          <div className="min-h-screen flex items-center justify-center mr-10">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg p-8 text-center relative overflow-hidden">
              {/* subtle background glow */}
              <div className="absolute inset-0">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300">
                  📭
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Applications
                </h2>

                {/* Count */}
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  0 application(s) received
                </p>

                {/* Empty message */}
                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 p-5">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    No applications available yet. Once users apply, they will
                    appear here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <ApplicationTable applications={applications} />
      )}
    </div>
  );
};

export default ApplicationPage;

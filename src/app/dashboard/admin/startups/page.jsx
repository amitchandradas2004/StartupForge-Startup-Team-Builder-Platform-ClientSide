import { getAllStarups } from "@/lib/api/startup";
import AdminNoStartups from "./AdminNoStartups";
import { StartupTable } from "./StartupTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AdminStartupsPage = async () => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) {
      redirect("/login");
    }
    if (session?.user?.role !== "admin") {
      redirect("/unauthorized");
    }
  const startups = await getAllStarups();

  return (
    <div className="min-h-screen w-full overflow-x-hidden dark:bg-slate-950 px-4 py-10">
      {startups.length === 0 ? (
        <AdminNoStartups />
      ) : (
        <StartupTable startups={startups} />
      )}
    </div>
  );
};

export default AdminStartupsPage;

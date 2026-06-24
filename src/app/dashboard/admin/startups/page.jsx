import { getAllStarups } from "@/lib/api/startup";
import AdminNoStartups from "./AdminNoStartups";
import { StartupTable } from "./StartupTable";

const AdminStartupsPage = async () => {
  const startups = await getAllStarups();

  return (
    <div className="min-h-screen w-full overflow-x-hidden dark:bg-slate-950 px-4 py-6">
      {startups.length === 0 ? (
        <AdminNoStartups />
      ) : (
        <StartupTable startups={startups} />
      )}
    </div>
  );
};

export default AdminStartupsPage;

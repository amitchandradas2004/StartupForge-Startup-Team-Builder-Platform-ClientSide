import { getAllUsers } from "@/lib/api/user";
import AdminOverviewCards from "./AdminOverviewCards";
import { getAllStarups } from "@/lib/api/startup";
import { getAllOpportunities } from "@/lib/api/opportunity";

const AdminPage = async () => {
  const users = await getAllUsers();
  const startups = await getAllStarups();
  const opportunities = await getAllOpportunities();

  const stats = {
    totalUsers: users.length,
    totalStartups: startups.length,
    totalOpportunities: opportunities.length,
    totalRevenue: 0, // update later when payments are implemented
  };

  return <AdminOverviewCards stats={stats} />;
};

export default AdminPage;

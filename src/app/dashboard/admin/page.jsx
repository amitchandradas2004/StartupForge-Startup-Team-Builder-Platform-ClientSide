import { getAllUsers } from "@/lib/api/user";
import AdminOverviewCards from "../../../components/dashboard/admin/AdminOverviewCards";
import { getAllStarups } from "@/lib/api/startup";
import { getAllOpportunities } from "@/lib/api/opportunity";
import { getAllTransactions } from "@/lib/api/transaction";

const AdminPage = async () => {
  const users = await getAllUsers();
  const startups = await getAllStarups();
  const opportunities = await getAllOpportunities();
  const transactions = await getAllTransactions();
  const totalRevenue = transactions.reduce(
    (sum, transaction) => sum + Number(transaction.amount || 0),
    0,
  );
  const stats = {
    totalUsers: users.length,
    totalStartups: startups.length,
    totalOpportunities: opportunities.length,
    totalRevenue: totalRevenue, // update later when payments are implemented
  };

  return <AdminOverviewCards stats={stats} />;
};

export default AdminPage;

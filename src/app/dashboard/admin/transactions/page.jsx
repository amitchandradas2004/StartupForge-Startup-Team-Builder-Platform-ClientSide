import { getAllTransactions } from "@/lib/api/transaction";
import AdminNoTransactions from "./AdminNoTransactions";
import { TransactionTable } from "./TransactionTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const AdminTransactionPage = async () => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) {
      redirect("/login");
    }
    if (session?.user?.role !== "admin") {
      redirect("/unauthorized");
    }
  const transactions = await getAllTransactions();
  return (
    <div className="min-h-screen w-full overflow-x-hidden dark:bg-slate-950 px-4 py-10">
      {transactions.length === 0 ? <AdminNoTransactions /> : <TransactionTable transactions={transactions}/>}
    </div>
  );
};

export default AdminTransactionPage;

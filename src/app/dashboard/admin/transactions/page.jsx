import { getAllTransactions } from "@/lib/api/transaction";
import AdminNoTransactions from "./AdminNoTransactions";
import { TransactionTable } from "./TransactionTable";
const AdminTransactionPage = async () => {
  const transactions = await getAllTransactions();
  return (
    <div className="min-h-screen w-full overflow-x-hidden dark:bg-slate-950 px-4 py-10">
      {transactions.length === 0 ? <AdminNoTransactions /> : <TransactionTable transactions={transactions}/>}
    </div>
  );
};

export default AdminTransactionPage;

import { getAllUsers } from "@/lib/api/user";
import { UsersTable } from "./UsersTable";
import AdminNoUsers from "./AdminNoUsers";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AdminManageUsersPage = async () => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) {
      redirect("/login");
    }
    if (session?.user?.role !== "admin") {
      redirect("/unauthorized");
    }
  const users = await getAllUsers();

  return (
    <div className="min-h-screen w-full overflow-x-hidden dark:bg-slate-950 px-4 py-6">
      {users.length === 0 ? (
        <AdminNoUsers />
      ) : (
        <div className="w-full overflow-x-auto">
          <UsersTable users={users} />
        </div>
      )}
    </div>
  );
};

export default AdminManageUsersPage;

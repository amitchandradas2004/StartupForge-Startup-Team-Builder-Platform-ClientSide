import { getAllUsers } from "@/lib/api/user";
import React from "react";
import { UsersTable } from "./UsersTable";
import AdminNoUsers from "./AdminNoUsers";

const AdminManageUsersPage = async () => {
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
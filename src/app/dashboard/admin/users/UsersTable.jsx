"use client";
import { updateUserStatus } from "@/lib/actions/user";
import { Table } from "@heroui/react";
import { motion } from "framer-motion";

export function UsersTable({ users }) {
  const handleUnblock = async (id) => {
    const result = await updateUserStatus(id, {
      status: "active",
    });
    if (result.modifiedCount > 0) {
      toast.success("User activated successfully");
    }
  };

  const handleBlock = async (id) => {
    const result = await updateUserStatus(id, {
      status: "blocked",
    });
    if (result.modifiedCount > 0) {
      toast.success("User blocked successfully");
    }
  };
  return (
    <div className="w-full h-screen pb-10 px-3">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-6 flex flex-col md:flex-row items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-900 px-6 py-4 shadow-sm"
      >
        {/* Left text */}
        <div className="text-center md:text-start">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-sm font-medium text-slate-500 dark:text-slate-400"
          >
            Users Management
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="text-lg font-semibold text-slate-900 dark:text-white"
          >
            Manage all registered users
          </motion.p>
        </div>

        {/* Right KPI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="text-right">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Total Users
            </p>

            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="text-2xl font-bold text-slate-900 dark:text-white  text-center md:text-end"
            >
              {users?.length || 0}
            </motion.p>
          </div>

          {/* accent bar */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="w-1 rounded-full bg-indigo-600"
          />
        </motion.div>
      </motion.div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Users Table" className="">
            <Table.Header>
              <Table.Column isRowHeader>Number</Table.Column>
              <Table.Column>Name</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Plan</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Joined</Table.Column>
              <Table.Column>Block</Table.Column>
              <Table.Column>Unblock</Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map((user, index) => (
                <Table.Row
                  key={user?.email}
                  className="table-row-animate table-row-hover"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{user?.name}</Table.Cell>
                  <Table.Cell>{user?.role}</Table.Cell>
                  <Table.Cell>{user?.plan}</Table.Cell>
                  <Table.Cell>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        user?.status === "active"
                          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                          : user?.status === "blocked"
                            ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {user?.status}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    {new Date(user?.createdAt).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      disabled={user.status === "blocked"}
                      onClick={() => handleBlock(user._id)}
                      className={`px-3 py-1 text-sm font-medium text-white rounded-full btn-scale ${
                        user.status === "blocked"
                          ? "bg-red-400 cursor-not-allowed opacity-80"
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                    >
                      Block
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      disabled={user.status === "active"}
                      onClick={() => handleUnblock(user._id)}
                      className={`px-3 py-1 text-sm font-medium text-white rounded-full btn-scale ${
                        user.status === "active"
                          ? "bg-green-400 cursor-not-allowed opacity-80"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      Unblock
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}

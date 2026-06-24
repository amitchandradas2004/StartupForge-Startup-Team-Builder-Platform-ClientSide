"use client";
import { Table } from "@heroui/react";
import { motion } from "framer-motion";
export function TransactionTable({ transactions }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-6 flex flex-col md:flex-row items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 shadow-sm"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mt-1 text-xl font-bold text-slate-900 dark:text-white"
          >
            Users Transaction History
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mt-1 text-sm text-slate-600 dark:text-slate-400"
          >
            Monitor all subscription payments and transaction records across the
            platform.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="mt-4 md:mt-0 flex items-center gap-3"
        >
          <div className="text-right">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Total Transactions
            </p>

            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="text-2xl font-bold text-emerald-600"
            >
              {transactions.length}
            </motion.p>
          </div>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="w-1 rounded-full bg-emerald-600"
          />
        </motion.div>
      </motion.div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="All Transactions">
            <Table.Header>
              <Table.Column isRowHeader>Number</Table.Column>
              <Table.Column>User Name</Table.Column>
              <Table.Column>User Email</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Amount</Table.Column>
              <Table.Column>Data</Table.Column>
              <Table.Column>Payment Status</Table.Column>
            </Table.Header>
            <Table.Body>
              {transactions.map((transaction, index) => (
                <Table.Row
                  key={transaction._id}
                  className="table-row-animate table-row-hover"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <Table.Cell>{index + 1}</Table.Cell>
                 <Table.Cell>
  <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1">
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
      {transaction?.userName?.charAt(0).toUpperCase()}
    </div>

    <span className="font-medium text-indigo-700 dark:text-indigo-400">
      {transaction?.userName}
    </span>
  </div>
</Table.Cell>
                  <Table.Cell>
                    <div className="inline-flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        {transaction?.userEmail}
                      </span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        transaction?.userRole === "admin"
                          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                          : transaction?.userRole === "founder"
                            ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400"
                            : transaction?.userRole === "collaborator"
                              ? "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400"
                              : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {transaction?.userRole}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="inline-flex items-center rounded-lg bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1">
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                        ${transaction?.amount}
                      </span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="inline-flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {new Date(transaction?.createdAt).toLocaleString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        },
                      )}
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        transaction?.status === "completed"
                          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                          : transaction?.status === "pending"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                            : transaction?.status === "failed"
                              ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                              : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {transaction?.status}
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </>
  );
}

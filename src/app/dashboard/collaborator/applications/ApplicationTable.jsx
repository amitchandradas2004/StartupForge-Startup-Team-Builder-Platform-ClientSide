import { Table } from "@heroui/react";
import Link from "next/link";

export function ApplicationTable({ applications }) {
  return (
    <>
      <div className="flex flex-col md:flex-row mb-5 md:items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm table-row-animate table-row-hover">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            My Applications
          </h1>

          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Track the status of all your submitted applications.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-indigo-50 dark:bg-indigo-500/10 px-4 py-3">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Total Applications
            </p>

            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {applications.length}
            </h2>
          </div>

          <Link href="/browseOpportunities">
            <button className="rounded-xl bg-indigo-600 px-4 py-3 text-white font-medium hover:bg-indigo-700 transition-colors">
              Apply More
            </button>
          </Link>
        </div>
      </div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content
            aria-label="Collaborator Application Table"
            className=""
          >
            <Table.Header>
              <Table.Column isRowHeader>Number</Table.Column>
              <Table.Column>Opportunity Name</Table.Column>
              <Table.Column>Startup Name</Table.Column>
              <Table.Column>Applied Date</Table.Column>
              <Table.Column>Status</Table.Column>
            </Table.Header>
            <Table.Body>
              {applications.map((application, index) => (
                <Table.Row
                  key={application._id}
                  className="table-row-animate table-row-hover"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{application.opportunityName}</Table.Cell>
                  <Table.Cell>Startup Name</Table.Cell>
                  <Table.Cell>
                    {new Date(application.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      },
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        application.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : application.status === "accepted"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {application.status}
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

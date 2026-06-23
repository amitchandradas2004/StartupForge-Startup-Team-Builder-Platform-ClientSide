import { Table } from "@heroui/react";
import Link from "next/link";
import { FaRightLong } from "react-icons/fa6";

export function ApplicationTable({ applications }) {
  return (
    <>
      <div className="mb-6 flex flex-col md:flex-row text-center md:text-start items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            My Applications
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Track the status of all your submitted applications.
          </p>
        </div>

        <Link href="/browseOpportunities">
          <button className="rounded-xl bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition-colors duration-300 flex items-center gap-2">
            Apply for More Opportunities <FaRightLong />
          </button>
        </Link>
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
                <Table.Row key={application._id}>
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
                          : application.status === "approved"
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

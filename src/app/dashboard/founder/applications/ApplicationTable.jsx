import { Table } from "@heroui/react";

export function ApplicationTable({ applications }) {
  return (
    <>
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm mb-5">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          📋 Founder Application Management Dashboard
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Total Applications Received:{" "}
          <span className="font-semibold text-indigo-600">
            {applications.length}
          </span>
        </p>
      </div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Collaborator Application Table">
            <Table.Header>
              <Table.Column isRowHeader>Number</Table.Column>
              <Table.Column>Opportunity Name</Table.Column>
              <Table.Column>Applied Date</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Accept</Table.Column>
              <Table.Column>Reject</Table.Column>
            </Table.Header>

            <Table.Body>
              {applications.map((application, index) => (
                <Table.Row key={application._id}>
                  <Table.Cell>{index + 1}</Table.Cell>

                  <Table.Cell>{application.opportunityName}</Table.Cell>

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

                  {/* Accept Button */}
                  <Table.Cell>
                    <button className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-600 transition">
                      Accept
                    </button>
                  </Table.Cell>

                  {/* Reject Button */}
                  <Table.Cell>
                    <button className="px-4 py-2 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-600 transition">
                      Reject
                    </button>
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

import { Table } from "@heroui/react";

export function UsersTable({ users }) {
  return (
    <div className=" w-full h-screen py-10 px-3">
      <div className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        Manage all users from this table:{" "}
        <span className="text-indigo-500">{users.length || 0}</span>
      </div>
      <Table className="">
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
                <Table.Row key={user?.email}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{user?.name}</Table.Cell>
                  <Table.Cell>{user?.role}</Table.Cell>
                  <Table.Cell>{user?.plan}</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
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
                    <button className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition">
                      Block
                    </button>
                  </Table.Cell>

                  <Table.Cell>
                    <button className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition">
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

import { Button, Table } from "@heroui/react";

export function StartupTable({ startups }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="w-full">
          <Table.Header>
            <Table.Column isRowHeader>Number</Table.Column>
            <Table.Column>Name</Table.Column>
            <Table.Column>Industry</Table.Column>
            <Table.Column>Funding-Stage</Table.Column>
            <Table.Column>description</Table.Column>
            <Table.Column>Update</Table.Column>
            <Table.Column>Delete</Table.Column>
          </Table.Header>
          <Table.Body>
            {startups.map((startup, index) => (
              <Table.Row key={startup._id}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{startup.startUpName}</Table.Cell>
                <Table.Cell>{startup.industry}</Table.Cell>
                <Table.Cell>{startup.funding_stage}</Table.Cell>
                <Table.Cell>{startup.description}</Table.Cell>
                <Table.Cell>
                  <Button variant="secondary">Update</Button>
                </Table.Cell>
                <Table.Cell>
                  <Button variant="danger">Delete</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}

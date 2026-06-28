import { Button, Table } from "@heroui/react";

export function UserTable({ hiring }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>lawyerName</Table.Column>
            <Table.Column>Fee</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>payment</Table.Column>
            <Table.Column>Date</Table.Column>
            <Table.Column>pay</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{hiring.lawyerName}</Table.Cell>
              <Table.Cell>Fee: ৳{hiring.consultationFee}</Table.Cell>
              <Table.Cell>Status: {hiring.status}</Table.Cell>
              <Table.Cell>Payment: {hiring.paymentStatus}</Table.Cell>
              <Table.Cell>
                {" "}
                Hire Date: {new Date(hiring.hireDate).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell>
                {hiring.status === "accepted" &&
                hiring.paymentStatus === "unpaid" ? (
                  <Button color="success">Pay Now</Button>
                ) : hiring.paymentStatus === "paid" ? (
                  <Button color="success" isDisabled>
                    Paid
                  </Button>
                ) : (
                  "-"
                )}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}

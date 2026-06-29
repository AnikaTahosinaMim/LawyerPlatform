"use client";

import { Table } from "@heroui/react";

export default function TransactionsTable({ transactions }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content className="min-w-[900px]">
          <Table.Header>
            <Table.Column isRowHeader>Transaction ID</Table.Column>
            <Table.Column>User Email</Table.Column>
            <Table.Column>Lawyer Email</Table.Column>
            <Table.Column>Amount</Table.Column>
            <Table.Column>Date</Table.Column>
            <Table.Column>Status</Table.Column>
          </Table.Header>

          <Table.Body>
            {transactions.map((item) => (
              <Table.Row key={item._id}>
                <Table.Cell>{item._id}</Table.Cell>

                <Table.Cell>{item.userEmail}</Table.Cell>

                <Table.Cell>{item.lawyerEmail}</Table.Cell>

                <Table.Cell>৳ {item.consultationFee}</Table.Cell>

                <Table.Cell>
                  {new Date(item.hireDate).toLocaleDateString()}
                </Table.Cell>

                <Table.Cell>{item.paymentStatus}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}

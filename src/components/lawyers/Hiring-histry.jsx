"use client";

import { updateHiringStatus } from "@/lib/api/hiring";
import { Button, Table } from "@heroui/react";
import toast from "react-hot-toast";

const HiringTable = ({ hirings,setHirings }) => {
  const handleStatus = async (id, status) => {
    const result = await updateHiringStatus(id, status);

    if (result.modifiedCount > 0) {
      toast.success(`Request ${status}`);

      setHirings((prev) =>
        prev.map((item) => (item._id === id ? { ...item, status } : item)),
      );
    }
  };
  return (
    <Table aria-label="Hiring Requests">
      <Table.ScrollContainer>
        <Table.Content className="min-w-[900px]">
          <Table.Header>
            <Table.Column isRowHeader>Client Name</Table.Column>
            <Table.Column>Client Email</Table.Column>
            <Table.Column>Fee</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Payment</Table.Column>
            <Table.Column>Hire Date</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>

          <Table.Body>
            {hirings.map((hiring) => (
              <Table.Row key={hiring._id}>
                <Table.Cell>{hiring.userName}</Table.Cell>

                <Table.Cell>{hiring.userEmail}</Table.Cell>

                <Table.Cell>৳ {hiring.consultationFee}</Table.Cell>

                <Table.Cell>{hiring.status}</Table.Cell>

                <Table.Cell>{hiring.paymentStatus}</Table.Cell>

                <Table.Cell>
                  {new Date(hiring.hireDate).toLocaleDateString()}
                </Table.Cell>

                <Table.Cell>
                  {hiring.status === "pending" ? (
                    <div className="flex gap-2">
                      <Button
                        color="success"
                        size="sm"
                        onPress={() => handleStatus(hiring._id, "accepted")}
                      >
                        Accept
                      </Button>

                      <Button
                        color="danger"
                        size="sm"
                        onPress={() => handleStatus(hiring._id, "rejected")}
                      >
                        Reject
                      </Button>
                    </div>
                  ) : (
                    hiring.status
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default HiringTable;

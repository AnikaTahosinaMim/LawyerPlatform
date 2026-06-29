"use client";

import { changeRole, deleteUser } from "@/lib/api/hiring";
import { Button, Table } from "@heroui/react";
// import { deleteUser } from "better-auth/api";
// import { changeRole, deleteUser } from "@/lib/api/users";
import toast from "react-hot-toast";

const roles = ["user", "lawyer", "admin"];

export default function ManageUsersTable({ users, refresh }) {
  const handleRole = async (id, role) => {
    await changeRole(id, role);

    toast.success("Role Updated");

    refresh();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);

    const result = await deleteUser(id);

    console.log(result);

    toast.success("User Deleted");

    refresh();
  };
  console.log(users, "dtattaattat");

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content className="min-w-[900px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Change Role</Table.Column>
            <Table.Column>Delete</Table.Column>
          </Table.Header>

          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user._id}>
                <Table.Cell>{user.name}</Table.Cell>

                <Table.Cell>{user.email}</Table.Cell>

                <Table.Cell>{user.role}</Table.Cell>

                <Table.Cell>
                  <select
                    defaultValue={user.role}
                    onChange={(e) => handleRole(user._id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    {roles.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </Table.Cell>

                <Table.Cell>
                  <Button
                    color="danger"
                    size="sm"
                    onPress={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}

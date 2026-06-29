"use client";

import { useEffect, useState } from "react";
// import { getUsers } from "@/lib/api/users";
import ManageUsersTable from "@/components/dashboard/admin/ManageUsersTable";
import { getUsers } from "@/lib/api/hiring";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage Users</h2>

      <ManageUsersTable
        users={users}
        refresh={loadUsers}
      />
    </div>
  );
}
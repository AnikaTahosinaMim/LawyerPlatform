"use client";

import { useEffect, useState } from "react";
import { getTransactions } from "@/lib/api/hiring";
import TransactionsTable from "@/components/dashboard/admin/TransactionsTable";

export default function AllTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((data) => {
      setTransactions(data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">All Transactions</h2>

      <TransactionsTable transactions={transactions} />
    </div>
  );
}

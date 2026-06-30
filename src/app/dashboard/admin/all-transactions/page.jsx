"use client";

import { useEffect, useState } from "react";
import { getTransactions } from "@/lib/api/hiring";

export default function AllTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((data) => {
      console.log("DATA:", data);
      setTransactions(data);
    });
  }, []);

  return (
    <div>
      <h1>Transactions</h1>

      <p>Total = {transactions.length}</p>

      <pre>{JSON.stringify(transactions, null, 2)}</pre>
    </div>
  );
}
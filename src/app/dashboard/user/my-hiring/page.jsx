"use client";

import { UserTable } from "@/components/dashboard/user/UserTable";
import { getMyHirings } from "@/lib/api/hiring";
import { useSession } from "@/lib/auth-client";
import { Table } from "lucide-react";
import { useEffect, useState } from "react";

const MyHiringPages = () => {
  const { data: session } = useSession();
  const [hirings, setHirings] = useState([]);

  console.log(session, "session");
  useEffect(() => {
    if (session?.user?.email) {
      getMyHirings(session.user.email).then((data) => {
        setHirings(data);
      });
    }
  }, [session]);
  console.log(hirings, "hiringsss");
  return (
    <div>
      <h2 className="text-2xl font-bold">My Hiring Requests</h2>
      {hirings.map((hiring) => (
        <UserTable key={hiring._id} hiring={hiring}></UserTable>
      ))}
    </div>
  );
};

export default MyHiringPages;

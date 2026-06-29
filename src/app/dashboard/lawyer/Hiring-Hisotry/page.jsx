"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
// import { getLawyerHirings } from "@/lib/api/hiring";
import HiringTable from "@/components/lawyers/Hiring-histry";
import { getLawyerHirings } from "@/lib/api/hiring";
// import HiringTable from "@/components/lawyers/HiringTable";

const LawyerHiringRequests = () => {
  const { data: session } = useSession();

  const [hirings, setHirings] = useState([]);

  useEffect(() => {
    if (session?.user?.email) {
      getLawyerHirings(session.user.email).then((data) => {
        setHirings(data);
      });
    }
  }, [session]);
  console.log(hirings, "datas");
  console.log(session?.user?.email);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Hiring Requests</h2>

      {hirings.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No hiring requests found.
        </div>
      ) : (
        <HiringTable hirings={hirings} setHirings={setHirings} />
      )}
    </div>
  );
};

export default LawyerHiringRequests;

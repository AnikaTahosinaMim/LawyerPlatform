"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const hiringId = searchParams.get("hiringId");

    if (!hiringId) return;

    fetch(`https://lawyerplatform.vercel.app/hirings/payment/${hiringId}`, {
      method: "PATCH",
    }).then(() => {
      setTimeout(() => {
        router.push("/dashboard/user/my-hiring");
      }, 2000);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-green-600">
        Payment Successful ✅
      </h1>

      <p className="mt-4">
        Updating your payment status...
      </p>
    </div>
  );
}
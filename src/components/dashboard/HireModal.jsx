"use client";

import { AlertDialog, Button, Avatar } from "@heroui/react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const HireDialog = ({ lawyer }) => {
  const { data: session } = useSession();
  const router = useRouter();

const handleConfirm = async () => {
  if (!session) {
    router.push("/signin");
    return;
  }

  if (session.user.role !== "user") {
    toast.error("Only users can hire lawyers.");
    return;
  }

  const hiringData = {
    lawyerId: lawyer._id,
    lawyerName: lawyer.name,
    lawyerEmail: lawyer.email,
    userName: session.user.name,
    userEmail: session.user.email,
    consultationFee: lawyer.consultationFee,
    hireDate: new Date(),
  };

  try {
    const res = await fetch("https://lawyerplatform.vercel.app/hirings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hiringData),
    });

    const data = await res.json();

    console.log("Status:", res.status);
    console.log("Response:", data);

    if (!res.ok) {
      toast.error(data.message || "Something went wrong!");
      return;
    }

    toast.success("Hiring request sent successfully!");
  } catch (error) {
    console.error("Hire Error:", error);
    toast.error("Network Error!");
  }
};

  return (
    <AlertDialog>
      <Button color="primary">Hire Me</Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[450px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <Avatar src={lawyer.photo} className="w-16 h-16" />

              <AlertDialog.Heading>Hire {lawyer.name}?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <div className="space-y-2">
                <p>
                  <strong>Specialization:</strong> {lawyer.specialization}
                </p>

                <p>
                  <strong>Consultation Fee:</strong> ৳{lawyer.consultationFee}
                  /hour
                </p>

                <p>
                  <strong>Status:</strong> {lawyer.status}
                </p>

                <p className="pt-3">
                  Are you sure you want to send a hiring request?
                </p>
              </div>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button slot="close" color="primary" onPress={handleConfirm}>
                Confirm Hire
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default HireDialog;

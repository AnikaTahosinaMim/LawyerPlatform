"use client";

import { AlertDialog, Button, Avatar } from "@heroui/react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const HireDialog = ({ lawyer }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleConfirm = () => {
    if (!session) {
      router.push("/signin");
      return;
    }

    if (session?.user?.role !== "user") {
      toast.error("Only users can hire lawyers.");
      return;
    }

    toast.success("Hiring request sent.");
    console.log("POST API CALL");
  };

  return (
    <AlertDialog>
      {/* এই একটাই Hire Button থাকবে */}
      <Button color="primary">
        Hire Me
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[450px]">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <Avatar
                src={lawyer.photo}
                className="w-16 h-16"
              />

              <AlertDialog.Heading>
                Hire {lawyer.name}?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <div className="space-y-2">

                <p>
                  <strong>Specialization:</strong>{" "}
                  {lawyer.specialization}
                </p>

                <p>
                  <strong>Consultation Fee:</strong> ৳
                  {lawyer.consultationFee}/hour
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

              <Button
                slot="close"
                variant="secondary"
              >
                Cancel
              </Button>

              <Button
                slot="close"
                color="primary"
                onPress={handleConfirm}
              >
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
"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import {
  getLawyerProfile,
  updateLawyerProfile,
} from "@/lib/api/hiring";
import { imageUpload } from "@/lib/imageUpload";
import { Button, Input, Textarea } from "@heroui/react";
import toast from "react-hot-toast";

export default function ManageLegalProfile() {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);

  const [lawyer, setLawyer] = useState({
    name: "",
    photo: "",
    specialization: "",
    bio: "",
    consultationFee: "",
    location: "",
    status: "",
  });

  useEffect(() => {
    if (session?.user?.email) {
      getLawyerProfile(session.user.email).then((data) => {
        setLawyer(data);
      });
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let photo = lawyer.photo;

      if (photoFile) {
        photo = await imageUpload(photoFile);
      }

      await updateLawyerProfile(lawyer._id, {
        ...lawyer,
        photo,
      });

      toast.success("Profile Updated");
    } catch (err) {
      console.log(err);
      toast.error("Update Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Manage Legal Profile
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <Input
          label="Lawyer Name"
          value={lawyer.name || ""}
          onChange={(e) =>
            setLawyer({
              ...lawyer,
              name: e.target.value,
            })
          }
        />

        <Input
          label="Specialization"
          value={lawyer.specialization || ""}
          onChange={(e) =>
            setLawyer({
              ...lawyer,
              specialization: e.target.value,
            })
          }
        />

        <Input
          label="Consultation Fee"
          type="number"
          value={lawyer.consultationFee || ""}
          onChange={(e) =>
            setLawyer({
              ...lawyer,
              consultationFee: Number(e.target.value),
            })
          }
        />

        <Input
          label="Location"
          value={lawyer.location || ""}
          onChange={(e) =>
            setLawyer({
              ...lawyer,
              location: e.target.value,
            })
          }
        />

        <Input
          label="Status"
          value={lawyer.status || ""}
          onChange={(e) =>
            setLawyer({
              ...lawyer,
              status: e.target.value,
            })
          }
        />

        <Textarea
          label="Bio"
          value={lawyer.bio || ""}
          onChange={(e) =>
            setLawyer({
              ...lawyer,
              bio: e.target.value,
            })
          }
        />

        <div>
          <p className="mb-2 font-medium">
            Current Photo
          </p>

          <img
            src={lawyer.photo}
            className="w-32 h-32 rounded-xl object-cover"
            alt=""
          />
        </div>

        <div>
          <label className="font-medium">
            Upload New Photo
          </label>

          <input
            type="file"
            className="mt-2"
            accept="image/*"
            onChange={(e) =>
              setPhotoFile(e.target.files[0])
            }
          />
        </div>

        <Button
          color="primary"
          type="submit"
          isLoading={loading}
          className="w-full"
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
}
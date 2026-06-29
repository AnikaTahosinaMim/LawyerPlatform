"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import toast from "react-hot-toast";
import { getUserProfile, updateUserProfile } from "@/lib/api/hiring";
import { imageUpload } from "@/lib/imageUpload";

export default function UserProfile() {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);

  const [imageFile, setImageFile] = useState(null);

  const [user, setUser] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (session?.user?.email) {
      getUserProfile(session.user.email).then((data) => {
        setUser(data);
      });
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let imageUrl = user.image;

      if (imageFile) {
        imageUrl = await imageUpload(imageFile);
      }

      await updateUserProfile(session.user.email, {
        name: user.name,
        image: imageUrl,
      });

      setUser({
        ...user,
        image: imageUrl,
      });

      toast.success("Profile Updated Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Update Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-8">Update Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full Name"
          value={user.name || ""}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />

        <div>
          <p className="mb-2 font-medium">Current Image</p>

          <img
            src={user.image}
            alt=""
            className="w-28 h-28 rounded-full object-cover border"
          />
        </div>

        <div>
          <label className="font-medium">Change Profile Picture</label>

          <input
            type="file"
            className="mt-2"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>

        <Button
          color="primary"
          type="submit"
          isLoading={loading}
          className="w-full"
        >
          Update Profile
        </Button>
      </form>
    </div>
  );
}

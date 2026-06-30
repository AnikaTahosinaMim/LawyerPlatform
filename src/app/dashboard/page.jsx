import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getUserProfile } from "@/lib/api/hiring";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session,"sesession,,,,")

  const user = await getUserProfile(session.user.email);

  return (
    <section className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex flex-col md:flex-row gap-8 items-center">

          <Image
            src={user.image}
            alt={user.name}
            width={140}
            height={140}
            className="rounded-full object-cover"
          />

          <div className="space-y-3">

            <h2 className="text-3xl font-bold">
              {user.name}
            </h2>

            <p className="text-gray-500">
              {user.email}
            </p>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full capitalize">
              {user.role}
            </span>

            <div className="pt-4">
              <Link
                href={
                  user.role === "lawyer"
                    ? "/dashboard/lawyer/manage-legal-profile"
                    : "/dashboard/user/update-profile"
                }
                className="bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Update Profile
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardPage;
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getUserProfile } from "@/lib/api/hiring";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = await getUserProfile(session.user.email);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center md:text-left">
        Dashboard
      </h1>

      <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-5 sm:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8">
          <Image
            src={user.image}
            alt={user.name}
            width={140}
            height={140}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover"
          />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold break-words">
              {user.name}
            </h2>

            <p className="text-gray-500 mt-2 break-all">
              {user.email}
            </p>

            <div className="mt-4">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full capitalize text-sm sm:text-base">
                {user.role}
              </span>
            </div>

            <div className="mt-6">
              <Link
                href={
                  user.role === "lawyer"
                    ? "/dashboard/lawyer/manage-legal-profile"
                    : "/dashboard/user/update-profile"
                }
                className="inline-flex justify-center items-center w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-xl font-medium"
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
import { lawyerDetails } from "@/lib/api/lawyer";
import Image from "next/image";
// import HireButton from "@/components/lawyers/HireButton";
import {
  Calendar,
  Briefcase,
  BadgeDollarSign,
  MapPin,
  Star,
} from "lucide-react";

const LawyersDetails = async ({ params }) => {
  const { id } = await params;

  const lawyer = await lawyerDetails(id);

  return (
    <section className="max-w-7xl mx-auto py-16 px-5">

      <div className="grid lg:grid-cols-2 gap-12 items-start">

        <div>

          <Image
            src={lawyer.photo}
            width={700}
            height={800}
            alt={lawyer.name}
            className="rounded-3xl object-cover w-full h-[600px]"
          />

        </div>

        <div>

          <div className="flex items-center gap-4">

            <h1 className="text-5xl font-black">
              {lawyer.name}
            </h1>

            <span
              className={`px-4 py-1 rounded-full text-white ${
                lawyer.status === "Available"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {lawyer.status}
            </span>

          </div>

          <div className="flex items-center gap-2 mt-4 text-blue-600 text-xl">

            <Briefcase size={20} />

            {lawyer.specialization}

          </div>

          <div className="flex items-center gap-2 mt-3 text-yellow-500">

            <Star fill="currentColor" />

            {lawyer.rating}

          </div>

          <p className="mt-8 text-gray-600 leading-8">

            {lawyer.bio}

          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-3">

              <BadgeDollarSign className="text-blue-600" />

              <span className="font-semibold">

                Consultation Fee :

              </span>

              ৳ {lawyer.consultationFee} / hour

            </div>

            <div className="flex items-center gap-3">

              <Calendar className="text-blue-600" />

              <span className="font-semibold">

                Joined :

              </span>

              {lawyer.dateJoined}

            </div>

            <div className="flex items-center gap-3">

              <MapPin className="text-blue-600" />

              {lawyer.location}

            </div>

          </div>

          <div className="mt-12">

            {/* <HireButton lawyer={lawyer} /> */}
            <h2>Hire</h2>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LawyersDetails;
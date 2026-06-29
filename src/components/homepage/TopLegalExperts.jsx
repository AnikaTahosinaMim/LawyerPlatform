import Image from "next/image";
import { Award } from "lucide-react";
import { getTopLawyers } from "@/lib/api/hiring";
// import { getTopLawyers } from "@/lib/api/lawyer";
// import { getTopLawyers } from "@/lib/api/lawyer";

const TopLegalExperts = async () => {
  const lawyers = await getTopLawyers();

  return (
    <section className="max-w-7xl mx-auto py-20 px-5">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Top Legal Experts</h2>

        <p className="text-gray-500 mt-3">
          Meet our most trusted lawyers based on hiring history.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {lawyers.map((lawyer) => (
          <div
            key={lawyer._id}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
          >
            <Image
              src={lawyer.photo}
              alt={lawyer.name}
              width={130}
              height={130}
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />

            <h3 className="text-2xl font-bold mt-6">{lawyer.name}</h3>

            <p className="text-blue-600 mt-2">{lawyer.specialization}</p>

            <div className="flex justify-center items-center gap-2 mt-5 text-yellow-500">
              <Award size={22} />

              <span className="font-semibold">{lawyer.hires} Hires</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopLegalExperts;

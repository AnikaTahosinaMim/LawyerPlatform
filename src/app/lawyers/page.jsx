import LawyerCard from "@/components/lawyers/LawyerCard";
import { LawyersData } from "@/lib/api/lawyer";
import Link from "next/link";
// import LawyerCard from "@/components/LawyerCard";

const ExploreLawyers = async () => {
  const lawyers = await LawyersData();

  if (!lawyers?.length) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-3xl font-bold">😔 No Lawyers Found</h2>
          <p className="text-gray-500 mt-2">
            No lawyers match your current filters.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <div className="text-center mb-14">
        <h1 className="text-5xl font-black">
          <Link href={"/lawyers"}>Explore Our Lawyers</Link>
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Find trusted legal experts across Bangladesh and book a consultation instantly.
        </p>
      </div>

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        gap-7
      "
      >
        {lawyers.map((lawyer) => (
          <LawyerCard
            key={lawyer._id}
            lawyer={lawyer}
          />
        ))}
      </div>

    </section>
  );
};

export default ExploreLawyers;
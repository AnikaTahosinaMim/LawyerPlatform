// import LawyerCard from "@/components/lawyers/LawyerCard";
import LawyerCard from "@/components/lawyers/LawyerCard";
import { LawyersData } from "@/lib/api/lawyer";
import Link from "next/link";

const ExploreLawyers = async ({ searchParams }) => {
  const params = await searchParams;

  const lawyers = await LawyersData(params);

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
          Find trusted legal experts across Bangladesh and book a consultation
          instantly.
        </p>
      </div>
      <form className="flex flex-wrap gap-4 mb-10">
        <input
          type="text"
          name="search"
          placeholder="Search Lawyer..."
          defaultValue={params.search}
          className="border px-4 py-3 rounded-xl flex-1"
        />

        <select
          name="specialization"
          defaultValue={params.specialization}
          className="border px-4 py-3 rounded-xl"
        >
          <option value="">All Specializations</option>
          <option value="Criminal Law">Criminal Law</option>
          <option value="Family Law">Family Law</option>
          <option value="Corporate Law">Corporate Law</option>
          <option value="Immigration Law">Immigration Law</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-8 rounded-xl"
        >
          Search
        </button>
        <Link
          href="/lawyers"
          className="bg-gray-200 px-6 py-3 rounded-xl hover:bg-gray-300"
        >
          Reset
        </Link>
      </form>

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
          <LawyerCard key={lawyer._id} lawyer={lawyer} />
        ))}
      </div>
    </section>
  );
};

export default ExploreLawyers;

import Link from "next/link";
import {
  Scale,
  Briefcase,
  Users,
  Globe,
} from "lucide-react";

const categories = [
  {
    title: "Criminal Law",
    icon: Scale,
  },
  {
    title: "Corporate Law",
    icon: Briefcase,
  },
  {
    title: "Family Law",
    icon: Users,
  },
  {
    title: "Immigration Law",
    icon: Globe,
  },
];

const LegalCategories = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-5">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Legal Categories
        </h2>

        <p className="text-gray-500 mt-3">
          Find lawyers based on your legal needs.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.title}
              href={`/lawyers?specialization=${encodeURIComponent(
                category.title
              )}`}
              className="group border rounded-2xl p-8 text-center hover:bg-blue-600 hover:text-white transition"
            >
              <Icon
                size={45}
                className="mx-auto mb-5 group-hover:scale-110 transition"
              />

              <h3 className="font-bold text-lg">
                {category.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LegalCategories;
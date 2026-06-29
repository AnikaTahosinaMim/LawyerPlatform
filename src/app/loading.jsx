export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <div className="h-12 w-72 bg-gray-200 rounded animate-pulse mb-12"></div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border rounded-3xl overflow-hidden">
            <div className="h-72 bg-gray-200 animate-pulse"></div>

            <div className="p-5 space-y-3">
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>

              <div className="h-5 bg-gray-200 rounded animate-pulse w-2/3"></div>

              <div className="h-5 bg-gray-200 rounded animate-pulse w-1/2"></div>

              <div className="h-10 bg-gray-200 rounded-xl animate-pulse mt-5"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-5">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="h-[600px] rounded-3xl bg-gray-200 animate-pulse"></div>

        <div className="space-y-6">
          <div className="h-12 w-72 bg-gray-200 rounded animate-pulse"></div>

          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>

          <div className="h-32 bg-gray-200 rounded animate-pulse"></div>

          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse"></div>

            <div className="h-6 bg-gray-200 rounded animate-pulse"></div>

            <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="h-12 w-44 bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

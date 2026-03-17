import { Skeleton } from "@/components/ui/skeleton";

const PartnersSectionSkeleton = () => {
  const list = Array.from({ length: 8 });

  return (
    <section className="bg-center bg-cover relative">
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="container sectionPadding relative z-10">
        {/* Section Title */}
        <div className="mb-6 lg:mb-12 flex justify-center">
          <Skeleton className="h-8 w-64" />
        </div>

        {/* Partner logos */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8">
          {list.map((_, index) => (
            <li
              key={index}
              className="bg-white shadow rounded-2xl border w-full aspect-video overflow-hidden p-4 flex items-center justify-center"
            >
              <Skeleton className="w-full h-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnersSectionSkeleton;

import { Skeleton } from "@/components/ui/skeleton";

const StatisticsSkeleton = () => {
  const list = Array.from({ length: 5 });

  return (
    <section className="bg-center bg-cover relative">
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="container sectionPadding relative z-10">
        {/* Section Title Skeleton */}
        <div className="flex flex-col items-center gap-2 mb-6 lg:mb-12">
          <Skeleton className="h-8 w-2/3 lg:w-1/3 rounded-md" />
          <Skeleton className="h-4 w-1/2 lg:w-1/4 rounded-md" />
          <Skeleton className="h-2 w-1/3 lg:w-1/6 mt-2 rounded-full" />
        </div>

        {/* Statistics Cards Skeleton */}
        <ul className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {list.map((_, index) => (
            <li
              key={index}
              className="w-45 md:w-50 flex flex-col gap-2 p-3 shadow rounded-md bg-white"
            >
              <div className="flex items-center justify-between gap-2">
                <Skeleton className="h-8 w-16 rounded-md" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>

              <Skeleton className="h-4 w-3/4 mt-2 rounded-md" />
              <Skeleton className="h-3 w-full mt-1 rounded-md" />
              <Skeleton className="h-3 w-full mt-1 rounded-md" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StatisticsSkeleton;

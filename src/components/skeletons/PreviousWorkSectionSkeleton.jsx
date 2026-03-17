import { Skeleton } from "@/components/ui/skeleton";

const PreviousWorkSectionSkeleton = () => {
  const projects = Array.from({ length: 5 });

  return (
    <section>
      <div className="container sectionPadding">
        {/* Section Title Skeleton */}
        <div className="mb-6 lg:mb-12 flex flex-col items-center justify-center text-center gap-4 px-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-1 w-40 rounded-full" />
          <Skeleton className="h-4 w-64 mt-2" />
          <Skeleton className="h-10 w-36 mt-4 rounded-md" />
        </div>

        {/* Main Slider Skeleton */}
        <div className="relative w-full">
          <div className="flex gap-4 overflow-x-auto">
            {projects.map((_, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-[250px] flex flex-col gap-2"
              >
                <Skeleton className="h-40 w-full rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
              </div>
            ))}
          </div>

          {/* Arrows Skeleton */}
          <div className="hidden xl:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>

          {/* Mobile Arrows Skeleton */}
          <div className="flex items-center justify-center gap-4 mt-4 xl:hidden">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousWorkSectionSkeleton;

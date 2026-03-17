import { Skeleton } from "@/components/ui/skeleton";
import SectionTitle from "@/components/common/SectionTitle";

const TestimonialsSectionSkeleton = () => {
  const skeletonItems = Array.from({ length: 5 });

  return (
    <section>
      <div className="container sectionPadding">
        <SectionTitle title={<Skeleton className="h-6 w-48" />} />

        <div className="relative w-full">
          <div className="flex gap-4 overflow-x-auto">
            {skeletonItems.map((_, index) => (
              <div
                key={index}
                className="flex gap-2 bg-gray-50 rounded-md p-2 animate-pulse"
              >
                <div className="w-24 aspect-square p-2 rounded overflow-hidden bg-white">
                  <Skeleton className="w-full h-full" />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-10 aspect-square rounded-md overflow-hidden">
                      <Skeleton className="w-full h-full rounded-md" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-2 w-20" />
                    </div>
                  </div>
                </div>
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

export default TestimonialsSectionSkeleton;

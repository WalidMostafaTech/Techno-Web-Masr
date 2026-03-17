import { Skeleton } from "@/components/ui/skeleton";

const StartWithUsBannerSkeleton = () => {
  return (
    <section className="container sectionPadding">
      <div
        className="bg-center bg-cover w-full min-h-72 content-center p-8 
        flex flex-col md:flex-row items-center gap-4 lg:gap-10 rounded-3xl shadow relative overflow-hidden"
      >
        {/* Overlay Skeleton */}
        <div className="absolute inset-0 bg-primary/80" />

        {/* Image Skeleton */}
        <div className="w-full md:w-1/2 h-50 md:h-75 relative z-10 flex items-center justify-center">
          <Skeleton className="w-[70%] sm:w-[60%] md:w-[90%] h-full rounded-xl" />
        </div>

        {/* Text Skeleton */}
        <div className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start text-center md:text-start capitalize relative z-10">
          <Skeleton className="h-8 w-3/4 lg:w-2/3 rounded-md" />
          <Skeleton className="h-6 w-1/2 lg:w-1/3 rounded-md" />
          <Skeleton className="h-4 w-full lg:w-3/4 mt-2" />
          <Skeleton className="h-4 w-full lg:w-3/4 mt-1" />
          <Skeleton className="h-4 w-full lg:w-2/3 mt-1" />

          {/* Buttons Skeleton */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
            <Skeleton className="h-10 w-40 rounded-md" />
            <Skeleton className="h-10 w-40 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWithUsBannerSkeleton;

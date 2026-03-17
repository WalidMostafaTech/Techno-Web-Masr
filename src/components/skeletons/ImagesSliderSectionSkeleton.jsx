import { Skeleton } from "@/components/ui/skeleton";

const ImagesSliderSectionSkeleton = () => {
  const list = Array.from({ length: 4 });

  return (
    <section className="container pagePadding grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      {/* Text Content */}
      <div className="order-2 md:order-1 space-y-4">
        {/* Title */}
        <Skeleton className="h-7 w-2/3" />

        {/* Description */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
        <Skeleton className="h-4 w-3/4" />

        {/* Button */}
        <Skeleton className="h-10 w-40 rounded-md mt-4" />
      </div>

      {/* Images */}
      <div className="order-1 md:order-2 space-y-2">
        {/* Main Image */}
        <div className="rounded-xl overflow-hidden">
          <Skeleton className="w-full aspect-4/3" />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2">
          {list.map((_, index) => (
            <Skeleton key={index} className="w-full aspect-4/3 rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImagesSliderSectionSkeleton;

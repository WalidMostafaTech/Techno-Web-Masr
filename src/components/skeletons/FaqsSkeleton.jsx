import { Skeleton } from "../ui/skeleton";

const FaqsSkeleton = () => {
  const list = Array.from({ length: 5 });

  return (
    <section className="bg-center bg-cover relative">
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="container sectionPadding relative z-10">
        {/* Section Title */}
        <hgroup className="mb-6 lg:mb-12 flex flex-col items-center justify-center text-center gap-4 px-4">
          {/* Title */}
          <Skeleton className="h-6 w-40" />

          {/* Line */}
          <Skeleton className="w-32 lg:w-44 h-1 rounded-full" />

          {/* Description */}
          <Skeleton className="h-4 w-full max-w-3xl" />
          <Skeleton className="h-4 w-5/6 max-w-2xl" />

          {/* Button */}
          <Skeleton className="h-10 w-32 rounded-md" />
        </hgroup>

        <div className="flex items-start gap-4 lg:gap-8">
          {/* Accordion Skeleton */}
          <div className="flex-1 max-w-2xl mx-auto space-y-4">
            {list.map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg p-4 space-y-3">
                {/* Question */}
                <Skeleton className="h-5 w-3/4" />

                {/* Answer lines */}
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>

          {/* Image Skeleton */}
          <div className="w-1/3 aspect-4/3 hidden lg:block rounded-2xl shadow overflow-hidden">
            <Skeleton className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsSkeleton;

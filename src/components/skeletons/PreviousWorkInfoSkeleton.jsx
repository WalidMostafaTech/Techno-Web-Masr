import { Skeleton } from "@/components/ui/skeleton";

const PreviousWorkInfoSkeleton = () => {
  return (
    <section className="container sectionPadding flex flex-col-reverse md:flex-row gap-6 lg:gap-12">
      {/* Text Section */}
      <div className="flex-1 space-y-4">
        {/* Title */}
        <Skeleton className="h-7 w-2/3" />

        {/* Description */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      {/* Card Section */}
      <div className="w-full md:w-1/3 bg-white rounded-md shadow border p-4 flex flex-col text-center gap-2">
        {/* Image */}
        <Skeleton className="h-20 aspect-video mb-2 rounded-md" />

        {/* Title & Subtitle */}
        <Skeleton className="h-4 w-3/4 mx-auto" />
        <Skeleton className="h-3 w-2/3 mx-auto" />

        <hr className="my-2" />

        {/* Info List */}
        <ul className="flex flex-col gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <li
              key={index}
              className="w-full flex items-center justify-between gap-2"
            >
              <Skeleton className="h-3 w-1/4" />
              <Skeleton className="h-3 w-1/3" />
            </li>
          ))}
        </ul>

        <hr className="my-2" />

        {/* Icons */}
        <ul className="flex items-center justify-center flex-wrap gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index}>
              <Skeleton className="w-10 h-10 rounded-lg" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PreviousWorkInfoSkeleton;

import { Skeleton } from "../ui/skeleton";

const TechnologySectionSkeleton = () => {
  const list = Array.from({ length: 4 });

  return (
    <section className="sectionPadding">
      <div className="container space-y-8">
        {/* Title Skeleton */}
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-8 w-2/5 rounded-md" />
          <Skeleton className="h-2 w-1/5 rounded-full mt-1" />
        </div>

        {/* Cards Skeleton */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {list.map((_, index) => (
            <li
              key={index}
              className="bg-white shadow rounded-md border w-full aspect-video
              flex flex-col items-center text-center gap-2 p-4"
            >
              <Skeleton className="h-20 w-full mb-2 rounded-md" />
              <Skeleton className="h-4 w-3/4 rounded-md" />
            </li>
          ))}
        </ul>

        {/* Button Skeleton */}
        <Skeleton className="h-10 w-40 mx-auto rounded-md mt-4" />
      </div>
    </section>
  );
};

export default TechnologySectionSkeleton;

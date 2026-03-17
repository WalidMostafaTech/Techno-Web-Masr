import { Skeleton } from "../ui/skeleton";

const VisionAndMissionSkeleton = () => {
  const list = Array.from({ length: 3 });

  return (
    <section className="container sectionPadding">
      <hgroup className="mb-6 lg:mb-12 flex flex-col items-center justify-center text-center gap-4 px-4 animate-pulse">
        <Skeleton className="h-6 w-48" /> {/* Title */}
        <Skeleton className="h-0.5 w-32 bg-primary rounded-full" />{" "}
        {/* Divider */}
        <Skeleton className="h-3 w-64" /> {/* Description */}
      </hgroup>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {list.map((_, index) => (
          <li
            key={index}
            className="flex flex-col gap-2 bg-white text-primary shadow rounded-xl border p-3 animate-pulse"
          >
            <Skeleton className="text-3xl h-12 w-12" /> {/* Icon */}
            <Skeleton className="h-5 w-24" /> {/* Title */}
            <Skeleton className="h-3 w-full" /> {/* Description line 1 */}
            <Skeleton className="h-3 w-5/6" /> {/* Description line 2 */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VisionAndMissionSkeleton;

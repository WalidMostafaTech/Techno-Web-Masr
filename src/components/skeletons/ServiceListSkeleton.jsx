import { Skeleton } from "../ui/skeleton";

const ServiceListSkeleton = () => {
  const list = Array.from({ length: 6 }); // عدد الـ skeleton items اللي تحب تظهره

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {list.map((_, index) => (
        <li key={index}>
          <div className="flex flex-col items-start gap-3 border p-2 rounded-lg bg-white animate-pulse">
            <div className="w-full aspect-5/3 overflow-hidden rounded-md">
              <Skeleton className="w-full h-full rounded-md" /> {/* Image */}
            </div>
            <Skeleton className="h-5 w-3/4" /> {/* Title */}
            <Skeleton className="h-3 w-full" /> {/* Description */}
            <Skeleton className="h-4 w-1/2" /> {/* Link */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServiceListSkeleton;

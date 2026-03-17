import { Skeleton } from "../ui/skeleton";

const PreviousWorkListSkeleton = () => {
  const list = Array.from({ length: 8 }); // عدد الـ skeleton items اللي تحب تظهره

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {list.map((_, index) => (
        <li
          key={index}
          className="bg-cover bg-center rounded-lg w-full h-80 relative overflow-hidden animate-pulse"
        >
          <Skeleton className="absolute inset-0 rounded-lg" />{" "}
          {/* background image overlay */}
          <div className="relative z-10 p-4 h-full flex flex-col items-start justify-end gap-2">
            <Skeleton className="h-6 w-3/4" /> {/* Title */}
            <Skeleton className="h-3 w-5/6" /> {/* Description */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PreviousWorkListSkeleton;

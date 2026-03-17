import { Skeleton } from "../ui/skeleton";

const PartnersListSkeleton = () => {
  const list = Array.from({ length: 8 }); // عدد الـ skeleton items اللي تحب تظهره

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8">
      {list.map((_, index) => (
        <li
          key={index}
          className="bg-white shadow rounded-md border w-full aspect-video
          flex flex-col items-center text-center gap-2 p-4 animate-pulse"
        >
          <div className="h-20 aspect-video overflow-hidden mb-2">
            <Skeleton className="w-full h-full rounded-md" /> {/* Image */}
          </div>
          <Skeleton className="h-4 w-3/4" /> {/* Title */}
          <Skeleton className="h-3 w-5/6" /> {/* Description */}
        </li>
      ))}
    </ul>
  );
};

export default PartnersListSkeleton;

import { Skeleton } from "../ui/skeleton";

const WhyChooseUsSkeleton = () => {
  const list = Array.from({ length: 4 });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container sectionPadding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 place-items-center">
          <div className="flex flex-col gap-4 lg:gap-6 animate-pulse">
            <Skeleton className="h-6 w-48" /> {/* Sub-title */}
            <Skeleton className="h-3 w-full" /> {/* Paragraph line 1 */}
            <Skeleton className="h-3 w-5/6" /> {/* Paragraph line 2 */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {list.map((_, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-2 p-3 shadow rounded-md bg-primary text-white animate-pulse"
                >
                  <Skeleton className="text-2xl w-10 h-10 rounded-full" />{" "}
                  {/* Icon */}
                  <Skeleton className="h-4 w-24" /> {/* Title */}
                  <Skeleton className="h-3 w-32" /> {/* Description */}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-100 overflow-hidden hidden md:block animate-pulse">
            <Skeleton className="w-full h-full rounded drop-shadow-xl" />{" "}
            {/* Image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSkeleton;

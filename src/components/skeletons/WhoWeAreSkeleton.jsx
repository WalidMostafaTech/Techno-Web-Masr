import { Skeleton } from "../ui/skeleton";

const WhoWeAreSkeleton = () => {
  const list = Array.from({ length: 2 });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container sectionPadding">
        <hgroup className="mb-6 lg:mb-12 flex flex-col items-center justify-center text-center gap-4 px-4 animate-pulse">
          <Skeleton className="h-6 w-48" /> {/* Title */}
          <Skeleton className="h-0.5 w-32 bg-primary rounded-full" />{" "}
          {/* Divider */}
          <Skeleton className="h-3 w-64" /> {/* Description */}
        </hgroup>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8">
          <div className="col-span-1 md:col-span-2 aspect-12/9 md:aspect-11/12 overflow-hidden rounded-2xl shadow animate-pulse">
            <Skeleton className="w-full h-full rounded-2xl" />
          </div>

          <div className="flex flex-col gap-4 lg:gap-6 md:col-span-3 animate-pulse">
            <Skeleton className="h-6 w-3/4" /> {/* Sub-title */}
            <Skeleton className="h-3 w-full" /> {/* Paragraph line 1 */}
            <Skeleton className="h-3 w-full" /> {/* Paragraph line 2 */}
            <Skeleton className="h-3 w-5/6" /> {/* Paragraph line 3 */}
            <ul className="grid grid-cols-2 gap-4 md:gap-8">
              {list.map((_, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-2 text-primary animate-pulse"
                >
                  <Skeleton className="text-2xl w-10 h-10 rounded-full flex items-center justify-center" />{" "}
                  {/* Icon */}
                  <Skeleton className="h-4 w-24" /> {/* Title */}
                  <Skeleton className="h-3 w-32" /> {/* Description */}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-auto">
              <Skeleton className="h-10 w-32 rounded" /> {/* Button 1 */}
              <Skeleton className="h-10 w-32 rounded" /> {/* Button 2 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSkeleton;

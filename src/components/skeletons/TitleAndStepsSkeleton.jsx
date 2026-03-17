import { Skeleton } from "../ui/skeleton";

const TitleAndStepsSkeleton = () => {
  const steps = Array.from({ length: 4 });

  return (
    <section className={`sectionPadding`}>
      <div className="container space-y-8">
        <div className={`mb-4 flex flex-col gap-2 animate-pulse`}>
          <Skeleton className="h-6 w-3/4" /> {/* Title */}
          <Skeleton className="h-3 w-full" /> {/* Description line 1 */}
          <Skeleton className="h-3 w-5/6" /> {/* Description line 2 */}
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((_, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center gap-2 border rounded-md text-primary p-4 animate-pulse"
            >
              <Skeleton className="text-lg font-bold border-2 border-secondary rounded-full w-10 h-10 flex items-center justify-center" />
              <Skeleton className="h-4 w-20" /> {/* Step title */}
              <Skeleton className="h-3 w-24" /> {/* Step description */}
            </li>
          ))}
        </ul>
        <Skeleton className="h-10 w-32 mx-auto rounded" /> {/* Button */}
      </div>
    </section>
  );
};

export default TitleAndStepsSkeleton;

import { Skeleton } from "@/components/ui/skeleton";

const MobileAndStepsSkeleton = () => {
  const list = Array.from({ length: 4 });

  return (
    <section className="sectionPadding relative">
      <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container grid grid-cols-1 md:grid-cols-5 gap-16 relative z-10">
        {/* Content */}
        <div className="space-y-4 lg:space-y-12 md:col-span-3">
          {/* Title & Description */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-start">
            <Skeleton className="h-7 w-2/3" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>

          {/* Steps */}
          <ul className="grid grid-cols-2 gap-4">
            {list.map((_, index) => (
              <li
                key={index}
                className="flex flex-col items-center text-center gap-3 border rounded-md p-4"
              >
                {/* Number circle */}
                <Skeleton className="w-10 h-10 rounded-full" />

                {/* Title */}
                <Skeleton className="h-4 w-3/4" />

                {/* Description */}
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Skeleton className="h-10 w-40 rounded-md" />
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-125 hidden md:block md:col-span-2">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default MobileAndStepsSkeleton;

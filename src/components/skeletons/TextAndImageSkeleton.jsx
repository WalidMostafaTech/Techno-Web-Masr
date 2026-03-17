import { Skeleton } from "../ui/skeleton";

const TextAndImageSkeleton = ({
  backgroundImage = null,
  yellowCircle = false,
  imageFirst = false,
}) => {
  return (
    <section
      className={`sectionPadding relative ${backgroundImage ? "bg-cover bg-center bg-no-repeat my-10" : ""}`}
      style={{
        background: backgroundImage && `url(${backgroundImage})`,
      }}
    >
      {yellowCircle && (
        <div className="absolute top-1/2 inset-s-0 -translate-y-1/2 -z-10 w-[80%] h-full bg-secondary/20 rounded-full blur-[120px]" />
      )}

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 relative z-10">
        <div
          className={`${imageFirst ? "md:order-2" : ""} flex flex-col gap-4 animate-pulse`}
        >
          <Skeleton className="h-6 w-3/4" /> {/* Title */}
          <Skeleton className="h-3 w-full" /> {/* Description line 1 */}
          <Skeleton className="h-3 w-full" /> {/* Description line 2 */}
          <Skeleton className="h-3 w-5/6" /> {/* Description line 3 */}
          <Skeleton className="h-3 w-full" /> {/* Description line 1 */}
          <Skeleton className="h-3 w-full" /> {/* Description line 2 */}
          <Skeleton className="h-3 w-5/6" /> {/* Description line 3 */}
          <Skeleton className="h-3 w-full" /> {/* Description line 1 */}
          <Skeleton className="h-3 w-full" /> {/* Description line 2 */}
          <Skeleton className="h-3 w-5/6" /> {/* Description line 3 */}
          <Skeleton className="h-10 w-32 rounded" /> {/* Button */}
        </div>

        <div
          className={`w-full h-100 hidden md:block ${imageFirst ? "md:order-1" : ""}`}
        >
          <Skeleton className="w-full h-full rounded drop-shadow-xl animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default TextAndImageSkeleton;

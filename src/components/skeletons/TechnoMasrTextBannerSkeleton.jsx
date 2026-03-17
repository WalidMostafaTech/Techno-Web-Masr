import { Skeleton } from "../ui/skeleton";

const TechnoMasrTextBannerSkeleton = () => {
  return (
    <section className="sectionPadding">
      <div className="container max-w-2xl flex flex-col items-center text-center gap-6">
        {/* Title Skeleton */}
        <Skeleton className="h-10 w-2/3 rounded-md" />

        {/* Paragraph Skeleton */}
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-5/6 rounded-md" />

        {/* Buttons Skeleton */}
        <div className="flex gap-2 mt-2">
          <Skeleton className="h-10 w-32 rounded-md" />
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default TechnoMasrTextBannerSkeleton;

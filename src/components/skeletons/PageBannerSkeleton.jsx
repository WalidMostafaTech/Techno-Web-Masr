import { Skeleton } from "@/components/ui/skeleton";

const PageBannerSkeleton = () => {
  return (
    <article className="w-full min-h-64 bg-cover bg-center bg-primary relative content-end">
      <div className="relative z-10 container h-full pt-20 pb-4 lg:pb-10 flex flex-col items-start justify-end gap-2 lg:gap-4">
        {/* Title */}
        <Skeleton className="h-8 w-2/3" />
      </div>
    </article>
  );
};

export default PageBannerSkeleton;

import { Skeleton } from "../ui/skeleton";

const VideoBannerSkeleton = () => {
  return (
    <section className="container sectionPadding">
      <div className="w-full h-75 md:h-95 rounded-2xl overflow-hidden animate-pulse">
        <Skeleton className="w-full h-full rounded-2xl" />
      </div>
    </section>
  );
};

export default VideoBannerSkeleton;

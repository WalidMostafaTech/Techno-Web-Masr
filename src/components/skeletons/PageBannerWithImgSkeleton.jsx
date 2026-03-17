import { Skeleton } from "@/components/ui/skeleton";

const PageBannerWithImgSkeleton = () => {
  return (
    <section className="bg-center bg-cover bg-primary w-full h-screen md:h-[80vh] content-center pt-24 pb-16 md:mb-14">
      <div className="container w-full h-full flex flex-col justify-center md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 h-62.5 md:h-full flex items-center justify-center">
          <Skeleton className="w-[90%] sm:w-[60%] md:w-full h-full rounded-xl" />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 items-center md:items-start text-center md:text-start">
          {/* Title */}
          <Skeleton className="h-8 w-3/4" />

          {/* Paragraph */}
          <Skeleton className="h-4 w-full max-w-md" />
          <Skeleton className="h-4 w-5/6 max-w-sm" />
          <Skeleton className="h-4 w-2/3 max-w-xs" />

          {/* Button */}
          <Skeleton className="h-10 w-44 rounded-md mt-6" />
        </div>
      </div>
    </section>
  );
};

export default PageBannerWithImgSkeleton;

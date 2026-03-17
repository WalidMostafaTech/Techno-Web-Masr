import { Skeleton } from "@/components/ui/skeleton";

const GallerySectionSkeleton = () => {
  const list = Array.from({ length: 4 });

  return (
    <section className="container sectionPadding">
      <div className="space-y-6">
        {/* Main Image */}
        <div className="w-full h-75 md:h-95 rounded-2xl overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {list.map((_, index) => (
            <div key={index} className="aspect-4/3 rounded-xl overflow-hidden">
              <Skeleton className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySectionSkeleton;

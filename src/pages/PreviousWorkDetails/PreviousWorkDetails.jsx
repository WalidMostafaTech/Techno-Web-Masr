import PageBanner from "@/components/sections/PageBanner";
import StartWithUsBanner from "@/components/sections/StartWithUsBanner";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import PreviousWorkInfo from "@/components/sections/PreviousWorkInfo";

const PreviousWorkDetails = () => {
  return (
    <main>
      <PageBanner title={"سابقة الأعمال"} />

      <article className="pagePadding">
        <PreviousWorkInfo />

        <GallerySection />

        <StartWithUsBanner />
        <TestimonialsSection />
      </article>
    </main>
  );
};

export default PreviousWorkDetails;

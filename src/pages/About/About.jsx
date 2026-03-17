import PageBanner from "@/components/sections/PageBanner";
import WhoWeAre from "@/components/sections/WhoWeAre";
import StartWithUsBanner from "@/components/sections/StartWithUsBanner";
import Faqs from "@/components/sections/Faqs";
import VisionAndMission from "@/components/sections/VisionAndMission";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const About = () => {
  return (
    <main>
      <PageBanner title={"من نحن"} />

      <WhoWeAre />
      <VisionAndMission />
      <StartWithUsBanner />
      <Faqs />
      <WhyChooseUs />
      <TestimonialsSection />
    </main>
  );
};

export default About;

import Hero from "@/components/sections/Hero";
import StatisticsSection from "@/components/sections/StatisticsSection";
import WhoWeAre from "@/components/sections/WhoWeAre";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PreviousWorkSection from "@/components/sections/PreviousWorkSection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <StatisticsSection />
      <WhoWeAre />
      <ServicesSection />
      <WhyChooseUs />
      <PreviousWorkSection />
      <PartnersSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;

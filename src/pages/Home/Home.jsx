import Hero from "./sections/Hero";
import StatisticsSection from "./sections/StatisticsSection";
import WhoWeAre from "./sections/WhoWeAre";
import ServicesSection from "./sections/ServicesSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <StatisticsSection />
      <WhoWeAre />
      <ServicesSection />
    </main>
  );
};

export default Home;

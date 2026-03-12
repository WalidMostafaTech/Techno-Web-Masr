import HeroSkeleton from "@/components/Loading/SkeletonLoading/HeroSkeleton";
import bgImg from "@/assets/images/bg-img.png";
import pcImg from "@/assets/images/pc-img.png";
import { Button } from "@/components/ui/button";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Hero = ({ data, loading }) => {
  // if (loading) return <HeroSkeleton />;

  // if (!data) return null;

  return (
    <section
      className="bg-center bg-cover w-full min-h-screen content-center pt-24 pb-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container w-full h-full flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={pcImg}
            alt=""
            className="w-[90%] sm:w-[60%] md:w-[90%] h-full object-contain mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start text-center md:text-start capitalize">
          <h1 className="text-3xl lg:text-4xl font-medium text-white">
            نبتكر مستقبلك الرقمي
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-secondary">
            بحلول برمجية ذكية
          </h2>

          <p className="text-white/60 text-sm">
            نحن في تكنو ويب مصر نصمم ونطور منصات وتطبيقات ذكية تساعد الشركات علي
            النمو والتفوق في التخصص الخاص بهم من خلال التطبيق او الموقع
          </p>

          <Button variant="secondary" className="mt-6 group">
            اطلب الخدمة الان
            <HiArrowNarrowLeft className="ltr:rotate-180 group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

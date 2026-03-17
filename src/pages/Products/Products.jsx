import PageBanner from "@/components/sections/PageBanner";
import image from "@/assets/images/bg-img.png";
import ServiceCard from "@/components/cards/ServiceCard";
import ServiceListSkeleton from "@/components/skeletons/ServiceListSkeleton";

const Products = () => {
  const list = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    image: image,
    title: "تصميم الابلكيشن",
    description:
      "تكنو ويب مصر هي شركة متخصصة في الحلول الرقمية وتصميم وتطوير  شركة متخصصة في الحلول الرقمية وتصميم وتطوير ",
  }));

  return (
    <main>
      <PageBanner title={"منتجاتنا"} />

      <section className="container pagePadding">
        {true ? (
          <ServiceListSkeleton />
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {list.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default Products;

import Primary from "@/components/buttons/Primary";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/serviceData";

export default function Services() {
  return (
    <section
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center md:max-w-[625px] xl:max-w-full mx-auto gap-4 mt-6 scroll-mt-5 my-8"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          text={service.text}
        />
      ))}
      <div className="items-center justify-center col-span-2 xl:col-span-4 hidden md:flex">
        <Primary text="BOOK NOW" link="https://book.heygoldie.com/Cleangirlesthetics/checkout" />
      </div>
    </section>
  );
}

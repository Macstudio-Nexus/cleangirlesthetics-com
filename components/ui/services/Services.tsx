import ServiceCard from "./ServiceCard";
import { services } from "@/lib/serviceData";

export default function Services() {
  return (
    <section
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center md:max-w-[625px] xl:max-w-full  mx-auto gap-4 mt-6 scroll-mt-5"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          text={service.text}
        />
      ))}
    </section>
  );
}

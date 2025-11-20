import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center"
    >
      <ServiceCard
        text="Enhance your natural beauty with customized lashes designed to fit your style. Whether you prefer the subtle definition of classic lashes, the fuller textured look of hybrids, or the low-maintenance lift and color of a lash lift & tint, each service is tailored to highlight your eyes and elevate your everyday confidence."
        title="Lashes"
      />
    </section>
  );
}

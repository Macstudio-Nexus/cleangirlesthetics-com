import LogoBg from "@/public/Logo_Repeat.png";
import image2 from "@/public/best_facials_in_SI.jpg";
import Image from "next/image";
import Secondary from "../buttons/Secondary";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full h-[875px] md:h-[600px] lg:h-[750px] xl:h-[900px] 2xl:h-[1250px] overflow-hidden grid mt-4"
    >
      {/* Background - behind everything */}
      <Image
        src={LogoBg}
        alt="CG Logo background"
        fill
        className="absolute w-[120%] -left-[10%] top-0 h-full object-cover opacity-45 z-0"
      />

      {/* Main image - right side */}
      <Image
        src={image2}
        alt="Best facials in staten island"
        height={4480}
        width={6720}
        className="col-start-1 row-start-2 md:row-start-1 w-[85%] md:w-[50%] h-auto self-center justify-self-center md:justify-self-end z-10 object-cover -mt-12 md:mt-0"
      />

      {/* Content box - center left, overlapping image */}
      <div className="col-start-1 row-start-1 bg-sage p-4 lg:p-8 flex flex-col items-start justify-center gap-4 lg:gap-8 z-20 w-[95%] md:w-[60%] self-center justify-self-center md:justify-self-start">
        <h3>About</h3>
        <p className="md:max-w-md lg:max-w-xl md:pl-4 lg:pl-8 xl:max-w-2xl">
          At Clean Girl Esthetics, we take a holistic approach to beauty and
          skincare. We believe in enhancing your natural features with gentle,
          high-quality treatments that are effective for any age and skin type.
          Every service and product we offer is thoughtfully chosen to be both
          natural and results-driven.
        </p>

        <p className="md:max-w-md lg:max-w-xl md:pl-4 lg:pl-8 xl:max-w-2xl">
          Our goal is for you to leave our spa feeling relaxed, refreshed, and
          confident—embracing your natural beauty while enjoying a cozy,
          welcoming space dedicated to your self-care.
        </p>
        <Secondary
          text="BOOK NOW"
          link="https://book.heygoldie.com/Cleangirlesthetics/checkout"
          color={false}
        />
      </div>
    </section>
  );
}

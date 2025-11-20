import MobileHero from "@/public/cleanGirlHeroImage-mobile.jpg";
import DesktopHero from "@/public/cleanGirlHeroImage.jpg";

import Image from "next/image";
import Primary from "../buttons/Primary";
import Secondary from "../buttons/Secondary";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[500px] lg:h-[800px] xl:h-screen scroll-mt-40"
    >
      <Image
        src={MobileHero}
        alt="Hero background"
        fill
        className="object-cover object-center md:hidden"
        priority
      />

      <Image
        src={DesktopHero}
        alt="Hero background"
        fill
        quality={100}
        className="object-cover object-center hidden md:block"
        priority
      />

      <div className="relative z-10 flex flex-col items-start justify-start h-full text-text pt-4 px-2 gap-3 lg:gap-6 lg:pt-8 lg:px-6 xl:gap-8 xl:pt-14 xl:px-10">
        <h1 className="text-[42px]/10 md:text-[64px]/14 lg:text-[64px]/16 xl:text-[85px]/20 2xl:text-[128px]/30 font-renjanis capitalize md:max-w-[550px] xl:max-w-[750px] 2xl:max-w-[1200px]">
          where clean beauty meets confidence
        </h1>
        <h2 className="!font-outfit text-xl/5 md:text-[26px]/7 lg:text-[26px]/8 xl:text-[32px]/10 2xl:text-[40px]/14 md:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[900px] ">
          Relax, refresh, and embrace your natural beauty with our tailored
          treatments for every skin type
        </h2>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-2">
          <Primary
            text="BOOK NOW"
            link="https://book.heygoldie.com/Cleangirlesthetics/checkout"
          />
          <Secondary text="LEARN MORE" link="#services" />
        </div>
      </div>
    </section>
  );
}

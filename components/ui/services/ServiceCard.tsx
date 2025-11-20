import Secondary from "@/components/buttons/Secondary";
import { serviceProps } from "@/lib/type";

export default function ServiceCard({ text, title }: serviceProps) {
  return (
    <div className="bg-sage w-[300px] xl:w-full h-full p-3 lg:px-4 grid grid-rows-[40px_1fr_60px] xl:grid-rows-[80px_1fr_60px] 2xl:grid-rows-[40px_1fr_60px] place-items-center md:place-items-start items-start gap-6">
      <h3 className="md:justify-self-start">{title}</h3>
      <p className="max-w-[240px] 2xl:max-w-[300px] 2xl:pt-10">{text}</p>
      <div className="my-auto justify-self-center">
        <Secondary
          text="BOOK NOW"
          link="https://book.heygoldie.com/Cleangirlesthetics/checkout"
          color={false}
        />
      </div>
    </div>
  );
}

import { buttonProps } from "@/lib/type";

export default function Primary({ text, link }: buttonProps) {
  return (
    <a href={link} target="_blank" className="button-click bg-sage text-white button full-shadow border border-sage transition duration-300 ease-in-out">
      {text}
    </a>
  );
}

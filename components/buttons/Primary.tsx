import { buttonProps } from "@/lib/type";

export default function Primary({ text, link }: buttonProps) {
  return (
    <a href={link} target="_blank" className="bg-sage text-white button">
      {text}
    </a>
  );
}

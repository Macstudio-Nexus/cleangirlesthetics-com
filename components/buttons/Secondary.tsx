import { buttonProps } from "@/lib/type";

export default function Secondary({ text, link }: buttonProps) {
  return (
    <a href={link} className="bg-transparent text-sage border border-sage button">
      {text}
    </a>
  );
}
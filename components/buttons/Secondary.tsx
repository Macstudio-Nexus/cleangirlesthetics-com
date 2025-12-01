import { buttonProps } from "@/lib/type";

interface SecondaryProps extends buttonProps {
  color?: boolean;
}

export default function Secondary({ text, link, color = true }: SecondaryProps) {
  return (
    <a
      href={link}
      className={`button-click bg-transparent border button full-shadow transition duration-300 ease-in-out ${
        color ? "text-sage border-sage" : "text-white border-white "
      }`}
    >
      {text}
    </a>
  );
}
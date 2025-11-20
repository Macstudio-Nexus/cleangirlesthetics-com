import { ChevronUp } from "lucide-react";
import Link from "next/link";

export default function BackToTop() {
  return (
    <Link
      href="#home"
      className="fixed bottom-6 right-6 bg-text/60 rounded-full p-2 w-fit z-100"
    >
      <ChevronUp className="size-8" />
    </Link>
  );
}

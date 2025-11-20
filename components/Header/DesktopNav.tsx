import { navItems } from "@/lib/nav";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <div className="flex items-center justify-between gap-8 w-full font-outfit">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-xl uppercase text-black hover:text-brown"
        >
          {item.name}
        </Link>
      ))}
      <a
        href="http://www.glymedplus.com/store/8790767440206"
        target="_blank"
        className="text-xl uppercase text-black hover:text-brown"
      >
        SHOP
      </a>
    </div>
  );
}

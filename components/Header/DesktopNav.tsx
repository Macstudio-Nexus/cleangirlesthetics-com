import { navItems } from "@/lib/nav"

export default function DesktopNav() {
    return(
        <div className="flex items-center justify-between gap-8 w-full font-outfit">  
            {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl uppercase text-black hover:text-brown"
                >
                  {item.name}
                </a>
              ))}
        </div>
    )
}
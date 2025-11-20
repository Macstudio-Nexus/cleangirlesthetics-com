import DesktopNav from "./DesktopNav";
import MobileSidebar from "./MobileSidebar";

export default function Header() {
  return (
    <div className="sticky top-0 z-[100] h-fit flex items-center justify-between my-4 bg-white mx-3 lg:mx-8 xl:mx-14">
      <div>
        <a href="#home" className="cursor-pointer">
          <span className="font-renjanis text-[26px] lg:text-5xl tracking-wide">
            Clean Girl Esthetics
          </span>
        </a>
      </div>
      <div className="xl:hidden">
        <MobileSidebar />
      </div>
      <div className="hidden xl:flex">
        <DesktopNav />
      </div>
    </div>
  );
}

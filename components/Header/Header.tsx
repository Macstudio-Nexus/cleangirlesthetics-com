import MobileSidebar from "./MobileSidebar";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] h-fit flex items-center justify-between mx-3 my-4 lg:m-8 bg-white">
      <div>
        <span className="font-renjanis text-[26px] lg:text-[53px] tracking-wide">
          Clean Girl Esthetics
        </span>
      </div>
      <div className="xl:hidden">
        <MobileSidebar />
      </div>
    </header>
  );
}

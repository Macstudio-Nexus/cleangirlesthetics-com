import Header from "@/components/Header/Header";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="">
        <div className="lg:pt-5 xl:pt-10">
          <Hero />
        </div>
      </main>
    </>
  );
}

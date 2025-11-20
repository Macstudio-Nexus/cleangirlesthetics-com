import Header from "@/components/Header/Header";
import About from "@/components/ui/About";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="max-w-[100rem] mx-auto">
        <div className="lg:pt-5 xl:pt-10">
          <Hero />
        </div>
        <About />
      </main>
    </>
  );
}

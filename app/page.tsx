import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import About from "@/components/ui/About";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/services/Services";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="max-w-[110rem] 2xl:mx-auto mx-3 md:mx-14">
        <div className="lg:pt-3">
          <Hero />
        </div>
        <About />
        <Services />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

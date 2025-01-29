import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import Experiences from "@/components/sections/Experiences";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="px-4 md:px-10 lg:px-20 2xl:px-32">
      <Header />
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

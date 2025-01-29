import Header from "@/components/layout/header";
import Contact from "@/components/sections/contact";
import Experiences from "@/components/sections/experiences";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="px-4 py-4 md:px-10 lg:px-20 2xl:px-32">
      <Header />
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
}

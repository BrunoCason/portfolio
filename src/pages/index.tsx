import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="px-4 py-4 md:px-10 lg:px-20 2xl:px-32">
      <Header />
      <Hero />
      <Skills />
    </main>
  );
}

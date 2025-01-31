import { useLanguage } from "@/context/LanguageContext";
import ExperienceItem from "../ui/ExperienceItem";
import SectionHeader from "../ui/SectionHeader";
import { description, title } from "@/locales/experiences/experiences";

const Experiences = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="pt-20 pb-10 md:pt-24 md:pb-12 space-y-12 mx-auto max-w-7xl ">
      <SectionHeader
        title={title[language]}
        description={description[language]}
      />

      <ExperienceItem />
    </section>
  );
};

export default Experiences;

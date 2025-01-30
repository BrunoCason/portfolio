import { useLanguage } from "@/context/LanguageContext";
import ExperienceItem from "../ui/ExperienceItem";
import SectionHeader from "../ui/SectionHeader";
import { description, title } from "@/locales/experiences/experiences";

const Experiences = () => {
  const { language } = useLanguage();

  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12 space-y-12">
      <SectionHeader
        title={title[language]}
        description={description[language]}
      />

      <ExperienceItem />
    </section>
  );
};

export default Experiences;

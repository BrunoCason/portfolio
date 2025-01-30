import { useLanguage } from "@/context/LanguageContext";
import ProjectItem from "../ui/ProjectItem";
import SectionHeader from "../ui/SectionHeader";
import { description, title } from "@/locales/projects/projects";

const Projects = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-gray-50 py-16 md:py-24 -mx-4 md:-mx-10 lg:-mx-20 2xl:-mx-32 space-y-12 dark:bg-gray-900">
      <SectionHeader
        title={title[language]}
        description={description[language]}
      />

      <ProjectItem />
    </section>
  );
};

export default Projects;

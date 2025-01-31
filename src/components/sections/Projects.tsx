import { useLanguage } from "@/context/LanguageContext";
import ProjectItem from "../ui/ProjectItem";
import SectionHeader from "../ui/SectionHeader";
import { description, title } from "@/locales/projects/projects";

const Projects = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-24 -mx-4 md:-mx-10 lg:-mx-20 2xl:-mx-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out ">
      <div className="mx-4 md:mx-10 lg:mx-20 2xl:mx-32 ">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeader
            title={title[language]}
            description={description[language]}
          />

          <ProjectItem />
        </div>
      </div>
    </section>
  );
};

export default Projects;

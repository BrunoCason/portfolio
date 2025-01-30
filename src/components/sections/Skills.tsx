import Image from "next/image";
import { skills } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import { useTheme } from "@/context/ThemeProvider";
import { useLanguage } from "@/context/LanguageContext";
import { title, description } from "@/locales/skills/skills";

const Skills = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <section className="space-y-6 bg-gray-50 py-16 md:py-24 -mx-4 md:-mx-10 lg:-mx-20 2xl:-mx-32 dark:bg-gray-900 transition-colors duration-500 ease-in-out">
      <SectionHeader
        title={title[language]}
        description={description[language]}
      />

      <div className="grid grid-cols-3 gap-6 lg:px-60 xl:px-72 2xl:px-96">
        {skills.map((skill) => (
          <a
            key={skill.label}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 transition-transform transform hover:scale-105"
          >
            <Image
              src={
                skill.label === "Express.js" &&
                skill.darkLogo &&
                theme === "dark"
                  ? skill.darkLogo
                  : skill.logo
              }
              alt={skill.label}
              width={48}
              height={48}
              className="w-12 h-12 transition-colors duration-500 ease-in-out"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out">
              {skill.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;

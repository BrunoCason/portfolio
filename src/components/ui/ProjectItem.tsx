import { useLanguage } from "@/context/LanguageContext";
import { project } from "@/locales/projects/projects";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = () => {
  const { language } = useLanguage();
  const projects = project[language as keyof typeof project] || project.en;

  return (
    <div>
      <div className="sm:px-10 md:px-10 xl:px-11">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl grid xl:grid-cols-2 gap-8 xl:gap-24 mb-10 bg-white dark:bg-gray-800 transition-colors duration-500 ease-in-out"
          >
            <div className="mx-auto">
              <Image
                src={project.image}
                width={500}
                height={500}
                alt={project.name}
                unoptimized
                className="rounded-xl"
              />
            </div>

            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out">
                {project.name}
              </h3>
              <p className="text-gray-600 text-base dark:text-gray-400 transition-colors duration-500 ease-in-out">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm font-medium bg-gray-200 text-gray-600 px-5 py-1 rounded-full dark:text-gray-400 dark:bg-gray-900 transition-colors duration-500 ease-in-out"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out"
                >
                  <SquareArrowOutUpRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;

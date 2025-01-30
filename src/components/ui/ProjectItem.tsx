import { useLanguage } from "@/context/LanguageContext";
import { project } from "@/locales/projects/projects";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const ProjectItem = () => {
  const { language } = useLanguage();
  const projects = project[language as keyof typeof project] || project.en;

  return (
    <div className="md:px-10 lg:px-20 2xl:px-32">
      <div className="px-4 sm:px-14 md:px-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all grid sm:grid-cols-2 gap-8 lg:gap-24 mb-10 bg-white dark:bg-gray-800"
          >
            <div className="w-full h-32 bg-gray-50 rounded-xl"></div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {project.name}
              </h3>
              <p className="text-gray-600 text-base dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm font-medium bg-gray-200 text-gray-600 px-5 py-1 rounded-full dark:text-gray-400 dark:bg-gray-900"
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
                  className="text-gray-600 dark:text-gray-400"
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

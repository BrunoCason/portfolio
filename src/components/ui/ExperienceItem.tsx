import { useLanguage } from "@/context/LanguageContext";
import { experience } from "@/locales/experiences/experiences";

const ExperienceItem = () => {
  const { language } = useLanguage();
  const experiences =
    experience[language as keyof typeof experience] || experience.en;

  return (
    <div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mx-0 sm:mx-10 md:mx-10 xl:mx-11 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg lg:grid grid-cols-3 mb-8 md:mb-12 transition-colors duration-500 ease-in-out"
        >
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 dark:text-gray-100 transition-colors duration-500 ease-in-out">
              {exp.company}
            </h3>
          </div>

          <div className="space-y-4">
            <p className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out">
              {exp.position}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              {exp.summary.map((item, idx) => (
                <li
                  key={idx}
                  className="text-base text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end mt-4 lg:mt-0">
            <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-500 ease-in-out">
              {exp.startDate.toLocaleDateString(
                language === "pt" ? "pt-BR" : "en-US",
                {
                  year: "numeric",
                  month: "short",
                }
              )}{" "}
              -{" "}
              {exp.currentlyWorkHere
                ? language === "pt"
                  ? "atual"
                  : "Present"
                : exp.endDate?.toLocaleDateString(
                    language === "pt" ? "pt-BR" : "en-US",
                    {
                      year: "numeric",
                      month: "short",
                    }
                  )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceItem;

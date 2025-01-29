import { experience } from "@/lib/data";

const ExperienceItem = () => {
  return (
    <div>
      {experience.map((experience, index) => (
        <div
          key={index}
          className="mx-0 sm:mx-10 md:mx-10 2xl:mx-48 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg lg:grid grid-cols-3 mb-8 md:mb-12"
        >
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 dark:text-gray-100">
              {experience.company}
            </h3>
          </div>

          <div className="space-y-4">
            <p className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100">
              {experience.position}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              {experience.summary.map((item, idx) => (
                <li key={idx} className="text-base text-gray-600 dark:text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex justify-end mt-4 lg:mt-0">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {experience.startDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}{" "}
              -{" "}
              {experience.currentlyWorkHere
                ? "Present"
                : experience.endDate?.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceItem;

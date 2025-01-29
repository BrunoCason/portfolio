import Image from "next/image";
import { Skills } from "@/lib/data";

const SkillsComponent = () => {
  return (
    <section className="space-y-6 bg-gray-50 py-24 -mx-4 md:-mx-10 lg:-mx-20 2xl:-mx-32">
      <div className="flex flex-col items-center space-y-4">
        <span className="text-gray-600 bg-gray-200 py-1 px-5 font-medium text-sm rounded-xl">
          Skills
        </span>
        <span className="text-gray-600 text-lg text-center">
          Skills, tools, and technologies I master.
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6 lg:px-60 xl:px-72 2xl:px-96">
        {Skills.map((skill) => (
          <a
            key={skill.label}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 transition-transform transform hover:scale-105"
          >
            <Image
              src={skill.logo}
              alt={skill.label}
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-sm text-gray-600">{skill.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SkillsComponent;

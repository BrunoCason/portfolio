import { Skills } from "@/lib/data";

const skills = () => {
  return (
    <section>
      <div>
        <p className="text-gray-600 bg-gray-200 py-1 px-5 font-medium text-sm rounded-xl">
          Skills
        </p>
        <span className="text-gray-600 text-lg">
          Skills, tools, and technologies I master.
        </span>
      </div>

      <div>
        {Skills.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-200 transition"
          >
            {skill.logo}
            <span className="font-medium text-gray-800">{skill.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default skills;

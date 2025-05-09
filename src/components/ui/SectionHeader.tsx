interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 ">
      <span className="text-gray-600 bg-gray-200 py-1 px-5 font-medium text-sm rounded-xl dark:bg-gray-800 dark:text-gray-400 transition-colors duration-500 ease-in-out">
        {title}
      </span>
      <span className="text-gray-600 text-lg text-center px-4 dark:text-gray-400 transition-colors duration-500 ease-in-out">{description}</span>
    </div>
  );
};

export default SectionHeader;

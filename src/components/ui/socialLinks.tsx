import { socialLinks } from "@/lib/data";

const SocialLinks = () => {
  return (
    <div className="flex">
      {socialLinks.map((socialLink, index) => (
        <a
          key={index}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 rounded-full hover:bg-gray-200 transition"
        >
          {socialLink.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

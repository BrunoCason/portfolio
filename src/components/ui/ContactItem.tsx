import { Copy } from "lucide-react";
import { useState } from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  contactText: string;
  href: string;
}

const ContactItem = ({ icon, contactText, href }: ContactItemProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center space-x-5 relative text-gray-600 dark:text-gray-400">
      {icon}
      <a
        href={href}
        className="font-semibold text-lg md:text-4xl text-gray-900 hover:underline dark:text-gray-100"
      >
        {contactText}
      </a>
      <div className="relative">
        <Copy
          className="text-gray-600 cursor-pointer"
          onClick={() => handleCopyClick(contactText)}
        />

        {showModal && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-600 text-gray-200 px-3 py-2 rounded-md text-sm shadow-lg">
            Copied to clipboard!
            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-600 rotate-45"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactItem;

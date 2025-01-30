import { useLanguage } from "@/context/LanguageContext";
import { footerDescription } from "@/locales/footer/footer";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-50 py-6 -mx-4 md:-mx-10 lg:-mx-20 2xl:-mx-32 flex justify-center dark:bg-gray-900">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © 2025 | {footerDescription[language]}
      </p>
    </footer>
  );
};

export default Footer;

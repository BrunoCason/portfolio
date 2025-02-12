import { useLanguage } from "@/context/LanguageContext";
import { footerDescription } from "@/locales/footer/footer";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const Footer = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useInViewAnimation();

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-50 py-6 -mx-4 md:-mx-10 lg:-mx-20 2xl:-mx-32 flex justify-center dark:bg-gray-900 transition-colors duration-500 ease-in-out"
    >
      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out">
        © 2025 | {footerDescription[language]}
      </p>
    </motion.footer>
  );
};

export default Footer;

import { Mail, Phone } from "lucide-react";
import ContactItem from "../ui/ContactItem";
import SectionHeader from "../ui/SectionHeader";
import SocialLinks from "../ui/SocialLinks";
import { useLanguage } from "@/context/LanguageContext";
import {
  description,
  title,
  connectPlataforms,
} from "@/locales/contact/contact";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const Contact = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useInViewAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="contact"
      className="py-20 md:py-24 space-y-12"
    >
      <SectionHeader
        title={title[language]}
        description={description[language]}
      />

      <div className="space-y-4 flex flex-col items-center">
        <ContactItem
          icon={
            <Mail className="text-gray-600 transition-colors duration-500 ease-in-out" />
          }
          contactText="brunocasons@gmail.com"
          href="mailto:brunocasons@gmail.com"
        />
        <ContactItem
          icon={
            <Phone className="text-gray-600 transition-colors duration-500 ease-in-out" />
          }
          contactText="+55 (16) 99998-5385"
          href="tel:+5516999985385"
        />
      </div>

      <div className="flex flex-col items-center space-y-2">
        <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out">
          {connectPlataforms[language]}
        </p>
        <SocialLinks />
      </div>
    </motion.section>
  );
};

export default Contact;

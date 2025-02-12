import { useLanguage } from "@/context/LanguageContext";
import ExperienceItem from "../ui/ExperienceItem";
import SectionHeader from "../ui/SectionHeader";
import { description, title } from "@/locales/experiences/experiences";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const Experiences = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useInViewAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="experience"
      className="pt-20 pb-10 md:pt-24 md:pb-12 space-y-12 mx-auto max-w-7xl "
    >
      <SectionHeader
        title={title[language]}
        description={description[language]}
      />

      <ExperienceItem />
    </motion.section>
  );
};

export default Experiences;

import { MapPin } from "lucide-react";
import Image from "next/image";
import SocialLinks from "../ui/SocialLinks";
import {
  greeting,
  description,
  country,
  availableProjects,
} from "@/locales/hero/hero";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="flex pb-16 pt-24 md:pb-24 md:pt-36 mx-auto max-w-7xl ">
      <div className="space-y-12">
        <div className="space-y-2">
          <h1 className="font-semibold text-4xl lg:font-bold lg:text-6xl text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out">
            {greeting[language]}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out">
            {description[language]}
          </p>
        </div>

        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2 transition-colors duration-500 ease-in-out">
            <MapPin />
            <span className="text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out">
              {country[language]}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 flex justify-center">
              <div className="h-2 w-2 rounded-full bg-green-700"></div>
            </div>
            <span className="text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out">
              {availableProjects[language]}
            </span>
          </div>
        </div>

        <SocialLinks />
      </div>

      <div className="flex-shrink-0">
        <Image
          src="/images/Me.png"
          width={240}
          height={240}
          alt="me"
          unoptimized
          className="hidden md:block ml-20"
        />
      </div>
    </section>
  );
};

export default Hero;

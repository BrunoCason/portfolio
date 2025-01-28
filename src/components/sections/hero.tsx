import { MapPin } from "lucide-react";
import { SocialLinks } from "@/lib/data";
import Image from "next/image";

const hero = () => {
  return (
    <section className="flex py-24">
      <div className="space-y-12">
        <div className="space-y-2">
          <h1 className="font-semibold text-4xl lg:font-bold lg:text-6xl text-gray-900">
            Hi! I&apos;m Bruno Cason
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="space-y-2 text-gray-600">
          <div className="flex items-center space-x-2">
            <MapPin />
            <span>Brazil</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 flex justify-center">
              <div className="h-2 w-2 rounded-full bg-green-700"></div>
            </div>
            <span>Available for new projects</span>
          </div>
        </div>

        <div className="flex ">
          {SocialLinks.map((socialLink, index) => (
            <a
              key={index}
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              {socialLink.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0">
        <Image
          src="Me.png"
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

export default hero;

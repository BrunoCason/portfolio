import SectionHeader from "../ui/sectionHeader";
import { Mail, Phone } from "lucide-react";
import SocialLinks from "../ui/socialLinks";
import ContactItem from "../ui/ContactItem";

const contact = () => {
  return (
    <section className="py-16 md:py-24 space-y-12">
      <SectionHeader
        title="Get in touch"
        description="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
      />

      <div className="space-y-4 flex flex-col items-center">
        <ContactItem
          icon={<Mail className="text-gray-600" />}
          contactText="brunocasons@gmail.com"
          href="mailto:brunocasons@gmail.com"
        />
        <ContactItem
          icon={<Phone className="text-gray-600" />}
          contactText="+55 (16) 99998-5385"
          href="tel:+5516999985385"
        />
      </div>

      <div className="flex flex-col items-center space-y-2">
        <p className="text-gray-600">
          You may also find me on these platforms!
        </p>
        <SocialLinks />
      </div>
    </section>
  );
};

export default contact;

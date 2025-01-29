import ExperienceItem from "../ui/experienceItem";
import SectionHeader from "../ui/SectionHeader";

const experiences = () => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12 space-y-12">
      <SectionHeader
        title={"Experiences"}
        description={"Here is a quick summary of my most recent experiences:"}
      />

      <ExperienceItem />
    </section>
  );
};

export default experiences;

import SectionHeader from "../ui/SectionHeader";

const projects = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 -mx-4 md:-mx-10 lg:-mx-20 2xl:-mx-32">
      <SectionHeader
        title={"Projects"}
        description={"Some of the noteworthy projects I have built:"}
      />
    </section>
  );
};

export default projects;

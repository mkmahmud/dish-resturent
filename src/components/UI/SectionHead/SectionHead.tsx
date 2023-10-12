const SectionHead = ({ title }: any) => {
  return (
    <h2
      className="text-[50px] my-10 font-bold text-sectionPrimary text-center"
      style={{ fontFamily: "'Rakkas', serif" }}
    >
      {title}
    </h2>
  );
};

export default SectionHead;

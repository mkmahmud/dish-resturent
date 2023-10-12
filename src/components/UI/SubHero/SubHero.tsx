import Image from "next/image";

const SubHero = ({ image, title, subTitle }: any) => {
  return (
    <div className="flex items-center justify-center py-4 px-6 bg-white rounded-md mx-4 my-6  border-2  hover:border-red">
      <Image alt="Sub Hero" className="w-[150px]" src={image} />
      <div className="mx-4 text-black">
        <h2
          className="text-[22px] font-semibold"
          style={{ fontFamily: "'RocknRoll One', sans-serif" }}
        >
          {title}
        </h2>
        <p className="text-[18px]">{subTitle}</p>
      </div>
    </div>
  );
};

export default SubHero;

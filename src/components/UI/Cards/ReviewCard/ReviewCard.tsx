import img from "@/assets/images/review/reviews_01.png";
import img1 from "@/assets/images/review/reviews_03.png";
import Image from "next/image";

const ReviewCard = () => {
  return (
    <div>
      <div className="mx-10 leading-none lg:flex items-center md:w-[60%] mx-auto my-10">
        <Image alt="Review" src={img} />
        <div className="my-10 mx-10 ">
          <h1 className="text-[50px]   font-bold text-sectionPrimary">
            "I don't remember a single mouthful I didn't enjoy!"
          </h1>
          <p className="my-2">@casey</p>
        </div>
      </div>
      <div className="mx-10 leading-none lg:flex items-center md:w-[60%] mx-auto my-10">
        <div className="my-10 mx-10 ">
          <h1 className="text-[50px]   font-bold text-sectionPrimary">
            "I don't remember a single mouthful I didn't enjoy!"
          </h1>
          <p className="my-2">@casey</p>
        </div>
        <Image alt="Review" src={img1} />
      </div>
    </div>
  );
};

export default ReviewCard;

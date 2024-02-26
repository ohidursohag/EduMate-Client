import Image from "next/image";
import { LuBook } from "react-icons/lu";
import { FaBookmark, FaRegHeart } from "react-icons/fa6";
import profile_Placeholder from "@/Assets/profile_Placeholder.png";
import DetailsButton from "./DetailsButton";
import CourseRating from "./CourseRating";
import { FiBookOpen } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { toSentenseCase } from "@/utilities/toSentenseCase";
import discountBg from "@/Assets/discountBg.svg";
const CoursesCard = ({ course }) => {
  const {
    category,
    title,
    img,
    rating,
    total_reviews,
    total_lesson,
    total_enrolled_students,
    description,
    instructor,
    pricing,
    status,
    amount,
    discount,
  } = course || [];

  const currentAmount = amount
    ? (amount - (amount * discount) / 100).toFixed(2)
    : 0;
  // console.log(currentAmount)

  return (
    <div className="  shadow-[rgba(50,_50,_105,_0.2)_0px_2px_10px_1px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:-translate-y-1 duration-700 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-4 rounded-md flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-center items-center gap-4">
      <div className=" relative h-[230px] sm:w-[240px] sm:h-full md:w-[280px] lg:w-auto lg:h-[220px] xl:w-[230px] xl:h-full 2xl:w-[280px] 3xl:w-[320px] rounded overflow-hidden">
        <Image
          src={img}
          width={600}
          height={300}
          alt="Course Image"
          className="block  h-full object-center object-cover"
        />
        {status !== "regular" && (
          <div className="bg-secondary absolute w-[170px] text-center px-8 py-1 top-6 -left-10  -rotate-45 text-lg text-white">
            {toSentenseCase(status)}
          </div>
        )}
        {discount && <div className="absolute right-5 bottom-5">
         <div className="relative">
         <Image src={discountBg} width={55} height={55} alt="discont bg"/>
          <p className="absolute text-white top-4 left-2  ">-{discount}%</p>
          </div>
         </div>}
      </div>

      <div className="flex-1 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-1">
          <p className="py-1 px-3 bg-secondary max-w-max rounded-3xl text-xs text-white ">
            {category}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <CourseRating rating={rating} total_reviews={total_reviews} />
          <button className="p-[6px] hover:bg-secondary hover:text-white text-primary rounded-full">
            <FaRegHeart size={18} />
          </button>
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="flex justify-start items-center gap-10 pb-2">
          <p className="flex items-center gap-2 font-medium">
            <FiBookOpen size={18} className="text-primary" />
            <span className="text-description">{total_lesson}</span>
          </p>
          <p className="flex items-center gap-2 font-medium">
            <FaRegUserCircle size={18} className="text-primary" />
            <span className="text-description">{total_enrolled_students}</span>
          </p>
        </div>

        <p className="text-description text-sm line-clamp-2">{description}</p>
        <div className="flex items-center justify-start gap-2 pt-3 ">
          <div className="rounded-full w-8 h-8 overflow-hidden ring-1 ring-secondary">
            <Image
              src={instructor?.img || profile_Placeholder}
              width={100}
              height={100}
              alt="Course Image"
              className="w-full h-full object-cover object-center bg-gray-300  scale-110 "
            />
          </div>

          <h5>
            {" "}
            By{" "}
            <span className="font-medium text-description">
              {instructor?.name}
            </span>
          </h5>
        </div>
        <div className="flex justify-between items-center mt-4">
          {currentAmount ? (
            <h5 className="text-xl font-bold">
              ${currentAmount} /{" "}
              <span className="text-gray-400 line-through">
                {" "}
                ${amount ?? ""}{" "}
              </span>
            </h5>
          ) : (
            <h5 className="py-1 px-3 bg-primary rounded text-white text-lg">
              Free
            </h5>
          )}
          <DetailsButton linkPath={""} name={"Details"} />
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

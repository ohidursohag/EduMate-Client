import Image from "next/image";
import { LuBook } from "react-icons/lu";
import { FaBookmark, FaStar, FaUser } from "react-icons/fa6";
import profile_Placeholder from '@/Assets/profile_Placeholder.png'
import DetailsButton from "./DetailsButton";
import CourseRating from "./CourseRating";

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
  const currentAmount = amount? (amount - (amount * discount / 100)).toFixed(2) : 0
  // console.log(currentAmount)
  
  return (
    <div className="  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:-translate-y-1 duration-700 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-5 rounded-md flex flex-col sm:flex-row lg:flex-col xl:flex-row   gap-5">
      <div className="sm:w-[220px] rounded ">
        <Image
          src={img}
          width={600}
          height={300}
          alt="Course Image"
          className="block sm:w-[220px] h-full object-center object-cover"
        />
      </div>

      <div className="">
        <div className="flex justify-between items-center">
          <CourseRating rating={rating} total_reviews={total_reviews} />
          <button className="p-[6px] hover:bg-secondary hover:text-white rounded-full">
            <FaBookmark />
          </button>
        </div>

        <h2 className="text-2xl font-bold pt-3 mb-2">{title}</h2>
        <div className="flex justify-start items-center gap-10 pb-2">
          <p className="flex items-center gap-2 font-medium">
            <LuBook />
            {total_lesson}
          </p>
          <p className="flex items-center gap-2 font-medium">
            <FaUser />
            {total_enrolled_students}
          </p>
        </div>

        <p className="text-gray-600 line-clamp-2">{description}</p>
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
        <div className="flex justify-between items-center pt-[3%]">
          {
            currentAmount
            ?<h5 className="text-xl font-bold">
            ${currentAmount} /{" "}
            <span className="text-gray-400 line-through">
              {" "}
              ${amount ?? ""}{" "}
            </span>
          </h5>
            :<h5 className="py-1 px-3 bg-primary rounded text-white text-lg">
            Free
          </h5>
          }
          <DetailsButton linkPath={""} name={"See Details"} />
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

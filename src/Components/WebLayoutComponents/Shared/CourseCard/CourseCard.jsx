"use client";
import Image from "next/image";

import img1 from "../../../../Assets/CoursesCard/img1.jpg";

import img3 from "../../../../Assets/CoursesCard/img3.jpg";
import { LuBook } from "react-icons/lu";
import { FaBookmark, FaStar, FaUser } from "react-icons/fa6";
import DetailsButton from "../Cards/DetailsButton";
import Rating from "react-rating";
import { IoMdStarOutline } from "react-icons/io";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import CourseRating from "../Cards/CourseRating";
import { FiBookOpen } from "react-icons/fi";
import { toSentenseCase } from "@/utilities/toSentenseCase";
const CoursesCard = ({ courseData, isGrid, setFlex }) => {
  const {
    category,
    title,
    img,
    rating,
    total_reviews,
    total_lesson,
    profile_Placeholder,
    total_enrolled_students,
    description,
    instructor,
    discountBg,
    pricing,
    status,
    amount,
    discount,
    currentAmount,
  } = courseData;

  return (
    <div
      className={`shadow-[rgba(50,_50,_105,_0.2)_0px_2px_10px_1px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:-translate-y-1 duration-700 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-4 rounded-md flex flex-col sm:flex-row lg:flex-row  xl:flex-row justify-center items-center  gap-4  `}
    >
      <div className=" relative h-[230px] sm:w-[240px] sm:h-full md:w-[280px] lg:w-auto lg:h-[220px] xl:w-[230px] xl:h-full 2xl:w-[280px] 3xl:w-[320px] rounded overflow-hidden">
        <Image
          src={img}
          width={200}
          height={100}
          alt="Course Image"
          className="block  h-full w-full cover object-center object-cover"
        />
        {status !== "regular" && (
          <div className="bg-secondary absolute w-[170px] text-center px-8 py-1 top-6 -left-10  -rotate-45 text-lg text-white">
            {toSentenseCase(status)}
          </div>
        )}
        {discount && (
          <div className="absolute right-5 bottom-5">
            <div className="relative">
              <Image src={discountBg} width={55} height={55} alt="discont bg" />
              <p className="absolute text-white top-4 left-2  ">-{discount}%</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-1">
          <p className="py-1 px-3 bg-secondary/30 font-medium max-w-max rounded-3xl text-xs text-primary ">
            {category}
          </p>
          <button className="p-[6px] hover:bg-secondary hover:text-white text-primary rounded-full">
            <FaRegHeart size={25} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <CourseRating rating={rating} total_reviews={total_reviews} />
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

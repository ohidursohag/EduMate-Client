"use client";
import Image from "next/image";
import img1 from "../../../../Assets/CoursesCard/img1.jpg";

import img3 from "../../../../Assets/CoursesCard/img3.jpg";
import {  LuBook } from "react-icons/lu";
import { FaBookmark, FaStar, FaUser } from "react-icons/fa6";

import DetailsButton from "./DetailsButton";

const CoursesCard = ({course}) => {
const {category,} = course || []
  return (
    <div className="  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:-translate-y-1 duration-700 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-5 rounded-md flex flex-col sm:flex-row lg:flex-col xl:flex-row  md:max-w-full  gap-5">
      <div>
        <Image
          src={img3}
          width="fill"
          height="fill"
          alt="Course Image"
          className="rounded h-full object-center object-cover"
        />
      </div>

      <div className="">
        <div className="flex justify-between items-center">
          <p className="flex items-center">
            <span className="flex items-center mr-2 text-[#ff9747] ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="text-sm">(15 Reviews)</span>
          </p>
          <button
            
            className="p-[6px] hover:bg-secondary hover:text-white rounded-full">
            <FaBookmark />
          </button>
        </div>

        <h2 className="text-3xl font-bold pt-3 pb-1">React Front to Back</h2>
        <div className="flex justify-start items-center gap-10 pb-2">
          <p className="flex items-center gap-2 font-medium">
            <LuBook />
            12 Lession
          </p>
          <p className="flex items-center gap-2 font-medium">
            <FaUser />
            50 Students
          </p>
        </div>

        <p className="text-gray-600 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          adipisci?
        </p>
        <div className="flex items-center justify-start gap-5 pt-3">
          <Image
            src={img1}
            width="fill"
            height="fill"
            alt="Course Image"
            className="rounded-full w-10 h-10"
          />
          <h5>By Sohan In Development</h5>
        </div>
        <div className="flex justify-between items-center pt-[3%]">
          <h5 className="text-xl font-bold">
            $60 / <span className="text-gray-400 line-through">$100</span>
          </h5>
          <DetailsButton linkPath={""} name={"See Details"} />
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

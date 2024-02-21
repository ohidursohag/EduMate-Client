import React from "react";
import card from "@/Assets/BannerImage/course.jpg";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";

const BannerCard = () => {
  return (
    <div className="w-4/5  h-[500px]  bg-[#fefae0] p-5 rounded-xl ">
      <Image className="rounded-md w-full" src={card} alt="course card" />

      {/* ===========card body=============== */}
      <div className="text-black space-y-3 ">
        <p className="flex gap-4 items-center text-[#6b7385] pt-5">
          <span> 12 lessons </span>
          <span> 12 lessons </span>
        </p>

        <h2 className="text-[#192335] lg:text-2xl font-bold">
          Difficult Things About Education
        </h2>
        <p className="text-[#6b7385] text-justify">
          Master python by bulidin 100 projects in 100 day . learn data science
          auttomation ,build website
        </p>

        <span className="flex items-center gap-1 text-[#ff9747]">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </span>

        <div className="flex justify-between ">
          <h2> $75 </h2>
          <span className="flex gap-4 items-cente ">
            <span> Learn More</span> <MdKeyboardBackspace />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;

import React from "react";
import card from "@/Assets/BannerImage/course.jpg";
import webdevelopment from "@/Assets/BannerImage/webdevelopment.webp";

import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";

const BannerCard = () => {
  return (
    <div className=" w-full bg-[#fefae0]  rounded-xl p-5    ">
      <figure>
        <Image className="rounded-md " src={webdevelopment} alt="course card" />
      </figure>

      {/* ===========card body=============== */}
      <div className="text-black space-y-2 ">
        <p className="flex gap-4 items-center text-description pt-5 text-sm">
          <span> 60 module </span>
          <span> 800 + video </span>
        </p>

        <h2 className="text-title text-lg xs:text-xl lg:text-2xl font-bold">
          Difficult Things About Education
        </h2>
        <p className="text-description text-sm text-justify line-clamp-2 sm">
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
          <h2 className="text-2xl opacity-85 "> $0.2 </h2>
          <span className="flex gap-4 items-cente  ">
            <span className="block"> Learn More</span>{" "}
            <span>
              {" "}
              <MdKeyboardBackspace className="f" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;

import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";


const ReviewCard = ({ name, image, designation, description, ratings }) => {

   return (
      <div className=" flex max-w-[350px] md:max-w-[400px] mx-auto justify-center items-center px-7 py-10 shadow-md rounded-md mr-10 my-3">
         <div className="relative flex flex-col gap-5">
            <div className="absolute right-0 -top-2 text-secondary/40">
               <BiSolidQuoteRight size={80} />
            </div>
            {/* Porfile */}
            <div className="flex items-center gap-5 ">
               <div className="size-[60px] ring-2 rounded-full  ring-primary/50 p-[2px]">
                  <figure className="size-14  rounded-full overflow-hidden   ">
                     <Image
                        src={image}
                        width={60}
                        height={60}
                        alt="profile image"
                        className="object-cover w-full h-full object-center bg-gray-400"
                     />
                  </figure>
               </div>
               <div className="">
                  <h5 className="font-bold text-title text-2xl ">{name}</h5>
                  <p className="text-lg font-medium text-description/60 flex items-center gap-1">
                     {designation}
                  </p>
               </div>
            </div>
            <div>
               {/* Ratings  & description*/}
               <div className="flex items-center gap-3 mb-2">
                  <Rating style={{ maxWidth: 130 }} value={ratings} readOnly />
                  <p className="font-bold mt-1 text-xl">{ratings}</p>
               </div>
               <p className="text-description/60 line-clamp-3">
                  {description}
               </p>
            </div>
         </div>
      </div>
   );
};

export default ReviewCard;

import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots, FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuMoveRight } from "react-icons/lu";
import img1 from "@/Assets/BlogImage/img1.jpg";
import ShareButton from "@/Components/WebLayoutComponents/Home/Blog/ShareButton";
const TopCoursecard = () => {
  return <div>
   <div className="w-[250px] shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden hover:-translate-y-1 duration-700 group">
            <div className="relative">
              <Image
                src={img1}
                alt="Blog Image"
                height="fill"
                width="fill"
                className="rounded-t group-hover:scale-105 transition duration-500"
              />
              <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">
                Feb 20, 2024
              </p>
            </div>
            <div className="p-4  flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-1">Title</h2>
              <h4 className=" mb-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. ...
              </h4>
              
              <div className="flex justify-between items-center ">
                <button className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">
                  Details{" "}
                  <span>
                    <LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" />
                  </span>
                </button>
              </div>
            </div>
          </div>
  </div>;
};

export default TopCoursecard;

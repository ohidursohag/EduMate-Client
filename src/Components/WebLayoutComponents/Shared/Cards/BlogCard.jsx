import PropTypes from "prop-types";
import { LuMoveRight } from "react-icons/lu";
import ShareButton from "../../Home/Blog/ShareButton";
import { AiFillLike } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { FaCommentDots, FaRegUserCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import Image from "next/image";
import img1 from "@/Assets/BlogImage/img1.jpg";
import { FaRegCommentDots } from "react-icons/fa6";
import DetailsButton from "./DetailsButton";
const BlogCard = () => {
  const title = "Sales Training: Practical Techniques";
  const description =
    "Enhance your sales prowess with practical techniques focused on communication, negotiation, and customer relations. This course offers actionable insights for achieving greater success in sales.";
  return (
    <div className="  shadow-[0px_0px_5px_1px_rgba(17,17,26,.3)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md duration-500 group">
      {/* Image  */}
      <div className="relative rounded-t-md overflow-hidden">
        <Image
          src={img1}
          alt="Blog Image"
          height="fill"
          width="fill"
          className="rounded-t object-cover group-hover:scale-105 transition duration-500"
        />
        <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">
          Feb 20, 2024
        </p>
      </div>
      {/* Blog Content */}
      <div className="p-4 flex flex-col justify-between">
        <p className="py-1 -mt-2 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">
          Digital Marketing
        </p>
        <h2 className="text-xl text-title font-bold mb-2 truncate">{title}</h2>
        <h4 className=" mb-4 text-gray-500 line-clamp-3 text-justif">{description}</h4>
        <div className="flex  justify-between items-center shadow-sm">
          <p className="flex text-description justify-center items-center gap-1">
            <span className="text-primary flex justify-center items-center">
              <FaRegUserCircle size={18}/>
            </span>{" "}
            SohanPerves
          </p>
          <div className="flex justify-between items-center gap-4">
            <p className="text-description flex  justify-center items-center gap-1">
              <span className="text-primary flex justify-center items-center">
                <FaRegCommentDots  size={18}/>
              </span>
              10
            </p>
            <p className="text-description flex justify-center items-center gap-1">
              <span className="text-primary flex justify-center items-center">
                <BiLike  size={20}/>
              </span>
              100
            </p>
          </div>
        </div>
        <div className="relative flex justify-between items-center pt-[6%] overflow-hid rounded-[10px]">
          <DetailsButton name={'Read More'} linkPath={''}/>
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  param: PropTypes,
};

export default BlogCard;

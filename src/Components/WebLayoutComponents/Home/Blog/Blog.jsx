import Image from "next/image";
import img1 from "@/Assets/BlogImage/img1.jpg";
import img2 from "@/Assets/BlogImage/img2.jpg";
import img3 from "@/Assets/BlogImage/img3.jpg";
import { LuMoveRight } from "react-icons/lu";
import ShareButton from "./ShareButton";
import "./divider.css";
import Section from "@/Components/Utils/Section";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const Blog = () => {
  const title = "Sales Training: Practical Techniques";
  const description =
    "Enhance your sales prowess with practical techniques focused on communication, negotiation, and customer relations. This course offers actionable insights for achieving greater success in sales.";
  return (
    <div className="max-w-screen-xl mx-auto">
      <Section>
        {/* Header for Blog Section */}
        <div className="flex flex-col items-center pb-12">
          <h5 className="py-1 px-3 bg-[#2a5a1e] rounded text-white">
            News feeds
          </h5>
          <h3 className="text-3xl md:text-4xl font-bold pt-2">
            Latest News & Articles
          </h3>
          <span className="section-divider"></span>
        </div>
        {/* Blog Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-3 px-[2.5px] lg:px-[8%] xl:px-0">
          {/* First Card */}
          <div className="min-w-[370px] max-w-[420px] h-[540px] shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden hover:-translate-y-1 duration-700 group">
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
            <div className="p-5 flex flex-col justify-between">
              <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">
                Digital Marketing
              </p>
              <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
              <h4 className=" mb-5 text-gray-600">
                {description.slice(0, 85)} ...
              </h4>
              <div className="flex  justify-between items-center shadow-sm">
                <p className="flex justify-center items-center gap-1">
                  <span>
                    <FaRegUserCircle />
                  </span>{" "}
                  BySohanPerves
                </p>
                {/* <GoDotFill className='w-3 h-3' /> */}
                <div className="flex justify-between items-center gap-4">
                  <p className="flex justify-center items-center gap-1">
                    <span>
                      <FaCommentDots />
                    </span>
                    10
                  </p>
                  {/* <GoDotFill className='w-3 h-3' /> */}
                  <p className="flex justify-center items-center gap-1">
                    <span>
                      <AiFillLike />
                    </span>
                    100
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-[6%]">
                <button className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">
                  Read More
                  <span>
                    <LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" />
                  </span>
                </button>
                <ShareButton />
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className="min-w-[370px] max-w-[420px] h-[540px] shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden hover:-translate-y-1 duration-700 group">
            <div className="relative">
              <Image
                src={img2}
                alt="Blog Image"
                height="fill"
                width="fill"
                className="rounded-t group-hover:scale-105 transition duration-500"
              />
              <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">
                Feb 20, 2024
              </p>
            </div>
            <div className="p-5 flex flex-col justify-between">
              <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">
                Digital Marketing
              </p>
              <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
              <h4 className=" mb-5 text-gray-600">
                {description.slice(0, 85)} ...
              </h4>
              <div className="flex  justify-between items-center shadow-sm">
                <p className="flex justify-center items-center gap-1">
                  <span>
                    <FaRegUserCircle />
                  </span>{" "}
                  BySohanPerves
                </p>
                {/* <GoDotFill className='w-3 h-3' /> */}
                <div className="flex justify-between items-center gap-4">
                  <p className="flex justify-center items-center gap-1">
                    <span>
                      <FaCommentDots />
                    </span>
                    10
                  </p>
                  {/* <GoDotFill className='w-3 h-3' /> */}
                  <p className="flex justify-center items-center gap-1">
                    <span>
                      <AiFillLike />
                    </span>
                    100
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-[6%]">
                <button className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">
                  Read More{" "}
                  <span>
                    <LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" />
                  </span>
                </button>
                <ShareButton />
              </div>
            </div>
          </div>
          {/* 3rd  card */}
          <div className="min-w-[370px] max-w-[420px] h-[540px] shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden hover:-translate-y-1 duration-700 group">
            <div className="relative">
              <Image
                src={img3}
                alt="Blog Image"
                height="fill"
                width="fill"
                className="rounded-t group-hover:scale-105 transition duration-500"
              />
              <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">
                Feb 20, 2024
              </p>
            </div>
            <div className="p-5 flex flex-col justify-between">
              <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">
                Digital Marketing
              </p>
              <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
              <h4 className=" mb-5 text-gray-600">
                {description.slice(0, 85)} ...
              </h4>
              <div className="flex  justify-between items-center shadow-sm">
                <p className="flex justify-center items-center gap-1">
                  <span>
                    <FaRegUserCircle />
                  </span>{" "}
                  BySohanPerves
                </p>
                {/* <GoDotFill className='w-3 h-3' /> */}
                <div className="flex justify-between items-center gap-4">
                  <p className="flex justify-center items-center gap-1">
                    <span>
                      <FaCommentDots />
                    </span>
                    10
                  </p>
                  {/* <GoDotFill className='w-3 h-3' /> */}
                  <p className="flex justify-center items-center gap-1">
                    <span>
                      <AiFillLike />
                    </span>
                    100
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-[6%]">
                <button className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">
                  Read More{" "}
                  <span>
                    <LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" />
                  </span>
                </button>
                <ShareButton />
              </div>
            </div>
          </div>
        </div>
        {/* See More Button */}
        <div className="flex justify-center my-12">
          <button className="text-2xl font-semibold flex items-center gap-2 shadow py-1 px-3 bg-primary rounded-md hover:bg-white hover:text-primary hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] text-white hover:duration-300">
            See More{" "}
            <span>
              <LuMoveRight />
            </span>
          </button>
        </div>
      </Section>
    </div>
  );
};

export default Blog;

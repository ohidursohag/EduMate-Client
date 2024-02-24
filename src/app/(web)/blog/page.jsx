import Section from "@/Components/Utils/Section";
import Image from "next/image";
import img1 from "@/Assets/BlogImage/img1.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";
import ShareButton from "@/Components/WebLayoutComponents/Home/Blog/ShareButton";
import Container from "@/Components/Utils/Container";
const BlogPage = () => {
  const title = "Sales Training: Practical Techniques";
  const description =
    "Enhance your sales prowess with practical techniques focused on communication, negotiation, and customer relations. This course offers actionable insights for achieving greater success in sales.";
  return (
    <Container>
      <Section>
        <div className="p-[2.5px] grid grid-cols-1 lg:grid-cols-4 gap-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 col-span-3">
            {/* 1st Card Start */}
            <div className="min-w-[370px] max-w-[420px] h-[540px] shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden duration-700 group">
              <div className="relative ">
                <Image src={img1} alt="Blog Image" height="fill" width="fill" className="rounded-t group-hover:scale-105 transition duration-500" />
                <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">Feb 20, 2024</p>
              </div>
              <div className="p-5 flex flex-col justify-between bg-white">
                <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">Digital Marketing</p>
                <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
                <h4 className=" mb-5 text-gray-600">{description.slice(0, 75)} ...</h4>
                <div className="flex  justify-between items-center shadow-sm">
                  <p className="flex justify-center items-center gap-1"><span><FaRegUserCircle /></span>BySohanPerves</p>
                  <div className="flex justify-between items-center gap-4">
                    <p className="flex justify-center items-center gap-1"><span><FaCommentDots /></span>10</p>
                    <p className="flex justify-center items-center gap-1"><span><AiFillLike /></span>100</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-[6%]">
                  <button className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">Read More
                    <span><LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" /></span>
                  </button>
                  <ShareButton />
                </div>
              </div>
            </div>
            {/* 1st Card End */}
            {/* 2nd Card Start */}
            <div className="min-w-[370px] max-w-[420px] h-[540px] shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden duration-700 group">
              <div className="relative ">
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
              <div className="p-5 flex flex-col justify-between bg-white">
                <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">
                  Digital Marketing
                </p>
                <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
                <h4 className=" mb-5 text-gray-600">
                  {description.slice(0, 75)} ...
                </h4>
                <div className="flex  justify-between items-center shadow-sm">
                  <p className="flex justify-center items-center gap-1">
                    <span>
                      <FaRegUserCircle />
                    </span>{" "}
                    BySohanPerves
                  </p>
                  <div className="flex justify-between items-center gap-4">
                    <p className="flex justify-center items-center gap-1">
                      <span>
                        <FaCommentDots />
                      </span>
                      10
                    </p>
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
            {/* 2nd Card End */}
            {/* 3rd Card Start */}
            <div className="min-w-[370px] max-w-[420px] h-[540px] shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden duration-700 group">
              <div className="relative ">
                <Image src={img1} alt="Blog Image" height="fill" width="fill" className="rounded-t group-hover:scale-105 transition duration-500" />
                <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">Feb 20, 2024</p>
              </div>
              <div className="p-5 flex flex-col justify-between bg-white">
                <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">Digital Marketing</p>
                <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
                <h4 className=" mb-5 text-gray-600">{description.slice(0, 75)} ...</h4>
                <div className="flex  justify-between items-center shadow-sm">
                  <p className="flex justify-center items-center gap-1"><span><FaRegUserCircle /></span>BySohanPerves</p>
                  <div className="flex justify-between items-center gap-4">
                    <p className="flex justify-center items-center gap-1"><span><FaCommentDots /></span>10</p>
                    <p className="flex justify-center items-center gap-1"><span><AiFillLike /></span>100</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-[6%]">
                  <button className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">Read More
                    <span><LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" /></span>
                  </button>
                  <ShareButton />
                </div>
              </div>
            </div>
            {/* 3rd Card End */}
          </div>
          {/* Filter Layout Start */}
          <div className="bg-sky-200 col-span-1 rounded-md w-[426px]">
            <div className="p-5 flex items-center bg-gray-100 rounded-md">
              <input type="text" name="" id="" className="w-full py-3 px-2 rounded-l-md border-none outline-none" />
              <button className="bg-primary text-white py-4 rounded-r-md px-5 hover:bg-secondary"><FaSearch /></button>
            </div>
            <div className="p-5 bg-gray-100 rounded-md mt-5">
              <h5 className="text-2xl font-bold">Recent Posts</h5>
              <div className="flex items-center gap-3">
                <Image src={img1} alt="Blog Image" height="fill" width="fill" className="w-20 h-14 rounded-t group-hover:scale-105 transition duration-500" />
                <div className="space-y-2">
                  <h3 className="font-medium">Expand Your Career Opportunities…</h3>
                  <p className="text-sm">January 18, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
};

export default BlogPage;

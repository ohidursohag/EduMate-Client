import banner1 from "../../../../../public/BannerImage/banner1.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col  h-[90vh] items-center justify-center  md:flex-row p-12 ">
      <div className="  md:w-5/12 space-y-3">
        <h2 className=" leading-5 text-2xl md:text-3xl lg:text-4xl space-y-5">
          Make a Difference:
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold">Enhance</span> Your
        </p>
        <span className="inline-block  text-2xl md:text-3xl lg:text-4xl ">
          <span className="font-bold">Career</span> With <br /> Edumate
        </span>{" "}
        <p className="">
          Our course are led by industry experts and experienced instruction who
          are passionate about technology and commited to helpoing you succeed
        </p>
        <button className="max-w-60 px-4 py-2 text-white bg-[#e03314] rounded-md">
          Explore Course
        </button>
      </div>

      <div className="w-4/12">
        <Image
          className=""
          src={banner1}
          alt="banner image a person with laptop"
        ></Image>
      </div>

      <div className="flex    md:flex-col gap-1  md:gap-16    ">
        <div>
          <h2 className=" text-md md:text-3xl font-bold pb-2"> 40k</h2>
          <span className="text-gray-700   border-b-slate-700 border-b-2 pb-4">
            Student joined
          </span>
        </div>
        <div>
          <h2 className=" text-2xl md:text-3xl font-bold pb-2"> 30+</h2>
          <span className="text-gray-700   border-b-slate-700 border-b-2 pb-4">
            Online Courses
          </span>
        </div>
        <div>
          <h2 className=" text-2xl md:text-3xl font-bold pb-2"> 22+</h2>
          <span className="text-gray-700   border-b-slate-700 border-b-2 pb-4">
            Experienced Mentors
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

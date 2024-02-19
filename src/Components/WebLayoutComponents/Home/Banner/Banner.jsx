import banner1 from "../../../../../public/BannerImage/banner-without-bg.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col  items-center justify-center bg-[#212138]  text-white  md:flex-row p-8 lg:p-0 ">
      <div className="  md:w-4/12  space-y-1 md:space-y-4">
        <h2 className="  text-2xl md:text-3xl lg:text-5xl space-y-5">
          Make a Difference
        </h2>
        <p className="text-2xl md:text-3xl lg:text-5xl">
          <span className="font-bold">Enhance</span> Your
        </p>
        <span className="inline-block  text-2xl md:text-3xl lg:text-5xl ">
          <span className="font-bold">Career</span> With <br /> Edumate
        </span>{" "}
        <p className="pb-5  text-sm md:text-md ">
          Our course are led by industry experts and <br /> experienced
          instruction who are passionate <br /> about technology and commited to
          helpoing <br /> you succeed
        </p>
        <button className="max-w-60 px-4 py-3 text-white bg-[#e03314] rounded-md ">
          Explore Course
        </button>
      </div>

      <div className=" md:w-4/12">
        <Image
          className=""
          src={banner1}
          alt="banner image a person with laptop"
        ></Image>
      </div>

      <div className="flex    md:flex-col gap-7  md:gap-20 justify-center   ">
        <div>
          <h2 className=" text-md md:text-3xl font-bold pb-2"> 40k</h2>
          <span className="text-white   border-b-slate-700  md:border-b-2 pb-4">
            Student joined
          </span>
        </div>
        <div>
          <h2 className=" text-md md:text-3xl font-bold pb-2"> 30+</h2>
          <span className="text-white   border-b-slate-700  md:border-b-2 pb-4">
            Online Courses
          </span>
        </div>
        <div>
          <h2 className=" text-md md:text-3xl font-bold pb-2"> 22+</h2>
          <span className="text-white   border-b-slate-700  md:border-b-2 pb-4">
            Experienced Mentors
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

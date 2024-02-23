import Link from "next/link";
import animationCss from "./animation.module.css";
const BannerTextContent = () => {
  return (
    <div className=" w-full sm:max-w-[500px] mx-auto md:mx-0 md:w-[45%] lg:w-[50%] xl:w-[35%] 3xl:flex-1 3xl:max-w-none px-2">
      <div className={`${animationCss.headerTexAnimation} `}>
        <h2 className="text-3xl xs:text-4xl sm:text-[40px]  lg:text-[50px] xl:text-[40px]  2xl:text-[55px] font-Jost  py-5 font-bold text-title leading-none 2xl:leading-[60px]">
          Build The Skills <br /> To Drive Your Career.
        </h2>
      </div>
      <p className={`pb-5 text-primary sm:max-w-[500px] text-sm xs:text-base 2xl:text-lg `}>
        Our course are led by industry experts and experienced instruction who
        are passionate about technology and commited to helpoing you succeed
      </p>
      <Link
        href={""}
        className=" xl:text-xl  md:mx-0 w-max px-5 py-3 bg-primary text-white relative overflow-hidden group z-10 rounded-lg shadow-md flex items-center gap-2">
        <span className="absolute -z-[1] bg-gray-300 rotate-12 -inset-12 group-hover:duration-500 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute -z-[1] bg-secondary/50  rotate-12 -inset-12 group-hover:duration-500 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute -z-[1] bg-primary rotate-12 -inset-12 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
        Explor Courses
      </Link>
    </div>
  );
};

export default BannerTextContent;

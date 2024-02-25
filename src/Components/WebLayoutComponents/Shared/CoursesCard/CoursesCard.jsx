"use client"
import Section from "@/Components/Utils/Section";
import Image from "next/image";
import img1 from "../../../../Assets/CoursesCard/img1.jpg"
import img2 from "../../../../Assets/CoursesCard/img2.jpg"
import img3 from "../../../../Assets/CoursesCard/img3.jpg"
import { LuMoveRight, LuBook } from "react-icons/lu";
import { FaBookmark, FaStar, FaUser } from "react-icons/fa6";
import Swal from "sweetalert2";

const CoursesCard = () => {
   const handleBookmark = () => {
      Swal.fire({
         position: "top-center",
         icon: "success",
         title: "Successfully Added to Bookmark",
         showConfirmButton: false,
         timer: 1000
      });
   }
   return (
      <div className="max-w-7xl mx-auto ">
         <Section>
            <div className="flex justify-end mb-5 lg:mr-32 xl:mr-0">
               <button className="flex items-center gap-2 shadow-md py-1 px-3 bg-primary hover:bg-white  rounded-md text-white hover:text-black hover:duration-500 group max-w-max">
                  See All Course
                  <span>
                     <LuMoveRight />
                  </span>
               </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-[2.5px] md:p-5 lg:p-0 lg:mx-[12%] xl:mx-0 justify-center content-center">
               {/* 1st Card */}
               <div className="lg:max-w-[425px] xl:max-w-max lg:max-h-[550px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:-translate-y-1 duration-700 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-5 rounded-md flex flex-col md:flex-row lg:flex-col xl:flex-row min-w-[370px] max-w-[425px] md:max-w-full max-h-[550px] gap-5">
                  <div>
                     <Image src={img3} width="fill" height="fill" alt="Course Image" className="rounded h-[250px]" />
                  </div>
                  <div className="">
                     <div className="flex justify-between items-center">
                        <p className="flex items-center"><span className="flex items-center mr-2 text-[#ff9747] "><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span><span className="text-sm">(15 Reviews)</span></p>
                        <button onClick={handleBookmark} className="p-[6px] hover:bg-secondary hover:text-white rounded-full"><FaBookmark /></button>
                     </div>
                     <h2 className="text-3xl font-bold pt-3 pb-1">React Front to Back</h2>
                     <div className="flex justify-start items-center gap-10 pb-2">
                        <p className="flex items-center gap-2 font-medium"><LuBook />12 Lession</p>
                        <p className="flex items-center gap-2 font-medium"><FaUser />50 Students</p>
                     </div>
                     <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, adipisci?</p>
                     <div className="flex items-center justify-start gap-5 pt-3">
                        <Image src={img1} width="fill" height="fill" alt="Course Image" className="rounded-full w-10 h-10" />
                        <h5>By Sohan In Development</h5>
                     </div>
                     <div className="flex justify-between items-center pt-[3%]">
                        <h5 className="text-xl font-bold">$60 / <span className="text-gray-400 line-through">$100</span></h5>
                        <button className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group max-w-max">
                           Learn More
                           <span>
                              <LuMoveRight className="hover:duration-500 w-3 group-hover:w-full" />
                           </span>
                        </button>
                     </div>
                  </div>
               </div>
               {/* 2nd Card */}
               <div className="p-5 rounded-md flex flex-col md:flex-row lg:flex-col xl:flex-row min-w-[370px] max-w-[425px] md:max-w-full lg:max-w-[425px] max-h-[550px] lg:max-h-[550px] xl:max-w-max gap-5 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:-translate-y-1 duration-700 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                  <div>
                     <Image src={img3} width="fill" height="fill" alt="Course Image" className="rounded h-[250px]" />
                  </div>
                  <div className="">
                     <div className="flex justify-between items-center">
                        <p className="flex items-center"><span className="flex items-center mr-2 text-[#ff9747] "><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span><span className="text-sm">(15 Reviews)</span></p>
                        <button onClick={handleBookmark} className="p-[6px] hover:bg-secondary hover:text-white  rounded-full"><FaBookmark /></button>
                     </div>
                     <h2 className="text-3xl font-bold pt-3 pb-1">React Front to Back</h2>
                     <div className="flex justify-start items-center gap-10 pb-2">
                        <p className="flex items-center gap-2 font-medium"><LuBook />12 Lession</p>
                        <p className="flex items-center gap-2 font-medium"><FaUser />50 Students</p>
                     </div>
                     <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, adipisci?</p>
                     <div className="flex items-center justify-start gap-5 pt-3">
                        <Image src={img1} width="fill" height="fill" alt="Course Image" className="rounded-full w-10 h-10" />
                        <h5>By Sohan In Development</h5>
                     </div>
                     <div className="flex justify-between items-center pt-[3%]">
                        <h5 className="text-xl font-bold">$60 / <span className="text-gray-400 line-through">$100</span></h5>
                        <button className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group max-w-max">
                           Learn More
                           <span>
                              <LuMoveRight className="hover:duration-500 w-3 group-hover:w-full" />
                           </span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

         </Section>
      </div>
   );
};

export default CoursesCard;
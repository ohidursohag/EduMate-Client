import Section from "@/Components/Utils/Section";
import Image from "next/image";
import img1 from "../../../../Assets/CoursesCard/img3.jpg"
import { LuMoveRight } from "react-icons/lu";
const CourseCategoryCard = () => {
   return (
      <div className="max-w-screen-xl mx-auto">
         <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20.5px] p-[5px] md:px-3 xl:p-0">
               {/* 1st card */}
               <div className="relative min-w-[365px] lg:min-w-[324px] xl:min-w-[365px] max-w-[413px] overflow-hidden group duration-500 hover:-translate-y-1 rounded-md">
                  <Image height="fill" alt="Category" width="fill" src={img1} className="w-full group-hover:scale-110  group-hover:rotate-2 duration-700" />
                  <div className="absolute bg-gray-800 opacity-80 group-hover:opacity-60 w-full h-full left-0 top-0 text-white flex justify-center items-center flex-col duration-700 transition-all">
                     <h4 className="text-2xl font-bold mb-2">Web Development</h4>
                     <p className="group-hover:hidden duration-1000">5 Course</p>
                     <button className="items-center gap-3 duration-700 hidden group-hover:flex py-1 px-3 rounded-3xl bg-white text-black text-xl font-semibold">Explore <LuMoveRight /></button>
                  </div>
               </div>
               {/* 2nd card */}
               <div className="relative min-w-[365px]  lg:min-w-[324px] max-w-[413px] overflow-hidden group duration-500 hover:-translate-y-1 rounded-md">
                  <Image height="fill" alt="Category" width="fill" src={img1} className="w-full group-hover:scale-110  group-hover:rotate-2 duration-700" />
                  <div className="absolute bg-gray-800 opacity-80 group-hover:opacity-60 w-full h-full left-0 top-0 text-white flex justify-center items-center flex-col duration-700 transition-all">
                     <h4 className="text-2xl font-bold mb-2">Web Development</h4>
                     <p className="group-hover:hidden duration-1000">5 Course</p>
                     <button className="items-center gap-3 duration-700 hidden group-hover:flex py-1 px-3 rounded-3xl bg-white text-black text-xl font-semibold">Explore <LuMoveRight /></button>
                  </div>
               </div>
               {/* 3rd card */}
               <div className="relative min-w-[365px] lg:min-w-[324px] max-w-[413px] overflow-hidden group duration-500 hover:-translate-y-1 rounded-md">
                  <Image height="fill" alt="Category" width="fill" src={img1} className="w-full group-hover:scale-110  group-hover:rotate-2 duration-700" />
                  <div className="absolute bg-gray-800 opacity-80 group-hover:opacity-60 w-full h-full left-0 top-0 text-white flex justify-center items-center flex-col duration-700 transition-all">
                     <h4 className="text-2xl font-bold mb-2">Web Development</h4>
                     <p className="group-hover:hidden duration-1000">5 Course</p>
                     <button className="items-center gap-3 duration-700 hidden group-hover:flex py-1 px-3 rounded-3xl bg-white text-black text-xl font-semibold">Explore <LuMoveRight /></button>
                  </div>
               </div>
            </div>
         </Section>
      </div>
   );
};

export default CourseCategoryCard;
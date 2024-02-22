
import Container from "@/Components/Utils/Container";
import ShareButton from "@/Components/WebLayoutComponents/Home/Blog/ShareButton";
import { IoSearch } from "react-icons/io5";
import TopCoursecard from "./TopCoursecard";


const SearchDropDown = ({ isSearchShow, setIsSearchShow, scroll }) => {

  return (
    <Container
      
      className={`bg-white  fixed rounded-b-2xl shadow-xl  inset-x-0 z-50 duration-1000  
      ${
        isSearchShow
          ? "scale-y-100 translate-y-0 opacity-100"
          : "scale-y-0 opacity-0 -translate-y-[100%]"
      } 
      ${scroll ? "lg:top-[104px] top-[70px]" : ""}
      `}> 
      <div  className="h-full w-full p-2 sm:p-5 lg:p-8">
        <div className="flex justify-center items-center gap-5 my-5">
         <input type="search" name="search" id="search" className="md:w-[450px] w-[300px] lg:w-[550px] 2xl:w-[700px] duration-500 rounded-md border-none shadow-[1px_1px_2px_1px_rgba(44,95,45,0.7)] focus:border-none focus:ring-0 focus:outline-none focus:shadow-[1px_1px_5px_2px_rgba(44,95,45,1)] h-12 form-input"/>
         <button className="group bg-primary py-3 rounded-md text-white shadow-[1px_1px_2px_2px_rgba(44,95,45,0.5)] hover:shadow-[1px_1px_3px_3px_rgba(44,95,45,0.7)] duration-500 sm:px-5 px-2 flex justify-center items-center gap-1"><IoSearch size={25} className="group-hover:scale-125 duration-500"/> <span className="font-medium group-hover: duration-300 hidden sm:inline-block">Search</span></button>
        </div>
        <hr className="my-5"/>
        {/* popular Courses */}
        <div className=" px-5">
         <h2 className="text-description text-xl mb-2">Our Top Courses</h2>
         <div className="overflow-auto px-1 py-2">
         <div className="flex  gap-5">
         <TopCoursecard/>
         <TopCoursecard/>
         <TopCoursecard/>
         <TopCoursecard/>
         <TopCoursecard/>
         </div>
         </div>
        </div>
      </div>
    </Container>
  );
};

export default SearchDropDown;

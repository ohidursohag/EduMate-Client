import Container from "@/Components/Utils/Container";
import Banner from "@/Components/WebLayoutComponents/Home/Banner/Banner";

import Blog from "@/Components/WebLayoutComponents/Home/Blog/Blog";
import FreeCourses from "@/Components/WebLayoutComponents/Home/FreeCourses/FreeCourses";
import CourseCard from "@/Components/WebLayoutComponents/Shared/CourseCard/CourseCard";
import { ContextProvider } from "@/ContextProvider/ContextProvider";

const Homepage = () => {
  return (
    <div>
      <ContextProvider>
        <Banner></Banner>
        <Blog />
        {/* <FreeCourses></FreeCourses> */}
      </ContextProvider>
    </div>
  );
};

export default Homepage;

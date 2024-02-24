import Container from "@/Components/Utils/Container";
import Banner from "@/Components/WebLayoutComponents/Home/Banner/Banner";

import Blog from "@/Components/WebLayoutComponents/Home/Blog/Blog";
import FreeCourses from "@/Components/WebLayoutComponents/Home/FreeCourses/FreeCourses";
import PopularCourses from "@/Components/WebLayoutComponents/Home/PopularCourses/PopularCourses";
import CourseCard from "@/Components/WebLayoutComponents/Shared/Cards/CourseCard";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses/>
      <Blog />
    </div>
  );
};

export default Homepage;

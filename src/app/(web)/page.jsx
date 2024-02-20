import Container from "@/Components/Utils/Container";
import Banner from "@/Components/WebLayoutComponents/Home/Banner/Banner";

import Blog from "@/Components/WebLayoutComponents/Home/Blog/Blog";
import FreeCourses from "@/Components/WebLayoutComponents/Home/FreeCourses/FreeCourses";
import CourseCard from "@/Components/WebLayoutComponents/Shared/CourseCard/CourseCard";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Blog />
      <FreeCourses></FreeCourses>
    </div>
  );
};

export default Homepage;

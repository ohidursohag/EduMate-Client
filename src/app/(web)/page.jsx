import Container from "@/Components/Utils/Container";
import Banner from "@/Components/WebLayoutComponents/Home/Banner/Banner";

import Blog from "@/Components/WebLayoutComponents/Home/Blog/Blog";
import FAQ from "@/Components/WebLayoutComponents/Home/FAQ/FAQ";
import FreeCourses from "@/Components/WebLayoutComponents/Home/FreeCourses/FreeCourses";
import CourseCard from "@/Components/WebLayoutComponents/Shared/CourseCard/CourseCard";
import CourseCategoryCard from "@/Components/WebLayoutComponents/Shared/CourseCategoryCard/CourseCategoryCard";
import CoursesCard from "@/Components/WebLayoutComponents/Shared/CoursesCard/CoursesCard";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Blog />
      <FAQ />
      <CoursesCard />
      <CourseCategoryCard />
      {/* <FreeCourses></FreeCourses> */}
    </div>
  );
};

export default Homepage;

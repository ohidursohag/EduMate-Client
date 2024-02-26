import Banner from "@/Components/WebLayoutComponents/Home/Banner/Banner";

import Blog from "@/Components/WebLayoutComponents/Home/Blog/Blog";
import FAQ from "@/Components/WebLayoutComponents/Home/FAQ/FAQ";
import FreeCourses from "@/Components/WebLayoutComponents/Home/FreeCourses/FreeCourses";
import PopularCourses from "@/Components/WebLayoutComponents/Home/PopularCourses/PopularCourses";
import Review from "@/Components/WebLayoutComponents/Home/Review/Review";


const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses />
      <FreeCourses />
      <FAQ />
      <Blog />
      <Review />
    </div>
  );
};

export default Homepage;

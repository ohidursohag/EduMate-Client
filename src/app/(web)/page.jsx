import Banner from "@/Components/WebLayoutComponents/Home/Banner/Banner";

import Blog from "@/Components/WebLayoutComponents/Home/Blog/Blog";
import FAQ from "@/Components/WebLayoutComponents/Home/FAQ/FAQ";
import FreeCourses from "@/Components/WebLayoutComponents/Home/FreeCourses/FreeCourses";
import PopularCourses from "@/Components/WebLayoutComponents/Home/PopularCourses/PopularCourses";
import Review from "@/Components/WebLayoutComponents/Home/Review/Review";
import UpComingCourses from "@/Components/WebLayoutComponents/Home/UpComingCourses/UpComingCourses";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses />
      <UpComingCourses />
      <FreeCourses />
      <Review />
      <Blog />
      <FAQ />
    </div>
  );
};

export default Homepage;

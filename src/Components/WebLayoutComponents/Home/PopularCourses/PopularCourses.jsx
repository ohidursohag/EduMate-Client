import Container from "@/Components/Utils/Container";
import Section from "@/Components/Utils/Section";
import SectionTitle from "@/Components/Utils/SectionTitle/SectionTitle";
import BlogCard from "../../Shared/Cards/BlogCard";
import { LuMoveRight } from "react-icons/lu";

const PopularCourses = () => {

  return (
    <Section>
      <Container>
        {/* Header for Blog Section */}
        <SectionTitle
          sectionName={"Popular"}
          title={"Our Popular Courses For You"}
        />
        {/* Blog Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  ">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        </div>
        {/* All Courses */}
        <div className="flex justify-center my-12">
          <button className="text-2xl font-semibold flex items-center gap-2 shadow py-1 px-3 bg-primary rounded-md hover:bg-white hover:text-primary hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] text-white hover:duration-300">
            See More{" "}
            <span>
              <LuMoveRight />
            </span>
          </button>
        </div>
      </Container>
    </Section>
  )
};

export default PopularCourses;

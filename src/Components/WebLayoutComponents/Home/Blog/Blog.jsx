import { LuMoveRight } from "react-icons/lu";
import "./divider.css";
import Section from "@/Components/Utils/Section";
import SectionTitle from "@/Components/Utils/SectionTitle/SectionTitle";
import Container from "@/Components/Utils/Container";
import BlogCard from "../../Shared/Cards/BlogCard";
import SeeMoreButton from "@/Components/Utils/Buttons/SeeMoreButton";

const Blog = () => {
  const title = "Sales Training: Practical Techniques";
  const description =
    "Enhance your sales prowess with practical techniques focused on communication, negotiation, and customer relations. This course offers actionable insights for achieving greater success in sales.";
  return (
    <Section>
      <Container>
        {/* Header for Blog Section */}
        <SectionTitle
          sectionName={"News feeds"}
          title={"Latest News & Articles"}
        />
        {/* Blog Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        {/* See More Button */}
        <SeeMoreButton
          linkPath={""}
          name={"See More"}
          className={"flex justify-center mt-10 lg:text-xl"}
        />
      </Container>
    </Section>
  );
};

export default Blog;

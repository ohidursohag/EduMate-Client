import Image from "next/image";
import img1 from "@/Assets/BlogImage/img1.jpg";
import img2 from "@/Assets/BlogImage/img2.jpg";
import img3 from "@/Assets/BlogImage/img3.jpg";
import { LuMoveRight } from "react-icons/lu";
import ShareButton from "./ShareButton";
import "./divider.css";
import Section from "@/Components/Utils/Section";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import SectionTitle from "@/Components/Utils/SectionTitle/SectionTitle";
import Container from "@/Components/Utils/Container";
import BlogCard from "../../Shared/Cards/BlogCard";

const Blog = () => {
  const title = "Sales Training: Practical Techniques";
  const description =
    "Enhance your sales prowess with practical techniques focused on communication, negotiation, and customer relations. This course offers actionable insights for achieving greater success in sales.";
  return (
    <Section >
      <Container>
        {/* Header for Blog Section */}
        <SectionTitle
          sectionName={"News feeds"}
          title={"Latest News & Articles"}
        />
        {/* Blog Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  ">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        </div>
        {/* See More Button */}
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
  );
};

export default Blog;

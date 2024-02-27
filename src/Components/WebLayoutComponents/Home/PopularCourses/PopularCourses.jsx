import Container from "@/Components/Utils/Container";
import Section from "@/Components/Utils/Section";
import SectionTitle from "@/Components/Utils/SectionTitle/SectionTitle";

import SeeMoreButton from "@/Components/Utils/Buttons/SeeMoreButton";
import { promises as fs } from "fs";
import CoursesCard from "../../Shared/Cards/CoursesCard";
const PopularCourses = async () => {
  const file = await fs.readFile(
    process.cwd() + "/public/allCourses.json",
    "utf8"
  );
  const data = JSON.parse(file);

  const popular_Courses = data.filter((course) => course.status === "popular" && course.status !== "upcoming" && course.pricing ==='paid');
  // console.log(popular_Courses)
  return (
    <Section>
      <Container>
        {/* Header for Blog Section */}
        <SectionTitle
          sectionName={"Popular Courses"}
          title={"Our Popular Courses"}
        />
        <SeeMoreButton
          linkPath={""}
          name={"All Popular Courses"}
          className={"flex justify-end mb-5"}
        />
        {/* Blog Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 3xl:grid-cols- gap-5  ">
          {popular_Courses.slice(0, 6).map((course, idx) => (
            <CoursesCard key={idx} course={course} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PopularCourses;

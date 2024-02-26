import Container from "@/Components/Utils/Container";
import Section from "@/Components/Utils/Section";
import SectionTitle from "@/Components/Utils/SectionTitle/SectionTitle";

import CoursesCard from "../../Shared/Cards/CoursesCard";
import CourseCategoryCard from "../../Shared/Cards/CourseCategoryCard";
import SeeMoreButton from "@/Components/Utils/Buttons/SeeMoreButton";
import { promises as fs } from "fs";
const FreeCourses = async () => {
  const file = await fs.readFile(
    process.cwd() + "/public/allCourses.json",
    "utf8"
  );
  const data = JSON.parse(file);
  const freeCourses = data.filter((course) => course.pricing === "free");
  return (
    <Section>
      <Container>
        {/* Header for Blog Section */}
        <SectionTitle
          sectionName={"Free Courses"}
          title={"Free Courses For You"}
        />
        <SeeMoreButton
          linkPath={""}
          name={"All Free Courses"}
          className={"flex justify-end mb-5"}
        />
        {/* Blog Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 3xl:grid-cols- gap-5  ">
          {freeCourses.slice(0, 4).map((course, idx) => (
            <CoursesCard key={idx} course={course} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FreeCourses;

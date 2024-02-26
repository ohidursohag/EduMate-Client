
import Container from "@/Components/Utils/Container";
import Section from "@/Components/Utils/Section";
import SectionTitle from "@/Components/Utils/SectionTitle/SectionTitle";

import CoursesCard from "../../Shared/Cards/CoursesCard";
import CourseCategoryCard from "../../Shared/Cards/CourseCategoryCard";
import SeeMoreButton from "@/Components/Utils/Buttons/SeeMoreButton";
import { promises as fs } from 'fs'
const PopularCourses = async () => {
  const file = await fs.readFile(process.cwd() + '/public/allCourses.json', 'utf8');
  const data = JSON.parse(file);
  console.log(data)
  return (
    <Section>
      <Container>
        {/* Header for Blog Section */}
        <SectionTitle sectionName={"Popular Courses"} title={"Our Popular Courses"} />
        <SeeMoreButton
          linkPath={""}
          name={"All Popular Courses"}
          className={"flex justify-end mb-5"}
        />
        {/* Blog Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 3xl:grid-cols- gap-5  ">
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
        </div>
      </Container>
    </Section>
  );
};

export default PopularCourses;

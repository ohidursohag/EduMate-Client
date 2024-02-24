"use client";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import Container from "@/Components/Utils/Container";
import CourseCard from "@/Components/WebLayoutComponents/Shared/CourseCard/CourseCard";
import CourseCategories from "./courseCategories/CourseCategories";
import LatestCourseDemo from "./latestCourseDemo/LatestCourseDemo";
import CourseFilter from "./CourseFilter/CourseFilter";
import { useEffect, useState } from "react";
const CoursesPage = () => {
  const [categoryFilter, setcategoryFilter] = useState(false);
  console.log(categoryFilter);

  const [getCourseData, setCourseData] = useState([]);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/courseData");
        setCourseData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [axiosPublic]);

  // const programmingCourse = getCourseData?.data.filter(
  //   (programming) => programming.name === "Programming"
  // );

  // const graphicsDesign = getCourseData?.data.filter(
  //   (programming) => programming.name == "Graphic Design"
  // );

  // const dataScience = getCourseData?.data.filter(
  //   (programming) => programming.name == "Data Science"
  // );

  // const webDevelopment = getCourseData?.data.filter(
  //   (programming) => programming.name == "Web Development"
  // );

  const latestFreeCourses = getCourseData
    ?.flatMap((category) => category?.courses)
    .filter((course) => course?.pricing == "Free");

  return (
    <Container>
      <div className="relative">
        <div className="my-4 text-3xl font-bold"> Courses </div>

        <div className="grid grid-cols-12 bg-[#00000000]">
          <div className=" col-span-9 px-2">
            <CourseFilter
              categoryFilter={categoryFilter}
              setcategoryFilter={setcategoryFilter}
            ></CourseFilter>

            {/* ============ left side card section========================= */}

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3    ">
              {getCourseData?.slice(0, 9).map((course, index) =>
                course?.courses.slice(0, 9).map((course) => {
                  return (
                    <CourseCard courseData={course} key={index}></CourseCard>
                  );
                })
              )}
            </div>
          </div>

          {/* ============== right sidecategories section===================== */}

          <div className=" hidden md:block col-span-3 space-y-6 p-4">
            <CourseCategories />
            <h2 className="text-2xl relative font-medium mb-6 ">Latest </h2>
            <div className=" flex flex-col gap-4">
              {latestFreeCourses.slice(2, 5).map((freeCourse, index) => (
                <LatestCourseDemo freeCourse={freeCourse} key={index} />
              ))}
            </div>
          </div>

          <div className="block md:hidden ">
            <CourseCategories
              smallDevice={true}
              categoryFilter={categoryFilter}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoursesPage;

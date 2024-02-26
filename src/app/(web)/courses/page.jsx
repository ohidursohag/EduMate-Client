"use client";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import Container from "@/Components/Utils/Container";
import CourseCard from "@/Components/WebLayoutComponents/Shared/CourseCard/CourseCard";
import CourseCategories from "./courseCategories/CourseCategories";
import LatestCourseDemo from "./latestFreeCourseDemo/LatestCourseDemo";
import CourseFilter from "./CourseFilter/CourseFilter";
import { useEffect, useState } from "react";
const CoursesPage = () => {
  const [getCourseData, setCourseData] = useState([]);

  const [isflex, setFlex] = useState(false);
  const [categoryFilter, setcategoryFilter] = useState(false);

  const InitialcategoriesState = {
    development: false,
    programming: false,
    dataScience: false,
    videoGraphy: false,
    graphicsDesign: false,
    digitalMarketing: false,
    graphicsDesign: false,
    algorithom: false,
    machineLearning: false,
  };
  const [categoriesSelected, setCategoriesSelected] = useState(
    InitialcategoriesState
  );

  const resetCheckedBox = () => {
    setCategoriesSelected(InitialcategoriesState);
  };

  // ====================categories  handlechanger================

  const handleChangeCategories = (category) => {
    setCategoriesSelected((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  const axiosPublic = useAxiosPublic();

  // ============fetching categories data============

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/categories");
        setCourseData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [axiosPublic]);

  // =============state checkign is all category selected or not then filter based on categories==================
  const filterCourse = getCourseData.flatMap((category) => {
    if (Object.values(categoriesSelected).every((value) => !value)) {
      return category.courses;
    } else {
      return categoriesSelected[category?.keyWardName] ? category.courses : [];
    }
  });

  // const programmingCourse = getCourseData?.filter(
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
        <div className="my-4 text-3xl md:text-4xl font-bold   text-[#250D87]">
          {" "}
          Courses{" "}
        </div>

        <div className="grid grid-cols-12 bg-[#00000000] w-full">
          <div className="col-span-12 md:col-span-8 lg:col-span-9  px-2">
            <CourseFilter
              filterCourse={filterCourse}
              categoryFilter={categoryFilter}
              setcategoryFilter={setcategoryFilter}
            ></CourseFilter>

            {/* ============ left side Coursecard section========================= */}

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3    ">
              {filterCourse?.slice(0, 6).map((course, index) => (
                <CourseCard
                  // isflex={flex}
                  // setFlex={setFlex}
                  courseData={course}
                  key={index}
                ></CourseCard>
              ))}

              {/* 
            {filterCourse?.map((course, index) =>
                            course?.courses.map((course) => {
                              return (
                                <CourseCard courseData={course} key={index}></CourseCard>
                              );
                            })
                          )} */}
            </div>
          </div>

          {/* ============== right side categories section===================== */}

          <div className=" hidden md:block md:col-span-4 lg:col-span-3 space-y-6 p-4">
            <CourseCategories
              handleChangeCategories={handleChangeCategories}
              categoriesSelected={categoriesSelected}
              resetCheckedBox={resetCheckedBox}
            />
            <h2 className="text-2xl relative font-medium mb-6 ">Latest </h2>

            <div className=" flex flex-col gap-4">
              {latestFreeCourses.map((freeCourse, index) => (
                <LatestCourseDemo freeCourse={freeCourse} key={index} />
              ))}
            </div>
          </div>

          {/* =================slidebar for small device============= */}

          <div className={`${categoryFilter ? "block" : "hidden"} md:hidden `}>
            <CourseCategories
              smallDevice={true}
              categoryFilter={categoryFilter}
            />
          </div>
        </div>

        <div className="pagination">
          <button></button>
        </div>
      </div>
    </Container>
  );
};

export default CoursesPage;

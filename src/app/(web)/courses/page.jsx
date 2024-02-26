"use client";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import Container from "@/Components/Utils/Container";
import CourseCard from "@/Components/WebLayoutComponents/Shared/CourseCard/CourseCard";
import CourseCategories from "./courseCategories/CourseCategories";
import LatestCourseDemo from "./latestFreeCourseDemo/LatestCourseDemo";
import CourseFilter from "./CourseFilter/CourseFilter";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import style from "./course.module.css";
import { useEffect, useState } from "react";
const CoursesPage = () => {
  const [getCourseData, setCourseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(9);
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

  // pagination inforamiton

  const totalProducts = filterCourse.length;

  const totalPage = Math.ceil(totalProducts / itemPerPage);
  console.log(typeof totalPage);
  const pages = [...Array(totalPage).keys()];
  console.log(pages);
  const handlePerPageProductNmuber = (e) => {
    setItemPerPage(Number(e.target.value));
    setCurrentPage(0);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

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

          {/* ============== right side categories FILTER section===================== */}

          <div className=" hidden md:block md:col-span-4 lg:col-span-3 space-y-6 p-4 md:p-2 lg:p-4">
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
              handleChangeCategories={handleChangeCategories}
              smallDevice={true}
              categoriesSelected={categoriesSelected}
              resetCheckedBox={resetCheckedBox}
              categoryFilter={categoryFilter}
            />
          </div>
        </div>

        {/* ==========pagination====================== */}

        <div className="pagination flex items-center justify-center md:justify-start pt-7">
          <button onClick={handlePrev} className="  rounded-lg mr-3 text-white">
            <GrFormPrevious className="text-3xl text-black" />
          </button>

          {pages.map((btn, index) => {
            return (
              <button
                onClick={() => setCurrentPage(index)}
                className={`md:px-8 py-2 md:bg-[#4A2AA8] rounded-lg mr-3 text-black md:text-white ${
                  currentPage === index
                    ? "text-orange-500 md:bg-[#FF8C00] md:text-white"
                    : ""
                }`}
                key={index}
              >
                {" "}
                {index}{" "}
              </button>
            );
          })}

          <select
            onChange={handlePerPageProductNmuber}
            value={itemPerPage}
            name=""
            id=""
          >
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="9">9</option>
            <option value="5">5</option>
          </select>

          <button
            onClick={handleNext}
            className=" py-2  rounded-lg mr-3 text-white"
          >
            <GrFormNext className="text-3xl text-black" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CoursesPage;

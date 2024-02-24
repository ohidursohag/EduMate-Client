import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import Container from "@/Components/Utils/Container";
import CourseCard from "@/Components/WebLayoutComponents/Shared/CourseCard/CourseCard";
import { ImMenu } from "react-icons/im";
import CourseCategories from "./courseCategories/CourseCategories";
import LatestCourseDemo from "./latestCourseDemo/LatestCourseDemo";
const CoursesPage = async () => {
  const axiosPublic = useAxiosPublic();

  const getCourseData = await axiosPublic.get("/courseData", {
    caches: "no-store",
  });

  const latestFreeCourses = getCourseData?.data
    ?.flatMap((category) => category?.courses)
    .filter((course) => course?.pricing == "Free");

  return (
    <Container>
      <div>
        <div className="my-4 text-3xl font-bold"> Courses </div>

        <div className="grid grid-cols-12 bg-[#00000000]">
          {/* ============card section========================= */}
          <div className=" col-span-9 px-2">
            <div className="flex justify-between mb-9">
              <p className="flex items-center gap-4">
                {" "}
                <ImMenu /> showing 1-12 result
              </p>
              <select class="py-3 px-4 pe-9 block  border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
                <option selected>Newly Published</option>
                <option>Alphabetical</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3    ">
              {getCourseData?.data?.map((course, index) =>
                course?.courses.map((course) => {
                  return (
                    <CourseCard courseData={course} key={index}></CourseCard>
                  );
                })
              )}
            </div>
          </div>

          {/* ==============categories section===================== */}

          <div className="col-span-3 space-y-6 p-4">
            <CourseCategories />
            <h2 className="text-2xl relative font-medium mb-6 ">Latest </h2>
            <div className=" flex flex-col gap-4">
              {latestFreeCourses.slice(2, 5).map((freeCourse, index) => (
                <LatestCourseDemo
                  freeCourse={freeCourse}
                  key={index}
                ></LatestCourseDemo>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoursesPage;

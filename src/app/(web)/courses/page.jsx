import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import CourseCard from "@/Components/WebLayoutComponents/Shared/CourseCard/CourseCard";
import { ImMenu } from "react-icons/im";
const CoursesPage = async () => {
  const axiosPublic = useAxiosPublic();

  const getCourseData = await axiosPublic.get("/courseData", {
    caches: "no-store",
  });

  console.log(getCourseData.data);

  return (
    <div>
      <div> Courses </div>
      <div className="flex justify-between">
        <p className="flex items-center gap-4">
          {" "}
          <ImMenu /> showing 1-12 result
        </p>
        <select class="py-3 px-4 pe-9 block  border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="grid grid-cols-2">
        <div className="w-8/12">
          <CourseCard></CourseCard>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CoursesPage;

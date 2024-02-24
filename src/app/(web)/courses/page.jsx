import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import Container from "@/Components/Utils/Container";
import CourseCard from "@/Components/WebLayoutComponents/Shared/CourseCard/CourseCard";
import { ImMenu } from "react-icons/im";
const CoursesPage = async () => {
  const axiosPublic = useAxiosPublic();

  const getCourseData = await axiosPublic.get("/courseData", {
    caches: "no-store",
  });

  console.log(getCourseData.data);

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
            <CourseCard></CourseCard>
          </div>

          {/* ==============categories section===================== */}
          <div className="  bg-[#FFFFFF4 col-span-3 space-y-6  border-[#eee] border-2 p-4 ">
            <div className="">
              <h2 className="text-2xl relative font-medium mb-6">
                Categories
                <span className="inline-block w-3/12 h-[3px] bg-[#ffb606] absolute -bottom-2 left-0"></span>
              </h2>

              <div className="space-y-3">
                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px]  outline-none  checked:bg-blue-500 "
                  />
                  Development
                </label>

                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />
                  Programming
                </label>

                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />{" "}
                  Data science
                </label>

                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />{" "}
                  Digital Marketing
                </label>

                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />{" "}
                  photography
                </label>
                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />{" "}
                  Algorithom
                </label>
                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />{" "}
                  Machine Learning
                </label>
              </div>
            </div>

            <div className="">
              <h2 className="text-2xl relative font-medium mb-6">
                Author
                <span className="inline-block w-3/12 h-[3px] bg-[#ffb606] absolute -bottom-2 left-0"></span>
              </h2>

              <div className="space-y-3">
                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />{" "}
                  David Leon
                </label>
                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />{" "}
                  Chung li bin
                </label>
                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />{" "}
                  Bongodev
                </label>
              </div>
            </div>

            <div className="">
              <h2 className="text-2xl relative font-medium mb-4">
                Price
                <span className="inline-block w-3/12 h-[3px] bg-[#ffb606] absolute -bottom-2 left-0"></span>
              </h2>

              <div className="space-y-3">
                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />{" "}
                  Free
                </label>

                <label className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                  />{" "}
                  Paid
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoursesPage;

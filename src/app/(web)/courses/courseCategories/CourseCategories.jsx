import React from "react";
import LatestCourseDemo from "../latestCourseDemo/LatestCourseDemo";

const CourseCategories = ({
  handleChangeCategories,
  smallDevice,
  categoryFilter,
}) => {
  return (
    <>
      <div
        className={`${
          smallDevice
            ? "absolute -right-1 translate-y-0 transform transition-transform duration-1000 pr-0 top-10 "
            : " "
        }`}
      >
        <div
          className={`  top-2 md:relative  rounded-[12px] md:rounded-0  bg-[#FFFFFF]  space-y-6  border-[#eee] border-2 p-4 `}
        >
          <div className="">
            <h2 className="text-xl md:text-2xl relative font-medium mb-6">
              Categories
              <span className="inline-block w-3/12 h-[3px] bg-[#ffb606] absolute -bottom-2 left-0"></span>
            </h2>

            <div className="space-y-3">
              <label className="flex gap-3 items-center">
                <input
                  style={{
                    boxShadow: "none",
                  }}
                  onChange={() => handleChangeCategories("development")}
                  type="checkbox"
                  class="appearance-none    rounded-[2px]  outline-none  checked:bg-blue-500 "
                />
                Development
              </label>

              <label className="flex gap-3 items-center">
                <input
                  style={{
                    boxShadow: "none",
                  }}
                  onChange={() => handleChangeCategories("programming")}
                  type="checkbox"
                  class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                />
                Programming
              </label>

              <label className="flex gap-3 items-center">
                <input
                  style={{
                    boxShadow: "none",
                  }}
                  onChange={() => handleChangeCategories("dataScience")}
                  type="checkbox"
                  class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                />{" "}
                Data science
              </label>

              <label className="flex gap-3 items-center">
                <input
                  style={{
                    boxShadow: "none",
                  }}
                  onChange={() => handleChangeCategories("digitalMarketing")}
                  type="checkbox"
                  class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                />{" "}
                Digital Marketing
              </label>

              <label className="flex gap-3 items-center">
                <input
                  style={{
                    boxShadow: "none",
                  }}
                  type="checkbox"
                  onChange={() => handleChangeCategories("videoGraphy")}
                  class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                />{" "}
                photography
              </label>
              <label className="flex gap-3 items-center">
                <input
                  style={{
                    boxShadow: "none",
                  }}
                  type="checkbox"
                  class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                />{" "}
                Algorithom
              </label>
              <label className="flex gap-3 items-center">
                <input
                  style={{
                    boxShadow: "none",
                  }}
                  type="checkbox"
                  class="appearance-none  rounded-[2px] checked:bg-blue-500 ..."
                />{" "}
                Machine Learning
              </label>
            </div>
          </div>

          <div className="">
            <h2 className="text-xl md:text-2xl relative font-medium mb-6">
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
            <h2 className="text-xl md:text-2xl relative font-medium mb-4">
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

          <div className="flex gap-4">
            <button className="bg-[#ffb606] px-5 py-2 lg:px-8 lg:py-3  rounded-[5px] text-black font-medium  ">
              FILTER{" "}
            </button>
            <button className="bg-[#ffb606] px-5  py-2 lg:py-3  rounded-[5px] text-black font-medium  ">
              RESET{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCategories;

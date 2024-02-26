"use client";
import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { ImMenu } from "react-icons/im";
import { MdOutlineCancel } from "react-icons/md";

const CourseFilter = ({ categoryFilter, setcategoryFilter, filterCourse }) => {
  return (
    <div className="flex justify-between mb-9">
      <p className="flex items-center  gap-4  text-sm md:text-lg">
        {" "}
        <ImMenu className="text-2xl" /> showing {filterCourse?.length} result
      </p>
      <select class="hidden md:block py-3 px-4 pe-9   border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
        <option selected>Independent</option>
        <option>Alphabetical</option>
        <option>2</option>
        <option>3</option>
      </select>

      {categoryFilter ? (
        <button
          onClick={() => setcategoryFilter(!categoryFilter)}
          className={`flex  z-10 md:hidden items-center gap-3  `}
        >
          {" "}
          <MdOutlineCancel className="text-3xl text-red-400" />
        </button>
      ) : (
        <button
          onClick={() => setcategoryFilter(!categoryFilter)}
          className="flex md:hidden items-center gap-3  "
        >
          <FaFilter className="text-3xl text-[#250D87]" />
        </button>
      )}
    </div>
  );
};

export default CourseFilter;

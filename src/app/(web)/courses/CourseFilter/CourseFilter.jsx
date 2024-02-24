"use client";
import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { ImMenu } from "react-icons/im";
import { MdOutlineCancel } from "react-icons/md";

const CourseFilter = ({ categoryFilter, setcategoryFilter }) => {
  return (
    <div className="flex justify-between mb-9">
      <p className="flex items-center gap-4 text-sm">
        {" "}
        <ImMenu className="text-2xl" /> showing 12 result
      </p>
      <select class="hidden md:block py-3 px-4 pe-9   border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
        <option selected>Newly Published</option>
        <option>Alphabetical</option>
        <option>2</option>
        <option>3</option>
      </select>

      {categoryFilter ? (
        <button
          onClick={() => setcategoryFilter(!categoryFilter)}
          className="flex items-center gap-3"
        >
          {" "}
          <MdOutlineCancel className="text-3xl text-[#2C5F2D]" />
        </button>
      ) : (
        <button
          onClick={() => setcategoryFilter(!categoryFilter)}
          className="flex items-center gap-3"
        >
          <FaFilter className="text-3xl text-[#2C5F2D]" />
        </button>
      )}
    </div>
  );
};

export default CourseFilter;

"use client"

import CourseCard from "../../Shared/CourseCard/CourseCard";

const FreeCourses = () => {
    return (
        <div className="max-w-sm md:max-w-screen-xl mx-auto">
            <h1 className="uppercase text-3xl font-bold">our free courses</h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-5">
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
               
            </div>
        </div>
    );
};

export default FreeCourses;
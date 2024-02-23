"use client"

import { useEffect, useState } from "react";
import animationCss from "./animation.module.css";
const Status = () => {
   const [coursecount, setCourseCount] = useState(0);
   const [student, setStudent] = useState(0);
   const [active, setActive] = useState(0);
 
   const courseNumber = 230;
   const netStudent = 30;
 
   useEffect(() => {
     const interval = setInterval(() => {
       setCourseCount((prevCount) => {
         if (prevCount < courseNumber) {
           return prevCount + 1;
         } else {
           clearInterval(interval);
           return prevCount;
         }
       });
     }, 20);
     return () => clearInterval(interval);
   }, []);
  return (
    <div
      className={` h-[100px] flex gap-7  justify-center  md:flex-row md:gap-20  md:justify-center  ${animationCss.statAnimation}`}>
      <div className=" text-secondary">
        <h2 className=" text-xl md:text-5xl font-bold pb-2">
          {" "}
          {coursecount} k
        </h2>
        <span className="text-secondary border-b-primary md:border-b-2 pb-4">
          Student joined
        </span>
      </div>
      <div className=" text-secondary">
        <h2 className=" text-xl md:text-5xl font-bold pb-2"> 30+</h2>
        <span className="text-secondary  border-b-primary md:border-b-2 pb-4">
          Online Courses
        </span>
      </div>
      <div className=" text-secondary ">
        <h2 className=" text-xl md:text-5xl font-bold pb-2"> 22+</h2>
        <span className="text-secondary  border-b-primary md:border-b-2 pb-4">
          Experienced Mentors
        </span>
      </div>
    </div>
  );
};

export default Status;

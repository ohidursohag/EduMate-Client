import Image from "next/image";
import React from "react";

const LatestCourseDemo = ({ freeCourse }) => {
  const { title, img } = freeCourse;
  return (
    <div className="mb-2">
      <div className="flex items-center gap-3">
        <figure>
          <Image
            className="w-[80px]"
            src={img}
            width={300}
            height={200}
            alt="latest and free course"
          ></Image>
        </figure>
        <div>
          <p>{title}</p>
          <p className="text-green-500">Free</p>
        </div>
      </div>
    </div>
  );
};

export default LatestCourseDemo;

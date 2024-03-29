"use client";
import Image from "next/image";

const CourseCard = () => {
  return (
    <div>
      <div className="group relative h-[400px] w-[300px] rounded-lg hover:-translate-y-2 duration-500 hover:shadow-gray-600 hover:shadow-lg">
        <Image
          width={300}
          height={400}
          className="w-full h-full rounded-lg "
          src="https://i.ibb.co/Y0r4m9G/isometric-neural-network-programmer-composition-with-isolated-icons-gear-brain-human-characters-comp.jpg"
          alt=""
        />
        <div className="absolute h-[150px] w-full group-hover:h-full bottom-0 left-0 rounded-b-lg group-hover:rounded-lg bg-black bg-opacity-40"></div>
        <div className="absolute flex flex-col justify-center h-[150px] w-full bottom-0 pl-3 group-hover:h-full group-hover:top-16 left-0 text-white space-y-1 h-">
          <h2 className="font-semibold">Machine Learning and AI</h2>
          <p className="text-xs font-light">John Doe</p>
          <p>$80</p>
          <button className='bg-primary text-white p-1 w-1/3 rounded-md'>Enroll Now <span></span></button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

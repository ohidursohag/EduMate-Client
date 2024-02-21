
import Image from "next/image";

const CourseCard = () => {
  return (
    <div className="shadow-lg hover:shadow-gray-400 hover:-translate-y-1 duration-500 rounded-lg">
      <div className=" flex gap-0 flex-col lg:flex-row rounded-t-lg lg:rounded-l-lg">
        <div className="h-[200px] w-[385px] md:w-[372px] lg:w-[700px] rounded-t-lg lg:rounded-l-lg">
          <Image
            width={400}
            height={200}
            className="h-full w-full rounded-t-lg lg:rounded-l-lg "
            src="https://i.ibb.co/Y0r4m9G/isometric-neural-network-programmer-composition-with-isolated-icons-gear-brain-human-characters-comp.jpg"
            alt=""
          />
        </div>
        <div className="w-auto p-5">
          <h2 className="font-semibold">Machine Learning and AI</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, corrupti. Optio, deserunt.</p>
          <p className="text-xs font-light">John Doe</p>
          <p>$80</p>
          <button className="bg-primary text-white p-1 w-1/3 rounded-md">
            Enroll Now <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

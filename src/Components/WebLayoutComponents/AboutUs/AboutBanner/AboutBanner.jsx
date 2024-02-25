import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutBanner = () => {
  return (
    <div className="relative">
      <div className="w-full h-[600px]">
        <Image
          src="https://i.ibb.co/djtPyN0/bg-image-11-09086418.jpg"
          width={1520}
          height={650}
          alt="Banner Image"
          className="h-full"
        />
      </div>
      <div className="bg-black bg-opacity-60  absolute h-full w-full top-0"></div>
      <div className="absolute top-0 h-full flex flex-col items-center justify-center">
        <p className="bg-green-200  text-green-800 px-7 py-2 rounded-full w-fit mx-auto">How We Work</p>
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl text-center px-5 md:px-0 w-full md:w-4/5 mx-auto mt-8">Transformative Learning, Building Success Together.</h1>
        <p className="text-center px-5 md:px-0 w-full md:w-4/5 mx-auto mt-3 md:hidden text-white">Collaborating for Success through Transformative Learning Experiences. Join us on a journey where education becomes a catalyst for positive change, shaping a future filled with opportunities and accomplishments.</p>
        <p className="text-center px-5 md:px-0 w-full md:w-4/5 mx-auto mt-3 text-white hidden md:block">Collaborating for Success through Transformative Learning Experiences. Explore our courses, unlocking a path to personal and professional growth and building a solid foundation for your successful future.At our core, we believe in the power of transformative learning experiences. Join us on a journey where education becomes a catalyst for positive change, shaping a future filled with opportunities and accomplishments.</p>
      <button className="text-white flex gap-2 items-center bg-primary text-center mt-5 md:mt-8 lg:mt-10 px-5 py-2 rounded-lg">More About Us <FaArrowRightLong></FaArrowRightLong></button>
      </div>
    </div>
  );
};

export default AboutBanner;

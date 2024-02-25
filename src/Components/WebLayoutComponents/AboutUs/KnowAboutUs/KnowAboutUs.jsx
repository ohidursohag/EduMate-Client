import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { MdOutlineMonitor } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const KnowAboutUs = () => {
  return (
    <div className="px-5 pt-10 md:pt-16 lg:pt-28 flex flex-col lg:flex-row gap-10">
      <div>
        <div className="flex gap-20 flex-col md:flex-row ">
          <Image
            src="https://i.ibb.co/swwCLLr/about-07.jpg"
            width={366}
            height={490}
            alt="Reading book"
            className="w-full md:w-[366px] h-[490px] rounded-lg "
          />
          <Image
            src="https://i.ibb.co/jVjPFNQ/UaJ8YfZT.jpg"
            width={308}
            height={250}
            alt="Reading book"
            className="w-[308px] h-[250px] rounded-lg hidden md:block"
          />
        </div>
        <Image
          src="https://i.ibb.co/5hfy8mq/happy-young-female-student-holding.png"
          width={405}
          height={490}
          alt="Reading book"
          className="w-full h-[490px] md:w-[405px] md:h-[490px] rounded-lg md:relative md:left-[150px] mt-5 md:mt-0 md:-top-[170px]"
        />
      </div>
      <div className="text-left lg:w-1/3 ">
        <p className="bg-green-200  text-green-800 px-7 py-2 rounded-full w-fit">
          Know About Us
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-6">
          Know About EduMate <br /> Learning Platform.
        </h1>
        <p className="mt-6 ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <div className="mt-5 flex gap-5 mb-12">
          <div className="px-2 py-2 h-12 bg-green-300 rounded-full flex justify-center items-center">
            <CiHeart className="text-3xl"></CiHeart>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Flexible Classes</h1>
            <p className="text-sm mt-2">
              It is a long established fact that a reader will be distracted by
              this on readable content of when looking at its layout.
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-5 mb-12">
          <div className="px-3 flex justify-center items-center py-2 h-12 bg-green-300 rounded-full">
            <FiBook className="text-2xl"></FiBook>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Learn From Anywhere</h1>
            <p className="text-sm mt-2">
              Sed distinctio repudiandae eos recusandae laborum eaque non eius
              iure suscipit laborum eaque non eius iure suscipit.
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-5 mb-5">
          <div className="px-2 py-2 h-12 bg-green-300 rounded-full flex justify-center items-center">
            <MdOutlineMonitor className="text-3xl"></MdOutlineMonitor>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              Experienced Teacher&apos;s service.
            </h1>
            <p className="text-sm mt-2">
              It is a long established fact that a reader will be distracted by
              this on readable content of when looking at its layout.
            </p>
          </div>
        </div>
        <button className="ml-5 text-white flex items-center gap-2 bg-primary text-center md:mt-8 lg:mt-10 px-5 py-2 rounded-lg ">
          More About Us <FaArrowRightLong></FaArrowRightLong>
        </button>
      </div>
    </div>
  );
};

export default KnowAboutUs;

import Section from "@/Components/Utils/Section";
import Image from "next/image";
import Link from "next/link";
import banner1 from "@/Assets/BannerImage/banner-without-bg.png";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Container from "@/Components/Utils/Container";
const Footer = () => {
  return (
    <footer className="bg-[black]">
      <Container>
        <div className=" grid  lg:gap-12  grid-cols-1 lg:grid-cols-3 content-center p-4 md:p-16">
          {/*====================== contact information====================== */}
          <div className=" flex flex-col items-center lg:flex-none text-white border-b-2 border-b-[#818181] lg:border-b-0  lg:border-r-2  lg:border-r-[#818181] pb-10  ">
            <h2 className=" text-4xl text-center md:text-start md:text-4xl mb-7">
              EduMate
            </h2>
            <p className="text-[#818181] text-center md:text-justify mb-7 w-full  md:w-2/3">
              We do not belive in quantity rather belive in quality . Lets do
              new thing dicouver new carear with us
            </p>

            <div className=" flex  pl-4 justify-center md:justify-start ">
              <div className="space-y-4 text-[#818181]">
                <p className="flex gap-5 items-center">
                  {" "}
                  <IoLocationOutline className="text-[#eca14d] text-xl" />{" "}
                  Dahak, Mirpur,kollanpur{" "}
                </p>
                <p className="flex gap-3 items-center justify-center md:justify-start">
                  {" "}
                  <BsTelephone className="text-[#eca14d] text-xl" />{" "}
                  +89367469348{" "}
                </p>
                <p className="flex gap-3  items-center pl-4 md:pl-0">
                  {" "}
                  <CgMail className="text-[#eca14d] text-xl" /> edumate@edu.com{" "}
                </p>
              </div>
            </div>

            <div className="flex  gap-12 mt-12 pl-4 justify-center md:justify-start ">
              <CiFacebook className="text-white text-xl" />
              <FaXTwitter className="text-white text-xl" />
              <FaLinkedin className="text-white text-xl" />
            </div>
          </div>

          <div className="grid grid-cols-2  gap-10 place-items-center  border-b-2  border-b-[#818181] lg:border-b-0     lg:border-r-2 md:place-content-start   lg:border-r-[#818181] pb-10 ">
            {/* ================menue content============= */}
            <div className="">
              <h2 className="text-xl mb-4  text-white mt-4">Menu</h2>
              <ul className="space-y-5 text-[#818181]">
                <li>
                  {" "}
                  <Link href={""}>Home</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={""}>About Us</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={""}>Trainer</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={""}>Course</Link>{" "}
                </li>
              </ul>
            </div>
            {/* ==============service content===================== */}
            <div>
              <h2 className="text-xl mb-4  text-white mt-4">Services</h2>
              <ul className="space-y-5 text-[#818181] ">
                <li>
                  {" "}
                  <Link href={""}>Customer </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={""}>Help Center</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={""}>Live Chat</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href={""}>Consultation</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/*  ===========================our trainer section================= */}
          <div className="">
            <h2 className="text-white text-xl my-4 text-center lg:text-start">
              Our Trainer
            </h2>

            <div>
              <div className="grid grid-cols-2 place-items-center lg:content-normal ">
                <Image
                  className="h-40 w-32"
                  src={banner1}
                  alt="footer success images "
                />
                <Image
                  className="h-40 w-32"
                  src={banner1}
                  alt="footer success images "
                />
                <Image
                  className="h-40 w-32"
                  src={banner1}
                  alt="footer success images "
                />
                <Image
                  className="h-40 w-32"
                  src={banner1}
                  alt="footer success images "
                />
              </div>
            </div>
          </div>
        </div>

        <section className="flex justify-center border-t-2  border-t-[#818181] py-12 w-5/6 mx-auto">
          <div className="text-white text-center ">
            <p className="text-[#818181] mb-3">
              © Horse Riding. All Rights Reserved 2024. Licensing
            </p>
            <span>Templateby wCopilot. Powered by Webflow</span>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;

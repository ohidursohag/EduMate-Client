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
import logo from "../../../../../public/logoIcon.png";
const Footer = () => {
  return (
    <div>
      <svg
        className=""
        style={{ transform: "scaleY(-1)" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          className="elementor-shape-fill "
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
      <footer className="bg-[#000000] relative  ">
        <Container>
          <div className=" grid  lg:gap-12  grid-cols-1 lg:grid-cols-3 content-center p-4 md:p-16">
            {/*====================== contact information====================== */}
            <div className=" flex flex-col items-center lg:flex-none text-white border-b-2 border-b-[#818181] lg:border-b-0  lg:border-r-2  lg:border-r-[#818181] pb-10  ">
              <h2 className=" text-4xl text-center md:text-start md:text-4xl mb-7 flex items-center gap-4">
                <Image className="w-12" src={logo} alt="Educmate " /> EduMate
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
                    <CgMail className="text-[#eca14d] text-xl" />{" "}
                    edumate@edu.com{" "}
                  </p>
                </div>
              </div>

              <div className="flex  gap-12 mt-12 pl-4 justify-center md:justify-start ">
                <CiFacebook className="text-white text-xl" />
                <FaXTwitter className="text-white text-xl" />
                <FaLinkedin className="text-white text-xl" />
              </div>
            </div>

            <div className="grid grid-cols-2  mx-5 gap-12 content-center  border-b-2  border-b-[#818181] lg:border-b-0     lg:border-r-2 md:place-content-start   lg:border-r-[#818181] pb-10 ">
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
                  <li>
                    {" "}
                    <Link href={""}>Career</Link>{" "}
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
                  <li>
                    {" "}
                    <Link href={""}>24 hour support</Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/*  ===========================our trainer section================= */}
            <div className="grid place-items-center my-4 sm:my-0">
              {/* <h2 className="text-white text-xl my-4 text-center lg:text-start">
                News Latter
              </h2> */}

              <div>
                <h2 className="text-xl mb-4  text-white mt-4">News Latter</h2>
                <div className="lg:content-normal text-white space-y-3">
                  <h2 className="text-start text-xl">Never miss an offer</h2>
                  <p className="text-sm">
                    Subscribe and be the first to revcieve our exclusive offers
                  </p>
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor=" "
                        className="flex items-center relative "
                      >
                        <input
                          type="text"
                          placeholder="Emaill address"
                          className="px-7 py-3 rounded-xl text-black border-0 "
                        />
                        <button className="px-4 py-3 bg-[#008080] rounded-md absolute right-0">
                          Subscribe
                        </button>
                      </label>
                    </div>
                    <div>
                      <label htmlFor=" text-sm flex items-center">
                        <input
                          style={{
                            boxShadow: "none",
                          }}
                          type="checkbox"
                          className="mr-2 "
                        />
                        <span className="text-sm">
                          I would like to get offers and news from American
                          Airways . I have read and understood the privaciy
                          policy
                        </span>
                      </label>
                    </div>
                  </div>
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
    </div>
  );
};

export default Footer;

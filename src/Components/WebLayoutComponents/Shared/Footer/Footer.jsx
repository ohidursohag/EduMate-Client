import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Container from "@/Components/Utils/Container";
import wave from "@/Assets/BannerImage/waveDown.svg";
import footerBg from "@/Assets/BannerImage/Banner_bg.jpg";
import logoIcon from "@/Assets/logo/logoIcon.png";
import logoName from "@/Assets/logo/logoName.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaSquareInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      {/* <svg
        className="relative top-0.5"
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
      </svg> */}
      <footer className="relative ">
        {/* animated Wave bg */}
        <svg
          className="absolute top-0 rotate-180"
          width="100%"
          height="400"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          overflow="auto"
          shapeRendering="auto"
          fill="#250d87">
          <defs>
            <path
              id="wavepath"
              d="M 0 2000 0 500 Q 150 381 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z"
            />
            <path id="motionpath" d="M -600 0 0 0" />
          </defs>
          <g>
            <use xlinkHref="#wavepath" y="353" fill="#ffffff">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath xlinkHref="#motionpath" />
              </animateMotion>
            </use>
          </g>
        </svg>
        {/* Wave image */}
        {/* <div className="absolute top-0">
          <Image src={wave} alt="wave svg" width={1920} height={100} />
        </div> */}
        {/* Bg image */}
        <Image
          src={footerBg}
          alt="footer Bg"
          fill
          className="absolute object-cover object-center -z-20"
        />
        {/*  overlay */}
        <div className="absolute w-full h-full -z-10 bg-gradient-to-t from-primary/95  to-secondary/95" />
        <Container className="relative pt-[100px]">
          <div className=" grid  lg:gap-12  grid-cols-1 lg:grid-cols-3 content-center p-4 md:p-16">
            {/*====================== contact information====================== */}
            <div className=" flex flex-col items-center lg:flex-none text-white border-b-2 border-b-[#818181] lg:border-b-0  lg:border-r-2  lg:border-r-[#818181]  ">
              {/* logo */}
              <div className="flex items-center gap-2 ">
                <Image
                  width={80}
                  height={80}
                  className=""
                  src={logoIcon}
                  alt="logo icon"
                />
                <Image
                  width={200}
                  height={50}
                  className=""
                  src={logoName}
                  alt="Logo name"
                />
              </div>
              <p className="text-gray-200 text-center md:text-justify mt-2 mb-7 w-full  md:w-2/3">
                We do not belive in quantity rather belive in quality . Lets do
                new thing dicouver new carear with us
              </p>
              {/* Address */}
              <div className=" flex  pl-4 justify-center md:justify-start ">
                <div className="space-y-4 text-gray-200">
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

              {/* Socil icons */}
              <div className="text-gray-300  flex  items-center gap-3 mt-5">
                <Link href="#">
                  <FaFacebookF
                    size={30}
                    className="hover:text-secondary hover:scale-110 duration-500"
                  />
                </Link>
                <Link href="#">
                  <FaLinkedinIn
                    size={30}
                    className="hover:text-secondary hover:scale-110 duration-500"
                  />
                </Link>
                <Link href="#">
                  <FaTwitter
                    size={30}
                    className="hover:text-secondary hover:scale-110 duration-500"
                  />
                </Link>
                <Link href="#">
                  <FaSquareInstagram
                    size={30}
                    className="hover:text-secondary hover:scale-110 duration-500"
                  />
                </Link>
                <Link href="#">
                  <FaYoutube
                    size={30}
                    className="hover:text-secondary hover:scale-110 duration-500"
                  />
                </Link>
              </div>
            </div>

              {/* ================menue content============= */}
            <div className="grid grid-cols-2  mx-5 gap-12 content-center place-items-center  border-b-2  border-b-[#818181] lg:border-b-0     lg:border-r-2 md:place-content-start   lg:border-r-[#818181]  ">
              <div className="">
                <h2 className="text-xl mb-4  text-primary font-medium mt-4">Menu</h2>
                <ul className="space-y-5 text-gray-300">
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
                <h2 className="text-xl mb-4  text-primary font-medium mt-4">Services</h2>
                <ul className="space-y-5 text-gray-200 ">
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
                        className="flex items-center relative ">
                        <input
                          type="text"
                          placeholder="Emaill address"
                          className=" w-3/4 md:w-full md:px-7 py-1.5 md:py-3 rounded-xl text-black border-0 "
                        />
                        <button className="  text-sm md:text-lg px-3 py-2  md:py-3 bg-[#250D87] rounded-md absolute right-7  md:right-0">
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

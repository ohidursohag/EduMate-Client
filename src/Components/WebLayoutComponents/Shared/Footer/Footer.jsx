import Section from "@/Components/Utils/Section";
import Image from "next/image";
import Link from "next/link";
import banner1 from "@/Assets/BannerImage/banner-without-bg.png";
const Footer = () => {
  return (
    <footer className="bg-[#000000]">
      <div className=" grid gap-16   md:grid-cols-3 content-center p-20">
        {/* contact information */}
        <div className="text-white border-r-2  border-r-[#818181] ">
          <h2 className=" text-xl md:text-4xl mb-7">EduMate</h2>
          <p className="text-[#818181] mb-7 w-2/3">
            We do not belive in quantity rather belive in quality . Lets do new
            thing dicouver new carear with us
          </p>

          <div className="space-y-4 text-[#818181] pl-4">
            <p> Dahak, Mirpur 342 </p>
            <p> +89367469348 </p>
            <p> edumate@edu.com </p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-r-2  border-r-[#818181] text-white ">
          <div className="">
            <h2 className="mb-5 text-xl  mt-4">Menu</h2>
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
          <div>
            <h2 className="text-xl mb-4  mt-4">Services</h2>
            <ul className="space-y-5 text-[#818181] ">
              <li>
                {" "}
                <Link href={""}>Customer Support</Link>{" "}
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

        <div className="">
          <h2 className="text-white text-xl mt-4">Our Trainer</h2>

          <div className="grid grid-cols-2 ">
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

      <section className="flex justify-center border-t-2  border-t-[#818181] py-12 w-5/6 mx-auto">
        <div className="text-white ">
          <p>© Horse Riding. All Rights Reserved 2024. Licensing</p>
          <span>Templateby wCopilot. Powered by Webflow</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

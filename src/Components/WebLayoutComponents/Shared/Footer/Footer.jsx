import Section from "@/Components/Utils/Section";
import Image from "next/image";
import Link from "next/link";
import banner1 from "../../../../../public/BannerImage/banner-without-bg.png";
const Footer = () => {
  return (
    <Section>
      <div className="bg-[#000000]">
        {/* contact information */}
        <div>
          <h2>EduMate</h2>
          <p>
            We do not belive in quantity rather belive in quality . Lets do new
            thing dicouver new carear with us
          </p>

          <div className="space-y-4">
            <p> Dahak, Mirpur 342 </p>
            <p> +89367469348 </p>
            <p> edumate@edu.com </p>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <h2>Menu</h2>
            <ul className="text-white">
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
            <h2>Services</h2>
            <ul className="space-y-4 text-white">
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
        <div>
          <h2>Our Trainer</h2>

          <Image src={banner1} alt="footer success images " />
          <Image src={banner1} alt="footer success images " />
          <Image src={banner1} alt="footer success images " />
        </div>
      </div>
    </Section>
  );
};

export default Footer;

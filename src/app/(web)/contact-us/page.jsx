import Container from "@/Components/Utils/Container";
import Logo from "@/Components/Utils/Logo";
import Section from "@/Components/Utils/Section";
import RouteBanner from "@/Components/WebLayoutComponents/Shared/RouteBanner/RouteBanner";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactUsPage = () => {
  return (
    <>
      <RouteBanner title={"Contact Us"} />
      <Section>
        <Container className="">
          <div className="flex justify-around   shadow-2xl items-center flex-col md:flex-row gap-5 bg-gradient-to-tl from-green-50 to-primary p-12 rounded-lg border-y-8 border-y-primary">
            <div className="flex flex-col shadow-2xl  gap-3 bg-white p-7 border-x-8 border-x-primary bg-gradient-to-tl from-white to-green-200">
              <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
              <h4 className="flex items-center gap-2 my-2">
                <span>
                  <IoMdMail />
                </span>
                <span className=" underline"> edumate@gmail.com</span>{" "}
              </h4>
              <h4 className="flex  items-center gap-1">
                <span>
                  <FaPhone />
                </span>
                <span>+88019923212</span>
              </h4>
              <Logo />
            </div>
            <div className=" -mb-32 shadow-xl bg-white p-7 rounded-md border-y-8 border-y-primary bg-gradient-to-b from-white to-primary">
              <h2 className=" text-2xl font-bold">Lets talk!</h2>
              <form>
                <div className="flex flex-col gap-1 my-3 ">
                  <label htmlFor="" className=" text-sm ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="bg-green-50 border-2 px-1 border-x-2 border-x-green-400 border-y-2 border-y-primary "
                  />
                </div>
                <div className="flex flex-col gap-1 my-3">
                  <label className=" text-sm ">Email Address</label>
                  <input
                    type="email"
                    className="bg-green-50 border-2 px-1  border-x-2 border-x-green-400 border-y-2 border-y-primary"
                  />
                </div>

                <div className="flex flex-col gap-1 my-3">
                  <label className=" text-sm ">Your Message</label>
                  <textarea
                    type="email"
                    className="bg-green-50 border-2 px-1 border-x-2 border-x-green-400 border-y-2 border-y-primary"
                  />
                </div>
                <input
                  type="submit"
                  className=" bg-white my-2 text-sm font-bold text-primary w-full py-1 cursor-pointer hover:text-secondary rounded  "
                  value="Send"
                />
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactUsPage;

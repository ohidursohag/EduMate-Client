import PropTypes from "prop-types";
import useOutsideClikToClose from "@/Components/Hooks/useOutsideClikToClose";
import SidebarNavLinks from "./SidebarNavLinks";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Logo from "../BottomNav/BottomNavLarge/Logo";
import SocialIcons from "../Shared/SocialIcons";
const SideNavBar = ({ openSidebar, setOpenSidebar }) => {
  const refWraper = useOutsideClikToClose(setOpenSidebar);
  return (
    <div
      className={`fixed bg-black/10  w-full h-full inset-0 left-0 z-50 duration-500 lg:hidden ${
        openSidebar
          ? "translate-x-0 rounded-none backdrop-blur-[4px]"
          : "-translate-x-[100%] rounded-r-[300px] backdrop-blur-[2px]"
      }`}>
      <div
        ref={refWraper}
        className={`bg-white w-[250px] sm:w-[300px] md:w-[350px] h-full  left-0 duration-500  ${
          openSidebar ? "translate-x-0" : "-translate-x-[100%]"
        }`}>
        <div>
          <div className="p-5 relative">
            <Logo />
            <button
              onClick={() => setOpenSidebar(!openSidebar)}
              className="absolute top-5 right-5 hover:text-secondary">
              <IoMdClose size={30} />
            </button>
            <p className="text-sm text-description my-3">
              Histudy is a education website template. You can customize all.
            </p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <span className="flex items-center gap-2 text-sm text-description">
                {" "}
                <MdOutlineEmail /> info@edumate.edu
              </span>
              <span className="flex items-center gap-2 text-sm text-description">
                <IoCallOutline /> +880 1831 987636
              </span>
            </div>
            <hr className="my-3" />
          </div>
        </div>
        <section className="flex flex-col justify-between h-[450px] sm:h-[500px] overflow-y-auto">
          <SidebarNavLinks
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
          <div className="my-5 flex flex-col items-center">
            <h2 className="font-bold mb-2 text-center text-description/70">
              Connect us on
            </h2>
            <SocialIcons />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SideNavBar;

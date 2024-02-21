import Link from "next/link";
import {
  FaUserLock,
} from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import DiscountAdd from "./DiscountAdd";
import SocialIcons from "./SocialIcons";
import Language from "./Language";
const TopNav = () => {
  return (
    <div className="py-2 gap-5   flex flex-col md:flex-row justify-center md:justify-between items-center">
      {/* Social Links */}
      <SocialIcons/>
      {/* Discount Add */}
      <DiscountAdd />

      {/* Login & Registration Button */}
      {/* <div className="flex justify-between items-center gap-4">
        <Link
          href={"#"}
          className="flex items-center gap-1 font-medium text-gray-500 hover:text-secondary duration-500">
          <FaUserLock size={20} /> Login
        </Link>
        <Link
          href={"#"}
          className="flex items-center gap-1 font-medium text-gray-500 hover:text-secondary duration-500">
          <FaUserCog size={20} /> Register
        </Link>
      </div> */}
      {/* Languagr */}
      <Language/>
    </div>
  );
};

export default TopNav;

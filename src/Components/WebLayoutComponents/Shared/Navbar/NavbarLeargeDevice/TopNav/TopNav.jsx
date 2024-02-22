import Link from "next/link";
import { FaUserLock } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import DiscountAdd from "./DiscountAdd";
import SocialIcons from "../../Shared/SocialIcons";
import Language from "../../Shared/Language";
const TopNav = () => {
  return (
    <div className="py-2 gap-5   flex flex-col md:flex-row justify-center md:justify-between items-center">
      {/* Social Links */}
      <SocialIcons />
      {/* Discount Add */}
      <DiscountAdd />
      {/* Languagr */}
      <Language />
    </div>
  );
};

export default TopNav;

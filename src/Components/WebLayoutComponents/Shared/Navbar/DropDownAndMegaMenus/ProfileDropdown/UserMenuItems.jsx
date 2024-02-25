import { MdHistory, MdLogout, MdOutlineDashboardCustomize, MdOutlineQuestionAnswer } from "react-icons/md";
import { FaRegBookmark, FaRegHeart, FaRegStar } from "react-icons/fa";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiBookOpen } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

const UserMenuItems = () => {
  return (
   <section className="px-2 mb-5">
   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><MdOutlineDashboardCustomize size={20}/><span>Dashboard</span></Link>
   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><FaRegBookmark  size={20}/><span>Bookmark</span></Link>
   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><PiShoppingBagOpenBold  size={20}/><span>Enrolled Courses</span></Link>
   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><FaRegHeart  size={20}/><span>Wish List</span></Link>
   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><FaRegStar  size={20}/><span>Reviews</span></Link>
   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><TfiMenuAlt  size={20}/><span>My Quiz Attempts</span></Link>
   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><MdHistory  size={20}/><span>Order History</span></Link>
   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><MdOutlineQuestionAnswer  size={20}/><span>Quesrion & Answer</span></Link>
   <hr className="my-2"/>
   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><FiBookOpen  size={20}/><span>Geting Started</span></Link>
   <hr className="my-2"/>

   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><IoSettingsOutline  size={20}/><span>Setting</span></Link>
   <Link href={''} className="px-5 py-1 flex gap-2  items-center text-description hover:text-primary duration-300 hover:bg-gray-200"><MdLogout  size={20}/><span>Log Out</span></Link>
 </section>
  )
};

export default UserMenuItems;

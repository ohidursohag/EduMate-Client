import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaSquareInstagram, FaTwitter, FaUserLock, FaYoutube } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import Marquee from "react-fast-marquee";
const TopNav = () => {

  return (
    <div className="py-2 gap-5   flex flex-col md:flex-row justify-center md:justify-between items-center">
      {/* Social Links */}
      <div className="text-gray-500  flex flex-col md:flex-row absolute left-5 bottom-6 md:static items-center gap-2 ">
        <Link href='#'><FaFacebookF size={22} className="hover:text-secondary hover:scale-110 duration-500" /></Link>
        <Link href='#'><FaLinkedinIn size={22} className="hover:text-secondary hover:scale-110 duration-500" /></Link>
        <Link href='#'><FaTwitter size={22} className="hover:text-secondary hover:scale-110 duration-500" /></Link>
        <Link href='#'><FaSquareInstagram size={22} className="hover:text-secondary hover:scale-110 duration-500" /></Link>
        <Link href='#'><FaYoutube size={22} className="hover:text-secondary hover:scale-110 duration-500" /></Link>
      </div>
      {/* Discount Add */}
      <div className="flex items-center md:max-w-[350px] lg:max-w-[500px] gap-1">
        <Link href={'/'} className="text-gray-100 w-[110px] lg:w-[150px] text-sm lg:text-base px-3 text-center py-1 rounded-[50px_10px_50px_10px] bg-secondary">Get Now</Link>
       <div className="text-gray-500  flex flex-col md:flex-row absolute left-5 bottom-6 md:static items-center gap-2 ">
         <Link href='#'><FaFacebookF size={22} className="hover:text-secondary hover:scale-110 duration-500"/></Link>
         <Link href='#'><FaLinkedinIn size={22} className="hover:text-secondary hover:scale-110 duration-500"/></Link>
         <Link href='#'><FaTwitter size={22} className="hover:text-secondary hover:scale-110 duration-500"/></Link>
         <Link href='#'><FaSquareInstagram size={22} className="hover:text-secondary hover:scale-110 duration-500"/></Link>
         <Link href='#'><FaYoutube  size={22} className="hover:text-secondary hover:scale-110 duration-500"/></Link>
       </div>
       {/* Discount Add */}
       <div className="flex items-center md:max-w-[350px] lg:max-w-[500px] ">
        <Link href={'/'} className="text-gray-100 w-[110px] lg:w-[150px] text-sm lg:text-base px-3 text-center py-1 rounded-tl-full bg-secondary">Get Now</Link>
        <Marquee delay={2} pauseOnHover speed={30} >
          <p className="text-secondary mr-10 text-sm lg:text-base">👋 Get Discount for Big Sale <span className="bg-secondary text-white inline-block skew-x-12 px-2">-50%</span> off.</p>
        </Marquee>
      </div>
      {/* Login & Registration Button */}
      <div className="flex justify-between items-center gap-4">
        <Link href={'#'} className="flex items-center gap-1 font-medium text-gray-500 hover:text-secondary duration-500"><FaUserLock size={20} /> Login</Link>
        <Link href={'#'} className="flex items-center gap-1 font-medium text-gray-500 hover:text-secondary duration-500"><FaUserCog size={20} /> Register</Link>
      </div>
    </div>
  )
};

export default TopNav;

import {
   FaFacebookF,
   FaLinkedinIn,
   FaSquareInstagram,
   FaTwitter,
   FaYoutube,
 } from "react-icons/fa6";
import Link from "next/link";
const SocialIcons = () => {

  return (
   <div className="text-gray-500  flex flex-col md:flex-row absolute left-5 bottom-6 md:static items-center gap-3 ">
   <Link href="#">
     <FaFacebookF
       size={18}
       className="hover:text-secondary hover:scale-110 duration-500"
     />
   </Link>
   <Link href="#">
     <FaLinkedinIn
       size={18}
       className="hover:text-secondary hover:scale-110 duration-500"
     />
   </Link>
   <Link href="#">
     <FaTwitter
       size={18}
       className="hover:text-secondary hover:scale-110 duration-500"
     />
   </Link>
   <Link href="#">
     <FaSquareInstagram
       size={18}
       className="hover:text-secondary hover:scale-110 duration-500"
     />
   </Link>
   <Link href="#">
     <FaYoutube
       size={18}
       className="hover:text-secondary hover:scale-110 duration-500"
     />
   </Link>
 </div>
  )
};

export default SocialIcons;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
const NavLinks = () => {
  const pathName = usePathname();
  return (
    <div className="">
      <div className="text-gray-500  font-medium hidden lg:flex gap-5">
        <Link
          href={"/"}
          className={`group inline-block duration-300 ${
            pathName === "/" ? "text-secondary" : "hover:text-secondary "
          }`}>
          <span>Home</span>
          <span
            className={`block bg-secondary w-0 h-[2px] duration-500 rounded-full ${
              pathName === "/" ? "w-full" : "group-hover:w-full"
            }`}
          />
        </Link>
        <Link
          href={"/courses"}
          className={`group inline-block duration-300 ${
            pathName === "/courses" ? "text-secondary" : "hover:text-secondary "
          }`}>
          <span>Courses</span>
          <span
            className={`block bg-secondary w-0 h-[2px] duration-500 rounded-full ${
              pathName === "/courses" ? "w-full" : "group-hover:w-full"
            }`}
          />
        </Link>
        <Link
          href={"/blog"}
          className={`group inline-block duration-300 ${
            pathName === "/blog" ? "text-secondary" : "hover:text-secondary "
          }`}>
          <span>Blog</span>
          <span
            className={`block bg-secondary w-0 h-[2px] duration-500 rounded-full ${
              pathName === "/blog" ? "w-full" : "group-hover:w-full"
            }`}
          />
        </Link>
        <Link
          href={"/about-us"}
          className={`group inline-block duration-300 ${
            pathName === "/about-us"
              ? "text-secondary"
              : "hover:text-secondary "
          }`}>
          <span>About Us</span>
          <span
            className={`block bg-secondary w-0 h-[2px] duration-500 rounded-full ${
              pathName === "/about-us" ? "w-full" : "group-hover:w-full"
            }`}
          />
        </Link>
        <Link
          href={"/contact-us"}
          className={`group inline-block duration-300 ${
            pathName === "/contact-us"
              ? "text-secondary"
              : "hover:text-secondary "
          }`}>
          <span>Contact Us</span>
          <span
            className={`block bg-secondary w-0 h-[2px] duration-500 rounded-full ${
              pathName === "/contact-us" ? "w-full" : "group-hover:w-full"
            }`}
          />
        </Link>
        <Link
          href={"/career"}
          className={`group inline-block duration-300 ${
            pathName === "/career" ? "text-secondary" : "hover:text-secondary "
          }`}>
          <span>Career</span>
          <span
            className={`block bg-secondary w-0 h-[2px] duration-500 rounded-full ${
              pathName === "/career" ? "w-full" : "group-hover:w-full"
            }`}
          />
        </Link>
      </div>
      <div className="flex w-full text-gray-100 gap-1 items-center hover:text-secondary duration-500 lg:hidden">
        <IoMenu size={25} /> <span>Menu</span>
      </div>
    </div>
  );
};

export default NavLinks;

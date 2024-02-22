"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNavLinks = ({ openSidebar, setOpenSidebar }) => {
  const pathName = usePathname();
  return (
    <nav className="divide-y-2">
      <Link
        onClick={() => setOpenSidebar(!openSidebar)}
        href={"/"}
        className={`group block pl-8 py-2     duration-300 ${
          pathName === "/"
            ? "text-white bg-primary"
            : "hover:text-white hover:bg-primary/50 "
        }`}>
        <span>Home</span>
      </Link>
      <Link
        onClick={() => setOpenSidebar(!openSidebar)}
        href={"/courses"}
        className={`group block pl-8 py-2    duration-300 ${
          pathName === "/courses"
            ? "text-white bg-primary"
            : "hover:text-white hover:bg-primary/50 "
        }`}>
        <span>Courses</span>
      </Link>
      <Link
        onClick={() => setOpenSidebar(!openSidebar)}
        href={"/blog"}
        className={`group block pl-8 py-2    duration-300 ${
          pathName === "/blog"
            ? "text-white bg-primary"
            : "hover:text-white hover:bg-primary/50 "
        }`}>
        <span>Blog</span>
      </Link>
      <Link
        onClick={() => setOpenSidebar(!openSidebar)}
        href={"/about-us"}
        className={`group block pl-8 py-2    duration-300 ${
          pathName === "/about-us"
            ? "text-white bg-primary"
            : "hover:text-white hover:bg-primary/50 "
        }`}>
        <span>About Us</span>
      </Link>
      <Link
        onClick={() => setOpenSidebar(!openSidebar)}
        href={"/contact-us"}
        className={`group block pl-8 py-2    duration-300 ${
          pathName === "/contact-us"
            ? "text-white bg-primary"
            : "hover:text-white hover:bg-primary/50 "
        }`}>
        <span>Contact Us</span>
      </Link>
      <Link
        onClick={() => setOpenSidebar(!openSidebar)}
        href={"/career"}
        className={`group block pl-8 py-2    duration-300 ${
          pathName === "/career"
            ? "text-white bg-primary"
            : "hover:text-white hover:bg-primary/50 "
        }`}>
        <span>Career</span>
      </Link>
    </nav>
  );
};

export default SidebarNavLinks;

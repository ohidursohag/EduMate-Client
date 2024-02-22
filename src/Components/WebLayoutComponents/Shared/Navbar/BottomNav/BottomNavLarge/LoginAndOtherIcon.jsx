"use client";
import { LuSearchX } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import useOutsideClikToClose from "@/Components/Hooks/useOutsideClikToClose";
const LoginAndOtherIcon = ({ isSearchShow, setIsSearchShow }) => {
  const user = true;
  return (
    <div className="flex   gap-5">
      <div className="flex items-center gap-3 text-gray-500 ">
        <button
          onClick={() => setIsSearchShow(!isSearchShow)}
          className={`hover:text-secondary duration-300 ${
            isSearchShow
            ? "text-red-500 scale-110 hover:text-red-500"
            : "text-gray-500 scale-100 hover:text-secondary"
          }`}>
          {isSearchShow ? <LuSearchX size={25} /> : <IoSearch size={25} />}
        </button>
        <button className="hover:text-secondary hover:scale-110 duration-300 relative">
          <LuShoppingCart size={25} />
          <span className="w-4 h-4 absolute -top-2 right-0 rounded-full flex justify-center items-center  bg-primary text-white text-xs">0</span>
        </button>
      </div>
      <div className="w-[2px]  bg-gray-400" />
      <div className="group">
        {user ? (
          <figure className=" cursor-pointer rounded-full w-10 h-10 mx-auto overflow-hidden ring-2 bg-gray-100 ring-primary/50 hover:ring-secondary duration-300">
            <Image
              className="object-cover w-10 h-10 object-bottom duration-300 group-hover:scale-110"
              width={40}
              height={40}
              src={"https://i.ibb.co/7yY9hv0/26159-removebg-preview.png"}
              alt="Profile image"
            />
          </figure>
        ) : (
          <Link
            href={""}
            className="xl:text-xl mx-auto md:mx-0 w-max px-5 py-2 bg-primary text-white relative overflow-hidden group z-10 rounded-lg shadow-md flex items-center gap-2">
            <span className="absolute -z-[1] bg-gray-300 rotate-12 -inset-12 group-hover:duration-500 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
            <span className="absolute -z-[1] bg-secondary  rotate-12 -inset-12 group-hover:duration-500 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
            <span className="absolute -z-[1] bg-primary rotate-12 -inset-12 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
            Join Now{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default LoginAndOtherIcon;

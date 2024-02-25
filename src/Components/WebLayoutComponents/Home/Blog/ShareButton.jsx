"use client";
import { useState } from "react";
import { LiaShareAltSolid } from "react-icons/lia";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import useOutsideClikToClose from "@/Components/Hooks/useOutsideClikToClose";

const ShareButton = () => {
  const [shareOpen, setShareOpen] = useState(false);
  const refWraper = useOutsideClikToClose(setShareOpen)
  return (
    <div ref={refWraper}
      className={` absolute -right-2 bottom-0  flex justify-center items-center w-[165px] duration-500 m-1 `}>
      {/* Social Link */}     
        <div  className={`relative  bg-primary flex justify-start items-center gap-2 transition  duration-500 w-[165px] h-9  py-1 px-2 rounded-2xl ${
        shareOpen ? " translate-x-[30px] scale-x-100 opacity-100" : " scale-x-0 translate-x-[70%] opacity-0"
      }`}>
          <Link onClick={() => setShareOpen(!shareOpen)} target="_blank" href="https://www.facebook.com">
            <FaFacebookF className="p-1 text-white hover:text-blue-700 hover:bg-white duration-500 rounded-full text-2xl" />
          </Link>
          <Link onClick={() => setShareOpen(!shareOpen)} target="_blank" href="https://twitter.com">
            <FaTwitter className="p-1 text-white hover:text-[#1DA1F2] hover:bg-white duration-500 rounded-full text-2xl" />
          </Link>
          <Link  onClick={() => setShareOpen(!shareOpen)} target="_blank" href="https://www.instagram.com">
            <FaInstagram className="p-1 text-white hover:text-[#cd486b] hover:bg-white duration-500 rounded-full text-2xl" />
          </Link>
        </div>
      {/* Toggle Share Button */}

      <button
        onClick={() => setShareOpen(!shareOpen)}
        className={`relative z-10 hover:shadow-[0px_0px_7px_1px_rgba(0,0,0,.1)]  rounded-full hover:bg-primary duration-300 
        ${shareOpen?'bg-primary':'   right-0'}`}>
        <LiaShareAltSolid className={`p-1    shadow-[0px_0px_7px_1px_rgba(44,95,45,.3)] rounded-full text-4xl ${shareOpen?'text-white shadow-[0px_0px_5px_0px_rgba(0,0,0,.4)]':' hover:text-white text-primary'}`} />
      </button>
    </div>
  );
};

export default ShareButton;

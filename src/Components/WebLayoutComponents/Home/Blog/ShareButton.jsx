"use client";
import { useState } from "react";
import { LiaShareAltSolid } from "react-icons/lia";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const ShareButton = () => {
  const [shareOpen, setShareOpen] = useState(false);
  return (
    <div
      className={`flex justify-center items-center gap-2 ${
        shareOpen ? "bg-primary rounded-2xl pr-2" : ""
      }`}
    >
      {/* Social Link */}
      {shareOpen && (
        <div className="flex justify-center items-center gap-2 transition translate-x-0 duration-700 bg-primary py-1 px-2 rounded-2xl">
          <Link href="https://www.facebook.com">
            <FaFacebookF className="p-1 bg-[#fff] hover:bg-[#0000FF] hover:text-white rounded-full text-2xl" />
          </Link>
          <Link href="https://twitter.com">
            <FaTwitter className="p-1 bg-[#fff] hover:bg-[#1DA1F2] hover:text-white rounded-full text-2xl" />
          </Link>
          <Link href="https://www.instagram.com">
            <FaInstagram className="p-1 bg-[#fff] hover:bg-[#cd486b] hover:text-white rounded-full text-2xl" />
          </Link>
        </div>
      )}
      {/* Toggle Share Button */}
      {shareOpen ? (
        <button onClick={() => setShareOpen(!shareOpen)}>
          <IoMdClose
            className={`p-[2px] bg-[#fff] rounded-full text-2xl hover:rotate-45 ${
              shareOpen ? "bg-white" : ""
            }`}
          />
        </button>
      ) : (
        <button
          onClick={() => setShareOpen(!shareOpen)}
          className="hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-full hover:bg-primary hover:duration-300"
        >
          <LiaShareAltSolid className="p-1 hover:text-white  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-full text-4xl" />
        </button>
      )}
    </div>
  );
};

export default ShareButton;

"use client"
import { useState } from 'react';
import { LiaShareAltSolid } from "react-icons/lia";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

const ShareButton = () => {
   const [shareOpen, setShareOpen] = useState(false)
   return (
      <div className='flex justify-center items-center gap-2'>
         {/* Social Link */}
         {
            shareOpen && <div className='flex justify-center items-center gap-2 duration-500'><Link href="#"><FaFacebookF className='p-2 bg-[#0000FF] rounded-full text-3xl' style={{ color: "white" }} /></Link>
               <Link href="#"><FaTwitter style={{ color: "white" }} className='p-2 bg-[#1DA1F2] rounded-full text-3xl' /></Link>
               <Link href="#"><FaInstagram style={{ color: "white" }} className='p-2 bg-[#cd486b] rounded-full text-3xl' /></Link></div>
         }
         {/* Toggle Share Button */}
         {
            shareOpen ? <button onClick={() => setShareOpen(!shareOpen)}><IoMdClose style={{ color: "black" }} className='p-1 shadow-md rounded-full text-4xl' /></button> : <button onClick={() => setShareOpen(!shareOpen)} className='hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-full hover:bg-primary hover:duration-300'>
               <LiaShareAltSolid className='p-1 hover:text-white  shadow-md rounded-full text-4xl' />
            </button>
         }
      </div>
   );
};

export default ShareButton;
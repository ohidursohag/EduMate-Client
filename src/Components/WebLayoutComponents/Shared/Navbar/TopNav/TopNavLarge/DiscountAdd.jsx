'use client'

import Link from "next/link";
import Marquee from "react-fast-marquee";

const DiscountAdd = () => {

  return (
   <div className="flex items-center md:max-w-[350px] lg:max-w-[500px] ">
   <Link href={'/'} className="text-gray-100 w-[110px] lg:w-[150px] text-sm lg:text-base px-3 text-center py-1 rounded-l-full border-r border-r-gray-300 bg-primary">Offer</Link>
   <Marquee delay={2} pauseOnHover speed={30} >
     <p className="text-title mr-10 text-sm lg:text-base">👋 Get Discount for Big Sale <span className="bg-primary text-white inline-block skew-x-12 px-2">-50%</span> off.</p>
   </Marquee>
  </div>
  )
};

export default DiscountAdd;

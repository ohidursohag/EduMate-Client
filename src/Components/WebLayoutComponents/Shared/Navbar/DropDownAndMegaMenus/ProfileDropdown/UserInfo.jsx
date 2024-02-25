import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const UserInfo = () => {

  return (
   <div className="flex justify-center items-center gap-3 mt-20 mb-5">
   <div className="size-11 ring-2 rounded-full  ring-primary/50 p-[2px]">
   <figure className="size-10  rounded-full overflow-hidden   ">
     <Image src={'https://i.ibb.co/7yY9hv0/26159-removebg-preview.png'} width={40} height={40} alt="profile image" className="object-cover object-center bg-gray-400"/>
   </figure>
   </div>
   <div>
     <h5 className="font-medium text-title">Md. Sohag</h5>
     <Link href={'#'} className="text-sm font-medium text-primary flex items-center gap-1">View Profile <LuExternalLink /></Link>
   </div>
  </div>
  )
};

export default UserInfo;

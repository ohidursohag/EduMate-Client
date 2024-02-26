import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

const DetailsButton = ({linkPath,name}) => {

  return (
   <Link href={linkPath} className="flex items-center gap-2 mb-1 py-1 px-3 hover:bg-primary bg-secondary text-white rounded-md hover:text-white duration-300 group max-w-max shadow-[0px_0px_5px_0px_rgba(44,95,45,.2)] hover:duration-300 ml-1">
     {name}
     <span>
       <LuMoveRight className="duration-500 w-4 group-hover:translate-x-1 group-hover:text-white" />
     </span>
   </Link>
  )
};

export default DetailsButton;

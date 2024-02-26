import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

const SeeMoreButton = ({ linkPath, name, className }) => {
  return (
    <Link href={linkPath} className={` ${className}`}>
      <button className=" group duration-500 font-semibold flex items-center gap-2 shadow py-1 px-3 bg-secondary rounded-md  hover:bg-primary hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] text-white hover:duration-300">
        {name}
        <span>
          <LuMoveRight className="duration-500 w-4 group-hover:translate-x-1 group-hover:text-white"/>
        </span>
      </button>
    </Link>
  );
};

export default SeeMoreButton;

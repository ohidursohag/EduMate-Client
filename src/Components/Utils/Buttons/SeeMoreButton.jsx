import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

const SeeMoreButton = ({ linkPath, name, className }) => {
  return (
    <Link href={linkPath} className={` ${className}`}>
      <button className=" font-semibold flex items-center gap-2 shadow py-1 px-3 bg-primary rounded-md hover:bg-white hover:text-primary hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] text-white hover:duration-300">
        {name}
        <span>
          <LuMoveRight />
        </span>
      </button>
    </Link>
  );
};

export default SeeMoreButton;

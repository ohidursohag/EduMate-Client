import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

const DetailsButton = ({ linkPath, name }) => {

  return (
    <Link href={linkPath} className="flex items-center gap-2 mb-1 py-1 px-3 hover:bg-primary rounded-md hover:text-white duration-300 group/share min-w-max shadow-[0px_0px_5px_0px_rgba(44,95,45,.2)] hover:duration-300 ml-1">
      {name}
      <span>
        <LuMoveRight className="duration-500 group-hover/share:text-white" />
      </span>
    </Link>
  )
};

export default DetailsButton;

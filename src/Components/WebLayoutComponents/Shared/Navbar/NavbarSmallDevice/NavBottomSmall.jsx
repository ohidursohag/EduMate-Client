import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
// import Logo from "../NavbarLeargeDevice/BottomNav/Logo";
import { IoSearch } from "react-icons/io5";
const NavBottomSmall = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <figure>
        <Image
          src={
            "https://elearni.wpenginepowered.com/wp-content/uploads/2018/12/logo.png"
          }
          className="w-[110px]"
          alt="logo"
          width={120}
          height={50}
        />
      </figure>
      <div>
        <div className="flex items-center gap-3 text-gray-500 ">
          <button className="hover:text-secondary duration-300">
            <IoSearch size={20} />
          </button>
          <button className="hover:text-secondary duration-300">
            <LuShoppingCart size={20} />
          </button>
          <button className="hover:text-secondary duration-300">
            <CgProfile size={20} />
          </button>
          <button onClick={()=>setOpenSidebar(!openSidebar)} className="hover:text-secondary duration-300 rotate-180">
            {openSidebar ? <IoMdClose size={25} /> : <IoMenu size={25} className={`duration-700 ${openSidebar?'rotate-180':''}`}/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBottomSmall;

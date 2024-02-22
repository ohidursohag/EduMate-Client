import { LuSearchX, LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
// import Logo from "../NavbarLargeDevice/BottomNav/Logo";
import { IoSearch } from "react-icons/io5";
const NavBottomSmall = ({
  openSidebar,
  setOpenSidebar,
  isSearchShow,
  setIsSearchShow,
}) => {
  return (
    <div className="flex items-center justify-between lg:hidden py-2">
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
          <button
            onClick={() => setIsSearchShow(!isSearchShow)}
            className={` duration-300 ${
              isSearchShow
                ? "text-red-500 scale-110 hover:text-red-500"
                : "text-gray-500 scale-100 hover:text-secondary"
            }`}>
            {
            isSearchShow ? <LuSearchX size={25}/>:<IoSearch size={25} />
          }
          </button>
          <button className="hover:text-secondary hover:scale-110 duration-300 relative">
          <LuShoppingCart size={22} />
          <span className="w-4 h-4 absolute -top-2 -right-1 rounded-full flex justify-center items-center  bg-primary text-white text-xs">0</span>
        </button>
          <button className="hover:text-secondary duration-300">
            <CgProfile size={20} />
          </button>
          <button
            onClick={() => setOpenSidebar(!openSidebar)}
            className="hover:text-secondary duration-300 rotate-180">
            {openSidebar ? (
              <IoMdClose size={25} />
            ) : (
              <IoMenu
                size={25}
                className={`duration-700 ${openSidebar ? "rotate-180" : ""}`}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBottomSmall;

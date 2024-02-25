import { LuSearchX, LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import ProfileDropdown from "../../DropDownAndMegaMenus/ProfileDropdown/ProfileDropdown";
import Logo from "@/Components/Utils/Logo";
const NavBottomSmall = ({
  openSidebar,
  setOpenSidebar,
  isSearchShow,
  setIsSearchShow,
}) => {
  return (
    <div className="flex items-center justify-between lg:hidden py-2">
      {/* Logo */}
      <Logo/>
      {/* Right side Buttons */}
      <div>
        <div className="flex items-center gap-3 text-gray-500 ">
          {/* Search */}
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
          {/* Cart */}
          <button className="hover:text-secondary hover:scale-110 duration-300 relative">
          <LuShoppingCart size={22} />
          <span className="w-4 h-4 absolute -top-2  -right-1 rounded-full flex justify-center items-center  bg-primary text-white text-xs">0</span>
        </button>
        {/* Profile / Join */}
          <div className="relative group/profileDropDown flex items-center justify-center">
          <button className="hover:text-secondary duration-300">
            <CgProfile size={20} />
          </button>
          <ProfileDropdown/>
          </div>
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

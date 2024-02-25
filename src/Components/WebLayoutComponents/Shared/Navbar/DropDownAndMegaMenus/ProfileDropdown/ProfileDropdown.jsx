import Image from "next/image";
import Link from "next/link";
import UserInfo from "./UserInfo";


import UserMenuItems from "./UserMenuItems";


const ProfileDropdown = () => {
  return (
    <section className="absolute w-[250px] -z-10 top-0 lg:-top-4 bg-white -right-10 lg:-right-3  rounded-b-md duration-700 -translate-y-[40%] group-hover/profileDropDown:translate-y-0 scale-y-0 group-hover/profileDropDown:scale-y-100 opacity-0 group-hover/profileDropDown:opacity-100">
      {/* user Info */}
      <UserInfo />
      {/* user menue */}
      <UserMenuItems/>
    </section>
  );
};

export default ProfileDropdown;

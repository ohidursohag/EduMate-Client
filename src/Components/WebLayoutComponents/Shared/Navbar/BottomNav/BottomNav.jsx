import { useState } from "react";
import BottomNavLarge from "./BottomNavLarge/BottomNavLarge";
import NavBottomSmall from "./BottomNavSmall/NavBottomSmall";
import SideNavBar from "../SideNavBar/SideNavBar";

const BottomNav = ({ isSearchShow, setIsSearchShow }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <BottomNavLarge
        isSearchShow={isSearchShow}
        setIsSearchShow={setIsSearchShow}
      />
      <NavBottomSmall
        isSearchShow={isSearchShow}
        setIsSearchShow={setIsSearchShow}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <SideNavBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};

export default BottomNav;

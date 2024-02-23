"use client";
import Container from "@/Components/Utils/Container";
import NavBottomSmall from "./NavBottomSmall";
import TopNavSmall from "./TopNavSmall";
import SideNavBar from "./SideNavBar/SideNavBar";
import { useEffect, useState } from "react";
import "../Shared/stickyNav.css";
const NavBarSmallDevice = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [scroll, setScroll] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <header>
      <nav
        className={`w-full bg-white shadow z-50 lg:hidden ${
          scroll ? "sticky" : ""
        }`}>
        <Container>
          <TopNavSmall />
        </Container>
        <hr className="border-gray-200" />
        <Container>
          <NavBottomSmall
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
        </Container>
      </nav>
      <SideNavBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </header>
  );
};

export default NavBarSmallDevice;

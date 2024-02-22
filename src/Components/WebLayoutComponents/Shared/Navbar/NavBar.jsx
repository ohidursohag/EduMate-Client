"use client";

import { useEffect, useState } from "react";
import "./Shared/stickyNav.css";
import TopNav from "./TopNav/TopNav";
import Container from "@/Components/Utils/Container";
import BottomNav from "./BottomNav/BottomNav";
import SearchDropDown from "./DropDownAndMegaMenus/SearchDropDown/SearchDropDown";
import useOutsideClikToClose from "@/Components/Hooks/useOutsideClikToClose";
const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const refWraper = useOutsideClikToClose(setIsSearchShow);
  // console.log(isSearchShow)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >10);
    });
  }, []);
  return (
    <>
      <nav
        className={`relative z-[100] bg-white shadow-xl ${
          scroll ? "sticky " : "relative"
        }`}>
        <Container>
          <TopNav />
        </Container>
        <hr />
        <Container>
          <BottomNav
            isSearchShow={isSearchShow}
            setIsSearchShow={setIsSearchShow}
          />
        </Container>
      </nav>
      <div
      // ref={refWraper}
      >
        <SearchDropDown
          scroll={scroll}
          isSearchShow={isSearchShow}
          setIsSearchShow={setIsSearchShow}
        />
      </div>
    </>
  );
};

export default NavBar;

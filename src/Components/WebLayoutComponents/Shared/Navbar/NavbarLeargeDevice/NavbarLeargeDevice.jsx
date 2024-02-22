"use client";
import Container from "@/Components/Utils/Container";
import NavTop from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav";
import { useEffect, useState } from "react";
import "../Shared/stickyNav.css";
const NavbarLeargeDevice = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  return (
    <nav className={` hidden z-50  bg-white lg:block ${
      scroll ? "sticky shadow-xl" : "relative"
    }`}>
      <Container>
        <NavTop />
      </Container>
      <hr className="border-gray-200" />
      <Container>
        <BottomNav />
      </Container>
    </nav>
  );
};

export default NavbarLeargeDevice;

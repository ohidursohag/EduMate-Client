

import Footer from "@/Components/WebLayoutComponents/Shared/Footer/Footer";
import NavBarSmallDevice from "@/Components/WebLayoutComponents/Shared/Navbar/NavBarSmallDevice";
import NavbarLeargeDevice from "@/Components/WebLayoutComponents/Shared/Navbar/NavbarLeargeDevice";
import SideNavBar from "@/Components/WebLayoutComponents/Shared/Navbar/SideNavBar/SideNavBar";
import PropTypes from "prop-types";
const WebLayout = ({ children }) => {
  return (
    <div className="">
      <NavbarLeargeDevice />
      <NavBarSmallDevice/>
      <div> {children}</div>
      <Footer />
      <SideNavBar/>
    </div>
  );
};

WebLayout.propTypes = {
  children: PropTypes.node,
};
export default WebLayout;

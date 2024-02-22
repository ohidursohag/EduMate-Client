import Footer from "@/Components/WebLayoutComponents/Shared/Footer/Footer";
import NavBarSmallDevice from "@/Components/WebLayoutComponents/Shared/Navbar/NavbarSmallDevice/NavBarSmallDevice";
import NavbarLeargeDevice from "@/Components/WebLayoutComponents/Shared/Navbar/NavbarLeargeDevice/NavbarLeargeDevice";
import PropTypes from "prop-types";
const WebLayout = ({ children }) => {
  return (
    <div className="">
      <NavbarLeargeDevice />
      <NavBarSmallDevice />
      <div> {children}</div>
      <Footer />
    </div>
  );
};

WebLayout.propTypes = {
  children: PropTypes.node,
};
export default WebLayout;

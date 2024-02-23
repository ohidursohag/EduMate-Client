import Footer from "@/Components/WebLayoutComponents/Shared/Footer/Footer";
<<<<<<< HEAD
=======
import NavBarSmallDevice from "@/Components/WebLayoutComponents/Shared/Navbar/NavbarSmallDevice/NavBarSmallDevice";
import NavbarLeargeDevice from "@/Components/WebLayoutComponents/Shared/Navbar/NavbarLeargeDevice/NavbarLeargeDevice";
>>>>>>> fbef13498aab5b7013a4817b9bdf20656a9a51aa
import PropTypes from "prop-types";
import NavBar from "@/Components/WebLayoutComponents/Shared/Navbar/NavBar";
const WebLayout = ({ children }) => {
  return (
    <div className="">
<<<<<<< HEAD
      <NavBar/>
=======
      <NavbarLeargeDevice />
      <NavBarSmallDevice />
>>>>>>> fbef13498aab5b7013a4817b9bdf20656a9a51aa
      <div> {children}</div>
      <Footer />
    </div>
  );
};

WebLayout.propTypes = {
  children: PropTypes.node,
};
export default WebLayout;

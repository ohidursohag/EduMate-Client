import Footer from "@/Components/WebLayoutComponents/Shared/Footer/Footer";
import PropTypes from "prop-types";
import NavBar from "@/Components/WebLayoutComponents/Shared/Navbar/NavBar";
const WebLayout = ({ children }) => {
  return (
    <div className="">
      <NavBar/>
      <div> {children}</div>
      <Footer />
    </div>
  );
};

WebLayout.propTypes = {
  children: PropTypes.node,
};
export default WebLayout;

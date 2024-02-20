import Container from "@/Components/Utils/Container";
import Footer from "@/Components/WebLayoutComponents/Shared/Footer/Footer";
import Navbar from "@/Components/WebLayoutComponents/Shared/Navbar/Navbar";
import PropTypes from "prop-types";
const WebLayout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <div> {children}</div>
      <Footer />
    </Container>
  );
};

WebLayout.propTypes = {
  children: PropTypes.node,
};
export default WebLayout;

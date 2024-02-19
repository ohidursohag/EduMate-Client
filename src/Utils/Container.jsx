import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="container mx-auto px-3 md:px-5">{children}</div>;
};

Container.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Container;

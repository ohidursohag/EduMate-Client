import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="container mx-auto px-3 lg:px-5">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

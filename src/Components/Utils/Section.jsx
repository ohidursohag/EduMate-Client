import PropTypes from "prop-types";

const Section = ({ children, className }) => {
  return (
    <section className={`my-10 md:my-16 xl:my-24 ${className}`}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;

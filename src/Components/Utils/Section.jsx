import PropTypes from 'prop-types';

const Section = ({children}) => {

  return (
    <section className='my-10 md:my-16 xl:my-24'>
       {children}
    </section>
  )
};

Section.propTypes = {
   children: PropTypes.node.isRequired
};

export default Section;

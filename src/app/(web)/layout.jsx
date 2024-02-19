import Footer from '@/Components/WebLayoutComponents/Shared/Footer/Footer';
import Navbar from '@/Components/WebLayoutComponents/Shared/Navbar/Navbar';
import PropTypes from 'prop-types';
const WebLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
       <div> {children}</div>
       <Footer/>
    </div>
  )
};

WebLayout.propTypes = {
  children: PropTypes.node
};
export default WebLayout;

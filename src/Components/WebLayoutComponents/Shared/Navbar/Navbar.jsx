import Container from "@/Components/Utils/Container";
import NavTop from "./TopNav";
import BottomNav from "./BottomNav/BottomNav";

const Navbar = () => {

  return (
    <nav className="relative bg-[#222222] py-5 md:py-0">
     <Container>
     <NavTop/>
     <hr className="border-gray-500"/>
     <BottomNav/>
     </Container>
    </nav>
  )
};

export default Navbar;

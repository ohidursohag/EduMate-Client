import Container from "@/Components/Utils/Container";
import NavTop from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav";

const NavbarLeargeDevice = () => {
  return (
    <nav className="relative hidden  lg:block">
      <Container>
        <NavTop />
      </Container>
        <hr className="border-gray-200" />
      <Container>
        <BottomNav />
      </Container>
    </nav>
  );
};

export default NavbarLeargeDevice;


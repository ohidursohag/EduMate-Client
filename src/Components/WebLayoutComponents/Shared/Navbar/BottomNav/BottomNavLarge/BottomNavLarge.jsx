import Logo from "@/Components/Utils/Logo";
import LoginAndOtherIcon from "./LoginAndOtherIcon";
import NavLinks from "./NavLinks";

const BottomNavLarge = ({ isSearchShow, setIsSearchShow }) => {
  return (
    <div className="h-16 hidden lg:flex gap-5  justify-between items-center">
      <Logo/>
      <NavLinks />
      <LoginAndOtherIcon
        isSearchShow={isSearchShow}
        setIsSearchShow={setIsSearchShow}
      />
    </div>
  );
};

export default BottomNavLarge;

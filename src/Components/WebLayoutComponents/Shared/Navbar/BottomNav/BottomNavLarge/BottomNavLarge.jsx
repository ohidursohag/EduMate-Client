import LoginAndOtherIcon from "./LoginAndOtherIcon";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const BottomNavLarge = ({ isSearchShow, setIsSearchShow }) => {
  return (
    <div className="h-16 hidden lg:flex gap-5  justify-between items-center">
      <Logo />
      <NavLinks />
      <LoginAndOtherIcon
        isSearchShow={isSearchShow}
        setIsSearchShow={setIsSearchShow}
      />
    </div>
  );
};

export default BottomNavLarge;

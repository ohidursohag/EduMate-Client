import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const BottomNav = () => {

  return (
    <div className="py-3 flex flex-col gap-5 md:flex-row justify-between items-center">
      <Logo/>
      <NavLinks/>
      <SearchBar/>
    </div>
  )
};

export default BottomNav;

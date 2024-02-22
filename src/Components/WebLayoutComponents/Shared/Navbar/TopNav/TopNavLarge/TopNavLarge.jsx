import Language from "../../Shared/Language";
import SocialIcons from "../../Shared/SocialIcons";
import DiscountAdd from "./DiscountAdd";

const TopNavLarge = () => {
  return (
    <div className="py-1 gap-5 hidden lg:flex justify-between items-center">
      {/* Social Links */}
      <SocialIcons />
      {/* Discount Add */}
      <DiscountAdd />
      {/* Languagr */}
      <Language />
    </div>
  );
};

export default TopNavLarge;

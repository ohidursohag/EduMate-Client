import Language from "../../Shared/Language";
import SocialIcons from "../../Shared/SocialIcons";


const TopNavSmall = () => {
  return (
    <div>
      <div className="flex lg:hidden items-center justify-between py-1">
        <SocialIcons />
        <Language />
      </div>
    </div>
  );
};

export default TopNavSmall;

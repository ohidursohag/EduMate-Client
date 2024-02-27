import Image from "next/image";
import logoIcon from "@/Assets/logo/logoIcon.png";
import logoName from "@/Assets/logo/logoName.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center gap-1 ">
      <Image width={40} height={40} className="" src={logoIcon} alt="logo icon" />
      <Image width={100} height={50} className="" src={logoName} alt="Logo name" />
    </Link>
  );
};
export default Logo;

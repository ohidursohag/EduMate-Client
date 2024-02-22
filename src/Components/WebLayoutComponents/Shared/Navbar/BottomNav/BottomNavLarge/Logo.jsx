import Image from "next/image";
import logo from "@/Assets/logo.png"
const Logo = () => {

  return (
    <figure>
       <Image src={logo} alt="logo" width={150} height={60}/>
    </figure>
  )
};

export default Logo;

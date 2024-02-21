import Container from "@/Components/Utils/Container";
import Logo from "./BottomNav/Logo";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
const NavBarSmallDevice = () => {
  return (
    <nav className="py-2 lg:hidden">
      <Container>
         <div className="flex items-center justify-between">
         <figure>
       <Image src={'https://elearni.wpenginepowered.com/wp-content/uploads/2018/12/logo.png'} alt="logo" width={120} height={50}/>
    </figure>
         <div>
         <div className="flex items-center gap-3 text-gray-500 ">
        <button className="hover:text-secondary duration-300">
          <IoSearch size={20} />
        </button>
        <button className="hover:text-secondary duration-300">
          <LuShoppingCart size={20} />
        </button>
        <button className="hover:text-secondary duration-300">
          <CgProfile  size={20} />
        </button>
        <button className="hover:text-secondary duration-300">
          <IoMenu   size={25} />
          {/* <IoMdClose size={25} /> */}
        </button>
      </div>
         </div>
         </div>
        
      </Container>
    </nav>
  );
};

export default NavBarSmallDevice;

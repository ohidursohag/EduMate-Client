import Image from "next/image";

const Logo = () => {

  return (
    <figure>
       <Image src={'https://elearni.wpenginepowered.com/wp-content/uploads/2018/12/logo.png'} alt="logo" width={150} height={60}/>
    </figure>
  )
};

export default Logo;

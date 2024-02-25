import Image from 'next/image';
import logoIcon from '../../../public/logoIcon.png';
import logoName from '../../../public/logoName.png';

const Logo = () => {
    return (
      <div className='flex items-center gap-1'>
        <Image
          width={40}
          height={40}
          className=""
          src={logoIcon}
          alt=""
        />
        <Image
          width={100}
          height={0}
          className=""
          src={logoName}
          alt=""
        />
      </div>
    );
};

export default Logo;
import Image from 'next/image';
import logoIcon from '../../../public/logoIcon.png';
import logoName from '../../../public/logoName.png';

const Logo = () => {
    return (
      <div className='flex items-center'>
        <Image
          width={40}
          height={20}
          className="-mt-8 -ml-1"
          src={logoIcon}
          alt=""
        />
        <Image
          width={100}
          height={0}
          className="-mt-6"
          src={logoName}
          alt=""
        />
      </div>
    );
};

export default Logo;
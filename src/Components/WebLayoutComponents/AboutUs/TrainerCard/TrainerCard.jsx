import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

const TrainerCard = ({ name, img, designation, location }) => {
  return (
    <div className="shadow-lg lg:p-6 rounded-lg mt-5 md:mt-0 pb-5">
      <div className="w-full  h-[475px]">
        <Image src={img} width={350} height={475} alt="Trainer" className="w-full h-full rounded-lg"/>
      </div>
      <div className="text-center mt-5 space-y-1">
        <h1 className="lg:text-4xl font-bold">{name}</h1>
        <p className="text-base text-primary">{designation}</p>
        <p className="flex gap-2 italic items-center justify-center"><IoLocationOutline></IoLocationOutline> {location}</p>
      </div>
    </div>
  );
};

export default TrainerCard;

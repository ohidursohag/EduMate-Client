import { FaMinus, FaPlus } from "react-icons/fa";

const FAQCard = ({ question }) => {
  return (
    <div className="border border-gray-100 hover:bg-gray-200 h-14 overflow-hidden hover:h-36 duration-700 rounded-3xl mb-3 py-3 px-6 flex items-start justify-between gap-6 group">
      <div>
        <h2 className="text-lg font-semibold pb-4">{question}</h2>
        <h4 className="pb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          rerum cum dolorem maiores accusantium sit ipsa odio amet suscipit
          laboriosam odit ducimus temporibus magni? Nisi fugit esse
          exercitationem sint voluptatum.
        </h4>
      </div>
      <button className="">
        <FaPlus className="text-white hover:bg-secondary transition duration-200 p-2 text-3xl rounded-full bg-primary group-hover:hidden" />
        <FaMinus className="text-white hover:bg-secondary transition duration-200 p-2 text-3xl rounded-full bg-primary hidden group-hover:block" />
      </button>
    </div>
  );
};

export default FAQCard;

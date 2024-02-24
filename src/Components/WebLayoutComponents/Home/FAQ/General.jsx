import { FaMinus, FaPlus } from "react-icons/fa6";

const General = () => {
   const faqTitle = [
      "What is Solstice? What is it for?",
      "What steps do I need to take to join?",
      "Do you facilitate any regular events or offer rooms for group discussions?",
      "Is there a particular subject I should focus on learning?",
      "Can I make it a fun group study session by inviting my buddies?"
   ]
   return (
      <>
         <section className="py-5">
            <div className="container mx-auto px-4">
               {faqTitle.map((title, index) => <div key={index} className="border border-gray-100 hover:bg-gray-200 h-20 md:h-14 overflow-hidden group-hover:h-[99%] duration-700 rounded-3xl mb-3 py-3 px-6 flex items-start justify-between gap-6 group">
                  <div>
                     <h2 className="text-lg font-semibold pb-4">{title.slice(0, 60)}</h2>
                     <h4 className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, rerum cum dolorem maiores accusantium sit ipsa odio amet suscipit laboriosam odit ducimus temporibus magni? Nisi fugit esse exercitationem sint voluptatum.</h4>
                  </div>
                  <button className="">
                     <FaPlus className="text-white hover:bg-secondary transition duration-200 p-2 text-3xl rounded-full bg-primary group-hover:hidden" />
                     <FaMinus className="text-white hover:bg-secondary transition duration-200 p-2 text-3xl rounded-full bg-primary hidden group-hover:block" />
                  </button>
               </div>)}
            </div>
         </section>
      </>
   );
};

export default General;
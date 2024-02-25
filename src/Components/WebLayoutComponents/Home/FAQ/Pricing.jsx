import { FaMinus, FaPlus } from "react-icons/fa6";
import FAQCard from "./FAQCard";

const Pricing = () => {
   const faqTitle = [
      "Do you facilitate any regular events or offer rooms for group discussions?",
      "Can I make it a fun group study session by inviting my buddies?",
      "Is there a particular subject I should focus on learning?",
      "What is Solstice? What is it for?",
      "What steps do I need to take to join?",
   ];
   return (
      <>
         <div className="container mx-auto px-4">
            {faqTitle.map((question, index) => <FAQCard key={index} question={question} />)}
         </div>
      </>
   );
};

export default Pricing;

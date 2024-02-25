import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import FAQCard from "./FAQCard";
const Courses = () => {
   const faqTitle = [
      "Can I make it a fun group study session by inviting my buddies?",
      "Is there a particular subject I should focus on learning?",
      "Do you facilitate any regular events or offer rooms for group discussions?",
      "What steps do I need to take to join?",
      "What is Solstice? What is it for?",
   ]
   return (
      <>
         <section className="py-5">
            <div className="container mx-auto px-4">
               {faqTitle.map((question, index) => <FAQCard key={index} question={question} />)}
            </div>
         </section>
      </>
   );
};

export default Courses;
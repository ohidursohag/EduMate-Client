import { FaMinus, FaPlus } from "react-icons/fa6";
import FAQCard from "./FAQCard";

const General = () => {
  const faqTitle = [
    "What is Solstice? What is it for?",
    "What steps do I need to take to join?",
    "Do you facilitate any regular events or offer rooms for group discussions?",
    "Is there a particular subject I should focus on learning?",
    "Can I make it a fun group study session by inviting my buddies?",
  ];
  return (
    <>
      <div className="container mx-auto px-4">
        {faqTitle.map((question, index) => (
          <FAQCard key={index} question={question} />
        ))}
      </div>
    </>
  );
};

export default General;

"use client"
import Container from "@/Components/Utils/Container";
import Section from "@/Components/Utils/Section";
import { useState } from "react";
import General from "./General";
import Courses from "./Courses";
import Pricing from "./Pricing";

const FAQ = () => {
  const [faqToggleButton, setFaqToggleButton] = useState(0)

  return (
    <div className="max-w-[1000px] mx-auto">
      <Section>
        <div className='flex flex-col items-center pb-12'>
          <h5 className='py-1 px-3 bg-[#2a5a1e] rounded text-white'>Frequently Asked Question</h5>
          <h3 className='text-3xl md:text-4xl font-bold pt-2'>You Ask? We Answer</h3>
          <span className="section-divider"></span>
        </div>
        <div className="flex justify-center items-center gap-10">
          <button onClick={() => setFaqToggleButton(0)} className={`py-2 px-4 border border-black rounded-3xl hover:bg-primary hover:text-white ${faqToggleButton === 0 ? "bg-primary text-white" : ""}`}>General</button>
          <button onClick={() => setFaqToggleButton(1)} className={`py-2 px-4 border border-black rounded-3xl hover:bg-primary hover:text-white ${faqToggleButton === 1 ? "bg-primary text-white" : ""}`}>Course</button>
          <button onClick={() => setFaqToggleButton(2)} className={`py-2 px-4 border border-black rounded-3xl hover:bg-primary hover:text-white ${faqToggleButton === 2 ? "bg-primary text-white" : ""}`}>Pricing</button>
        </div>
        <div className="pt-10">
          {faqToggleButton === 0 && <General />}
          {faqToggleButton === 1 && <Courses />}
          {faqToggleButton === 2 && <Pricing />}
        </div>
      </Section>
    </div>
  )
};

export default FAQ;

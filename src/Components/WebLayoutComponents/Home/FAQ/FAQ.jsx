"use client"
import Container from "@/Components/Utils/Container";
import Section from "@/Components/Utils/Section";
import { useState } from "react";
import General from "./General";
import Courses from "./Courses";
import Pricing from "./Pricing";
import SectionTitle from "@/Components/Utils/SectionTitle/SectionTitle";

const FAQ = () => {
  const [faqToggleButton, setFaqToggleButton] = useState(0)

  return (
    <div className="max-w-[1000px] mx-auto">
      <Section>
        <SectionTitle sectionName={'FAQ'} title={'You Ask? We Answer'} />

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

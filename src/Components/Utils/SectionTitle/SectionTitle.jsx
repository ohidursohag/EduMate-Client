import "./sectionTitle.css"

const SectionTitle = ({sectionName,title}) => {
  return (
   <div className="flex flex-col items-center mb-6  md:mb-10">
   <h5 className="py-1 px-3 bg-[#2a5a1e] rounded text-white text-sm sm:text-base">
     -- {sectionName} --
   </h5>
   <h3 className="text-3xl md:text-4xl font-bold my-4">
   {title}
   </h3>
   <span className="section-divide"></span>
 </div>
  )
};

export default SectionTitle;


import "./divider.css";


const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="text-center py-12 flex flex-col justify-center items-center">
        <h2 className="inline-block ml-2 font-bold text-4xl">
          {title}
        </h2>
        <p className="mt-4" >{subTitle}</p>
        <span className="section-divider"></span>
      </div>
    );
};

export default SectionTitle;
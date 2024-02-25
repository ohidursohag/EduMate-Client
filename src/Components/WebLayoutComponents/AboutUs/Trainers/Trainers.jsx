import SectionTitle from "../SectionTitle/SectionTitle";
import TrainerCard from "../TrainerCard/TrainerCard";

const Trainers = () => {
  return (
    <div className="mt-8 md:mt-10 lg:mt-0">
      <div className="w-fit mx-auto">
        <SectionTitle text="Skilled Teachers"></SectionTitle>
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold mt-6">
          Whose Inspirations You Love
        </h1>
        <p className="text-center px-5 md:w-[70%] lg:w-3/5 mt-2 text-sm mx-auto">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 md:my-8 lg:my-12 w-11/12 md:w-[95%] lg:w-4/5 mx-auto">
        <TrainerCard
          img="https://i.ibb.co/yFCfnN9/team7.jpg"
          name="Alejandro"
          designation="Web Instructor"
          location=" CO Miego, AD,USA"
        ></TrainerCard>
        <TrainerCard
          img="https://i.ibb.co/TP9NvBY/Jospeh-Joslin-300x300.jpg"
          name="John Due"
          designation="Marketing Expert"
          location=" CO Miego, AD,USA"
        ></TrainerCard>
        <TrainerCard
          img="https://i.ibb.co/7S2d1rj/image-6.jpg"
          name="Joo Bieden"
          designation="Data Scientist"
          location=" CO Miego, AD,USA"
        ></TrainerCard>
       
      </div>
    </div>
  );
};

export default Trainers;

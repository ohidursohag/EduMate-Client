
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import Section from "@/Components/Utils/Section";
import SectionTitle from "@/Components/Utils/SectionTitle/SectionTitle";
import { promises as fs } from "fs";
const Review = async () => {
   const file = await fs.readFile(
      process.cwd() + "/public/review.json",
      "utf8"
    );
    const reviews = JSON.parse(file);
   //  console.log(reviews)

  return (
    <Section>
      <SectionTitle sectionName={'Reviews'} title={'What Our Students Says'}/>
      <Marquee  gradient direction="right" >
          {reviews.map((data) => (
            <div key={data.name}>
              <ReviewCard
                name={data.name}
                image={data.image}
                ratings={data.ratings}
                designation={data.designation}
                description={data.description}/>
            </div>
          ))}
        </Marquee>
      <Marquee  gradient direction="left" >
          {reviews.map((data) => (
            <div key={data.name}>
              <ReviewCard
                name={data.name}
                image={data.image}
                ratings={data.ratings}
                designation={data.designation}
                description={data.description}/>
            </div>
          ))}
        </Marquee>
    </Section>
  );
};

export default Review;

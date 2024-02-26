"use client";
import bannerCharecter from "@/Assets/BannerImage/bannerCharecter.webp";
import RedialGeadiet from "@/Assets/BannerImage/RedialGeadiet.svg";
import Image from "next/image";
import animationCss from "./animation.module.css";
import Container from "@/Components/Utils/Container";

import CardSlider from "./CardSlider";
import BannerTextContent from "./BannerTextContent";
import waveSahapeUp from "@/Assets/BannerImage/waveUp.svg";
import Status from "./Status";
const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/60 via-secondary/20 to-primary/60  min-h-screen lg:min-h-0 lg:h-[calc(100vh)] flex justify-center items-center">
      <Container className="h-full flex justify-center items-center">
        <div className=" w-full flex flex-col justify-between items-center gap-y-10  text-[rgb(254,250,224)] md:flex-row my-10 xl:my-0 ">
          {/*Left*/}
          <BannerTextContent />
          {/*Middle Image */}
          <div className={`relative hidden xl:block xl:w-[35%] 3xl:flex-1`}>
            <figure className="xl:-mb-20">
              <Image
                src={RedialGeadiet}
                alt="redial gradient"
                width={800}
                height={800}
                className={`absolute -inset-16 -z-10  opacity-70`}
              />
              <Image
                src={RedialGeadiet}
                alt="redial gradient"
                width={800}
                height={800}
                className="absolute -inset-16 -z-10  animate-[ping_2s_linear_infinite]"
              />
              <Image
                src={bannerCharecter}
                width={530}
                height={620}
                alt="banner image"
                className="xl:"
              />
            </figure>
          </div>
          {/* Right */}
          <div className="w-full md:w-auto md:flex-1 overflow-hidden xl:overflow-">
            <CardSlider />
          </div>
        </div>
      </Container>
      <Container className="absolute inset-x-0 bottom-0 z-20 hidden xl:block">
        <Status />
      </Container>
      <figure className="absolute bottom-0 hidden xl:block">
        <Image src={waveSahapeUp} height={150} width={1920} alt="Shape" />
      </figure>
    </section>
  );
};

export default Banner;

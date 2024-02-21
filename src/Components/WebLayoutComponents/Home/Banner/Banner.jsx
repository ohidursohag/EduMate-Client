"use client";
import { useEffect, useState } from "react";
import banner1 from "@/Assets/BannerImage/banner-without-bg.png";
import Image from "next/image";
import animationCss from "./animation.module.css";
import Container from "@/Components/Utils/Container";
import BannerCard from "./BannerCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Banner = () => {
  const [coursecount, setCourseCount] = useState(0);
  const [student, setStudent] = useState(0);
  const [active, setActive] = useState(0);

  const courseNumber = 230;
  const netStudent = 30;

  useEffect(() => {
    const interval = setInterval(() => {
      setCourseCount((prevCount) => {
        if (prevCount < courseNumber) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#283618] pb-12">
      <Container>
        <div className=" flex flex-col gap-8 ">
          <div className="flex flex-col justify-between items-center gap-10  text-[rgb(254,250,224)] md:flex-row p-8 md:pl-0 pr-3 md:pb-0 overflow-hidden ">
            {/*================== Left side content here======================= */}
            <div className=" w-full md:w-4/12  space-y-3 md:space-y-4">
              <div className={animationCss.headerTexAnimation}>
                <h2 className="text-2xl md:text-4xl lg:text-5xl space-y-5">
                  Make a Enroll
                </h2>

                <p className="text-2xl md:text-4xl lg:text-5xl">
                  <span className="font-bold">Enhance</span> Your
                </p>

                <span className="inline-block  text-2xl md:text-4xl lg:text-5xl ">
                  <span className="font-bold">Career</span> With <br /> Edumate
                </span>
              </div>
              <p
                className={`pb-5  text-sm md:text-md ${animationCss.subTextanimationn}`}
              >
                Our course are led by industry experts and <br /> experienced
                instruction who are passionate <br /> about technology and
                commited to helpoing <br /> you succeed
                <button className=" max-w-60 block  mt-5 px-4 py-3 font-bold text-white bg-[#e67e22] rounded-md ">
                  Explore Course
                </button>
              </p>
            </div>

            <div
              className={` hidden overflow-hidden lg:block md:w-4/12  ${animationCss.bounceImageAnimation}`}
            >
              <Image
                className={`${animationCss.imageAnimation}  `}
                src={banner1}
                alt="banner image a person with laptop"
              ></Image>
            </div>

            {/* r===================BANNER CARD==================== */}

            <div className="z-30  md:w-4/12">
              <div className="md:-translate-x-24  lg:translate-x-0 ">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper w-96"
                >
                  <SwiperSlide>
                    <BannerCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <BannerCard />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          {/* =======================counter========================= */}

          <div
            className={`flex gap-7 justify-center pt-12  md:pt-0 md:flex-row md:gap-20  md:justify-around  overflow-hidden ${animationCss.statAnimation}`}
          >
            <div className=" text-white">
              <h2 className=" text-xl md:text-3xl font-bold pb-2">
                {" "}
                {coursecount} k
              </h2>
              <span className="text-whiteborder-b-slate-700  md:border-b-2 pb-4">
                Student joined
              </span>
            </div>
            <div className=" text-white">
              <h2 className=" text-xl md:text-3xl font-bold pb-2"> 30+</h2>
              <span className="text-white border-b-slate-700  md:border-b-2 pb-4">
                Online Courses
              </span>
            </div>
            <div className=" text-white">
              <h2 className=" text-xl md:text-3xl font-bold pb-2"> 22+</h2>
              <span className="text-white border-b-slate-700  md:border-b-2 pb-4">
                Experienced Mentors
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

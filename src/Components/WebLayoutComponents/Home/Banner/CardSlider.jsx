import BannerCard from "./BannerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { EffectCards, Pagination, Autoplay } from "swiper/modules";
const CardSlider = () => {
  return (
    <>
      <div className="md:flex-1 2xl:flex-none 2xl:w- ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          loop={false}
          modules={[EffectCards, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="relative w-[270px] xs:w-[300px] sm:w-[320px] md:w-[290px] lg:w-[320px] xl:w-[290px] 3xl:w-[320px] mx-auto">
          <SwiperSlide className="rounded-xl w-full ">
            <BannerCard />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl w-full">
            <BannerCard />
          </SwiperSlide>
          <SwiperSlide className="rounded-xl  w-full">
            <BannerCard />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
};

export default CardSlider;

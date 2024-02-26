import Image from "next/image";
import BannerBG from "../../../../Assets/BannerImage/Banner_bg.jpg";
import Path from "./Path";

const RouteBanner = ({ title }) => {
  return (
    <div
      style={{ backgroundImage:`url('${BannerBG}')`}}
      className=" relative  h-[200px] md:h-[300px] 2xl:h-[400px] flex justify-center items-center">
      
      <Path/>
      <h2 className="text-4xl md:text-6xl font-bold text-gray-300">{title}</h2>
      
      <Image src={BannerBG} alt="bg" fill className="relative -z-10 object-cover object-center"/>
      <div className="absolute w-full h-full -z-10 bg-gradient-to-b from-primary/85  to-secondary/70"/>
      {/* animated Wave bg */}
      <svg
        className="absolute bottom-0"
        width="100%"
        height="200"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        overflow="auto"
        shapeRendering="auto"
        fill="#250d87">
        <defs>
          <path
            id="wavepath"
            d="M 0 2000 0 500 Q 150 381 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z"
          />
          <path id="motionpath" d="M -600 0 0 0" />
        </defs>
        <g>
          <use xlinkHref="#wavepath" y="353" fill="#ffffff">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath xlinkHref="#motionpath" />
            </animateMotion>
          </use>
        </g>
      </svg>
    </div>
  );
};

export default RouteBanner;

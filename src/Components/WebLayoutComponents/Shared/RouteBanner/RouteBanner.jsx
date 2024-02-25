import BannerWave from "@/Assets/BannerImage/waveUp2.webp";
import Image from "next/image";
import Path from "./Path";
const RouteBanner = ({title}) => {
  return (
    <div className="relative h-[200px] md:h-[300px] 2xl:h-[400px] bg-gradient-to-b from-primary/75  to-primary/40 flex justify-center items-center">
        <h2 className="text-4xl md:text-6xl font-bold text-primary">Career</h2>
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
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath xlinkHref="#motionpath" />
            </animateMotion>
          </use>
        </g>
      </svg>
    </div>
  );
};

export default RouteBanner;

"use client";
import useOutsideClikToClose from "@/Components/Hooks/useOutsideClikToClose";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const countries = [
  {
    id: 1,
    name: "BD",
    language: "bangla",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icons-bd"
        viewBox="0 0 640 480">
        <path fill="#006a4e" d="M0 0h640v480H0z" />
        <circle cx="280" cy="240" r="160" fill="#f42a41" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "USA",
    language: "english",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icons-us"
        viewBox="0 0 640 480">
        <path fill="#bd3d44" d="M0 0h640v480H0" />
        <path
          stroke="#fff"
          strokeWidth="37"
          d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
        />
        <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
        <marker id="us-a" markerHeight="30" markerWidth="30">
          <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
        </marker>
        <path
          fill="none"
          markerMid="url(#us-a)"
          d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"
        />
      </svg>
    ),
  },
];

const Language = () => {
  const [currentLang, setCurrentLang] = useState("english");
  const [isShow, setIsShow] = useState(false);
  const refWraper = useOutsideClikToClose(setIsShow)
  const handleLanguageSetting = (country) => {
    if (country.name === "BD") {
      setCurrentLang("bangla");
    } else if (country.name === "USA") {
      setCurrentLang("english");
    }
    setIsShow(false)
  };
  return (
    <div className="relative group">
      <div ref={refWraper} onClick={() => setIsShow(!isShow)} className="cursor-pointer">
        {currentLang === "english" ? (
          <div className="flex items-center gap-1">
            <div className="w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="flag-icons-us"
                viewBox="0 0 640 480">
                <path fill="#bd3d44" d="M0 0h640v480H0" />
                <path
                  stroke="#fff"
                  strokeWidth="37"
                  d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
                />
                <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
                <marker id="us-a" markerHeight="30" markerWidth="30">
                  <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
                </marker>
                <path
                  fill="none"
                  markerMid="url(#us-a)"
                  d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"
                />
              </svg>
            </div>
            <p className={`text-sm text-gray-400 font-medium`}>USA</p>
            <FaChevronDown size={15} className={`duration-300 text-gray-400 ${isShow?'rotate-180':''}`} />
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <div className="w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="flag-icons-bd"
                viewBox="0 0 640 480">
                <path fill="#006a4e" d="M0 0h640v480H0z" />
                <circle cx="280" cy="240" r="160" fill="#f42a41" />
              </svg>
            </div>
            <p className="text-sm">BD</p>
            <FaChevronDown size={15} className="w-6" />
          </div>
        )}
      </div>
      <div>
      <div  className={`shadow rounded-b py-2 absolute bg-white z-20 mt-1 duration-300 ${isShow ?'scale-y-100 translate-y-0':'scale-y-0 -translate-y-10'} `}>
          {countries.map((country, idx) => (
            <div
              key={idx}
              onClick={() => handleLanguageSetting(country)}
              className="flex items-center gap-1 p-1 px-3 duration-300 cursor-pointer hover:bg-gray-300">
              <div className="w-6">{country.icon}</div>
              <p className="text-sm">{country.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;

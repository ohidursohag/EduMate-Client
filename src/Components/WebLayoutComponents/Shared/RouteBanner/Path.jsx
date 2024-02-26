"use client";
import { IoHome } from "react-icons/io5";
import { useEffect, useState } from "react";

const Path = () => {
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);
  return (
    <>
      <div className="text-white flex gap-2 items-center absolute top-10 ">
        {" "}
        <span>
          <IoHome size={30} />{" "}
        </span>{" "}
        <span className="text-2xl font-bold">
          {pathName}
        </span>{" "}
      </div>
    </>
  );
};

export default Path;

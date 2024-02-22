"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
const useOutsideClikToClose = (setFalse) => {
  const refWraper = useRef(null);
  const handleClickOutSide = (event) => {
    if (refWraper.current && !refWraper.current.contains(event.target)) {
      setFalse(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutSide, true);
    return () => {
      document.removeEventListener("click", handleClickOutSide, true);
    };
  }, []);

  return refWraper;
};

export default useOutsideClikToClose;

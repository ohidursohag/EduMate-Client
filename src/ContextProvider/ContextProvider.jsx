"use client";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [categoryFilter, setCategoryFilter] = useState(false);

  const toggleCategoryFilter = () => {
    return setCategoryFilter((prevFilter) => !prevFilter);
  };

  const value = {
    toggleCategoryFilter,
    categoryFilter,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

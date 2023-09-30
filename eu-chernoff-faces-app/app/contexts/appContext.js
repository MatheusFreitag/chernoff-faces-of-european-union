"use client";
import React, { createContext, useState, useContext, useMemo } from "react";

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [countryCard, setCountryCard] = useState({
    countryName: "Natherlands",
    countryFlag: "🇳🇱",
    eyebrows: "low",
    body: "low",
    neck: "low",
    mouth: "high",
    nose: "low",
  });

  const updateCountryCard = (dataset) => {
    const newCountry = {
      countryName: dataset.countryName,
      countryFlag: dataset.Flag,
      eyebrows: dataset.CorruptionIndex_Parsed,
      body: dataset.UVIndex_Parsed,
      neck: dataset.ObesityIndex_Parsed,
      mouth: dataset.HappinessIndex_Parsed,
      nose: dataset.DrugDeaths_Parsed,
    };
    setCountryCard(newCountry);
  };

  const toggleModalVisibility = () => {
    setIsModalVisible((prev) => !prev);
  };

  const valueContextProvideObject = useMemo(
    () => ({
      isModalVisible,
      toggleModalVisibility,
      countryCard,
      setCountryCard,
      updateCountryCard,
    }),
    [countryCard, isModalVisible]
  );

  return (
    <AppContext.Provider value={valueContextProvideObject}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

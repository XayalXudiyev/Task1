import { createContext, useState } from "react";

export const favoriteContext = createContext();

const FavoriteSubSector = ({ children }) => {
  const [subSectorOptions, setSubSectorOptions] = useState("");
  const [indicatorOptions, setIndicatorOptions] = useState("");

  const values = {
    subSectorOptions,setSubSectorOptions,

    indicatorOptions, setIndicatorOptions
  };
  return (
    <favoriteContext.Provider value={values}>{children}</favoriteContext.Provider>
  );
};

export default FavoriteSubSector;




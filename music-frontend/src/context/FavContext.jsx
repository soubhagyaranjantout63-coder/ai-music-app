import { createContext, useContext, useState } from "react";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  const addFav = (song) => {
    setFav([...fav, song]);
  };

  return (
    <FavContext.Provider value={{ fav, addFav }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFav = () => useContext(FavContext);
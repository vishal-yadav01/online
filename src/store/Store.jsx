import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart((prev) => [...prev, item]);
  }

  const removeItem = (itemId) => {
    setCart((prev) => prev.filter((itme) => itme.id !== itemId));
  };
  const value = { cart, addItem, removeItem };

  return (
    <AppContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

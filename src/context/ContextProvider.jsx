import react, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  const [isClicked, setIsClicked] = useState(initialState);

  const [screenSize, setScreenSize] = useState(undefined);

  const [currentColor, setCurrentColor] = useState("#03C9D7");

  const [currentMode, setCurrentMode] = useState("Light");

  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (eventMode) => {
    setCurrentMode(eventMode.target.value);
    setThemeSettings(false);

    localStorage.setItem("themeMode", eventMode.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    setThemeSettings(false);

    localStorage.setItem("colorMode", color);
  };
  //* Element send
  const handleClick = (e) => {
    setIsClicked({ ...initialState, [e]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
        initialState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

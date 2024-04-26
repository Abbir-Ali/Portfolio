import React from "react";
import "./Toogle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { DarkModeContext } from "../../DarkModeContext";
import { useContext } from "react";

export const Toogle = () => {
  const theme = useContext(DarkModeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toogle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

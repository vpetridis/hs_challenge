import React from "react";
import "./ButtonCTA.css";

export const ButtonCTA = ({ text }) => {
  return (
    <button className="ButtonCTA">
      <p className="ButtonCTA--text">{text}</p>
    </button>
  );
};

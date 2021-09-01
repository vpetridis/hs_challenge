import React from "react";
import "./InfoBox.css";

export const InfoBox = ({ children, width }) => {
  return (
    <div
      className="info-box"
      style={{ width: width }}
    >
      {children}
    </div>
  );
};

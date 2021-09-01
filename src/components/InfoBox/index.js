import React from "react";
import "./InfoBox.css";

export const InfoBox = ({
  children,
  width,
  height,
}) => {
  return (
    <div
      className="info-box"
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
};

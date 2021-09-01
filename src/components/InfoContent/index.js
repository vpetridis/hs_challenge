import React from "react";
import "./InfoContent.css";

export const InfoContent = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="info-content">
      <h6>{title}</h6>
      <p>{description}</p>
      {children}
    </div>
  );
};

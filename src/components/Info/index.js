import React from "react";
import "./Info.css";

export const Info = ({
  title,
  subtitle,
  description,
  label,
  children,
}) => {
  return (
    <section className="info">
      <h3 className="info--title">{title}</h3>
      <h6 className="info--subtitle">
        {subtitle}
      </h6>
      <p className="info--description my-4">
        {description}
        <p className="my-5">
          <strong>Position</strong>: {label}
        </p>
      </p>
      {children}
    </section>
  );
};

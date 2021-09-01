import React from "react"
import { ReactSVG } from "react-svg"
import settings from "../../assets/icons/setting-lines.svg"

import { ButtonCTA } from "../ButtonCTA"
import "./Header.css"

export const Header = () => {
  const breadcrumbs = ["INTERACTION DESIGN"]

  return (
    <div className="header">
      <div className="d-flex">
        <h2 className="header--title">
          HARBOUR SPACE
        </h2>{" "}
        /{" "}
        {breadcrumbs.map((breadcrumb) => (
          <h6 className="breadcrumb">
            {breadcrumb}
          </h6>
        ))}
      </div>
      <ButtonCTA text="APPLY!" />
      <ReactSVG
        src={settings}
        style={{ width: "40px" }}
      />
    </div>
  )
}

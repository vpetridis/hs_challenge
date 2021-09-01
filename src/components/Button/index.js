import React from "react"
import './Button.css'

export const Button = ({ text, handler }) => {
  return <button className="btn">{text}</button>
}

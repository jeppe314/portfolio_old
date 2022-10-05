import React from "react"
import css from "../assets/tech_stack/css-3.svg"
import html from "../assets/tech_stack/html-5.svg"
import javascript from "../assets/tech_stack/javascript.svg"
import react from "../assets/tech_stack/react.svg"

export default function TechStack() {
  return (
      <div className="tech-stack">
        <img width="75" src={css} alt="Css logo" />
        <img width="75" src={html} alt="Css logo" />
        <img width="75" src={javascript} alt="Css logo" />
        <img width="75" src={react} alt="Css logo" />
      </div>
  )
}

import React, { useEffect } from "react"
import Title from "../components/Title"
import JesperObject from "../components/JesperObject"

export default function About({showTypist}) {
  return (
    <section className="section--about">
      <Title title="2. who am i" />
      <div className="object--jeppe">
        <JesperObject showTypist={showTypist}/>
      </div>
    </section>
  )
}

import React, { useEffect, useState } from "react"
import Typist from "react-typist"
import "./Typist.css"

export default function JesperObject() {
  return (
    <div className="typist--container">
      <Typist avgTypingDelay={50}>
        <p>
          <Typist.Delay ms={2000} />
          <span className="lightblue">const </span>
          devlepoer =
          <Typist.Backspace count={11} delay={500} />
          developer = <span className="pink">&#123;</span>
          <div className="typist--indented">
            name: <span className="string">"Jesper Olof Lindqvist"</span>,
            <br />
            age: <span className="int">28</span>,
            <br />
            nationality: <span className="lightblue">[</span>
            <span className="string">"Finland"</span>, <span className="string">"Åland"</span>
            <span className="lightblue">]</span>,
            <br />
            location:<span className="string">"Stockholm"</span>,
            <br />
            interests: <span className="lightblue">[</span>
            <span className="string">"Programming"</span>, <span className="string">"Sports"</span>,{" "}
            <span className="string">"Reading"</span>, <span className="string">"Photography"</span>
            <span className="lightblue">]</span>
            <br />
          </div>
          <span className="pink">&#125;</span>
        </p>
      </Typist>
    </div>
  )
}

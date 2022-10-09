import React, { useEffect, useState } from "react"
import Typist from "react-typist"
import "./Typist.css"

export default function JesperObject() {
  return (
    <div className="typist--container">
      <p>
        <Typist avgTypingDelay={50}>
          <Typist.Delay ms={2000} />
          <span className="lightblue">const </span>
          devlepoer =
          <Typist.Backspace count={11} delay={500} />
          developer = <span className="pink">&#123;</span>
          <br />
          <span className="indented">name: </span>
          <span className="string">"Jesper Olof Lindqvist"</span>,
          <br />
          <span className="indented">age: </span>
          <span className="int">28</span>,
          <br />
          <span className="indented">nationality: </span>
          <span className="lightblue">[</span>
          <span className="string">"Finland"</span>, <span className="string">"Åland"</span>
          <span className="lightblue">]</span>,
          <br />
          <span className="indented">location: </span>
          <span className="string">"Stockholm"</span>,
          <br />
          <span className="indented">interests: </span>
          <br />
          <span className="lightblue">[</span>
          <span className="string">"Programming"</span>, <span className="string">"Sports"</span>,
          <span className="string">"Reading"</span>, <span className="string">"Photography"</span>
          <span className="lightblue">]</span>
          <br />
          <span className="pink">&#125;</span>
          <br />
        </Typist>
      </p>
    </div>
  )
}

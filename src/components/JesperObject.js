import React, { useEffect, useState } from "react"
import Typist from "react-typist"
import "./Typist.css"

export default function JesperObject({showTypist}) {


  return (
    <div className="typist--container">
      {showTypist && (
        <Typist className="hej">
          <p>
            <span className="lightblue">const </span>
            developer =
            <span className="pink">
              &#123;
              <br />
              &#125;
            </span>
            <Typist.Backspace count={1} delay={500} />
            name: <span className="string">"Jesper Olof Lindqvist"</span>,
            <br />
            age: <span className="int">28</span>,
            <br />
            nationality: <span className="lightblue">[</span>
            <span className="string">🇦🇽</span>, <span className="string">"Åland"</span>
            <span className="lightblue">]</span>,
            <br />
            location:<span className="string">"Stockholm"</span>,
            <br />
            interests: <span className="lightblue">[</span>
            <span className="string">"Programming"</span>, <span className="string">"Sports"</span>,{" "}
            <span className="string">"Reading"</span>, <span className="string">"Photography"</span>
            <span className="lightblue">]</span>
            <br />
            <span className="pink">&#125;</span>
          </p>
        </Typist>
      )}
    </div>
  )
}

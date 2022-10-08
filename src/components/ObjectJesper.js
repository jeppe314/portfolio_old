import React, { useState } from "react"
import { TypeAnimation } from "react-type-animation"

export default function ObjectJesper() {
  const [typingAnimation, setTypingAnimation] = useState(0)
  const next = () => setTypingAnimation((prev) => prev + 1)

  return (
    <div className="type--animation--container">
      {typingAnimation >= 0 && (
        <div className="type--animation--row">
          <TypeAnimation
            sequence={["const"]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "#3E99EC" }}
          />
          <TypeAnimation
            sequence={["", 1000, "delveropr", 1000, "developer = "]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "white" }}
          />
          <TypeAnimation
            sequence={["", 3500, "{}", 1000, "{", 1000, () => next()]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "#A953B7" }}
          />
        </div>
      )}
      {typingAnimation >= 1 && (
        <div className="type--animation--row">
          <TypeAnimation
            sequence={["name: "]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "white" }}
          />
          <TypeAnimation
            sequence={["”Jesper Olof Lindqvist”,", 1000, () => next()]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "#D87832" }}
          />
        </div>
      )}
      {typingAnimation >= 2 && (
        <div className="type--animation--row">
          <TypeAnimation
            sequence={["age: "]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "white" }}
          />
          <TypeAnimation
            sequence={["28,", 1000, () => next()]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "white" }}
          />
        </div>
      )}

      {typingAnimation >= 3 && (
        <div className="type--animation--row">
          <TypeAnimation
            sequence={["nationality: "]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "white" }}
          />
          <TypeAnimation
            sequence={["[],", 500, "["]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "#3E99EC" }}
          />
          <TypeAnimation
            sequence={['"Finland, Åland"']}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "#D87832" }}
          />
          <TypeAnimation
            sequence={["]", 1000, () => next()]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "#3E99EC" }}
          />
        </div>
      )}

      {typingAnimation >= 4 && (
        <div className="type--animation--row">
          <TypeAnimation
            sequence={["loactio", 1500, "location: "]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "white" }}
          />
          <TypeAnimation
            sequence={['"Stockholm,"', 1000, () => next()]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "#D87832" }}
          />
          <TypeAnimation
            sequence={[","]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "white" }}
          />
        </div>
      )}
      {typingAnimation >= 5 && (
        <div className="type--animation--row">
          <TypeAnimation
            sequence={["hobbies: ", 1000, () => next()]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "white" }}
          />
        </div>
      )}
      {typingAnimation >= 6 && (
        <div className="type--animation--row">
          <TypeAnimation
            sequence={["[]", 500, "["]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "white" }}
          />
          <TypeAnimation
            sequence={["“Programming”, “Sports”, “Reading”, “Photography”"]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "#D87832" }}
          />
          <TypeAnimation
            sequence={["]", 1000, () => next()]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "white" }}
          />
        </div>
      )}

      {typingAnimation >= 1 && (
        <div className="type--animation--row">
          <TypeAnimation
            sequence={["}"]}
            wrapper="p"
            cursor={false}
            repeat={0}
            style={{ fontSize: "1em", color: "#A953B7" }}
          />
        </div>
      )}
    </div>
  )
}

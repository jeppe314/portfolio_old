import React from "react"
import "./App.css"
import Loading from "./pages/Loading.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Projects from "./pages/Projects.js"
import Contact from "./pages/Contact.js"
import Header from "./components/Header"
import { useState, useEffect, useRef } from "react"
import { nanoid } from "nanoid"

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3700)
  }, [])

  const [showTypist, setShowTypist] = useState(false)

  const scroll = () => {
    const about = document.querySelector(".section--about")
    const aboutY = about.getBoundingClientRect().y
    if (aboutY === 0) {
      setShowTypist(true)
    } else setShowTypist(false)
  }



  useEffect(() => {
    console.log(showTypist)
  }, [showTypist])

  return loading ? (
    <Loading />
  ) : (
    <div className="App" onScroll={(e) => scroll()}>
      <div className="container">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Home className="home" key={nanoid()} />
        <About className="about" key={nanoid()} showTypist={showTypist}/>
        <Projects className="projects" key={nanoid()} />
        <Contact className="contact" key={nanoid()} />
      </div>
    </div>
  )
}

const jeppe = {
  kalle: "Charles",
  age: 28,
}

export default App

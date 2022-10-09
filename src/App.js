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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3700)
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <div className="App">
      <div className="container">
        <Header />
        <Home className="home" key={nanoid()} />
        <About className="about" key={nanoid()} />
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

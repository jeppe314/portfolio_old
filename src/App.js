import React from "react"
import "./App.css"
import Loading from "./pages/Loading.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Projects from "./pages/Projects.js"
import Contact from "./pages/Contact.js"
import Header from "./components/Header"
import { useState, useEffect } from "react"

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3700)
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <div className="App">
      <div className="container">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Home className="home" />
        <About className="about" />
        <Projects className="projects" />
        <Contact className="contact" />
      </div>
    </div>
  )
}

export default App

import React from "react"
import "./App.css"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Projects from "./pages/Projects.js"
import Header from "./components/Header"
import { useState } from "react"

function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="App">
      <div className="container">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Home className="home" />
        <About className="about" />
        <Projects className="projects" />
      </div>
    </div>
  )
}

export default App

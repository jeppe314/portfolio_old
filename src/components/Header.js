import React, { useState } from "react"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import {Turn as Hamburger} from "hamburger-react"

export default function Header() {
  const [isOpen, setOpen] = useState(false)

  const dropDownEl = (
    <div className={`header--dropdown ${isOpen ? "anim--appear" : "anim--disappear"}`}>
      <a>Home</a>
      <a>About</a>
      <a>Projects</a>
      <a>Contact</a>
      <GitHubIcon className="header--dropdown--icon" fontSize="medium" />
      <LinkedInIcon className="header--dropdown--icon" fontSize="medium" />
    </div>
  )

  const topMenu = (
    <header>
      <div className="header--left">
        <h3>&lt;JL></h3>
      </div>
      <div className="header--right">
        {/* {showMenu ? (
          <CloseIcon fontSize="medium" onClick={() => toggleMenu()} />
        ) : (
          <MenuIcon fontSize="medium" onClick={() => toggleMenu()} />
        )} */}
        <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
      </div>
    </header>
  )

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="header--wrapper">
      {topMenu}
      {isOpen && dropDownEl}
    </div>
  )
}

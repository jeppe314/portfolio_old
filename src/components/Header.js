import React from "react"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export default function Header({ showMenu, setShowMenu }) {
  const dropDownEl = (
    <div className="header--dropdown">
      <a>About</a>
      <a>Projects</a>
      <a>Contact</a>
      <GitHubIcon />
      <LinkedInIcon />
    </div>
  )

  const topMenu = (
    <div className="header--top">
      <div className="header--left">
        <p>&lt;JL></p>
      </div>
      <div className="header--right">{showMenu ? <CloseIcon /> : <MenuIcon />}</div>
    </div>
  )

  return (
    <div className="header--div">
      {topMenu}
      {showMenu && dropDownEl}
    </div>
  )
}

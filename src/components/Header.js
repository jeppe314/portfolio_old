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
      <div className="header--dropdown--icons">
        <GitHubIcon fontSize="medium" />
        <LinkedInIcon fontSize="medium" />
      </div>
    </div>
  )

  const topMenu = (
    <div className="header--top">
      <div className="header--left">
        <h3>&lt;JL></h3>
      </div>
      <div className="header--right">
        {showMenu ? (
          <CloseIcon fontSize="medium" onClick={() => toggleMenu()} />
        ) : (
          <MenuIcon fontSize="medium" onClick={() => toggleMenu()} />
        )}
      </div>
    </div>
  )

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="header--div">
      {topMenu}
      {showMenu && dropDownEl}
    </div>
  )
}

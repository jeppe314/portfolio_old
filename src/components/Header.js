import React from "react"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export default function Header({ showMenu, setShowMenu }) {
  const dropDownEl = (
    <div className="header--dropdown">
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
        {showMenu ? (
          <CloseIcon fontSize="medium" onClick={() => toggleMenu()} />
        ) : (
          <MenuIcon fontSize="medium" onClick={() => toggleMenu()} />
        )}
      </div>
    </header>
  )

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="header--wrapper">
      {topMenu}
      {showMenu && dropDownEl}
    </div>
  )
}

import React from "react"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import MenuIcon from "@mui/icons-material/Menu"
export default function Header() {
  return (
    <div className="header--div">
      <div className="header--top">
        <div className="header--left">
          <p>&lt;JL></p>
        </div>
        <div className="header--right">
          <MenuIcon />
        </div>
      </div>
      <div className="header--dropdown">
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>
        <GitHubIcon />
        <LinkedInIcon />
      </div>
    </div>
  )
}

import React from "react"
import Avatar from "../assets/avatars/Avatar.js"

export default function Home() {
  return (
    <section className="section--home">
      <div className="section--home--title">
        <h1>Hi,</h1>
        <h2>I'm Jesper</h2>
      </div>
      <div className="section--home--avatar--div">
        <Avatar className="home--avatar" />
      </div>
    </section>
  )
}

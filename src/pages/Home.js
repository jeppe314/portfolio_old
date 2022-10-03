import React from "react"
import avatar_standing_happy from "../assets/avatars/avatar_standing_happy.svg"
import Title from "../components/Title.js"

export default function Home() {
  return (
    <section className="section--home">
      <Title title="1. welcome" />
      <div className="section--home--svgs">
        <img
          className="home--avatar"
          x="10"
          src={avatar_standing_happy}
          width="180"
          alt="Happy avatar"
        />
      </div>
    </section>
  )
}

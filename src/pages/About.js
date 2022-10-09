import React, { useEffect } from "react"
import Title from "../components/Title"
import JesperObject from "../components/JesperObject"
import { useInView } from "react-intersection-observer"
import ArrowDown from "../components/ArrowDown"

export default function About({ showTypist }) {

  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 1000,
  })

  useEffect(() => {
    console.log(entry)
  }, [inView])

  return (
    <section className="section--about" ref={ref}>
      <Title title="2. who am i" />
      <div className="object--jeppe">{inView && <JesperObject showTypist={showTypist} />}</div>
      <div className="section--about--text">
        <p>
          I am a fairly level headed bloke who and an aspiring frontend developer currently working
          as a p.e. teacher. I’m a go getter and a trend setter. I’m more or less perfect. Lorem
          ipsum dolor sit amet and some more just keep going.
        </p>
      </div>
      <div className="arrow--down--div">
        <ArrowDown />
      </div>
    </section>
  )
}

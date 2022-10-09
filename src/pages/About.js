import React, { useEffect } from "react"
import Title from "../components/Title"
import JesperObject from "../components/JesperObject"
import { useInView } from "react-intersection-observer"

export default function About({ showTypist }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
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
    </section>
  )
}

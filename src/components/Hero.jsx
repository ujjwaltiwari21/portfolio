"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
  const container = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.title-text', {
      y: 100,
      opacity: 0,
      duration: 1.1,
      stagger: 0.2,
      ease: 'power4.out'
    })
    tl.from('.sub-text', {
      opacity: 0,
      duration: 5
    }, '-=0.5')
  }, { scope: container })

  return (
    <section ref={container} className="min-h-screen bg-black text-white flex flex-col justify-center px-10">
      <div className="overflow-hidden">
        <h1 className="title-text text-7xl font-bold tracking-tighter">
          CREATIVE DEVELOPER
        </h1>
      </div>
      <div className="overflow-hidden mt-2">
        <h1 className="title-text text-7xl font-bold text-zinc-500 tracking-tighter">
          & DESIGNER
        </h1>
      </div>
      <p className="sub-text text-zinc-400 mt-6 max-w-md text-lg">
        Building high-performance web applications with stunning visual experiences.
      </p>
    </section>
  )
}
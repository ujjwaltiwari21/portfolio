"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Face from './Face'

export default function Hero() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.killTweensOf('.title-line, .sub-text, .deco-line, .bg-image-layer')

    gsap.set('.title-line', { y: '100%', opacity: 0 })
    gsap.set('.sub-text', { opacity: 0, y: 20 })
    gsap.set('.deco-line', { scaleX: 0, opacity: 0 })
    gsap.set('.bg-image-layer', { opacity: 0, y: 30 })

    const tl = gsap.timeline({ delay: 0.15 })

    tl.to('.bg-image-layer', { opacity: 0.85, y: 0, duration: 1.5, ease: "power3.out" })
    tl.to('.title-line', { y: '0%', opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }, '-=1.2')
    tl.to('.sub-text', { opacity: 0.6, y: 0, duration: 1, ease: "power3.out" }, '-=0.8')
    tl.to('.deco-line', { scaleX: 1, opacity: 1, duration: 1, ease: "power2.out" }, '-=0.5')

  }, { scope: container })

  return (
    <section ref={container} className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between overflow-hidden px-4 pt-8">

      {/* Main Container Wrapper */}
      <div className="relative w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto">
        
        {/* Line 1: CREATIVE DEVELOPER - Isko z-0 kiya taaki ye sabse peeche rahe */}
        <div className="w-full overflow-hidden py-1 relative z-0">
          <h1 className="title-line font-black tracking-tight leading-none text-[10vw] sm:text-[7vw] md:text-[5rem] uppercase text-zinc-100/80">
            CREATIVE DEVELOPER
          </h1>
        </div>

        {/* Baaki sab kuch ek alag wrapper me jise z-20 diya hai taaki ye hamesha Face ke upar rahe */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full">
          {/* Line 2 */}
          <div className="w-full overflow-hidden py-1">
            <h1 className="title-line font-medium leading-none text-[10vw] sm:text-[7vw] md:text-[5rem] uppercase text-zinc-100">
              & DESIGNER
            </h1>
          </div>

          {/* Subtext */}
          <div className="mt-24 max-w-4xl px-4">
            <p className="sub-text text-zinc-100 text-base md:text-lg font-light tracking-widest">
              Building high-performance web applications with stunning visual experiences.
            </p>
          </div>
        </div>

      </div>

      {/* Hero Section Bottom Image Layer - Isko z-10 kiya taaki ye pehli line ke upar ho par baaki cheezon ke neeche */}
      <div className="bg-image-layer absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none hidden md:block w-full max-w-[440px] aspect-square">
        <Face />
      </div>

    </section>
  )
}
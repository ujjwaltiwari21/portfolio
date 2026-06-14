"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function Pros() {
  const containerRef = useRef()
  const imageWrapperRef = useRef()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const isMobile = window.innerWidth < 768

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1.5,
        anticipatePin: 1,
      }
    })

    tl.to('.split-left', {
      x: isMobile ? '0%' : '-40%',
      y: isMobile ? '-120%' : '0%',
      opacity: isMobile ? 0 : 0.1,
      force3D: true,
      ease: 'power1.inOut'
    }, 'split')

    tl.to('.split-right', {
      x: isMobile ? '0%' : '40%',
      y: isMobile ? '120%' : '0%',
      opacity: isMobile ? 0 : 0.1,
      force3D: true,
      ease: 'power1.inOut'
    }, 'split')

    tl.fromTo(imageWrapperRef.current, 
      { 
        scale: 0.85,
        opacity: 0,
        force3D: true
      },
      { 
        scale: 1,
        opacity: 1,
        force3D: true,
        ease: 'power1.out'
      }, 
      'split'
    )
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className="w-full min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-4 md:px-6"
    >
      <div 
        ref={imageWrapperRef} 
        className="absolute z-10 overflow-hidden rounded-3xl will-change-transform border border-zinc-800/60 shadow-[0_0_100px_rgba(0,0,0,0.95)] bg-black w-[88%] sm:w-[50%] md:w-auto h-[70vh] md:h-[55vh] aspect-[9/16] md:aspect-video mx-auto"
      >
        <video
          src="/hero/ani.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none block w-full h-full object-cover opacity-50 will-change-transform"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
      </div>

      <div 
        className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 text-[14vw] md:text-[8vw] font-black tracking-tighter text-white z-20 select-none pointer-events-none mix-blend-difference"
      >
        <div className="split-left will-change-transform text-center md:text-right w-full md:w-1/2 leading-none">
          CRAFTING
        </div>
        <div className="split-right will-change-transform text-center md:text-left w-full md:w-1/2 text-emerald-400 leading-none">
          REALITIES
        </div>
      </div>
    </section>
  )
}
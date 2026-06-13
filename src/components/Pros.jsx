"use client"

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import GlassSphere from './GlassSphere'

export default function Pros() {
  const containerRef = useRef()
  const textRef = useRef()
  const imageWrapperRef = useRef()
  
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMouse({
        x: (clientX / innerWidth - 0.5) * 10,
        y: (clientY / innerHeight - 0.5) * 10
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1,
      }
    })

    tl.to('.split-left', {
      x: '-35%',
      opacity: 0.1,
      ease: 'power2.inOut'
    }, 'split')

    tl.to('.split-right', {
      x: '35%',
      opacity: 0.1,
      ease: 'power2.inOut'
    }, 'split')

    tl.fromTo(imageWrapperRef.current, 
      { 
        clipPath: 'polygon(40% 0%, 60% 0%, 60% 100%, 40% 100%)',
        scale: 0.6,
        opacity: 0 
      },
      { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        scale: 1,
        opacity: 1,
        ease: 'power2.out'
      }, 
      'split'
    )
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden px-6"
    >
      <div 
        ref={imageWrapperRef} 
        className="absolute w-[85%] md:w-[65%] h-[65vh] z-10 overflow-hidden rounded-2xl will-change-transform bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.8)_0%,#09090b_100%)] border border-zinc-800/40 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
      >
        <GlassSphere mouse={mouse} />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 pointer-events-none z-10" />

        <div className="absolute z-20 flex flex-col justify-between p-8 md:p-12 w-full h-full pointer-events-none">
          <div className="flex justify-between items-start w-full">
            <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ENGINE_3D_ACTIVE
            </span>
            <span className="font-mono text-[10px] text-zinc-500 bg-zinc-900/50 px-3 py-1.5 rounded-full">
              [ 25.1054° N, 84.3749° E ]
            </span>
          </div>

          <div className="max-w-xs bg-zinc-900/20 backdrop-blur-md p-6 rounded-xl border border-zinc-800/20">
            <h4 className="text-[11px] font-mono text-indigo-400 uppercase tracking-widest mb-2 font-bold">
              // EXPERIMENTAL SPACE
            </h4>
            <p className="text-xs text-zinc-400 font-sans tracking-wide leading-relaxed">
              Integrating WebGL pipeline into responsive scrolling engines for high-fidelity user journeys.
            </p>
          </div>
        </div>
      </div>

      <div 
        ref={textRef} 
        className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-center gap-4 text-[8vw] font-black tracking-tighter text-white z-20 select-none pointer-events-none"
      >
        <div className="split-left will-change-transform text-center md:text-right w-full md:w-1/2">
          CRAFTING
        </div>
        <div className="split-right will-change-transform text-center md:text-left w-full md:w-1/2 text-zinc-600">
          REALITIES
        </div>
      </div>

      <div className="absolute bottom-10 left-10 text-zinc-600 font-mono text-xs tracking-wider">
        02 / METRIC ARCHITECTURE
      </div>
    </section>
  )
}
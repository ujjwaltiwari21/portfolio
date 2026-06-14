"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function Poster() {
  const sectionRef = useRef()
  const posterRef = useRef()
  const mediaRef = useRef()
  const verticalTextRef = useRef()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
      }
    })

    tl.fromTo(posterRef.current,
      { scale: 0.9, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )

    tl.fromTo(mediaRef.current,
      { scale: 0.8, rotate: -5 },
      { scale: 1, rotate: 0, duration: 1.5, ease: 'power3.out' },
      '-=0.8'
    )

    tl.fromTo(verticalTextRef.current,
      { y: '30%' },
      { y: '-10%', duration: 2, ease: 'none' },
      '-=1.5'
    )

  }, { scope: sectionRef })

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-screen bg-[#0c0c0e] flex items-center justify-center relative overflow-hidden py-12 px-4 md:px-0"
    >
      {/* Main Poster Container */}
      <div 
        ref={posterRef}
        className="relative w-full max-w-[450px] md:max-w-[480px] h-[85vh] bg-[#f4f4f4] text-black rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] select-none"
      >
        
        {/* Top Header Layer */}
        <div className="w-full flex justify-between items-start z-20">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none font-sans">
              CORE
            </h2>
            <p className="text-[9px] uppercase tracking-widest text-emerald-800 mt-1 font-medium">
              High-Fidelity Codebase Infrastructure
            </p>
          </div>

          <div className="flex flex-col items-end gap-1">
              <div className="flex items-end h-8 gap-[1.5px]">
                {[2, 4, 1, 3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3].map((w, i) => (
                  <div 
                    key={i} 
                    className="bg-black h-full" 
                    style={{ width: `${w}px` }} 
                  />
                ))}
              </div>
              <span className="text-[7px] font-mono tracking-widest text-zinc-400">
                [9081237492]
              </span>
            </div>
          
          <div className="border border-black/20 px-10 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/50 backdrop-blur-sm">
            US
          </div>
        </div>

        {/* Center Media Layer (Short TikTok Format Frame) */}
        <div 
          ref={mediaRef}
          className="absolute inset-0 m-auto w-[70%] h-[45vh] rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.15)] bg-zinc-200 z-10 will-change-transform"
        >
          <video
            src="/hero/2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Side Vertical Text Track */}
        <div className="absolute right-4 md:right-6 top-10 bottom-12 w-12 overflow-hidden z-20 pointer-events-none flex items-center justify-center">
          <div 
            ref={verticalTextRef}
            className="text-[4vh] font-black tracking-tighter uppercase whitespace-nowrap text-black select-none will-change-transform"
            style={{ writingMode: 'vertical-rl' }}
          >
            SYSTEM PIPELINE_INIT  //  ALGORITHMIC_STRUCTURES  //  BUILD_v2.0
          </div>
        </div>

        {/* Bottom Layer */}
        <div className="w-full flex flex-col gap-6 z-20 mt-auto">
          
          {/* Section Number indicator */}
          <div className="text-4xl md:text-4xl font-black tracking-tight leading-none text-black/90">
            𖦹
          </div>

          <div className="w-full h-[1px] bg-black/10" />

          {/* Details & Barcode Flex Container */}
          <div className="w-full flex justify-between items-end gap-4">
            <div className="max-w-[300px] flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 border border-black rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-black rounded-full" />
                </div>
                <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-zinc-800">
                  Details:
                </span>
              </div>
              <p className="text-[9px] text-emerald-800 leading-relaxed font-sans tracking-wider">
               Turning complex logic into sleek, high-performance web experiences. Focused on clean architecture, fluid animations, and digital products that scale
              </p>
            </div>

            {/* Simulated Modern Minimalistic Barcode Grid */}
            
          </div>

        </div>

      </div>
    </section>
  )
}
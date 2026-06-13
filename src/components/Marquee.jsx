"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function MarqueeSection() {
  const containerRef = useRef()
  const triggerRef = useRef()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(containerRef.current, {
      x: '0%', 
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top bottom', 
        end: 'bottom top',   
        scrub: 1,            
      }
    })
  }, { scope: triggerRef })

  const items = ['EXPERIENCE', 'METHODS', 'PROSPECTIVE']

  return (
    <section 
      ref={triggerRef} 
      className="w-full h-[15vh] md:h-[20vh] bg-zinc-950 flex items-center overflow-hidden border-y border-zinc-800/50 select-none"
    >
      <div 
        ref={containerRef}
        className="flex whitespace-nowrap will-change-transform -translate-x-[30%]"
      >
        {[...Array(4)].map((_, mainIndex) => (
          <div key={mainIndex} className="flex items-center">
            {items.map((text, index) => (
              <div key={index} className="flex items-center">
                <span className="text-[6vh] md:text-[10vh] font-black tracking-tighter text-transparent font-sans italic [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] hover:[-webkit-text-stroke:1px_#fff] transition-all duration-500 px-6 md:px-12">
                  {text}
                </span>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-700 mx-2" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
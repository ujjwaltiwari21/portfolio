"use client"

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function Footer() {
  const containerRef = useRef(null)
  const bigTextRef = useRef(null)
  const [time, setTime] = useState('')

  // Live Clock Update Logic
  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()))
    }
    
    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Big Text Par Scroll-linked Scale aur Reveal Effect
    gsap.fromTo(bigTextRef.current,
      { y: '50%', opacity: 0.2, scale: 0.9 },
      {
        y: '0%',
        opacity: 1,
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1.5,
        }
      }
    )

    // Magnetic Button/Links Logic
    const links = document.querySelectorAll('.magnetic-link')
    links.forEach((link) => {
      link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        gsap.to(link, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      link.addEventListener('mouseleave', () => {
        gsap.to(link, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' })
      })
    })

  }, { scope: containerRef })

  return (
    <footer 
      ref={containerRef} 
      className="w-full bg-[#09090b] text-zinc-400 pt-20 pb-10 px-6 md:px-16 border-t border-zinc-900 relative overflow-hidden"
    >
      {/* Background Subtle Glow Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(16,185,129,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh] relative z-10">
        
        {/* Top Split: Studio Meta & Action */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Column 1: Core Vision */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              AVAILABLE FOR FREELANCE
            </span>
            <p className="text-zinc-200 text-lg font-light leading-relaxed max-w-sm">
              Let's build high-performance web applications with striking layouts together
            </p>
          </div>

          {/* Column 2: Quick Links Layer */}
          <div className="flex flex-col gap-3 md:pl-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">// NAVIGATION</span>
            <div className="flex flex-col gap-2 text-sm font-medium">
              {['Home', 'Projects', 'About', 'Experience'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-zinc-400 hover:text-white transition-colors duration-300 w-fit">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Live System Status & Metadata */}
          <div className="flex flex-col gap-3 md:items-end">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">// SYSTEM_TIME</span>
            <div className="flex flex-col md:items-end font-mono text-xs gap-1 text-zinc-300">
              <span className="text-sm font-bold tracking-wider bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800/50">
                {time || '00:00:00 AM'}
              </span>
              <span className="text-zinc-500 mt-1">[ BADARPUR, NEW-DELHI, IN ]</span>
            </div>
          </div>

        </div>

        {/* Center Massive Visual Catalyst Text */}
        <div className="w-full my-12 overflow-hidden py-4 select-none">
          <h1 
            ref={bigTextRef}
            className="text-[12vw] font-black tracking-tighter text-center leading-none text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-800/40 uppercase will-change-transform"
          >
            Let's Talk
          </h1>
        </div>

        {/* Bottom Split: Licensing & Social Pull Interaction */}
        <div className="w-full h-[1px] bg-zinc-900 my-6" />
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono">
          <div className="text-zinc-600 text-center md:text-left">
            © 2025 - {new Date().getFullYear()} UJJWAL. ALL RIGHTS RESERVED.
          </div>
          
          {/* Social Links with Magnetic Grid Hooks */}
          <div className="flex items-center gap-8 text-zinc-400 font-medium">
            {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
              <a 
                key={platform}
                href="/"
                className="magnetic-link inline-block hover:text-emerald-400 transition-colors duration-200 py-2 px-3"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
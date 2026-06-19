"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function BentoGrid() {
  const containerRef = useRef()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.bento-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    })
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen bg-black text-white py-16 md:py-24 px-4 sm:px-6 md:px-16 flex flex-col justify-center"
      aria-label="Professional Services and Technical Stack"
    >
      <div className="mb-12 md:mb-16 max-w-4xl border-t-2 md:border-t-0 md:border-l-2 border-emerald-500 pt-6 md:pt-0 md:pl-6 text-center md:text-left mx-auto md:mx-0">
        <span className="font-mono text-[9px] md:text-[10px] text-emerald-400 tracking-widest uppercase block mb-2 font-bold">
          CAPABILITIES & SPECIALIZATIONS
        </span>
        <h2 className="text-2xl md:text-5xl font-black tracking-tight uppercase text-zinc-100 leading-tight">
          Next-Gen Digital Architecture <br className="hidden md:block" />
          <span className="text-zinc-500 font-light">and Premium Web Solutions</span>
        </h2>
        <p className="text-zinc-400 text-xs md:text-sm mt-3 font-sans max-w-2xl font-light mx-auto md:mx-0">
          Delivering high-performance full-stack engineering integrated with clean layouts to convert your digital presence into an elite brand ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl w-full mx-auto [perspective:1200px]">
        
        {/* Card 1: Full-Stack Engineering */}
        <article className="bento-card md:col-span-2 h-auto md:h-[45vh] bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-center md:items-stretch text-center md:text-left gap-6 md:gap-0 
          transform transition-all duration-500 ease-out 
          [transform-style:preserve-3d] [transform:rotateX(12deg)_rotateY(-6deg)]
          hover:[transform:rotateX(4deg)_rotateY(-1deg)_translateY(-6px)]
          hover:border-zinc-800 hover:shadow-[0_30px_60px_rgba(0,0,0,0.85)] group"
        >
          <header className="flex flex-col items-center md:items-start [transform:translateZ(30px)]">
            <span className="font-mono text-[9px] md:text-[10px] text-emerald-400 font-bold tracking-wider">FULL-STACK DEVELOPMENT</span>
            <h3 className="text-lg md:text-2xl font-medium tracking-tight mt-2 text-zinc-300 uppercase leading-snug">
              HIGH-PERFORMANCE WEB APPLICATIONS
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-xl font-light">
              Engineering ultra-fast, search-engine-optimized interfaces utilizing cutting-edge scalable frameworks. Built for speed, security, and absolute pixel-perfection
            </p>
          </header>
          <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2 pt-4 border-t border-zinc-900 w-full [transform:translateZ(20px)]">
            {['Next.js 15', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'RESTful APIs'].map((tech, i) => (
              <span key={i} className="px-2.5 py-1 md:px-3 md:py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] md:text-[11px] font-mono text-zinc-400">
                {tech}
              </span>
            ))}
          </div>
        </article>

        {/* Card 2: UI & Motion */}
        <article className="bento-card h-auto md:h-[45vh] bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-center md:items-stretch text-center md:text-left gap-6 md:gap-0 
          transform transition-all duration-500 ease-out 
          [transform-style:preserve-3d] [transform:rotateX(12deg)_rotateY(-6deg)]
          hover:[transform:rotateX(4deg)_rotateY(-1deg)_translateY(-6px)]
          hover:border-zinc-800 hover:shadow-[0_30px_60px_rgba(0,0,0,0.85)] group"
        >
          <header className="flex flex-col items-center md:items-start w-full [transform:translateZ(30px)]">
            <span className="font-mono text-[9px] md:text-[10px] text-emerald-400 font-bold tracking-wider">IMMERSIVE EXPERIENCES</span>
            <h3 className="text-lg md:text-2xl font-medium tracking-tight mt-2 text-zinc-300 uppercase">
              CINEMATIC UI & MOTION
            </h3>
          </header>
          <p className="text-xs md:text-sm text-zinc-400 font-sans leading-relaxed font-light md:mb-4 [transform:translateZ(25px)]">
            Breaking standard layout boundaries with advanced fluid mechanics, complex GSAP pipelines, 3D WebGL environments, and premium scrolling systems that capture user retention
          </p>
          <footer className="font-mono text-[9px] md:text-[10px] text-zinc-500 tracking-wider border-t border-zinc-900 pt-4 w-full [transform:translateZ(15px)]">
            [ GSAP / Three.js / Locomotive ]
          </footer>
        </article>

        {/* Card 3: Mobile Engineering */}
        <article className="bento-card h-auto md:h-[40vh] bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-center md:items-stretch text-center md:text-left gap-6 md:gap-0 
          transform transition-all duration-500 ease-out 
          [transform-style:preserve-3d] [transform:rotateX(12deg)_rotateY(-6deg)]
          hover:[transform:rotateX(4deg)_rotateY(-1deg)_translateY(-6px)]
          hover:border-zinc-800 hover:shadow-[0_30px_60px_rgba(0,0,0,0.85)] group"
        >
          <header className="flex flex-col items-center md:items-start [transform:translateZ(30px)]">
            <span className="font-mono text-[9px] md:text-[10px] text-emerald-400 font-bold tracking-wider">CROSS-PLATFORM APPS</span>
            <h3 className="text-lg md:text-2xl font-medium tracking-tight mt-2 text-zinc-300 uppercase">
              CROSS-PLATFORM ENGINEERING
            </h3>
          </header>
          <p className="text-xs text-zinc-400 font-sans font-light [transform:translateZ(20px)]">
            Designing native high-fidelity mobile applications with reactive infrastructure and unified software engines
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-zinc-900 w-full [transform:translateZ(25px)]">
            <span className="font-mono text-[10px] md:text-[11px] text-zinc-400">Flutter / Dart SDK</span>
            <div className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 font-mono text-[9px] bg-zinc-900 font-bold">
              iOS
            </div>
          </div>
        </article>

        {/* Card 4: Architecture */}
        <article className="bento-card md:col-span-2 h-auto md:h-[40vh] bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between items-center md:items-stretch text-center md:text-left gap-6 md:gap-0 
          transform transition-all duration-500 ease-out 
          [transform-style:preserve-3d] [transform:rotateX(12deg)_rotateY(-6deg)]
          hover:[transform:rotateX(4deg)_rotateY(-1deg)_translateY(-6px)]
          hover:border-zinc-800 hover:shadow-[0_30px_60px_rgba(0,0,0,0.85)] group"
        >
          <header className="flex flex-col items-center md:items-start [transform:translateZ(30px)]">
            <span className="font-mono text-[9px] md:text-[10px] text-emerald-400 font-bold tracking-wider">SYSTEM ARCHITECTURE</span>
            <h3 className="text-lg md:text-2xl font-medium tracking-tight mt-2 text-zinc-300 uppercase">
              SCALABLE DIGITAL INFRASTRUCTURE
            </h3>
          </header>
          <p className="text-xs md:text-sm text-zinc-400 font-sans max-w-xl font-light [transform:translateZ(20px)]">
            Deploying enterprise-grade products with rigorous data structure optimizations, secure server pipelines, search engine authority layout standards, and blazing-fast global edge deliveries
          </p>
          <footer className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 w-full pt-4 border-t border-zinc-900 font-mono text-[9px] md:text-[10px] text-zinc-500 [transform:translateZ(15px)]">
            <span>DEPLOYMENT READY</span>
            <span className="text-emerald-400 font-bold uppercase tracking-wider">100% PRODUCTION SPEED</span>
          </footer>
        </article>

      </div>
    </section>
  )
}
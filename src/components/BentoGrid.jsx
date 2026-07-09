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

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left 
    const y = e.clientY - rect.top 
    
    const xc = rect.width / 2
    const yc = rect.height / 2
    
    const rotateX = (yc - y) / 25 
    const rotateY = (x - xc) / 35 

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      z: 6,
      shadowX: rotateY * -0.5,
      shadowY: rotateX * 0.5,
      boxShadow: `${rotateY * -1}px ${rotateX * 1}px 25px rgba(16, 185, 129, 0.05), 0 25px 50px rgba(0, 0, 0, 0.75)`,
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      z: 0,
      boxShadow: '0 0px 0px rgba(16, 185, 129, 0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      duration: 0.6,
      ease: 'power3.out'
    })
  }

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen bg-[#060709] text-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16 flex flex-col justify-center relative overflow-hidden font-mono antialiased"
      aria-label="Professional Services and Technical Stack"
    >
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

      {/* Header Section - Optimized for all devices */}
      <div className="mb-8 sm:mb-10 md:mb-16 max-w-4xl border-t-2 md:border-t-0 md:border-l-2 border-emerald-500 pt-5 md:pt-0 md:pl-6 text-center md:text-left mx-auto md:mx-0 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight uppercase text-zinc-100 leading-[1.1]">
          Next-Gen Digital Architecture <br className="hidden md:block" />
          <span className="text-zinc-500 font-light">and Premium Web Solutions</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-3 font-sans max-w-2xl font-light mx-auto md:mx-0 leading-relaxed">
          Delivering high-performance full-stack engineering integrated with clean layouts to convert your digital presence into an elite brand ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl w-full mx-auto relative z-10 [perspective:1200px]">
        
        {/* Card 1: Full-Stack Engineering */}
        <article 
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          className="bento-card md:col-span-2 h-auto md:h-[45vh] bg-[#0c0d12] border border-zinc-900 rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between items-center md:items-stretch text-center md:text-left gap-5 md:gap-0 [transform-style:preserve-3d] will-change-transform transition-colors duration-300 hover:border-emerald-500/30"
        >
          <header className="flex flex-col items-center md:items-start [transform:translateZ(18px)] transition-transform duration-300">
            <span className="font-mono text-[10px] sm:text-[11px] md:text-[12px] text-emerald-400 font-bold tracking-[0.15em]">FULL-STACK DEVELOPMENT</span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight mt-2 text-zinc-300 uppercase leading-snug">
              HIGH-PERFORMANCE WEB APPLICATIONS
            </h3>
            <p className="text-sm sm:text-base md:text-base text-zinc-400 mt-2 max-w-xl font-light font-sans leading-relaxed">
              Engineering ultra-fast, search-engine-optimized interfaces utilizing cutting-edge scalable frameworks. Built for speed, security, and absolute pixel-perfection.
            </p>
          </header>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4 border-t border-zinc-900 w-full [transform:translateZ(12px)] transition-transform duration-300">
            {['Next.js 15', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'RESTful APIs'].map((tech, i) => (
              <span key={i} className="px-3 py-1.5 sm:px-3.5 sm:py-1.5 md:px-4 md:py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-[11px] sm:text-[12px] md:text-[13px] font-mono text-zinc-400 font-bold">
                {tech}
              </span>
            ))}
          </div>
        </article>

        {/* Card 2: UI & Motion */}
        <article 
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          className="bento-card h-auto md:h-[45vh] bg-[#0c0d12] border border-zinc-900 rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between items-center md:items-stretch text-center md:text-left gap-5 md:gap-0 [transform-style:preserve-3d] will-change-transform transition-colors duration-300 hover:border-emerald-500/30"
        >
          <header className="flex flex-col items-center md:items-start w-full [transform:translateZ(18px)] transition-transform duration-300">
            <span className="font-mono text-[10px] sm:text-[11px] md:text-[12px] text-emerald-400 font-bold tracking-[0.15em]">IMMERSIVE EXPERIENCES</span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight mt-2 text-zinc-300 uppercase leading-snug">
              CINEMATIC UI & MOTION
            </h3>
          </header>
          <p className="text-sm sm:text-base md:text-base text-zinc-400 font-sans leading-relaxed font-light md:mb-4 [transform:translateZ(15px)] transition-transform duration-300">
            Breaking standard layout boundaries with advanced fluid mechanics, complex GSAP pipelines, 3D WebGL environments, and premium scrolling systems that capture user retention.
          </p>
          <footer className="font-mono text-[10px] sm:text-[11px] md:text-[12px] text-zinc-500 tracking-wider border-t border-zinc-900 pt-4 w-full [transform:translateZ(10px)] transition-transform duration-300">
            [ GSAP / Three.js / Locomotive ]
          </footer>
        </article>

        {/* Card 3: Mobile Engineering */}
        <article 
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          className="bento-card h-auto md:h-[40vh] bg-[#0c0d12] border border-zinc-900 rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between items-center md:items-stretch text-center md:text-left gap-5 md:gap-0 [transform-style:preserve-3d] will-change-transform transition-colors duration-300 hover:border-emerald-500/30"
        >
          <header className="flex flex-col items-center md:items-start [transform:translateZ(18px)] transition-transform duration-300">
            <span className="font-mono text-[10px] sm:text-[11px] md:text-[12px] text-emerald-400 font-bold tracking-[0.15em]">CROSS-PLATFORM APPS</span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight mt-2 text-zinc-300 uppercase leading-snug">
              CROSS-PLATFORM ENGINEERING
            </h3>
          </header>
          <p className="text-sm sm:text-base text-zinc-400 font-sans font-light leading-relaxed [transform:translateZ(12px)] transition-transform duration-300">
            Designing native high-fidelity mobile applications with reactive infrastructure and unified software engines.
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-zinc-900 w-full [transform:translateZ(15px)] transition-transform duration-300">
            <span className="font-mono text-[11px] sm:text-[12px] md:text-[13px] text-zinc-400">Flutter / Dart SDK</span>
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 font-mono text-[10px] sm:text-[11px] bg-zinc-950 font-bold">
              iOS
            </div>
          </div>
        </article>

        {/* Card 4: Architecture */}
        <article 
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          className="bento-card md:col-span-2 h-auto md:h-[40vh] bg-[#0c0d12] border border-zinc-900 rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between items-center md:items-stretch text-center md:text-left gap-5 md:gap-0 [transform-style:preserve-3d] will-change-transform transition-colors duration-300 hover:border-emerald-500/30"
        >
          <header className="flex flex-col items-center md:items-start [transform:translateZ(18px)] transition-transform duration-300">
            <span className="font-mono text-[10px] sm:text-[11px] md:text-[12px] text-emerald-400 font-bold tracking-[0.15em]">SYSTEM ARCHITECTURE</span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight mt-2 text-zinc-300 uppercase leading-snug">
              SCALABLE DIGITAL INFRASTRUCTURE
            </h3>
          </header>
          <p className="text-sm sm:text-base md:text-base text-zinc-400 font-sans max-w-xl font-light leading-relaxed [transform:translateZ(12px)] transition-transform duration-300">
            Deploying enterprise-grade products with rigorous data structure optimizations, secure server pipelines, search engine authority layout standards, and blazing-fast global edge deliveries.
          </p>
          <footer className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 w-full pt-4 border-t border-zinc-900 font-mono text-[10px] sm:text-[11px] md:text-[12px] text-zinc-500 [transform:translateZ(10px)] transition-transform duration-300">
            <span>DEPLOYMENT READY</span>
            <span className="text-emerald-400 font-bold uppercase tracking-wider">100% PRODUCTION SPEED</span>
          </footer>
        </article>

      </div>
    </section>
  )
}
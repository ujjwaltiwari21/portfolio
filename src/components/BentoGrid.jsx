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
      className="min-h-screen bg-black text-white py-24 px-6 md:px-16 flex flex-col justify-center"
      aria-label="Professional Services and Technical Stack"
    >
      {/* SECTION HEADER */}
      <div className="mb-16 max-w-4xl border-l-2 border-emerald-500 pl-6">
        <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase block mb-2 font-bold">
          // CAPABILITIES & SPECIALIZATIONS
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-zinc-100">
          Next-Gen Digital Architecture <br />
          <span className="text-zinc-500 font-light">and Premium Web Solutions</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-4 font-sans max-w-2xl font-light">
          Delivering high-performance full-stack engineering integrated with clean layouts to convert your digital presence into an elite brand ecosystem.
        </p>
      </div>

      {/* BENTO GRID MATRIX */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full mx-auto">
        
        {/* Card 1: Full-Stack Engineering */}
        <article className="bento-card md:col-span-2 h-[45vh] bg-zinc-950 border border-zinc-900 rounded-xl p-8 flex flex-col justify-between transition-colors duration-300 hover:border-zinc-800">
          <header>
            <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-wider">// FULL-STACK DEVELOPMENT</span>
            <h3 className="text-xl md:text-2xl font-black tracking-tight mt-2 text-zinc-300">
              HIGH-PERFORMANCE WEB APPLICATIONS
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-xl font-light">
              Engineering ultra-fast, search-engine-optimized interfaces utilizing cutting-edge scalable frameworks. Built for speed, security, and absolute pixel-perfection.
            </p>
          </header>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900">
            {['Next.js 15', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'RESTful APIs'].map((tech, i) => (
              <span key={i} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-[11px] font-mono text-zinc-400">
                {tech}
              </span>
            ))}
          </div>
        </article>

        {/* Card 2: UI & Motion */}
        <article className="bento-card h-[45vh] bg-zinc-950 border border-zinc-900 rounded-xl p-8 flex flex-col justify-between transition-colors duration-300 hover:border-zinc-800">
          <header>
            <span className="font-mono text-[10px] text-indigo-400 font-bold tracking-wider">// IMMERSIVE EXPERIENCES</span>
            <h3 className="text-xl md:text-2xl font-black tracking-tight mt-2 text-zinc-300">
              CINEMATIC UI & MOTION
            </h3>
          </header>
          <p className="text-xs md:text-sm text-zinc-400 font-sans leading-relaxed font-light mb-4">
            Breaking standard layout boundaries with advanced fluid mechanics, complex GSAP pipelines, 3D WebGL environments, and premium scrolling systems that capture user retention.
          </p>
          <footer className="font-mono text-[10px] text-zinc-500 tracking-wider border-t border-zinc-900 pt-4 w-full">
            [ GSAP / Three.js / Locomotive ]
          </footer>
        </article>

        {/* Card 3: Mobile Engineering */}
        <article className="bento-card h-[40vh] bg-zinc-950 border border-zinc-900 rounded-xl p-8 flex flex-col justify-between transition-colors duration-300 hover:border-zinc-800">
          <header>
            <span className="font-mono text-[10px] text-red-400 font-bold tracking-wider">// CROSS-PLATFORM APPS</span>
            <h3 className="text-xl md:text-2xl font-black tracking-tight mt-2 text-zinc-300">
              CROSS-PLATFORM ENGINEERING
            </h3>
          </header>
          <p className="text-xs text-zinc-400 font-sans font-light">
            Designing native high-fidelity mobile applications with reactive infrastructure and unified software engines.
          </p>
          <div className="flex justify-between items-end pt-4 border-t border-zinc-900 w-full">
            <span className="font-mono text-[11px] text-zinc-400">Flutter / Dart SDK</span>
            <div className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 font-mono text-[10px] bg-zinc-900">
              iOS
            </div>
          </div>
        </article>

        {/* Card 4: Architecture */}
        <article className="bento-card md:col-span-2 h-[40vh] bg-zinc-950 border border-zinc-900 rounded-xl p-8 flex flex-col justify-between transition-colors duration-300 hover:border-zinc-800">
          <header>
            <span className="font-mono text-[10px] text-amber-400 font-bold tracking-wider">// SYSTEM ARCHITECTURE</span>
            <h3 className="text-xl md:text-2xl font-black tracking-tight mt-2 text-zinc-300">
              SCALABLE DIGITAL INFRASTRUCTURE
            </h3>
          </header>
          <p className="text-xs md:text-sm text-zinc-400 font-sans max-w-xl font-light">
            Deploying enterprise-grade products with rigorous data structure optimizations, secure server pipelines, search engine authority layout standards, and blazing-fast global edge deliveries.
          </p>
          <footer className="flex justify-between items-center w-full pt-4 border-t border-zinc-900 font-mono text-[10px] text-zinc-500">
            <span>// DEPLOYMENT READY</span>
            <span className="text-amber-400 font-bold">100% PRODUCTION SPEED</span>
          </footer>
        </article>

      </div>
    </section>
  )
}
"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function Projects() {
  const containerRef = useRef()
  const scrollSectionRef = useRef()

  const projects = [
    { id: '01', type: 'AI INTEGRATION', color: 'from-emerald-950/40 to-zinc-950', image: '/hero/zumely.png', link: 'https://zumely.vercel.app' },
    { id: '02', type: 'CYBER ARCHITECTURE', color: 'from-indigo-950/40 to-zinc-950', image: '/hero/enfo.png', link: 'https://enfotech.vercel.app' },
    { id: '03', type: 'MOTION GRAPHICS', color: 'from-purple-950/40 to-zinc-950', image: '/hero/realty.png', link: 'https://topsqillhomes.com' },
    { id: '04', type: 'FRONTEND PIPELINE', color: 'from-blue-950/40 to-zinc-950', image: '/hero/grc.png', link: 'https://topsqill.in' },
  ]

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Yahan humne full track width li hai bina window width minus kiye taaki extra distance mile
    const totalScrollDistance = scrollSectionRef.current.offsetWidth

    gsap.to(scrollSectionRef.current, {
      x: -totalScrollDistance, // Cards ab poora left side me push ho jayenge
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${totalScrollDistance}`, // Scroll height ko badha diya hai taaki last card poora pass ho ske
        invalidateOnRefresh: true,
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="w-full h-screen bg-zinc-950 relative overflow-hidden">
      
      {/* Fixed Background Image Layer */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-100 will-change-transform">
        <img 
          src="/hero/bg.png" 
          alt="Section Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Main Content Info Layer */}
      <div className="absolute top-8 left-6 md:top-12 md:left-10 z-30 flex flex-col gap-1 max-w-[88vw] md:max-w-2xl">
        <span className="font-mono text-[9px] md:text-[10px] text-zinc-500 tracking-widest">SELECTED WORKS & METRIC ARCHITECTURE</span>
        <h2 className="text-lg md:text-xl font-medium tracking-tighter text-white leading-tight md:leading-normal">
          Designing performance-driven solutions where clean development frameworks meet intuitive layout systems
        </h2>
      </div>

      {/* Cards Horizontal Container */}
      <div 
        ref={scrollSectionRef} 
        className="h-full w-max flex items-center gap-6 md:gap-16 px-6 md:px-32 will-change-transform absolute top-4 md:top-0 left-0 z-10"
      >
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[82vw] md:w-[45vw] h-[58vh] md:h-[55vh] mt-16 md:mt-0 flex-shrink-0 relative rounded-3xl overflow-hidden group border border-zinc-800/40 bg-zinc-900/10 backdrop-blur-md block cursor-pointer"
          >
            <img 
              src={project.image} 
              alt={project.type}
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
            />

            <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-1 group-hover:opacity-95 transition-opacity duration-500 z-[1]`} />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

            <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] md:text-[12px] text-[#ff7200] tracking-widest block mb-1 font-bold">
                  {project.type}
                </span>
                <h3 className="text-xl md:text-4xl font-black tracking-tighter text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {project.id}
                </h3>
              </div>
            </div>
            
            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full border border-zinc-700/50 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 bg-white/10 backdrop-blur-sm md:bg-transparent group-hover:bg-white transition-all duration-300">
              <svg className="w-3.5 h-3.5 text-white md:text-black group-hover:text-black transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="absolute bottom-8 right-6 md:bottom-10 md:right-10 text-zinc-600 font-mono text-[10px] tracking-wider z-30 hidden sm:block">
        SCROLL TO SHIFT →
      </div>
    </section>
  )
}
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
    { id: '03', type: 'MOTION GRAPHICS', color: 'from-purple-950/40 to-zinc-950', image: '/hero/realty.png', link: 'https://youtube.com' },
    { id: '04', type: 'FRONTEND PIPELINE', color: 'from-blue-950/40 to-zinc-950', image: '/projects/metric.jpg', link: 'https://vercel.com' },
  ]

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollWidth = scrollSectionRef.current.offsetWidth - window.innerWidth

    gsap.to(scrollSectionRef.current, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${scrollSectionRef.current.offsetWidth}`,
        invalidateOnRefresh: true,
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="w-full h-screen bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-12 left-10 z-30 flex flex-col gap-1">
        <span className="font-mono text-[10px] text-zinc-500 tracking-widest">SELECTED WORKS & METRIC ARCHITECTURE</span>
        <h2 className="text-xl font-medium tracking-tighter text-white">Designing performance-driven solutions where clean development frameworks meet intuitive layout systems.</h2>
      </div>

      <div 
        ref={scrollSectionRef} 
        className="h-full flex items-center gap-16 px-10 md:px-32 will-change-transform absolute top-0 left-0"
        style={{ width: `${projects.length * 80}vw` }}
      >
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[75vw] md:w-[45vw] h-[55vh] flex-shrink-0 relative rounded-2xl overflow-hidden group border border-zinc-800/30 bg-zinc-900/10 backdrop-blur-sm block cursor-pointer"
          >
            {/* Project Image Element - Render with precise background hover interpolation */}
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
            />

            <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-1 group-hover:opacity-95 transition-opacity duration-500 z-[1]`} />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
              {/* <span className="font-mono text-sm text-zinc-600 font-bold group-hover:text-white transition-colors duration-300">
                {project.id}
              </span> */}

              <div>
                <span className="font-mono text-[12px] text-[#ff7200] tracking-widest block mb-1">
                  {project.type}
                </span>
                <h3 className="text-2xl md:text-4xl font-black tracking-tighter text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </div>
            
            <div className="absolute top-8 right-8 z-20 w-10 h-10 rounded-full border border-zinc-700/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
              <svg className="w-4 h-4 text-black transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="absolute bottom-10 right-10 text-zinc-700 font-mono text-xs tracking-wider z-30">
        SCROLL TO SHIFT →
      </div>
    </section>
  )
}
"use client"

export default function Career() {
  const timeline = [
    {
      period: '2025 — PRESENT',
      role: 'FOUNDER & DIGITAL STRATEGIST',
      company: 'CODENOVA',
      details: 'Architecting high-authority technical tutorials and cross-platform coding systems. Engineered localized performance ecosystems helping developers build robust software configurations without resource constraints'
    },
    {
      period: '2024 — 2025',
      role: 'FULL-STACK INFRASTRUCTURE ENGINEER',
      company: 'ZUMELY CAREERS',
      details: 'Spearheaded the development of a production-grade AI career optimization matrix. Implemented secure asynchronous databases, custom data structures, and edge server integration resulting in sub-100ms response cycles'
    },
    {
      period: '2023 — 2024',
      role: 'CROSS-PLATFORM APP ARCHITECT',
      company: 'INFOTECH ECOSYSTEMS',
      details: 'Designed fluid, high-fidelity security operations interfaces. Integrated heavy motion frameworks with production-ready Flutter/Dart engines ensuring zero-latency transitions on mobile devices'
    }
  ]

  return (
    <section className="w-full min-h-screen bg-[#eee] text-zinc-900 py-16 md:py-28 px-4 sm:px-6 md:px-16 flex flex-col justify-center border-t border-zinc-200 relative">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Minimal Light Header */}
        <div className="lg:col-span-4 flex flex-col gap-3 text-center lg:text-left sticky top-24 mx-auto lg:mx-0 max-w-xl px-2">
          <span className="font-mono text-[11px] md:text-[9px] text-emerald-600 tracking-[0.3em] uppercase flex items-center justify-center lg:justify-start gap-2 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            PROFESSIONAL_MILESTONES
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter uppercase leading-tight text-zinc-950">
            ENGINEERING <br className="hidden lg:block" />
            VETTED TRACTS
          </h2>
          <p className="text-sm md:text-sm text-zinc-600 leading-relaxed font-sans mt-1 max-w-md mx-auto lg:mx-0 font-normal">
            A precise timeline tracking structural software architectures, corporate system deliveries, and full-stack integration blueprints optimized for modern computing
          </p>
        </div>

        {/* Right Column - Premium Connected Mobile App Feed (Light Mode) */}
        <div className="lg:col-span-8 flex flex-col w-full relative pl-4 sm:pl-6 lg:pl-12 lg:border-l lg:border-zinc-200 gap-6 md:gap-8">
          
          {/* Vertical Tracking Line Only for Mobile Devices */}
          <div className="absolute left-[13px] sm:left-[19px] lg:hidden top-2 bottom-6 w-[1px] bg-zinc-300" />

          {timeline.map((item, idx) => (
            <div 
              key={idx}
              className="w-full flex flex-col md:flex-row items-stretch text-left gap-4 md:gap-8 group relative pl-7 md:pl-0 border border-zinc-200 md:border-none bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none transition-all duration-300 hover:border-zinc-300"
            >
              {/* Left-aligned Indicator Nodes for App Feed Grid */}
              <div className="absolute left-[-21px] sm:left-[-10px] top-6 lg:hidden flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 group-hover:bg-emerald-500 border border-[#eee] group-hover:scale-125 transition-all duration-300 z-10" />
              </div>

              {/* Timeline Period Stamp */}
              <div className="md:w-1/4 font-mono text-[11px] md:text-xs text-zinc-500 font-bold group-hover:text-emerald-600 transition-colors duration-300 uppercase tracking-wider">
                {item.period}
              </div>

              {/* Core App Module Block */}
              <div className="md:w-3/4 flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base md:text-xl font-medium tracking-tight text-zinc-800 group-hover:text-zinc-950 transition-colors duration-300 uppercase leading-snug">
                    {item.role}
                  </h3>
                  <span className="font-mono text-[11px] md:text-[10px] text-zinc-400 tracking-widest font-bold uppercase">
                    @ {item.company}
                  </span>
                </div>
                
                {/* Descriptive Technical Narrative */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal group-hover:text-zinc-800 transition-colors duration-400 max-w-2xl">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
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
      company: 'Fefine Resume Maker & ATS Checker',
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
    <section className="w-full min-h-screen bg-[#f8f9fa] text-zinc-900 py-12 sm:py-16 md:py-28 px-4 sm:px-6 md:px-16 flex flex-col justify-center border-t border-zinc-200 relative">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
        
        {/* Left Column - Optimized Mobile Header */}
        <div className="lg:col-span-4 flex flex-col gap-2 text-center lg:text-left sticky top-24 mx-auto lg:mx-0 max-w-xl px-2">
          <span className="font-mono text-[11px] sm:text-[12px] md:text-[10px] text-emerald-600 tracking-[0.3em] uppercase flex items-center justify-center lg:justify-start gap-2 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            PROFESSIONAL_MILESTONES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter uppercase leading-tight text-zinc-950">
            ENGINEERING <br className="hidden lg:block" />
            VETTED TRACTS
          </h2>
          <p className="text-[15px] sm:text-[16px] md:text-[15px] text-zinc-600 leading-relaxed font-sans mt-1 max-w-md mx-auto lg:mx-0 font-normal">
            A precise timeline tracking structural software architectures, corporate system deliveries, and full-stack integration blueprints optimized for modern computing
          </p>
        </div>

        {/* Right Column - Premium Mobile-Optimized Timeline */}
        <div className="lg:col-span-8 flex flex-col w-full relative pl-4 sm:pl-6 lg:pl-12 lg:border-l lg:border-zinc-200 gap-4 sm:gap-5 md:gap-8">
          
          {/* Vertical Tracking Line - Mobile Only */}
          <div className="absolute left-[13px] sm:left-[19px] lg:hidden top-2 bottom-6 w-[1.5px] bg-gradient-to-b from-emerald-400/30 via-zinc-300 to-zinc-300" />

          {timeline.map((item, idx) => (
            <div 
              key={idx}
              className="w-full flex flex-col md:flex-row items-stretch text-left gap-3 sm:gap-4 md:gap-8 group relative pl-6 sm:pl-7 md:pl-0 border border-zinc-200/80 md:border-none bg-white/90 md:bg-transparent p-5 sm:p-6 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none transition-all duration-300 hover:border-emerald-200/60 hover:shadow-md active:scale-[0.99]"
            >
              {/* Mobile Indicator Node - Enhanced for touch */}
              <div className="absolute left-[-21px] sm:left-[-18px] top-5 sm:top-6 lg:hidden flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-emerald-500 border-2 border-[#f8f9fa] group-hover:scale-125 transition-all duration-300 z-10 shadow-sm" />
              </div>

              {/* Timeline Period Stamp - Mobile Optimized */}
              <div className="md:w-1/4 font-mono text-[12px] sm:text-[13px] md:text-[12px] text-zinc-500 font-bold group-hover:text-emerald-600 transition-colors duration-300 uppercase tracking-wider bg-zinc-100/50 md:bg-transparent px-2 py-1 md:px-0 md:py-0 rounded-md inline-block self-start">
                {item.period}
              </div>

              {/* Core Content Block - Optimized for Mobile Reading */}
              <div className="md:w-3/4 flex flex-col gap-1.5 sm:gap-2">
                <div className="flex flex-col gap-0.5 sm:gap-1">
                  <h3 className="text-[16px] sm:text-[18px] md:text-xl font-semibold tracking-tight text-zinc-800 group-hover:text-zinc-950 transition-colors duration-300 uppercase leading-snug">
                    {item.role}
                  </h3>
                  <span className="font-mono text-[12px] sm:text-[13px] md:text-[11px] text-emerald-600/70 tracking-widest font-bold uppercase">
                    @ {item.company}
                  </span>
                </div>
                
                {/* Descriptive Content - Perfect Mobile Readability */}
                <p className="text-[15px] sm:text-[16px] md:text-[15px] text-zinc-600 leading-relaxed font-normal group-hover:text-zinc-800 transition-colors duration-400 max-w-2xl">
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
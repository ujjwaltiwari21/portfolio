"use client"

export default function Capabilities() {
  const coreMatrix = [
    {
      id: "01",
      layer: "CORE ARCHITECTURE",
      title: "Distributed Full-Stack Systems",
      metric: "99.9% Uptime SLA",
      graphicType: "terminal",
      description: "Engineering production infrastructures utilizing robust server-side paradigms, modular API abstractions, and relational database normalization frameworks.",
      stack: ["Next.js", "Node.js", "GraphQL", "PostgreSQL"]
    },
    {
      id: "02",
      layer: "INTERFACE LAYER",
      title: "Native Mobile Architectures",
      metric: "60 FPS Native Render",
      graphicType: "blueprint",
      description: "Compiling multi-platform mobile engines via strict state structures, low-level thread control, and precise hardware bridge synchronization.",
      stack: ["Flutter", "Dart Runtime", "BLoC Core", "Native Channels"]
    },
    {
      id: "03",
      layer: "OPTIMIZATION LAYER",
      title: "Algorithmic Performance & SEO",
      metric: "100% Core Web Vitals",
      graphicType: "matrix",
      description: "Fine-tuning memory allocation, advanced caching systems, dynamic edge compilation, and algorithmic data structuring for high-load platforms.",
      stack: ["Vercel Edge", "SEO Dominance", "DSA Java Core", "Web Cache"]
    }
  ]

  const workflow = [
    {
      phase: "PHASE_01",
      title: "Architecture Design",
      desc: "Mapping database schemas, state structures, and infrastructure diagrams before writing code."
    },
    {
      phase: "PHASE_02",
      title: "Production Build",
      desc: "Writing modular, component-driven clean code with strict type controls and zero external bloatware."
    },
    {
      phase: "PHASE_03",
      title: "Continuous Delivery",
      desc: "Automated deployment sequences, strict performance checks, edge verification, and search indexing rules."
    }
  ]

  return (
    <section className="w-full min-h-screen bg-[#060607] text-zinc-400 py-16 md:py-32 px-4 sm:px-8 lg:px-16 flex flex-col justify-center items-center font-sans antialiased selection:bg-zinc-800 selection:text-white relative overflow-hidden">
      
      {/* Background Graphic Grid Line System */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111113_1px,transparent_1px),linear-gradient(to_bottom,#111113_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header System */}
      <div className="w-full max-w-5xl mb-16 md:mb-28 text-center lg:text-left select-none relative z-10">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded mb-4 mx-auto lg:mx-0 font-mono text-[10px]">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-zinc-300 tracking-widest uppercase">SYSTEM CAPABILITIES V2.06</span>
        </div>
        <h2 className="text-3xl sm:text-6xl font-bold text-white tracking-tight leading-tight sm:leading-none uppercase">
          Engineered <br className="hidden sm:inline" />
          <span className="text-zinc-600 font-medium">Domain Verticals.</span>
        </h2>
        <p className="text-sm sm:text-lg text-zinc-500 mt-4 max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono">
          [METRIC REGISTRY] A highly architectural compilation of system execution stacks, data pipelining, and optimization methodologies.
        </p>
      </div>

      {/* Main Structural Linear Timeline (No Cards) */}
      <div className="w-full max-w-5xl flex flex-col relative z-10 border-l border-zinc-900 ml-2 sm:ml-6 lg:ml-0 lg:border-l-0">
        {coreMatrix.map((item) => (
          <div 
            key={item.id}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 relative pb-16 md:pb-24 last:pb-0 pl-6 lg:pl-0"
          >
            {/* Left Axis Marker Node for Desktop */}
            <div className="absolute left-[-5px] lg:left-1/2 lg:-translate-x-1/2 top-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-[#060607]" />

            {/* Column 1: Technical Info Panel */}
            <div className="lg:col-span-5 flex flex-col gap-3 items-center text-center lg:items-end lg:text-right">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-600">
                <span className="text-emerald-500/80 font-medium">{item.layer}</span>
                <span>//</span>
                <span>{item.id}</span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-medium text-white uppercase tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-sm sm:text-lg text-zinc-500 leading-relaxed max-w-md font-sans">
                {item.description}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-end gap-1.5 pt-1 max-w-sm">
                {item.stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[9px] font-mono font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/60 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Empty Center Spacer for Timeline Line Layout Alignment */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* Column 2: The High-Contrast Graphic Engine */}
            <div className="lg:col-span-5 w-full aspect-[16/9] bg-[#09090a]/40 border border-zinc-900 p-4 flex flex-col justify-between overflow-hidden relative select-none">
              
              {item.graphicType === "terminal" && (
                <div className="w-full h-full flex flex-col font-mono text-[14px] text-left justify-center gap-1.5">
                  <div className="text-zinc-600">$ init deployment --stack=nextjs_core</div>
                  <div className="text-emerald-500">✔ Optimized dependency graphs compiled.</div>
                  <div className="text-zinc-500">└─ GET /api/v1/system-matrix - 200 OK</div>
                  <div className="w-full bg-zinc-900 h-1 rounded overflow-hidden mt-2">
                    <div className="bg-emerald-500 h-full w-[88%]" />
                  </div>
                </div>
              )}

              {item.graphicType === "blueprint" && (
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="w-32 h-full border border-dashed border-zinc-800 rounded-xl p-1.5 flex flex-col justify-between items-center bg-[#0d0d0f]/20">
                    <div className="w-8 h-0.5 bg-zinc-800 rounded-full" />
                    <div className="w-full flex flex-col gap-1">
                      <div className="w-full bg-zinc-900 text-center text-[7px] py-1 text-zinc-500">FLUTTER ENGINE</div>
                      <div className="w-full bg-emerald-950/20 text-center text-[7px] py-0.5 text-emerald-400 border border-emerald-900/30">BLOC</div>
                    </div>
                    <div className="w-2 h-2 border border-zinc-800 rounded-full" />
                  </div>
                </div>
              )}

              {item.graphicType === "matrix" && (
                <div className="w-full h-full grid grid-cols-4 gap-1.5 items-center justify-center font-mono">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-7 border rounded flex flex-col items-center justify-center ${
                        i === 5 || i === 6 
                          ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-400' 
                          : 'bg-zinc-900/20 border-zinc-900 text-zinc-600'
                      }`}
                    >
                      <span className="text-[7px]">N_{i}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="w-full border-t border-zinc-900 pt-2 flex items-center justify-between font-mono text-[9px] text-zinc-600">
                <span>TELEMETRY: STABLE</span>
                <span className="text-zinc-400 uppercase tracking-wider">{item.metric}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Operational Lifecycle Block (Continuous Pipeline) */}
      <div className="w-full max-w-5xl mt-24 bg-[#09090a]/80 border border-zinc-900 rounded-2xl p-6 sm:p-10 relative z-10 shadow-xl">
        <div className="text-center sm:text-left mb-12 select-none">
          <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">OPERATIONAL PIPELINE</span>
          <h3 className="text-2xl font-medium text-white uppercase tracking-tight mt-1">Development Lifecycle</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {workflow.map((step) => (
            <div key={step.phase} className="flex flex-col items-center sm:items-start gap-2">
              <span className="font-mono text-[10px] text-emerald-500 bg-emerald-950/20 border border-emerald-900/40 px-2 py-0.5 rounded">{step.phase}</span>
              <h4 className="text-lg font-medium text-zinc-200">{step.title}</h4>
              <p className="text-sm text-zinc-500 font-sans leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-full max-w-5xl mt-16 md:mt-24 border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left select-none relative z-10">
        <p className="text-lg text-zinc-600 max-w-sm font-mono">
          All modules built adhere strictly to extreme scalability conditions, secure operational containment, and verified clean code practices
        </p>
        <button 
          onClick={() => window.location.href = '/contact'}
          className="bg-zinc-200 text-zinc-950 font-bold text-xs tracking-widest uppercase px-6 py-4 rounded-xl hover:bg-white transition-colors duration-150 shadow-md font-mono"
        >
          Initialize Pipeline &gt;
        </button>
      </div>

    </section>
  )
}
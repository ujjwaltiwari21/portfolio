"use client"

import { useState } from 'react'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')

  const skillsData = {
    frontend: {
      title: "Client-Side Engineering",
      category: "User Experience & Web Performance",
      description: "Developing hyper-scalable web applications focused on performance metrics, absolute layout precision, and fluid responsive behaviors across the modern web ecosystem.",
      stats: [
        { label: "Core Web Vitals Score", value: "99/100" },
        { label: "Production Bundler Speed", value: "0.15s" },
        { label: "Server-Side Render Latency", value: "18ms" }
      ],
      stack: ["Next.js 15 (App Router)", "React 19 Core Engine", "TypeScript Architecture", "Tailwind CSS Layouts"],
      architecture: "Isomorphic Sharding & Dynamic Hydration Nodes",
      accentGlow: "from-indigo-600/20 to-purple-600/20"
    },
    backend: {
      title: "Distributed Architecture",
      category: "Cloud Infrastructures & APIs",
      description: "Building production-grade microservices and secure server environments capable of handling immense traffic throughput and maintaining absolute operational persistence.",
      stats: [
        { label: "Concurrent Handshake Handling", value: "65k/sec" },
        { label: "Database Optimization Index", value: "97.4%" },
        { label: "Secure Authentication Verification", value: "0.04ms" }
      ],
      stack: ["Node.js Runtime", "Express Server Framework", "PostgreSQL Connection Pooling", "Redis High-Speed Caching"],
      architecture: "Event-Driven Message Brokers & Sharded Storage Pools",
      accentGlow: "from-rose-600/20 to-orange-600/20"
    },
    mobile: {
      title: "Cross-Platform Ecosystems",
      category: "Native System Engineering",
      description: "Compiling enterprise-grade native mobile applications with optimized hardware communication channels and unified codebases to deliver seamless experiences on iOS and Android.",
      stats: [
        { label: "Raster Pass Engine Delay", value: "0.01ms" },
        { label: "Graphic Pipeline Frequency", value: "120Hz" },
        { label: "Native Bridge Communication", value: "0.00ms" }
      ],
      stack: ["Flutter Framework SDK", "Dart Functional Programming", "Android NDK Integration", "iOS Impeller Engine Layouts"],
      architecture: "BLoC State Propagation & Unidirectional Flow Data",
      accentGlow: "from-cyan-600/20 to-blue-600/20"
    }
  }

  return (
    <section className="w-full min-h-screen bg-[#0a0b10] text-zinc-300 py-24 px-4 sm:px-6 md:px-16 flex flex-col justify-center items-center relative overflow-hidden font-sans antialiased selection:bg-white selection:text-black">
      
      {/* Premium Minimal Fluid Lighting Blurs instead of rigid matrix lines */}
      <div className="absolute right-[-10%] top-[-20%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen animate-pulse duration-[6s]" />
      <div className="absolute left-[-10%] bottom-[-20%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />

      {/* Clean Premium Header Layout */}
      <div className="mb-20 text-center z-10 max-w-2xl px-4">
        <span className="text-[11px] text-zinc-500 font-medium tracking-[0.25em] uppercase block mb-3">
          TECHNICAL EXPERTISE MATRIX
        </span>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
          Architectural Capabilities <br />
          <span className="text-zinc-500 font-medium">and Specialized Engineering</span>
        </h2>
        <div className="w-12 h-[1px] bg-zinc-800 mx-auto mt-6" />
      </div>

      {/* 3D Structural View Container */}
      <div className="w-full max-w-5xl [perspective:1500px] flex justify-center items-center px-1">
        
        {/* Subtle, High-End Clean Glass Interface Card */}
        <div className="w-full bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 rounded-3xl border border-zinc-800/60 relative p-6 sm:p-8 md:p-12 
          transform transition-all duration-700 ease-out 
          [transform-style:preserve-3d] [transform:rotateX(8deg)_rotateY(-3deg)]
          hover:[transform:rotateX(2deg)_rotateY(-1deg)_translateY(-6px)]
          shadow-[0_40px_100px_rgba(0,0,0,0.8)]
          hover:shadow-[0_50px_120px_rgba(0,0,0,0.95)]"
        >
          {/* Dynamic soft light projection based on active tab selection */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skillsData[activeTab].accentGlow} opacity-30 blur-2xl transition-all duration-700 pointer-events-none`} />

          {/* Luxury Minimal Switcher Component */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-zinc-800/80 pb-8 [transform:translateZ(40px)] relative z-10">
            <div>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">ENGINE MODULE</span>
              <h3 className="text-xl font-normal text-white tracking-tight mt-0.5">
                {skillsData[activeTab].title}
              </h3>
            </div>

            {/* Premium Selector Pills */}
            <div className="flex bg-zinc-900/90 border border-zinc-800/60 p-1.5 rounded-2xl shadow-inner w-full sm:w-auto overflow-x-auto backdrop-blur-md">
              {Object.keys(skillsData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 sm:flex-none text-center text-xs px-6 py-3 rounded-xl font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-zinc-800 text-white shadow-lg border border-zinc-700/50 scale-[1.02]'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Engine
                </button>
              ))}
            </div>
          </div>

          {/* Deep Informational Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start [transform:translateZ(50px)] relative z-10">
            
            {/* Primary Content Left Panel */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase">
                  {skillsData[activeTab].category}
                </span>
                <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                  {skillsData[activeTab].description}
                </p>
              </div>

              {/* Stack Architecture Pipeline String */}
              <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-2xl p-4 flex flex-col gap-1 backdrop-blur-xs">
                <span className="text-[9px] text-zinc-600 font-bold tracking-widest uppercase">CORE INFRASTRUCTURE DESIGN</span>
                <span className="text-zinc-300 text-xs font-medium tracking-wide">
                  {skillsData[activeTab].architecture}
                </span>
              </div>

              {/* Minimal Clean Stack Chips Array */}
              <div className="flex flex-wrap gap-2 pt-2">
                {skillsData[activeTab].stack.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-zinc-900/80 border border-zinc-800/80 rounded-xl text-xs text-zinc-400 font-medium tracking-wide hover:border-zinc-700 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Numerical Performance Records Right Panel */}
            <div className="lg:col-span-5 flex flex-col gap-4 bg-zinc-950/40 border border-zinc-900/60 rounded-2xl p-6 shadow-inner backdrop-blur-md">
              <span className="text-[9px] text-zinc-600 font-bold tracking-widest uppercase mb-2">SYSTEM AUDIT METRICS</span>
              
              {skillsData[activeTab].stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-center py-3 border-b border-zinc-900 last:border-0"
                >
                  <span className="text-xs text-zinc-500 font-medium tracking-wide">{stat.label}</span>
                  <span className="text-sm font-semibold text-white tracking-tight">{stat.value}</span>
                </div>
              ))}

              <div className="pt-4 mt-2 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-600 font-medium tracking-wide">
                <span>VERIFIED RUNTIME STABILITY</span>
                <span className="text-zinc-500 font-semibold">100% PRODUCTION READY</span>
              </div>
            </div>

          </div>

          {/* Minimal Luxury Card Footnote */}
          <div className="mt-12 pt-6 border-t border-zinc-900 flex justify-between items-center text-[9px] text-zinc-600 tracking-widest font-medium [transform:translateZ(10px)]">
            <span>SPECIFICATION LAYER V1.0</span>
            <span>SECURE SYSTEM ENV</span>
          </div>

        </div>
      </div>

    </section>
  )
}
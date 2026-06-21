"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Experience() {
    const infrastructureClusters = [
        {
            id: "CLUSTER-01",
            name: "AI & Automation Cluster",
            role: "Lead Systems Architect",
            company: "Zumely Ecosystem",
            period: "2025 - PRESENT",
            summary: "High-throughput engines focused on recruitment pipelines, automated parsing, and LLM orchestration layers.",
            projects: [
                { name: "Zumely ATS Engine", status: "ACTIVE", load: "94%", desc: "Core applicant tracking system with automatic resume verification algorithms.", stack: ["Next.js", "Node.js", "AI Layer"] },
                { name: "Resume Semantic Parser", status: "STABLE", load: "42%", desc: "Extracts structural tokens from PDF data streams directly into application state.", stack: ["Python Core", "JSON Pipeline"] },
                { name: "Matchmaking Vector Sync", status: "STABLE", load: "18%", desc: "Matches recruiter requirements against massive indexing arrays dynamically.", stack: ["Vector DB", "Edge Engine"] }
            ]
        },
        {
            id: "CLUSTER-02",
            name: "Security & Layer Isolation",
            role: "Senior Framework Engineer",
            company: "Infotech Portfolio",
            period: "2025",
            summary: "Distributed directory architectures, proxy layers, and perimeter controls built for enterprise deployment isolation.",
            projects: [
                { name: "Infotech Security Suite", status: "DEPLOYED", load: "100%", desc: "Next.js directory control architecture built for private security firms.", stack: ["Next.js Engine", "Vercel Edge"] },
                { name: "Zero-Trust Route Guard", status: "ISOLATED", load: "0%", desc: "Middleware layers inspecting route payloads before resolving application trees.", stack: ["Serverless Layers", "Edge Security"] }
            ]
        },
        {
            id: "CLUSTER-03",
            name: "Distributed Learning & Runtimes",
            role: "Content Director & Dev",
            company: "CodeNova Platform",
            period: "2024 - 2025",
            summary: "Cross-platform instructional setups and compiler simulations built to scale engineering concepts to mobile runtimes.",
            projects: [
                { name: "CodeNova System Core", status: "STREAMING", load: "88%", desc: "Digital delivery infrastructure powering tech education channels.", stack: ["SEO Pipelines", "Analytics"] },
                { name: "Mobile Python Environment", status: "STABLE", load: "61%", desc: "Scripts and packages enabling deep algorithmic compilation on Android hardware without PC layers.", stack: ["Python Core", "Terminal Simulation"] },
                { name: "Flutter Cross-Native App", status: "COMPILED", load: "30%", desc: "Localized application built using Dart SDK configurations for custom UI processing.", stack: ["Dart", "Flutter SDK"] }
            ]
        }
    ]

    const [activeCluster, setActiveCluster] = useState(infrastructureClusters[0])

    return (
        <section className="w-full min-h-screen bg-[#050506] text-zinc-400 font-sans antialiased selection:bg-emerald-950 selection:text-white relative flex flex-col lg:flex-row pt-16 lg:pt-20">

            {/* Background Matrix Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1411_1px,transparent_1px),linear-gradient(to_bottom,#0f1411_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

            {/* LEFT COLUMN: Sidebar Header Map */}
            <div className="w-full lg:w-5/12 lg:h-[calc(100vh-5rem)] lg:sticky lg:top-20 border-b lg:border-b-0 lg:border-r border-zinc-900 p-6 pt-2 sm:p-10 lg:p-16 flex flex-col justify-between bg-[#060807]/60 relative z-20">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#070a08] border border-emerald-900/40 rounded font-mono text-[9px] text-emerald-400 tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(16,185,129,0.05)] mx-auto lg:mx-0">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-medium text-white uppercase leading-none mb-3">
                        Production<br />
                        <span className="text-emerald-500 font-black">Clusters</span>
                    </h2>
                    <p className="text-sm text-zinc-500 font-mono max-w-sm mb-6 lg:mb-10 leading-relaxed mx-auto lg:mx-0">
                        Explore my full-stack web development projects and technical expertise. Select a cluster below to filter applications by architecture, runtime logs, and modern tech stacks.
                    </p>

                    {/* Map Selector Container (Mobile horizontal tabs) */}
                    <div className="w-full flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 no-scrollbar snap-x px-2 sm:px-0">
                        {infrastructureClusters.map((cluster) => {
                            const isSelected = activeCluster.id === cluster.id
                            return (
                                <button
                                    key={cluster.id}
                                    onClick={() => setActiveCluster(cluster)}
                                    className={`min-w-[250px] sm:min-w-[300px] lg:min-w-0 w-full text-left p-4 rounded-xl border font-mono transition-all duration-300 relative overflow-hidden flex flex-col gap-1 snap-center shrink-0 ${isSelected
                                        ? "bg-[#080b09] border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.03)]"
                                        : "bg-[#07070a]/20 border-zinc-900 hover:border-zinc-800/80"
                                        }`}
                                >
                                    {isSelected && (
                                        <motion.div
                                            layoutId="clusterHighlight"
                                            className="absolute left-0 top-0 bottom-0 w-[2px] bg-emerald-500"
                                        />
                                    )}
                                    <div className="flex items-center justify-between text-[9px] text-zinc-600">
                                        <span>{cluster.id}</span>
                                        <span className={isSelected ? "text-emerald-400" : "text-zinc-500"}>
                                            {isSelected ? "[CONNECTED]" : "[STANDBY]"}
                                        </span>
                                    </div>
                                    <span className={`text-sm font-medium tracking-tight uppercase transition-colors ${isSelected ? "text-white" : "text-zinc-400"}`}>
                                        {cluster.name}
                                    </span>
                                    <span className="text-[10px] text-zinc-500 truncate">{cluster.company}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="hidden lg:flex flex-col gap-1 font-mono text-[9px] text-zinc-600 border-t border-zinc-900 pt-4 mt-6">
                    <div>// REAL-TIME RUNTIME NODE INSPECTOR</div>
                    <div>TOTAL LOAD CLUSTERS ACTIVE: {infrastructureClusters.length}</div>
                </div>
            </div>

            {/* RIGHT COLUMN: Streamed Infrastructure Logs */}
            <div className="w-full lg:w-7/12 p-6 sm:p-10 lg:p-16 flex flex-col justify-between min-h-[450px] lg:min-h-screen relative z-10 pt-4 lg:pt-4">

                <div className="w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCluster.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="w-full flex flex-col gap-6"
                        >
                            {/* Active Specifications Dynamic Manifest Card */}
                            <div className="border border-zinc-900 bg-[#070a08]/10 rounded-xl p-5 font-mono flex flex-col gap-2 text-center sm:text-left items-center sm:items-start">
                                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px]">
                                    <span className="text-emerald-400 font-bold tracking-widest">// ACTIVE CORE SPECIFICATION</span>
                                    <span className="text-zinc-600 font-medium">{activeCluster.period}</span>
                                </div>
                                <h3 className="text-xl font-medium text-white uppercase tracking-tight mt-1.5 sm:mt-1">
                                    {activeCluster.role}
                                </h3>
                                <div className="text-sm text-zinc-500 leading-relaxed font-sans">
                                    {activeCluster.company} • {activeCluster.summary}
                                </div>
                            </div>

                            {/* Header Title for App Streams */}
                            <div className="text-[10px] font-mono text-zinc-600 tracking-wider uppercase border-b border-zinc-900 pb-1.5 mt-2 text-center sm:text-left select-none">
                                DEPLOYED MICRO-SERVICES & APPLICATIONS ({activeCluster.projects.length})
                            </div>

                            {/* Dynamic Project Stream Cards */}
                            <div className="flex flex-col gap-4">
                                {activeCluster.projects.map((project, idx) => (
                                    <div
                                        key={idx}
                                        className="w-full border border-zinc-900 bg-[#060608] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-emerald-500/20 transition-all duration-300 text-center sm:text-left"
                                    >
                                        <div className="flex flex-col gap-1 max-w-xl items-center sm:items-start">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                                                <h4 className="text-sm font-bold font-mono text-zinc-200 group-hover:text-emerald-400 transition-colors">
                                                    {project.name}
                                                </h4>
                                            </div>
                                            <p className="text-sm text-zinc-500 leading-relaxed font-sans max-w-md sm:max-w-none">
                                                {project.desc}
                                            </p>

                                            <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 pt-1.5">
                                                {project.stack.map((tech) => (
                                                    <span key={tech} className="text-[8px] font-mono text-zinc-500 bg-[#070908] border border-zinc-900 px-1.5 py-0.5 rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Server Load System Analytics */}
                                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-zinc-900/60 pt-3 sm:pt-0 font-mono text-[10px] shrink-0 gap-1.5 sm:gap-1 w-full sm:w-auto">
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-zinc-600 text-[9px]">STATUS:</span>
                                                <span className="text-emerald-400 font-bold bg-emerald-950/30 border border-emerald-900/30 px-1.5 rounded text-[9px]">{project.status}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-zinc-600 text-[9px]">SYS_LOAD:</span>
                                                <span className="text-zinc-400 text-[9px]">{project.load}</span>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dynamic System Action Footer */}
                <div className="w-full flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 border-t border-zinc-900 pt-8 mt-12 select-none text-center sm:text-left">
                    <div className="font-mono text-sm sm:text-base text-zinc-500 leading-normal">
                        <div className="text-zinc-400 font-medium tracking-wider">DEVELOPER PORTFOLIO UPDATE</div>
                        <div>All full-stack production projects and Next.js web applications are compiled successfully.</div>
                    </div>
                    <button
                        onClick={() => window.location.href = '/contact'}
                        className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-sm px-5 py-3.5 rounded-xl transition-all duration-150 font-sans shadow-[0_0_20px_rgba(16,185,129,0.15)] shrink-0 w-full sm:w-auto text-center"
                    >
                        Request Full Manifest &gt;
                    </button>
                </div>

            </div>

        </section>
    )
}
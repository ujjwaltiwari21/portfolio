// "use client"

// import { useState } from 'react'

// export default function Contact() {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [statusMessage, setStatusMessage] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setStatusMessage('INITIALIZING_TRANSMISSION...')
    
//     // Simulate API connection hook
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setStatusMessage('SECURE_PACKET_DELIVERED_SUCCESSFULLY.')
//       setFormState({ name: '', email: '', subject: '', message: '' })
//     }, 2000)
//   }

//   return (
//     <section 
//       id="contact" 
//       className="w-full min-h-screen bg-[#060709] text-zinc-400 py-24 px-4 sm:px-6 md:px-16 flex flex-col justify-center items-center relative overflow-hidden font-mono antialiased selection:bg-emerald-500 selection:text-black"
//     >
//       {/* Background Matrix & Soft Aura Ambient Flares */}
//       <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] [background-size:40px_40px]" />
//       <div className="absolute left-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-emerald-950/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

//       {/* Structured Minimal Header */}
//       <div className="mb-16 text-center z-10 max-w-2xl select-none">
//         <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-900/30 rounded-full mb-3">
//           <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_6px_#10b981]" />
//           <span className="text-[9px] text-emerald-400 tracking-[0.3em] uppercase font-bold">COMMUNICATION_GATEWAY_v2.0</span>
//         </div>
//         <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
//           INITIATE CONNECTION
//         </h2>
//         <p className="text-[11px] text-zinc-500 mt-2 font-sans max-w-md mx-auto leading-relaxed">
//           Deploy an encrypted packet string into the data core. Let&apos;s architect enterprise web solutions or system integrations.
//         </p>
//       </div>

//       {/* Main Structural Twin Panel Grid Grid Layout */}
//       <div className="w-full max-w-5xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
//         {/* Left Interactive Frame Panel: Network Stats & Metadata */}
//         <div className="lg:col-span-5 bg-[#0c0d12] border border-zinc-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
//           <div className="flex flex-col gap-6">
//             <div className="flex flex-col gap-1">
//               <span className="text-[8px] text-zinc-600 font-bold tracking-widest uppercase">// GEOLOCATION_METRICS</span>
//               <h3 className="text-sm font-black text-white uppercase tracking-wider">BHOJPUR // BIHAR // INDIA</h3>
//               <p className="text-[10px] text-zinc-500 font-mono tracking-wide mt-0.5">CORE INTERACTIVE SECTOR // GMT +5:30</p>
//             </div>

//             <div className="w-full h-[1px] bg-zinc-900" />

//             {/* Direct Digital Touchpoint Channels */}
//             <div className="flex flex-col gap-4">
//               <span className="text-[8px] text-zinc-600 font-bold tracking-widest uppercase">// DIRECT_CHANNELS</span>
              
//               <div className="flex items-center gap-4 bg-[#060709] border border-zinc-900 p-3 rounded-xl">
//                 <div className="text-emerald-500">
//                   <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-[8px] text-zinc-600 font-bold tracking-wider uppercase">SECURE_MAIL</span>
//                   <a href="mailto:ujjwaltiwari015@gmail.com" className="text-xs font-bold text-zinc-300 hover:text-emerald-400 transition-colors duration-200">
//                     ujjwaltiwari015@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 bg-[#060709] border border-zinc-900 p-3 rounded-xl">
//                 <div className="text-emerald-500">
//                   <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//                   </svg>
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-[8px] text-zinc-600 font-bold tracking-wider uppercase">DIGITAL_NETWORK</span>
//                   <div className="flex items-center gap-3 mt-0.5 text-xs font-bold text-zinc-400">
//                     <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
//                     <span className="text-zinc-800">/</span>
//                     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Lower Panel Infrastructure Footnote */}
//           <div className="mt-8 pt-4 border-t border-zinc-900 flex flex-col gap-1 text-[9px] text-zinc-600 font-bold uppercase tracking-wider">
//             <div className="flex items-center gap-1.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_#10b981]" />
//               ENCRYPTION_MODE: AES_256
//             </div>
//             <span>PORT_LISTENER: ACTIVE // TYPE_DIRECT</span>
//           </div>
//         </div>

//         {/* Right Panel Card Frame: High-End Industrial Form Component */}
//         <div className="lg:col-span-7 bg-[#0c0d12] border border-zinc-900 rounded-2xl p-6 sm:p-8 relative shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
//           <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//             <span className="text-[8px] text-zinc-600 font-bold tracking-widest uppercase block mb-1">// TRANSMISSION_BUFFER_FIELDS</span>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {/* Field: Name */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">OPERATOR_NAME</label>
//                 <input 
//                   type="text"
//                   required
//                   value={formState.name}
//                   onChange={(e) => setFormState({...formState, name: e.target.value})}
//                   placeholder="e.g., John Doe"
//                   className="w-full bg-[#060709] border border-zinc-900 rounded-xl px-4 py-3 text-xs text-zinc-200 font-mono tracking-wide placeholder-zinc-700 outline-none focus:border-emerald-500/40 transition-colors duration-300"
//                 />
//               </div>

//               {/* Field: Email */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">RETURN_EMAIL_ADDRESS</label>
//                 <input 
//                   type="email"
//                   required
//                   value={formState.email}
//                   onChange={(e) => setFormState({...formState, email: e.target.value})}
//                   placeholder="e.g., mail@domain.com"
//                   className="w-full bg-[#060709] border border-zinc-900 rounded-xl px-4 py-3 text-xs text-zinc-200 font-mono tracking-wide placeholder-zinc-700 outline-none focus:border-emerald-500/40 transition-colors duration-300"
//                 />
//               </div>
//             </div>

//             {/* Field: Subject */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">ROUTING_SUBJECT</label>
//               <input 
//                 type="text"
//                 required
//                 value={formState.subject}
//                 onChange={(e) => setFormState({...formState, subject: e.target.value})}
//                 placeholder="e.g., Architecture Development Consultation"
//                 className="w-full bg-[#060709] border border-zinc-900 rounded-xl px-4 py-3 text-xs text-zinc-200 font-mono tracking-wide placeholder-zinc-700 outline-none focus:border-emerald-500/40 transition-colors duration-300"
//               />
//             </div>

//             {/* Field: Message Box */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">DATA_STRING_CONTENT</label>
//               <textarea 
//                 rows={5}
//                 required
//                 value={formState.message}
//                 onChange={(e) => setFormState({...formState, message: e.target.value})}
//                 placeholder="Enter core message payload metrics..."
//                 className="w-full bg-[#060709] border border-zinc-900 rounded-xl px-4 py-3 text-xs text-zinc-200 font-mono tracking-wide placeholder-zinc-700 outline-none focus:border-emerald-500/40 transition-colors duration-300 resize-none leading-relaxed"
//               />
//             </div>

//             {/* Form Activity Feedback Status Log */}
//             {statusMessage && (
//               <div className="text-[9px] font-bold text-emerald-400 tracking-wider bg-emerald-950/20 border border-emerald-900/30 p-2.5 rounded-xl uppercase">
//                 &gt;&gt; {statusMessage}
//               </div>
//             )}

//             {/* Elite Submission Inject Button Component */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 text-xs font-bold text-white tracking-[0.2em] uppercase transition-all duration-300 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 disabled:opacity-50 disabled:pointer-events-none group flex items-center justify-center gap-2"
//             >
//               <span>{isSubmitting ? 'PROCESSING_UPLOAD' : 'EXECUTE_TRANSMISSION'}</span>
//               {!isSubmitting && (
//                 <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               )}
//             </button>
//           </form>
//         </div>

//       </div>
//     </section>
//   )
// }
"use client"

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const SERVICE_ID = "service_5afdgf9";
  const PUBLIC_KEY = "XjfCWj0AFgeimG0fH";
  const TEMPLATE_ID = "template_jn0725k";

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('Sending your message...')

    const templateParams = {
      name: formState.name,
      email: formState.email,
      subject: formState.subject,
      message: formState.message,
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setIsSubmitting(false)
      setStatusMessage('Message sent successfully. I will get back to you shortly.')
      setFormState({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email error:', error)
      setIsSubmitting(false)
      setStatusMessage('Failed to send message. Please try again or email directly.')
    }
  }

  return (
    <section className="w-full min-h-screen bg-[#030303] text-zinc-400 py-28 px-4 sm:px-6 md:px-16 flex flex-col justify-center items-center relative overflow-hidden font-sans antialiased selection:bg-white selection:text-black">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#141517,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-zinc-900/10 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="mb-20 text-center z-10 max-w-2xl select-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800/60 rounded-full mb-5">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-[10px] text-zinc-300 tracking-[0.2em] uppercase font-medium">Available for projects</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight font-serif italic">
          Let's create something
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 mt-4 max-w-md mx-auto leading-relaxed font-light">
          Have an idea, a project, or just want to say hello? Drop a line and let's start a conversation.
        </p>
      </div>

      <div className="w-full max-w-5xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <div className="lg:col-span-5 bg-[#09090b]/40 backdrop-blur-xl border border-zinc-900 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-zinc-600 font-medium tracking-widest uppercase">Location</span>
              <h3 className="text-lg font-medium text-zinc-200 tracking-wide">New-Delhi, Delhi, India</h3>
              <p className="text-xs text-zinc-500 font-light mt-0.5">Working globally from my digital studio.</p>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 to-transparent" />

            <div className="flex flex-col gap-5">
              <span className="text-[10px] text-zinc-600 font-medium tracking-widest uppercase">Contact Details</span>
              
              <div className="flex items-center gap-4 bg-[#0c0c0e]/60 border border-zinc-900/80 p-4 rounded-2xl transition-all duration-300 hover:border-zinc-800 hover:bg-[#121214]/40">
                <div className="text-zinc-400 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/50">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-500 font-medium tracking-wider uppercase">Email Me</span>
                  <a href="mailto:ujjwalsarvsolution@gmail.com" className="text-xs font-medium text-zinc-300 hover:text-white transition-colors duration-200 mt-0.5">
                    ujjwalsarvsolution@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#0c0c0e]/60 border border-zinc-900/80 p-4 rounded-2xl transition-all duration-300 hover:border-zinc-800 hover:bg-[#121214]/40">
                <div className="text-zinc-400 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/50">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 00-5.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-500 font-medium tracking-wider uppercase">Socials</span>
                  <div className="flex items-center gap-3 mt-0.5 text-xs font-medium text-zinc-400">
                    <a href="https://www.github.com/ujjwaltiwari21" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <span className="text-zinc-800">/</span>
                    <a href="https://www.linkedin.com/in/ujjwaltiwari21/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-5 border-t border-zinc-900/80 flex items-center gap-2 text-[10px] text-zinc-500 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Response rate: usually within 24 hours
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#09090b]/40 backdrop-blur-xl border border-zinc-900 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Your Name</label>
                <input 
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full bg-[#0c0c0e]/80 border border-zinc-900 rounded-2xl px-5 py-4 text-xs text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-700 focus:bg-[#111113]/90 transition-all duration-300 shadow-inner"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Email Address</label>
                <input 
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="john@example.com"
                  className="w-full bg-[#0c0c0e]/80 border border-zinc-900 rounded-2xl px-5 py-4 text-xs text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-700 focus:bg-[#111113]/90 transition-all duration-300 shadow-inner"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Subject</label>
              <input 
                type="text"
                required
                value={formState.subject}
                onChange={(e) => setFormState({...formState, subject: e.target.value})}
                placeholder="Project deployment, consultation, etc."
                className="w-full bg-[#0c0c0e]/80 border border-zinc-900 rounded-2xl px-5 py-4 text-xs text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-700 focus:bg-[#111113]/90 transition-all duration-300 shadow-inner"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Message</label>
              <textarea 
                rows={5}
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                placeholder="Tell me about your project details..."
                className="w-full bg-[#0c0c0e]/80 border border-zinc-900 rounded-2xl px-5 py-4 text-xs text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-700 focus:bg-[#111113]/90 transition-all duration-300 shadow-inner resize-none leading-relaxed"
              />
            </div>

            {statusMessage && (
              <div className="text-[11px] font-medium text-zinc-300 bg-zinc-900/40 border border-zinc-800 px-4 py-3.5 rounded-2xl transition-all duration-300">
                {statusMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-zinc-100 rounded-2xl py-4 text-xs font-semibold text-zinc-950 tracking-wider uppercase transition-all duration-300 hover:bg-white disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center gap-2 group shadow-lg"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
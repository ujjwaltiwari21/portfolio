"use client"

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const SERVICE_ID = "service_5afdgf9"
  const PUBLIC_KEY = "XjfCWj0AFgeimG0fH"
  const TEMPLATE_ID = "template_jn0725k"

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

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
      setIsSubmitting(false)
      setStatusMessage('Failed to send message. Please try again or email directly.')
    }
  }

  return (
    <section className="w-full min-h-screen bg-[#060607] text-zinc-400 py-12 md:py-24 px-4 sm:px-8 lg:px-16 flex flex-col justify-center items-center font-sans antialiased selection:bg-zinc-800 selection:text-white">
      
      <div className="w-full max-w-5xl mb-10 md:mb-16 text-center lg:text-left select-none">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded mb-4 mx-auto lg:mx-0">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          <span className="text-[11px] text-zinc-300 tracking-wider uppercase font-medium">Status: Active</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
          Get in touch
        </h2>
        <p className="text-sm sm:text-lg text-zinc-500 mt-2 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          We normally respond within one business day. Fill out the form or connect directly via official links
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
        
        <div className="lg:col-span-5 bg-[#0b0b0c] border border-zinc-800/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm items-center lg:items-stretch text-center lg:text-left">
          <div className="flex flex-col gap-8 w-full items-center lg:items-stretch">
            <div className="flex flex-col gap-1.5 items-center lg:items-start">
              <span className="text-[11px] text-zinc-500 font-medium tracking-wider uppercase">Headquarters</span>
              <h3 className="text-base font-medium text-zinc-200">Delhi, India</h3>
              <p className="text-xs text-zinc-500 max-w-xs">Operating globally to deliver enterprise web platforms and architectures.</p>
            </div>

            <div className="w-full h-[1px] bg-zinc-900" />

            <div className="flex flex-col gap-4 w-full items-center lg:items-stretch">
              <span className="text-[11px] text-zinc-500 font-medium tracking-wider uppercase">Communications</span>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 bg-[#121214] border border-zinc-800/60 p-4 rounded-lg w-full">
                <div className="text-zinc-400 bg-zinc-900 p-2 rounded border border-zinc-800 flex items-center justify-center">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase">Email Support</span>
                  <a href="mailto:ujjwalsarvsolution@gmail.com" className="text-xs font-medium text-zinc-300 hover:text-white mt-0.5 break-all">
                    ujjwalsarvsolution@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 bg-[#121214] border border-zinc-800/60 p-4 rounded-lg w-full">
                <div className="text-zinc-400 bg-zinc-900 p-2 rounded border border-zinc-800 flex items-center justify-center">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 00-5.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase">profiles</span>
                  <div className="flex items-center gap-2 mt-0.5 text-xs font-medium text-zinc-400">
                    <a href="https://www.github.com/ujjwaltiwari21" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
                    <span className="text-zinc-800">|</span>
                    <a href="https://www.linkedin.com/in/ujjwaltiwari21/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-center lg:justify-start gap-2 text-[11px] text-zinc-500 w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Standard Response Protocol Active
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#0b0b0c] border border-zinc-800/80 rounded-xl p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5 text-center lg:text-left">
                <label className="text-[11px] text-zinc-400 font-medium uppercase tracking-wide">Full Name</label>
                <input 
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#121214] border border-zinc-800 rounded px-4 py-3 text-xs text-zinc-200 placeholder-zinc-600 outline-none focus:border-zinc-600 text-center lg:text-left"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-center lg:text-left">
                <label className="text-[11px] text-zinc-400 font-medium uppercase tracking-wide">Email Address</label>
                <input 
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="name@domain.com"
                  className="w-full bg-[#121214] border border-zinc-800 rounded px-4 py-3 text-xs text-zinc-200 placeholder-zinc-600 outline-none focus:border-zinc-600 text-center lg:text-left"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-center lg:text-left">
              <label className="text-[11px] text-zinc-400 font-medium uppercase tracking-wide">Subject</label>
              <input 
                type="text"
                required
                value={formState.subject}
                onChange={(e) => setFormState({...formState, subject: e.target.value})}
                placeholder="Brief description of inquiry"
                className="w-full bg-[#121214] border border-zinc-800 rounded px-4 py-3 text-xs text-zinc-200 placeholder-zinc-600 outline-none focus:border-zinc-600 text-center lg:text-left"
              />
            </div>

            <div className="flex flex-col gap-1.5 text-center lg:text-left">
              <label className="text-[11px] text-zinc-400 font-medium uppercase tracking-wide">Message Body</label>
              <textarea 
                rows={5}
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                placeholder="Provide comprehensive details here..."
                className="w-full bg-[#121214] border border-zinc-800 rounded px-4 py-3 text-xs text-zinc-200 placeholder-zinc-600 outline-none focus:border-zinc-600 resize-none leading-relaxed text-center lg:text-left"
              />
            </div>

            {statusMessage && (
              <div className="text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 px-4 py-3 rounded text-center">
                {statusMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-zinc-200 rounded py-3.5 text-xs font-semibold text-zinc-950 tracking-wider uppercase hover:bg-white disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{isSubmitting ? 'Processing Request...' : 'Submit Inquiry'}</span>
              {!isSubmitting && (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5">
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
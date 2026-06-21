"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { 
      id: 'home', 
      label: 'HOME', 
      hash: '/',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      id: 'capabilities', 
      label: 'CAPABILITIES', 
      hash: '/capabilities',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.338.169a6 6 0 00-3.86.517L5.575 15.62a2 2 0 00-1.022.547l2.387-.477a6 6 0 003.86-.517l.338-.169a6 6 0 003.86-.517l2.387.477z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 21h4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 11V5a2 2 0 00-2-2v0a2 2 0 00-2 2v6" />
        </svg>
      )
    },
    { 
      id: 'experience', 
      label: 'EXPERIENCE', 
      hash: '/experience',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      id: 'contact', 
      label: 'CONTACT', 
      hash: '/contact',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <>
      {/* Desktop View */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-center p-4 md:p-6 pointer-events-none font-mono antialiased">
        <nav 
          className={`pointer-events-auto flex items-center justify-between rounded-2xl border transition-all duration-500 ease-out ${
            scrolled 
              ? 'w-full max-w-xl bg-[#0c0d12]/70 backdrop-blur-xl border-zinc-800/80 px-6 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.7)]' 
              : 'w-full max-w-5xl bg-transparent border-transparent px-4 py-4'
          }`}
        >
          {/* Elite Branding Minimal Text */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-700 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-white text-xs font-black tracking-widest uppercase">
              build<span className="text-zinc-600 font-light">++</span>
            </span>
          </div>

          {/* Center Main Action Tabs Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.hash}
                onClick={() => setActiveItem(item.id)}
                className={`text-[9px] sm:text-[10px] font-bold tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl transition-all duration-300 relative uppercase ${
                  activeItem === item.id 
                    ? 'text-emerald-400 bg-zinc-900/60 border border-zinc-800/40 shadow-inner scale-[1.02]' 
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Status Indicator Panel Right Frame */}
          <div className={`hidden sm:flex items-center gap-2 transition-all duration-500 ${
            scrolled ? 'opacity-0 translate-x-4 pointer-events-none w-0 overflow-hidden' : 'opacity-100'
          }`}>
            <div className="text-[10px] text-zinc-500 font-bold border border-zinc-900 rounded-lg px-2.5 py-1 bg-zinc-950/40 tracking-wider">
              U_THINKING
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile View - Native Application Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 font-sans bg-[#0c0d12]/90 backdrop-blur-xl border-t border-zinc-900 px-2 pb-5 pt-3 flex items-center justify-around shadow-[0_-10px_35px_rgba(0,0,0,0.8)] rounded-t-2xl">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.hash}
            onClick={() => setActiveItem(item.id)}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-1 relative"
          >
            {/* Native Micro Top Strip active indicator */}
            {activeItem === item.id && (
              <div className="absolute -top-[13px] w-6 h-[2px] bg-emerald-400 rounded-full shadow-[0_0_8px_#10b981]" />
            )}

            {/* Icon Render */}
            <div className={`transition-all duration-200 ${
              activeItem === item.id ? 'text-emerald-400 scale-105' : 'text-zinc-500'
            }`}>
              {item.icon}
            </div>

            {/* App Style Label Text */}
            <span className={`text-[9px] font-mono font-bold tracking-wider uppercase transition-colors duration-200 ${
              activeItem === item.id ? 'text-emerald-400' : 'text-zinc-600'
            }`}>
              {item.id === 'capabilities' ? 'SKILLS' : item.label}
            </span>
          </Link>
        ))}
      </nav>
    </>
  )
}
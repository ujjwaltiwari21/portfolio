"use client"

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function Footer() {
  const containerRef = useRef(null)
  const bigTextRef = useRef(null)
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()))
    }
    
    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const isMobile = window.matchMedia('(max-width: 768px)').matches

    if (isMobile) {
      gsap.fromTo(bigTextRef.current,
        { opacity: 0.4, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          }
        }
      )
    } else {
      gsap.fromTo(bigTextRef.current,
        { y: '50%', opacity: 0.2, scale: 0.9 },
        {
          y: '0%',
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1.5,
          }
        }
      )
    }

    const links = document.querySelectorAll('.magnetic-link')
    links.forEach((link) => {
      link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        gsap.to(link, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      link.addEventListener('mouseleave', () => {
        gsap.to(link, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' })
      })
    })

  }, { scope: containerRef })

  const navigationMenus = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#https://www.github.com/ujjwaltiwari21' },
    { name: 'Skills', href: '/capabilities' },
    { name: 'Experience', href: '/experience' }
  ]

  const socialLinks = [
    { 
      platform: 'GitHub', 
      href: 'https://www.github.com/ujjwaltiwari21/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
      )
    },
    { 
      platform: 'LinkedIn', 
      href: 'https://linkedin.com/in/ujjwaltiwari21',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    { 
      platform: 'Facebook', 
      href: 'https://facebook.com/CodeNova',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      )
    },
    { 
      platform: 'Instagram', 
      href: 'https://www.instagram.com/ujjwaltiwari9428',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    }
  ]

  return (
    <footer 
      ref={containerRef} 
      className="w-full bg-[#09090b] text-zinc-400 pt-20 pb-24 md:pb-10 px-6 md:px-16 border-t border-zinc-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(16,185,129,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh] relative z-10">
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-700 animate-ping" />
              AVAILABLE FOR FREELANCE & FULL-TIME
            </span>
            <p className="text-zinc-200 text-lg font-light leading-relaxed max-w-sm">
              Partner with an expert Full-Stack Web Developer to engineer production-ready Next.js applications and scalable UI solutions.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:pl-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">// NAVIGATION MAP</span>
            <div className="flex flex-col gap-2 text-sm font-medium">
              {navigationMenus.map((item) => (
                <a key={item.name} href={item.href} className="text-zinc-400 hover:text-white transition-colors duration-300 w-fit">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">// LIVE SERVER ENVIRONMENT</span>
            <div className="flex flex-col md:items-end font-mono text-xs gap-1 text-zinc-300">
              <span className="text-sm font-bold tracking-wider bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800/50">
                {time || '00:00:00 AM'}
              </span>
              <span className="text-zinc-500 mt-1">[ BADARPUR, NEW-DELHI, IN ]</span>
            </div>
          </div>

        </div>

        <div className="w-full my-12 overflow-hidden py-4 select-none">
          <h1 
            ref={bigTextRef}
            className="text-[12vw] font-black tracking-tighter text-center leading-none text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-800/40 uppercase will-change-transform transform-gpu [transform:translateZ(0)]"
          >
            Let's Talk
          </h1>
        </div>

        <div className="w-full h-[1px] bg-zinc-900 my-6" />
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono">
          <div className="text-zinc-600 text-center md:text-left">
            © 2025 - {new Date().getFullYear()} UJJWAL. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-4 text-zinc-400 font-medium">
            {socialLinks.map((social) => (
              <a 
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.platform}
                className="magnetic-link inline-flex items-center justify-center hover:text-emerald-400 transition-colors duration-200 p-2.5 bg-zinc-900/50 hover:bg-zinc-900 rounded-full border border-zinc-800/60"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
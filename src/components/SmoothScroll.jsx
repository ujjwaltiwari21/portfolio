"use client"

import { useEffect } from 'react'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let locomotiveScroll;
    
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1,
        eco: true
      })
    })()

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [])

  return (
    <main data-scroll-container>
      {children}
    </main>
  )
}
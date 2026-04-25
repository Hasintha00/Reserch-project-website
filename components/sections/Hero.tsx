'use client'
import { useRef } from 'react'
import { useHeroParallax } from '@/hooks/useGSAP'
import { gsap } from '@/lib/gsap'
import { useEffect } from 'react'

export default function Hero() {
  const bgRef = useRef<HTMLImageElement>(null)
  
  useHeroParallax(bgRef as any)

  useEffect(() => {
    gsap.fromTo('.hero-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgRef}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-[130%] object-cover object-top -top-[15%] relative opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="hero-anim inline-block bg-lime text-black font-black text-xs tracking-widest uppercase px-4 py-1.5 rounded-sm mb-6">
            AI-POWERED FITNESS COACH
          </div>
          
          <h1 className="hero-anim text-white text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
            FITFORGE AI — <br/> FULLY AUTOMATED
          </h1>
          
          <p className="hero-anim text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Turn your smartphone into a fully automated personal trainer using AI, computer vision, and predictive analytics. Personalized workouts, hands-free tracking, and real-time form correction.
          </p>
          
          <div className="hero-anim flex flex-wrap items-center gap-4">
            <a href="#scope" className="bg-accent text-white font-black text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:scale-105 transition-transform flex items-center gap-2">
              EXPLORE PROJECT SCOPE
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#about" className="bg-transparent border-2 border-white text-white font-black text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:scale-105 transition-transform flex items-center gap-2">
              MEET THE TEAM
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

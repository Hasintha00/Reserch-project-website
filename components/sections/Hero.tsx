'use client'
import { useRef } from 'react'
import { useHeroParallax } from '@/hooks/useGSAP'
import { gsap } from '@/lib/gsap'
import { useEffect } from 'react'
import Image from 'next/image'
import TextPressure from '@/components/ui/TextPressure'

export default function Hero() {
  const bgRef = useRef<HTMLImageElement>(null)
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        <Image 
          ref={bgRef}
          src="/images/Main Hero & Location Backgrounds.png" 
          alt="Gym background" 
          fill
          className="object-cover object-top -top-[15%] relative opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="hero-anim inline-block bg-lime text-black font-black text-xs tracking-widest uppercase px-4 py-1.5 rounded-sm mb-6">
            AI-POWERED FITNESS COACH
          </div>
          
          <div className="hero-anim mb-8 flex flex-col w-full max-w-4xl">
            <div className="relative h-[48px] md:h-[72px] lg:h-[96px] w-full">
              <TextPressure
                text="FITFORGE AI —"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>
            <div className="relative h-[48px] md:h-[72px] lg:h-[96px] w-full mt-2">
              <TextPressure
                text="FULLY AUTOMATED"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>
          </div>
          
          <p className="hero-anim text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Turn your smartphone into a fully automated personal trainer using AI, computer vision, and predictive analytics. Personalized workouts, hands-free tracking, and real-time form correction.
          </p>
          
          <div className="hero-anim flex flex-wrap items-center gap-4">
            <a 
              href="#scope" 
              className="relative overflow-hidden bg-accent text-white font-black text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:scale-105 transition-all duration-300 group flex items-center gap-2 hover:shadow-[0_0_25px_rgba(255,90,31,0.6)]"
            >
              {/* Button Text with subtle lift */}
              <span className="relative z-10 flex items-center gap-2 group-hover:-translate-y-0.5 transition-transform duration-300">
                EXPLORE PROJECT SCOPE
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              
              {/* Texture/Glint Layer with Noise Overlay */}
              <div 
                className="absolute inset-0 z-0 w-[60%] -skew-x-[25deg] -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[750ms]"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundBlendMode: 'overlay',
                  transitionTimingFunction: 'cubic-bezier(0.43, 0.13, 0.23, 0.96)'
                }}
              ></div>

              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] pointer-events-none" />
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

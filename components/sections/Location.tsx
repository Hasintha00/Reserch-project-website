'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { useFadeUpStagger } from '@/hooks/useGSAP'

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeUpStagger(sectionRef, '.loc-card', { stagger: 0.15 })

  return (
    <section ref={sectionRef} id="milestones" className="bg-primary py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-lime text-sm font-bold tracking-widest uppercase mb-4">PROJECT TIMELINE</p>
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[1] max-w-3xl mx-auto">
            Research Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <div className="loc-card opacity-0 relative rounded-md overflow-hidden bg-surface hover:-translate-y-2 transition-transform duration-300">
            <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" alt="Phase 1" fill className="object-cover opacity-50 grayscale" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent">
              <p className="text-lime text-xs font-bold uppercase tracking-widest mb-1">PHASE 1 & 2</p>
              <h3 className="text-white font-black text-2xl uppercase tracking-wide">Research & Model Development</h3>
            </div>
          </div>
          
          <div className="loc-card opacity-0 relative rounded-md overflow-hidden bg-surface hover:-translate-y-2 transition-transform duration-300">
            <Image src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop" alt="Phase 3" fill className="object-cover opacity-50 grayscale" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent">
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">PHASE 3 & 4</p>
              <h3 className="text-white font-black text-2xl uppercase tracking-wide">System Integration & Testing</h3>
            </div>
          </div>
          
          <div className="loc-card opacity-0 bg-surface border border-white/10 rounded-md p-10 flex flex-col justify-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-white font-black text-2xl uppercase tracking-wide mb-4">Phase 5: Final Deployment</h3>
            <p className="text-white/60 mb-8 leading-relaxed font-medium">
              The ultimate phase involves wrapping up all testing, validating the predictive LSTM and YOLO pose models, and delivering the fully functioning FitForge AI prototype.
            </p>
            <a href="#downloads" className="inline-flex text-lime font-black text-xs tracking-widest uppercase items-center gap-2 hover:text-white transition-colors">
              VIEW GANTT CHART
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

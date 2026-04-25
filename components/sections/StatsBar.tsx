'use client'
import { useRef } from 'react'
import { useFadeUpStagger } from '@/hooks/useGSAP'

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeUpStagger(sectionRef, '.stat-item', { stagger: 0.1 })

  return (
    <section ref={sectionRef} className="bg-surface py-16 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="stat-item opacity-0 flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0">
            <h3 className="text-white text-4xl lg:text-5xl font-black tracking-tighter mb-2 uppercase text-lime">Smart Planning</h3>
            <p className="text-white/50 text-sm tracking-widest uppercase font-bold">Image-based Body Analysis</p>
          </div>
          <div className="stat-item opacity-0 flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0 md:pl-12">
            <h3 className="text-white text-4xl lg:text-5xl font-black tracking-tighter mb-2 uppercase text-lime">Zero Interaction</h3>
            <p className="text-white/50 text-sm tracking-widest uppercase font-bold">Hands-Free Rep Tracking</p>
          </div>
          <div className="stat-item opacity-0 flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0 md:pl-12">
            <h3 className="text-white text-4xl lg:text-5xl font-black tracking-tighter mb-2 uppercase text-lime">Real-Time CV</h3>
            <p className="text-white/50 text-sm tracking-widest uppercase font-bold">Form Correction & Analysis</p>
          </div>
        </div>
      </div>
    </section>
  )
}

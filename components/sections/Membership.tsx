'use client'
import { useRef } from 'react'
import { useFadeUpStagger } from '@/hooks/useGSAP'

export default function Membership() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeUpStagger(sectionRef, '.bento-item', { stagger: 0.15 })

  return (
    <section ref={sectionRef} id="downloads" className="bg-primary py-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Text Card - Downloads */}
        <div className="bento-item opacity-0 bg-surface rounded-md p-10 lg:p-14 flex flex-col justify-center">
          <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">RESOURCES</p>
          <h2 className="text-white text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1] mb-6">
            Downloads
          </h2>
          <ul className="space-y-4 mb-8">
            {['Project Proposal PDF', 'Presentation Slides', 'Research Papers', 'Final Report (Pending)'].map((doc, i) => (
               <li key={i} className="flex items-center gap-3 text-white/70 font-medium">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {doc}
               </li>
            ))}
          </ul>
          <a href="#" className="inline-flex bg-white text-black font-black text-sm tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-accent hover:text-white transition-colors w-max items-center gap-2">
            DOWNLOAD ALL
          </a>
        </div>

        {/* Image Card */}
        <div className="bento-item opacity-0 relative rounded-md overflow-hidden bg-surface min-h-[400px] lg:min-h-full">
          <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop" alt="Research Success" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale" />
        </div>

        {/* Highlight Card - Achievements */}
        <div id="achievements" className="bento-item opacity-0 bg-lime rounded-md p-10 lg:p-14 flex flex-col justify-center">
          <p className="text-black/50 text-xs font-bold uppercase tracking-widest mb-2">SUCCESS METRICS</p>
          <h2 className="text-black text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1] mb-6">
            Achievements
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              'Proposal Approved ✅',
              'Research Completed ✅',
              'System Prototype Developed',
              'Model Accuracy Achieved (90%+)'
            ].map((achieve, i) => (
              <li key={i} className="flex items-center gap-3 text-black/80 font-bold text-lg">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                {achieve}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

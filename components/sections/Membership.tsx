'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { useFadeUpStagger } from '@/hooks/useGSAP'
import CircularText from '@/components/ui/CircularText'

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
          <div className="flex flex-col gap-4">
            <a href="/pdfs/prasantation .pdf" download target="_blank" className="inline-flex bg-white text-black font-black text-sm tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-accent hover:text-white transition-colors items-center gap-3 w-full justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              PROPOSAL PRESENTATION
            </a>
            <a href="/pdfs/IT4010-TAF-2025 July Batch.pdf" download target="_blank" className="inline-flex bg-white text-black font-black text-sm tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-accent hover:text-white transition-colors items-center gap-3 w-full justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              TAF DOCUMENT
            </a>
            <a href="#" className="inline-flex bg-white text-black font-black text-sm tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-accent hover:text-white transition-colors items-center gap-3 w-full justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              RESEARCH PAPERS
            </a>
            <button disabled className="inline-flex bg-white/50 text-black/50 font-black text-sm tracking-widest uppercase px-6 py-4 rounded-sm cursor-not-allowed items-center gap-3 w-full justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              FINAL REPORT (PENDING)
            </button>
          </div>
        </div>

        {/* Image Card */}
        <div className="bento-item opacity-0 relative rounded-md overflow-hidden bg-surface min-h-[400px] lg:min-h-full">
          <Image src="/images/Membership & Location Backgrounds.png" alt="Research Success" fill className="object-cover opacity-60 grayscale" />
          
          <div className="absolute left-1/2 top-1/2 z-10 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-auto scale-75 lg:scale-100">
            <CircularText
              text="FITFORGE AI • AI COACH • "
              onHover="speedUp"
              spinDuration={20}
            />
          </div>
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

'use client'
import { useRef } from 'react'
import { useFadeUpStagger } from '@/hooks/useGSAP'

const team = [
  { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop', name: 'Dissanayake D.M.K.N' },
  { img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop', name: 'Meegahawala M.L.H.I' },
  { img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop', name: 'Sachinthana G.S' },
  { img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop', name: 'Mohamed M.F.I' }
]

export default function PersonalTraining() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeUpStagger(sectionRef, '.trainer-img', { stagger: 0.1 })

  return (
    <section ref={sectionRef} id="about" className="bg-white py-24 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-black/60 text-sm font-bold tracking-widest uppercase mb-4 text-accent">SLIIT UNDERGRADUATES</p>
            <h2 className="text-black text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[1]">
              About Us —<br/>The FitForge AI Team
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-black/70 mb-6 font-medium">We are final-year IT undergraduates at SLIIT developing an AI-powered smart fitness coaching system as our research project.</p>
            <a href="#contact" className="inline-flex bg-black text-white font-black text-sm tracking-widest uppercase px-6 py-3 rounded-sm hover:scale-105 transition-transform items-center gap-2">
              CONTACT TEAM
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="trainer-img opacity-0 relative aspect-[3/4] rounded-md overflow-hidden bg-black group hover:-translate-y-2 transition-transform duration-300">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-black text-xs font-bold shadow">
                {member.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

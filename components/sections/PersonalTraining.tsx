'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { useFadeUpStagger } from '@/hooks/useGSAP'

const team = [
  { img: '/images/team/member1.jpg', name: 'Dissanayake D.M.K.N' },
  { img: '/images/team/Hasintha.jpeg', name: 'Meegahawala M.L.H.I' },
  { img: '/images/team/samindi.jpeg', name: 'Sachinthana G.S.' },
  { img: '/images/team/mohmed.jpeg', name: 'Mohamed M.F.I' }
]

const supervisors = [
  { img: '/images/team/anjalie_madam.jpeg', name: 'Ms. Anjalie Gamage', role: 'Project Supervisor' },
  { img: '/images/team/nelum_sir.jpeg', name: 'Mr. Nelum Amarasena', role: 'Co-Supervisor' }
]

export default function PersonalTraining() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeUpStagger(sectionRef, '.trainer-img', { stagger: 0.1 })
  useFadeUpStagger(sectionRef, '.supervisor-item', { stagger: 0.2 })

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

        {/* Supervisors Section */}
        <div className="mb-20">
          <p className="text-black/60 text-sm font-bold tracking-widest uppercase mb-8 text-accent">RESEARCH SUPERVISION</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {supervisors.map((sup, i) => (
              <div key={i} className="supervisor-item opacity-0 flex flex-col items-center text-center gap-6 p-10 rounded-md bg-gray-50 hover:bg-gray-100 transition-all duration-500 shadow-sm hover:shadow-md border border-gray-100">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-accent/20 flex-shrink-0 shadow-xl">
                  <Image src={sup.img} alt={sup.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{sup.role}</p>
                  <h3 className="text-black text-3xl font-black uppercase tracking-tight mb-4">{sup.name}</h3>
                  <p className="text-black/60 text-base font-medium max-w-sm mx-auto">Senior Lecturer, Faculty of Computing, SLIIT. Specialized in AI & Machine Learning research.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-black/60 text-sm font-bold tracking-widest uppercase mb-8 text-accent">PROJECT TEAM MEMBERS</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="trainer-img opacity-0 relative aspect-[3/4] rounded-md overflow-hidden bg-black group border border-transparent hover:border-accent transition-all duration-500 shadow-lg hover:shadow-accent/20">
              <Image 
                src={member.img} 
                alt={member.name} 
                fill 
                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-block bg-accent px-3 py-1 rounded-sm text-black text-[10px] font-black uppercase tracking-widest mb-2 shadow-sm">
                  Team Member
                </div>
                <h3 className="text-white text-xl font-black uppercase tracking-tighter leading-none">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

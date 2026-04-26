'use client'
import { useState, useEffect } from 'react'
import { gsap } from '@/lib/gsap'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    
    gsap.fromTo('.nav-animate', 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
    )

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'PROJECT SCOPE', href: '#scope' },
    { name: 'MILESTONES', href: '#milestones' },
    { name: 'DOWNLOADS', href: '#downloads' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'ACHIEVEMENTS', href: '#achievements' },
    { name: 'CONTACT US', href: '#contact' }
  ]

  const scopeSubLinks = [
    {name: 'Literature Survey', id: 'scope-literature'},
    {name: 'Research Gap', id: 'scope-gap'},
    {name: 'Problem & Solution', id: 'scope-problem'},
    {name: 'Research Objectives', id: 'scope-objectives'},
    {name: 'Methodology', id: 'scope-methodology'},
    {name: 'Technologies', id: 'scope-technologies'}
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="nav-animate flex items-center gap-2">
          <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5 2L4 14h6.5l-2.5 8 12-11h-6.5L13.5 2z" />
          </svg>
          <span className="text-white font-black text-2xl tracking-tighter uppercase">FITFORGE AI</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-sm px-2 py-2 rounded-lg nav-animate">
          {navLinks.map((item, i) => (
            <div key={i} className="relative group">
              <a 
                href={item.href}
                className={`px-3 py-2 text-[10px] font-bold tracking-widest uppercase transition-colors rounded ${i === 0 ? 'bg-black text-white' : 'text-white/60 hover:text-white'}`}
              >
                {item.name}
              </a>
              
              {/* Desktop Dropdown for Project Scope */}
              {item.name === 'PROJECT SCOPE' && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-surface border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
                  {scopeSubLinks.map((sub, j) => (
                    <a key={j} href={`#${sub.id}`} className="px-4 py-3 text-[10px] font-bold tracking-widest uppercase text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="nav-animate hidden md:block">
          
        </div>
        
        {/* Mobile menu button */}
        <div className="lg:hidden nav-animate relative group">
          <button className="text-white bg-white/10 p-2 rounded flex items-center gap-2 text-xs font-bold tracking-widest">
            MENU
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div className="absolute right-0 top-full mt-2 w-56 bg-surface border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 max-h-[80vh] overflow-y-auto">
            {navLinks.map((item, i) => (
              <div key={i}>
                <a 
                  href={item.href}
                  className="block px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.name}
                </a>
                {item.name === 'PROJECT SCOPE' && (
                  <div className="flex flex-col bg-black/50 border-l-2 border-accent ml-4 mb-2">
                    {scopeSubLinks.map((sub, j) => (
                      <a key={j} href={`#${sub.id}`} className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors">
                        - {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </nav>
  )
}

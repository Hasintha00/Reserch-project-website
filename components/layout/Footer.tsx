'use client'

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary pt-16 pb-10 px-6 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 2L4 14h6.5l-2.5 8 12-11h-6.5L13.5 2z" />
              </svg>
              <span className="text-white font-black text-2xl tracking-tighter uppercase">FITFORGE AI</span>
            </div>
            <p className="text-white/60 mb-8 font-medium">SLIIT Faculty of Computing<br/>Research Group: 25-26J-400</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              {['Home', 'Project Scope', 'Milestones', 'Downloads'].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-white/50 hover:text-white transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">TEAM</h4>
            <ul className="space-y-4">
              {['About Us', 'Achievements', 'Contact Us'].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-white/50 hover:text-white transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="text-white/50 text-sm">📧 group25-26J@my.sliit.lk</li>
              <li className="text-white/50 text-sm">📞 +94 11 241 3900</li>
              <li className="text-white/50 text-sm">📍 SLIIT, New Kandy Road, Malabe</li>
              <li className="text-white/50 text-sm hover:text-white transition-colors">
                <a href="https://github.com/fitforgeai" target="_blank" rel="noreferrer">💻 GitHub Repository</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10 relative">
          <p className="text-white/30 text-sm">© 2026 FitForge AI. All rights reserved.</p>
          <div className="absolute right-0 bottom-6 bg-white text-black text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2L2 22h20L12 2z"/></svg>
            Research Project
          </div>
        </div>
      </div>
    </footer>
  )
}

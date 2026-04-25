'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { useFadeUpStagger } from '@/hooks/useGSAP'

const features = [
  { img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop', label: '1. Data Collection Layer' },
  { img: 'https://images.unsplash.com/photo-1526506114642-54cb5e01fa39?q=80&w=1470&auto=format&fit=crop', label: '2. Processing & YOLO CV' },
  { img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop', label: '3. LSTM Predictive Output' },
]

export default function AppFeatures() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeUpStagger(sectionRef, '.phone-mock', { stagger: 0.15 })

  return (
    <section ref={sectionRef} className="bg-white text-black py-24">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <p className="text-sm font-bold tracking-widest uppercase mb-4 text-accent">METHODOLOGY & SYSTEM</p>
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">FitForge AI Architecture</h2>
        <p className="text-black/60 max-w-xl mx-auto mb-16 text-lg">
          The system works through multiple AI pipelines utilizing TensorFlow, PyTorch, CNNs, and Time Series Forecasting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <div key={i} className="phone-mock opacity-0 bg-gray-100 rounded-[2rem] p-4 relative pt-12 pb-8 h-[600px] border border-gray-200 shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-white rounded-b-xl" />
              
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-black">
                <Image src={feat.img} alt="System Layer" fill className="object-cover opacity-80" />
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                  <span className="bg-black/40 backdrop-blur-md border border-white/20 text-white font-semibold text-sm px-4 py-2 rounded-lg">
                    {feat.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

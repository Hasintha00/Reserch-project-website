'use client'
import { useRef } from 'react'
import { useFadeUpStagger } from '@/hooks/useGSAP'

export default function ProjectScope() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeUpStagger(sectionRef, '.scope-card', { stagger: 0.1 })

  return (
    <section ref={sectionRef} id="scope" className="bg-primary py-24 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lime text-sm font-bold tracking-widest uppercase mb-4">DETAILED CONTENT</p>
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[1] max-w-3xl mx-auto">
            Project Scope
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sticky Sidebar */}
          <div className="hidden lg:block w-[280px] shrink-0">
            <div className="sticky top-32 flex flex-col gap-2">
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">QUICK NAVIGATION</p>
              {[
                {name: '1. Literature Survey', id: 'scope-literature'},
                {name: '2. Research Gap', id: 'scope-gap'},
                {name: '3. Problem & Solution', id: 'scope-problem'},
                {name: '4. Research Objectives', id: 'scope-objectives'},
                {name: '5. Methodology', id: 'scope-methodology'},
                {name: '6. Technologies', id: 'scope-technologies'}
              ].map((item, i) => (
                <a key={i} href={`#${item.id}`} className="px-4 py-3 bg-surface hover:bg-white/10 text-white/70 hover:text-white rounded-md transition-colors text-sm font-bold uppercase tracking-widest">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="flex-1 flex flex-col gap-8">
            
            {/* 1. Literature Survey */}
            <div id="scope-literature" className="scope-card opacity-0 bg-surface rounded-md p-10 border-l-4 border-accent">
              <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                <span className="text-accent">1.</span> Literature Survey
              </h3>
              <p className="text-white/70 font-medium leading-relaxed mb-6">
                Existing AI fitness systems such as Fitbod, Freeletics, and FitnessAI focus on personalized training but still have major limitations:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Most systems rely on manual input or wearable devices',
                  'Limited use of computer vision for body analysis',
                  'Lack of real-time biomechanical feedback',
                  'Minimal support for predictive analytics (injury risk, recovery, forecasting)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm font-medium">
                    <span className="text-accent shrink-0">✖</span> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-black/50 rounded p-6">
                <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">Key Takeaway</p>
                <p className="text-white/80 font-medium">Current solutions do not integrate prediction + automation + real-time correction + zero-interaction into one system.</p>
              </div>
            </div>

            {/* 2. Research Gap */}
            <div id="scope-gap" className="scope-card opacity-0 bg-lime rounded-md p-10 text-black">
              <h3 className="text-black text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span>2.</span> Research Gap
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-3">Intelligent Forecasting</h4>
                  <ul className="space-y-2 text-black/70 text-sm font-medium">
                    <li>• No long-term adaptive prediction</li>
                    <li>• No image-based body data integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-3">Zero-Interaction Tracking</h4>
                  <ul className="space-y-2 text-black/70 text-sm font-medium">
                    <li>• Manual input is required</li>
                    <li>• Voice commands fail in noisy gyms</li>
                    <li>• Gesture input is unreliable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-3">Predictive Analytics</h4>
                  <ul className="space-y-2 text-black/70 text-sm font-medium">
                    <li>• Limited prediction of recovery time</li>
                    <li>• Lack of injury risk and performance trend modeling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-3">Form Analysis</h4>
                  <ul className="space-y-2 text-black/70 text-sm font-medium">
                    <li>• Lack of real-time biomechanical feedback</li>
                    <li>• Missing mobile-friendly CV solutions</li>
                  </ul>
                </div>
              </div>
              <div className="bg-black text-white p-6 rounded">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Final Gap Identified</p>
                <p className="font-bold">No unified system provides fully automated, intelligent, real-time AI fitness coaching using only a smartphone.</p>
              </div>
            </div>

            {/* 3. Problem & Solution */}
            <div id="scope-problem" className="scope-card opacity-0 bg-surface rounded-md p-10 border-l-4 border-white/20">
              <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span className="text-white/40">3.</span> Research Problem & Solution
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">🔴 RESEARCH PROBLEM</p>
                  <p className="text-white/70 text-sm font-medium mb-4">Modern users face time constraints, lack of motivation, generic workout plans, and expensive fitness solutions. Incorrect exercise form often leads to injuries.</p>
                  <p className="text-white/70 text-sm font-medium">Existing apps do not adapt dynamically, cannot track workouts automatically, and do not provide predictive health insights.</p>
                </div>
                <div>
                  <p className="text-lime text-xs font-bold uppercase tracking-widest mb-4">✅ PROPOSED SOLUTION</p>
                  <p className="text-white font-bold mb-4">A fully integrated AI-powered fitness coach that:</p>
                  <ul className="space-y-2 text-white/70 text-sm font-medium">
                    <li>✔ Generates personalized workout plans</li>
                    <li>✔ Tracks exercises automatically</li>
                    <li>✔ Provides real-time form correction</li>
                    <li>✔ Predicts performance, recovery, and injury risks</li>
                    <li className="text-lime mt-2 font-bold">✔ Works using only a smartphone camera</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Research Objectives */}
            <div id="scope-objectives" className="scope-card opacity-0 bg-surface rounded-md p-10">
              <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span className="text-white/40">4.</span> Research Objectives
              </h3>
              <div className="bg-white/5 border border-white/10 rounded p-8 mb-8 text-center">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">MAIN OBJECTIVE</p>
                <p className="text-white text-xl font-black uppercase">Develop an AI-powered intelligent fitness coaching system that is Personalized, Automated, Predictive, and Real-time.</p>
              </div>
              <p className="text-lime text-xs font-bold uppercase tracking-widest mb-4">SUB OBJECTIVES</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Collect user physical & behavioral data',
                  'Perform image-based body analysis',
                  'Build ML models for prediction',
                  'Develop real-time pose detection system',
                  'Generate adaptive workout schedules',
                  'Provide feedback & progress reports'
                ].map((obj, i) => (
                  <div key={i} className="bg-black/50 p-4 rounded flex items-center gap-3">
                    <span className="text-lime shrink-0">✔</span>
                    <span className="text-white/80 text-sm font-bold">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Methodology */}
            <div id="scope-methodology" className="scope-card opacity-0 bg-surface rounded-md p-10 border-l-4 border-lime">
              <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span className="text-lime">5.</span> Methodology
              </h3>
              <p className="text-white/70 font-medium mb-8">Our system follows a multi-component AI architecture structured in 4 core layers:</p>
              
              <div className="space-y-6">
                <div className="bg-black/30 p-6 rounded border border-white/5">
                  <h4 className="text-white font-black uppercase tracking-widest mb-2">1. Data Collection</h4>
                  <p className="text-white/50 text-sm font-medium">User inputs (age, weight, fitness level) and camera-based video/image data.</p>
                </div>
                <div className="bg-black/30 p-6 rounded border border-white/5">
                  <h4 className="text-white font-black uppercase tracking-widest mb-2">2. Data Processing</h4>
                  <p className="text-white/50 text-sm font-medium">Data cleaning, feature engineering, and body composition extraction.</p>
                </div>
                <div className="bg-black/30 p-6 rounded border border-white/5">
                  <h4 className="text-lime font-black uppercase tracking-widest mb-4">3. Core AI Modules</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-surface p-4 rounded">
                      <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Pose Detection</p>
                      <p className="text-white/50 text-xs">YOLO-based real-time body tracking.</p>
                    </div>
                    <div className="bg-surface p-4 rounded">
                      <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Workout Forecasting</p>
                      <p className="text-white/50 text-xs">Predicting future optimal workout plans.</p>
                    </div>
                    <div className="bg-surface p-4 rounded">
                      <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Predictive Analytics</p>
                      <p className="text-white/50 text-xs">Recovery estimation, injury risk, performance forecasting.</p>
                    </div>
                    <div className="bg-surface p-4 rounded">
                      <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Form Analysis</p>
                      <p className="text-white/50 text-xs">Joint angle calculations & real-time correction.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-black/30 p-6 rounded border border-white/5">
                  <h4 className="text-white font-black uppercase tracking-widest mb-2">4. Output Layer</h4>
                  <p className="text-white/50 text-sm font-medium">Personalized schedules, real-time guidance, reports, and alerts.</p>
                </div>
              </div>
            </div>

            {/* 6. Technologies */}
            <div id="scope-technologies" className="scope-card opacity-0 bg-surface rounded-md p-10">
              <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span className="text-white/40">6.</span> Technologies
              </h3>
              
              <div className="mb-8">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">TOOLS & PLATFORMS</p>
                <div className="flex flex-wrap gap-3">
                  {['Android Studio', 'Python', 'TensorFlow', 'PyTorch', 'MongoDB', 'AWS', 'Google Cloud', 'GitHub'].map((tech, i) => (
                    <span key={i} className="bg-white/10 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 hover:bg-accent transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-lime text-xs font-bold uppercase tracking-widest mb-4">ALGORITHMS & MODELS</p>
                <div className="flex flex-wrap gap-3">
                  {['CNN (Image Processing)', 'YOLO (Pose Detection)', 'Regression Models', 'Random Forest', 'LSTM (Time-Series)'].map((algo, i) => (
                    <span key={i} className="bg-lime/10 text-lime px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-lime/20 hover:bg-lime hover:text-black transition-colors cursor-default">
                      {algo}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

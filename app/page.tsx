import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import ProjectScope from '@/components/sections/ProjectScope'
import AppFeatures from '@/components/sections/AppFeatures'
import PersonalTraining from '@/components/sections/PersonalTraining'
import Location from '@/components/sections/Location'
import Membership from '@/components/sections/Membership'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <ProjectScope />
      <AppFeatures />
      <PersonalTraining />
      <Location />
      <Membership />
      <Footer />
    </main>
  )
}

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ParticleBackground from './components/ParticleBackground'
import Problem from './components/Problem'
import Solutions from './components/Solutions'
import Portfolio from './components/Portfolio'
import HowItWorks from './components/HowItWorks'
import Differentials from './components/Differentials'
import About from './components/About'
import Video from './components/Video'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <Portfolio />
        <HowItWorks />
        <Differentials />
        <About />
        <Video />
        <Contact />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

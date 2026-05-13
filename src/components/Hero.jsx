import React, { useEffect, useRef } from 'react'
import { WA_LINK } from '../constants'

const badges = [
  { icon: '🌐', label: 'Sites profissionais' },
  { icon: '📱', label: 'Apps personalizados' },
  { icon: '⚡', label: 'Automação WhatsApp' },
  { icon: '🚀', label: 'Landing pages' },
  { icon: '⚙️', label: 'Soluções sob medida' },
]

const MockupBrowser = () => (
  <div className="relative w-full max-w-md mx-auto animate-float">
    {/* Glow behind */}
    <div className="absolute -inset-10 bg-ffr-green/5 rounded-full blur-3xl pointer-events-none"/>

    {/* Browser mockup */}
    <div className="relative bg-[#1A1A1A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#141414] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70"/>
          <div className="w-3 h-3 rounded-full bg-yellow-500/70"/>
          <div className="w-3 h-3 rounded-full bg-green-500/70"/>
        </div>
        <div className="flex-1 mx-4 bg-[#0D0D0D] rounded px-3 py-1 flex items-center gap-2">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span className="font-mono text-[10px] text-white/30">ffr.com.br</span>
        </div>
      </div>

      {/* Page preview */}
      <div className="p-4 space-y-3">
        {/* Nav bar mock */}
        <div className="flex items-center justify-between">
          <div className="w-16 h-3 bg-ffr-green/40 rounded"/>
          <div className="flex gap-3">
            {[1,2,3].map(i => <div key={i} className="w-10 h-2 bg-white/10 rounded"/>)}
          </div>
        </div>
        {/* Hero mock */}
        <div className="bg-gradient-to-br from-ffr-green/10 to-transparent rounded-xl p-4 mt-2">
          <div className="w-3/4 h-5 bg-white/20 rounded mb-2"/>
          <div className="w-1/2 h-3 bg-white/10 rounded mb-4"/>
          <div className="flex gap-2">
            <div className="w-24 h-7 bg-ffr-green/60 rounded-lg"/>
            <div className="w-20 h-7 bg-white/10 rounded-lg"/>
          </div>
        </div>
        {/* Cards mock */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white/5 rounded-lg p-2 space-y-1.5">
              <div className="w-5 h-5 bg-ffr-green/20 rounded"/>
              <div className="w-full h-2 bg-white/10 rounded"/>
              <div className="w-2/3 h-2 bg-white/5 rounded"/>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Phone floating */}
    <div className="absolute -bottom-8 -right-6 w-28 bg-[#1A1A1A] rounded-2xl border border-white/10 shadow-xl overflow-hidden">
      <div className="bg-[#141414] px-2 py-2 flex items-center gap-1.5 border-b border-white/5">
        <div className="w-4 h-4 rounded-full bg-[#25D366]/70 flex items-center justify-center">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
          </svg>
        </div>
        <span className="font-mono text-[8px] text-white/40">WhatsApp</span>
      </div>
      <div className="p-2 space-y-1.5">
        <div className="bg-[#25D366]/15 rounded-lg p-1.5">
          <div className="w-full h-1.5 bg-white/20 rounded mb-1"/>
          <div className="w-2/3 h-1.5 bg-white/10 rounded"/>
        </div>
        <div className="bg-white/5 rounded-lg p-1.5 ml-3">
          <div className="w-full h-1.5 bg-white/10 rounded mb-1"/>
          <div className="w-1/2 h-1.5 bg-white/5 rounded"/>
        </div>
        <div className="bg-[#25D366]/10 rounded-lg p-1.5">
          <div className="w-full h-1.5 bg-white/15 rounded"/>
        </div>
      </div>
    </div>

    {/* Stat badge floating */}
    <div className="absolute -top-4 -left-4 bg-[#1A1A1A] border border-ffr-gold/20 rounded-xl px-3 py-2 shadow-xl">
      <div className="font-display text-lg font-bold text-ffr-gold">+40%</div>
      <div className="font-body text-[9px] text-white/40 leading-tight">Mais clientes<br/>no digital</div>
    </div>
  </div>
)

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('[data-animate]')
    if (!els) return
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 100)
    })
  }, [])

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-radial from-ffr-green/5 via-transparent to-transparent"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,200,83,0.06) 0%, transparent 70%)' }}/>
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 80%, rgba(21,101,192,0.06) 0%, transparent 60%)' }}/>
      
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}/>

      <div className="relative max-w-7xl mx-auto px-5 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div data-animate className="section-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-ffr-green animate-pulse"/>
              Soluções digitais para negócios locais
            </div>

            <h1 data-animate className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Sites, Apps e{' '}
              <span className="text-gradient-green">Automações</span>{' '}
              para Empresas que Querem{' '}
              <span className="text-gradient-gold">Crescer</span>{' '}
              no Digital
            </h1>

            <p data-animate className="font-body text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
              Criamos soluções digitais modernas para empresas locais venderem mais, parecerem mais profissionais e organizarem melhor seus processos.
            </p>

            <div data-animate className="flex flex-wrap gap-3 mb-10">
              <a href="#contato" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
                Solicitar orçamento
              </a>
              <a href="#portfolio" className="btn-ghost">
                Ver projetos
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Badges */}
            <div data-animate className="flex flex-wrap gap-2">
              {badges.map((b, i) => (
                <span key={i} className="flex items-center gap-1.5 font-body text-xs text-white/40 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full hover:border-ffr-green/20 hover:text-white/60 transition-all duration-200">
                  <span>{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div data-animate className="flex justify-center lg:justify-end">
            <MockupBrowser />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"/>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    text: 'Criada por desenvolvedores focados em soluções práticas',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    text: 'Atendimento próximo e estratégico — você fala com quem faz',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    text: 'Projetos pensados para negócios reais, com resultado real',
  },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="sobre" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full" style={{ background: 'radial-gradient(ellipse 80% 80% at 80% 50%, rgba(21,101,192,0.05) 0%, transparent 70%)' }}/>

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: brand visual */}
          <div data-reveal className="relative order-2 lg:order-1">
            <div className="relative bg-[#141414] border border-white/5 rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center">

              {/* Background layers */}
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 90% at 50% 50%, rgba(0,200,83,0.07) 0%, transparent 70%)' }}/>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,200,83,0.04) 0%, rgba(21,101,192,0.04) 100%)' }}/>

              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-[0.025]"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}/>

              {/* Concentric rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-72 h-72 rounded-full border border-ffr-green/6"/>
                <div className="absolute w-52 h-52 rounded-full border border-ffr-green/10"/>
                <div className="absolute w-32 h-32 rounded-full border border-ffr-green/15"/>
              </div>

              {/* Center content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-5">
                  <svg width="60" height="60" viewBox="0 0 36 36" fill="none">
                    <rect width="36" height="36" rx="8" fill="#00C853"/>
                    <path d="M8 10h12v4H12v4h7v4h-7v4H8V10z" fill="#0D0D0D"/>
                    <path d="M21 10h7l-4 8 4 8h-7l-4-8 4-8z" fill="#0D0D0D" opacity="0.7"/>
                  </svg>
                </div>
                <div className="font-display font-bold text-white text-2xl tracking-tight">FFR do Brasil</div>
                <div className="font-mono text-[11px] text-ffr-green tracking-widest uppercase mt-1 mb-5">Technology</div>
                <div className="flex items-center gap-2 bg-[#1A1A1A] border border-ffr-green/20 rounded-full px-4 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ffr-green animate-pulse"/>
                  <span className="font-mono text-[10px] text-ffr-green/80 tracking-wider uppercase">Equipe FFR</span>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 bg-[#1A1A1A] border border-ffr-green/20 rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-display text-2xl font-black text-ffr-green mb-0.5">100%</div>
              <div className="font-body text-xs text-white/40">Focados em<br/>resultado real</div>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <div data-reveal>
              <div className="section-tag">Sobre nós</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
                Tecnologia a serviço do{' '}
                <span className="text-gradient-green">seu negócio</span>
              </h2>
            </div>

            <div data-reveal>
              <p className="font-body text-white/50 text-base leading-relaxed mb-8">
                A FFR do Brasil Technology nasceu para ajudar empresas locais a se posicionarem melhor no digital.
                Desenvolvemos sites, aplicativos, landing pages e automações com foco em presença profissional,
                conversão e crescimento real.
              </p>
            </div>

            <div data-reveal className="space-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#141414] border border-white/5 rounded-xl p-4 hover:border-ffr-green/10 transition-colors duration-200">
                  <div className="w-9 h-9 rounded-lg bg-ffr-green/10 text-ffr-green flex items-center justify-center flex-shrink-0">
                    {h.icon}
                  </div>
                  <p className="font-body text-sm text-white/60 leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

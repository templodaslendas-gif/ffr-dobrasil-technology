import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  { icon: '💻', text: 'Criada por desenvolvedores focados em soluções práticas' },
  { icon: '🤝', text: 'Atendimento próximo e estratégico — você fala com quem faz' },
  { icon: '🏪', text: 'Projetos pensados para negócios reais, não para portfólio' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="sobre" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full" style={{ background: 'radial-gradient(ellipse 80% 80% at 80% 50%, rgba(21,101,192,0.05) 0%, transparent 70%)' }}/>

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image placeholder */}
          <div data-reveal className="relative order-2 lg:order-1">
            <div className="relative bg-[#141414] border border-white/5 rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-ffr-green/10 border border-ffr-green/20 flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <p className="font-mono text-[11px] text-white/20 tracking-widest uppercase">fundadores-ffr.webp</p>
                  <p className="font-body text-xs text-white/15 mt-1">Foto da equipe em breve</p>
                </div>
              </div>

              {/* Decorative border gradient */}
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(0,200,83,0.05) 0%, rgba(21,101,192,0.05) 100%)' }}/>
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
                <div key={i} className="flex items-start gap-4 bg-[#141414] border border-white/5 rounded-xl p-4">
                  <span className="text-xl flex-shrink-0">{h.icon}</span>
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

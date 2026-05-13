import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pains = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Ainda não tem site profissional',
    desc: 'Sem site, você é invisível para quem busca no Google.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Clientes não acham informações claras',
    desc: 'Sem presença digital clara, o cliente vai para o concorrente.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="10" x2="15" y2="10"/>
        <line x1="9" y1="14" x2="11" y2="14"/>
      </svg>
    ),
    title: 'WhatsApp desorganizado',
    desc: 'Atendimento manual, lento e sem padrão afasta clientes.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    ),
    title: 'Empresa parece menor do que é',
    desc: 'Uma presença digital fraca reduz sua credibilidade no mercado.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
        <polyline points="17 18 23 18 23 12"/>
      </svg>
    ),
    title: 'Perde orçamentos por falta de presença',
    desc: 'Clientes pedem referência online — e não encontram você.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Sem automações para ganhar tempo',
    desc: 'Processos manuais consomem tempo que poderia ser investido no negócio.',
  },
]

export default function Problem() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ffr-green/2 to-transparent pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="section-tag">O problema</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Sua empresa parece{' '}
            <span className="text-gradient-gold">profissional</span>{' '}
            na internet?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {pains.map((pain, i) => (
            <div
              key={i}
              data-reveal
              className="group relative bg-[#141414] border border-white/5 rounded-2xl p-6 hover:border-red-500/20 hover:bg-[#161414] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400/70 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
                {pain.icon}
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2 leading-tight">{pain.title}</h3>
              <p className="font-body text-sm text-white/40 leading-relaxed">{pain.desc}</p>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500/40 group-hover:bg-red-500/70 transition-colors"/>
            </div>
          ))}
        </div>

        <div data-reveal className="relative bg-gradient-to-r from-ffr-green/10 via-ffr-green/5 to-transparent border border-ffr-green/20 rounded-2xl p-8 text-center">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-ffr-green/10 rounded-full blur-3xl"/>
          </div>
          <p className="relative font-display text-lg sm:text-xl font-bold text-white leading-relaxed">
            A <span className="text-ffr-green">FFR do Brasil Technology</span> resolve isso com soluções digitais{' '}
            <span className="text-gradient-gold">acessíveis, modernas</span> e pensadas para o seu negócio.
          </p>
        </div>
      </div>
    </section>
  )
}

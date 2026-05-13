import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    n: '01',
    title: 'Entendemos sua empresa',
    desc: 'Conversa rápida pelo WhatsApp para entender seu negócio, público e objetivos.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Criamos uma proposta visual',
    desc: 'Você recebe uma proposta com layout, funcionalidades e investimento.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Você aprova os detalhes',
    desc: 'Revisamos juntos até o projeto estar exatamente como você imaginou.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Publicamos o site ou app',
    desc: 'Deploy, domínio, SSL e tudo pronto. Seu digital no ar de verdade.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    n: '05',
    title: 'Evoluímos com automações',
    desc: 'Depois do lançamento, melhoramos e automatizamos processos do seu negócio.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <section id="como-funciona" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,200,83,0.04) 0%, transparent 70%)' }}/>

      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="section-tag">Como funciona</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Do zero ao digital em{' '}
            <span className="text-gradient-green">5 passos</span>
          </h2>
          <p className="font-body text-white/40 max-w-md mx-auto">
            Processo simples, rápido e sem burocracia. Você foca no negócio, a gente cuida do digital.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-ffr-green/40 via-ffr-green/20 to-transparent"/>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                data-reveal
                className="group relative flex gap-6 items-start"
              >
                <div className="relative flex-shrink-0 w-14 h-14 rounded-full bg-[#141414] border border-ffr-green/20 flex items-center justify-center z-10 group-hover:border-ffr-green/50 transition-colors duration-300">
                  <span className="font-display font-black text-sm text-ffr-green">{step.n}</span>
                  <div className="absolute inset-0 rounded-full bg-ffr-green/5 group-hover:bg-ffr-green/10 transition-colors"/>
                </div>

                <div className="flex-1 bg-[#141414] border border-white/5 rounded-2xl p-6 group-hover:border-ffr-green/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-ffr-green/10 text-ffr-green flex items-center justify-center flex-shrink-0 group-hover:bg-ffr-green/15 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="font-display font-bold text-white text-lg">{step.title}</h3>
                  </div>
                  <p className="font-body text-sm text-white/40 leading-relaxed pl-11">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

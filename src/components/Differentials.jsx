import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const diffs = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Design premium',
    desc: 'Visual moderno que transmite autoridade e confiança para seus clientes.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Foco em conversão',
    desc: 'Cada elemento projetado para transformar visitante em cliente.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Mobile-first',
    desc: 'Perfeito em qualquer tela — celular, tablet ou computador.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'SEO básico',
    desc: 'Configurado para aparecer no Google e ser encontrado pelos seus clientes.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'WhatsApp integrado',
    desc: 'Botão de contato direto para o cliente chegar até você em segundos.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Atendimento próximo',
    desc: 'Você fala diretamente com a equipe. Sem intermediários, sem demora.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    title: 'Soluções escaláveis',
    desc: 'Começa simples e cresce conforme seu negócio evolui.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
    title: 'Automação e apps',
    desc: 'Vai além do site: automatizamos e construímos ferramentas para o seu negócio.',
  },
]

export default function Differentials() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="section-tag">Diferenciais</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Por que escolher a{' '}
            <span className="text-gradient-green">FFR do Brasil</span>
            <span className="text-gradient-gold"> Technology</span>?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diffs.map((d, i) => (
            <div
              key={i}
              data-reveal
              className="group bg-[#141414] border border-white/5 rounded-2xl p-5 hover:border-ffr-green/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-ffr-green/10 text-ffr-green flex items-center justify-center mb-4 group-hover:bg-ffr-green/15 transition-colors">
                {d.icon}
              </div>
              <h3 className="font-display font-bold text-white text-sm mb-2">{d.title}</h3>
              <p className="font-body text-xs text-white/40 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const WA_LINK = "https://wa.me/5545999317831?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20FFR%20do%20Brasil%20Technology%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."

const solutions = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    color: 'green',
    tag: '01',
    title: 'Sites Profissionais',
    desc: 'Sites modernos, responsivos e focados em conversão para empresas locais que precisam de presença digital de verdade.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2H2l8 9.46V19l4 2v-8.54L22 2z"/>
      </svg>
    ),
    color: 'gold',
    tag: '02',
    title: 'Landing Pages',
    desc: 'Páginas focadas em venda, campanhas, anúncios e captação de clientes. Cada elemento pensado para converter.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    color: 'blue',
    tag: '03',
    title: 'Aplicativos Web e Mobile',
    desc: 'Apps personalizados para agendamento, controle, gestão e operação. Do conceito ao deploy.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    color: 'green',
    tag: '04',
    title: 'Automações WhatsApp',
    desc: 'Fluxos automatizados para atendimento, lembretes, respostas e captação de leads 24 horas por dia.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    color: 'gold',
    tag: '05',
    title: 'E-commerce',
    desc: 'Lojas virtuais completas para vender produtos e serviços online com gestão de estoque e pagamentos.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    color: 'blue',
    tag: '06',
    title: 'Sistemas Personalizados',
    desc: 'Dashboards, painéis administrativos e sistemas sob medida para organizar e escalar seu negócio.',
  },
]

const colorMap = {
  green: {
    icon: 'text-ffr-green',
    bg: 'bg-ffr-green/10',
    border: 'border-ffr-green/20',
    tag: 'text-ffr-green',
    hover: 'hover:border-ffr-green/30 hover:shadow-ffr-green/5',
  },
  gold: {
    icon: 'text-ffr-gold',
    bg: 'bg-ffr-gold/10',
    border: 'border-ffr-gold/20',
    tag: 'text-ffr-gold',
    hover: 'hover:border-ffr-gold/30 hover:shadow-ffr-gold/5',
  },
  blue: {
    icon: 'text-ffr-blue-bright',
    bg: 'bg-ffr-blue-bright/10',
    border: 'border-ffr-blue-bright/20',
    tag: 'text-ffr-blue-bright',
    hover: 'hover:border-ffr-blue-bright/30',
  },
}

export default function Solutions() {
  const ref = useScrollReveal()

  return (
    <section id="solucoes" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="section-tag">Soluções</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            O que a FFR do Brasil{' '}
            <span className="text-gradient-green">entrega</span>
          </h2>
          <p className="font-body text-white/40 max-w-xl mx-auto">
            Cada solução é desenvolvida pensando no seu negócio, no seu cliente e no crescimento real que você quer alcançar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => {
            const c = colorMap[s.color]
            return (
              <div
                key={i}
                data-reveal
                className={`group relative bg-[#141414] border border-white/5 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${c.hover}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.icon} flex items-center justify-center`}>
                    {s.icon}
                  </div>
                  <span className={`font-mono text-xs font-medium ${c.tag} opacity-50`}>{s.tag}</span>
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-2 leading-tight">{s.title}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed mb-6">{s.desc}</p>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-body text-sm font-medium ${c.icon} opacity-60 group-hover:opacity-100 transition-opacity`}>
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

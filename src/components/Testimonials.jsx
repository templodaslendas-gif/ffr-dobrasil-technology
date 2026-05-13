import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote: "A FFR transformou nossa presença digital. O site ficou exatamente como imaginávamos — profissional, rápido e focado em captar clientes. Os resultados apareceram logo nas primeiras semanas.",
    name: "Carlos Mendes",
    role: "Proprietário · Oficina Central",
    initials: "CM",
    color: "green",
  },
  {
    quote: "Do briefing à entrega, tudo foi muito organizado. A equipe entendeu nosso negócio e entregou no prazo combinado. O suporte pós-entrega é excelente e ágil.",
    name: "Ana Rodrigues",
    role: "Gerente · Distribuidora Sul",
    initials: "AR",
    color: "gold",
  },
  {
    quote: "Investimento que valeu cada centavo. A landing page que criaram aumentou significativamente nossa captação de orçamentos — hoje é nossa principal ferramenta de vendas.",
    name: "Roberto Carvalho",
    role: "Sócio-Fundador · Construtora RC",
    initials: "RC",
    color: "blue",
  },
]

const colorMap = {
  green: {
    avatar: 'bg-ffr-green/15 text-ffr-green border-ffr-green/25',
    star: 'text-ffr-green',
    quote: 'text-ffr-green/20',
  },
  gold: {
    avatar: 'bg-ffr-gold/15 text-ffr-gold border-ffr-gold/25',
    star: 'text-ffr-gold',
    quote: 'text-ffr-gold/20',
  },
  blue: {
    avatar: 'bg-ffr-blue-bright/15 text-ffr-blue-bright border-ffr-blue-bright/25',
    star: 'text-ffr-blue-bright',
    quote: 'text-ffr-blue-bright/20',
  },
}

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,200,66,0.03) 0%, transparent 70%)' }}/>

      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="section-tag">Depoimentos</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            O que nossos{' '}
            <span className="text-gradient-gold">clientes dizem</span>
          </h2>
          <p className="font-body text-white/40 max-w-xl mx-auto">
            Resultados reais de empresas que decidiram investir na sua presença digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const c = colorMap[t.color]
            return (
              <div
                key={i}
                data-reveal
                className="group bg-[#141414] border border-white/5 rounded-2xl p-7 hover:border-white/10 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className={c.star}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>

                {/* Quote icon */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className={`mb-4 flex-shrink-0 ${c.quote}`}>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>

                {/* Quote text */}
                <p className="font-body text-sm text-white/60 leading-relaxed flex-1 mb-6">
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/5 mb-5"/>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 ${c.avatar}`}>
                    <span className="font-display font-bold text-xs">{t.initials}</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-sm">{t.name}</div>
                    <div className="font-body text-xs text-white/30">{t.role}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pains = [
  { icon: '🌐', title: 'Ainda não tem site profissional', desc: 'Sem site, você é invisível para quem busca no Google.' },
  { icon: '🔍', title: 'Clientes não acham informações claras', desc: 'Sem presença digital clara, o cliente vai para o concorrente.' },
  { icon: '💬', title: 'WhatsApp desorganizado', desc: 'Atendimento manual, lento e sem padrão afasta clientes.' },
  { icon: '📉', title: 'Empresa parece menor do que é', desc: 'Uma presença digital fraca reduz sua credibilidade no mercado.' },
  { icon: '💸', title: 'Perde orçamentos por falta de presença', desc: 'Clientes pedem referência online — e não encontram você.' },
  { icon: '⏰', title: 'Sem automações para ganhar tempo', desc: 'Processos manuais consomem tempo que poderia ser investido no negócio.' },
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
              <div className="text-3xl mb-4">{pain.icon}</div>
              <h3 className="font-display font-bold text-white text-base mb-2 leading-tight">{pain.title}</h3>
              <p className="font-body text-sm text-white/40 leading-relaxed">{pain.desc}</p>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500/40 group-hover:bg-red-500/70 transition-colors"/>
            </div>
          ))}
        </div>

        {/* Resolution */}
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

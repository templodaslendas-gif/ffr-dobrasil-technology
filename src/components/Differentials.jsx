import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const diffs = [
  { icon: '💎', title: 'Design premium', desc: 'Visual moderno que transmite autoridade e confiança para seus clientes.' },
  { icon: '📈', title: 'Foco em conversão', desc: 'Cada elemento projetado para transformar visitante em cliente.' },
  { icon: '📱', title: 'Mobile-first', desc: 'Perfeito em qualquer tela — celular, tablet ou computador.' },
  { icon: '🔍', title: 'SEO básico', desc: 'Configurado para aparecer no Google e ser encontrado pelos seus clientes.' },
  { icon: '💬', title: 'WhatsApp integrado', desc: 'Botão de contato direto para o cliente chegar até você em segundos.' },
  { icon: '🤝', title: 'Atendimento próximo', desc: 'Você fala diretamente com a equipe. Sem intermediários, sem demora.' },
  { icon: '🔧', title: 'Soluções escaláveis', desc: 'Começa simples e cresce conforme seu negócio evolui.' },
  { icon: '⚙️', title: 'Automação e apps', desc: 'Vai além do site: automatizamos e construímos ferramentas para o seu negócio.' },
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
              <span className="text-3xl block mb-4">{d.icon}</span>
              <h3 className="font-display font-bold text-white text-sm mb-2">{d.title}</h3>
              <p className="font-body text-xs text-white/40 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

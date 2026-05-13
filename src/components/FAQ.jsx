import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { WA_LINK } from '../constants'

const faqs = [
  {
    q: 'Quanto custa um site?',
    a: 'Cada projeto é único e o investimento depende do que seu negócio precisa: tipo de site, funcionalidades, integrações e prazo. Solicite uma análise gratuita e receba uma proposta personalizada sem compromisso.',
  },
  {
    q: 'O site aparece no Google?',
    a: 'Sim. Todos os projetos incluem configuração básica de SEO: meta tags, velocidade otimizada, sitemap e configuração de indexação. Para estratégias avançadas de SEO, oferecemos serviços complementares.',
  },
  {
    q: 'Vocês fazem manutenção depois?',
    a: 'Sim. Oferecemos suporte e manutenção após a entrega. Atualizações de conteúdo, correções e melhorias podem ser acordadas em planos mensais ou sob demanda.',
  },
  {
    q: 'Vocês criam aplicativos?',
    a: 'Criamos aplicativos web e mobile — para agendamento, controle de clientes, gestão de processos e muito mais. Cada app é desenvolvido sob medida para o seu negócio.',
  },
  {
    q: 'Vocês fazem automação com WhatsApp?',
    a: 'Sim. Desenvolvemos fluxos de automação via WhatsApp para atendimento, captação de leads, envio de lembretes e confirmação de agendamentos — integrado ao seu site ou app.',
  },
  {
    q: 'Em quanto tempo o projeto fica pronto?',
    a: 'Depende do escopo. Sites e landing pages ficam prontos em 7 a 15 dias úteis. Aplicativos e sistemas personalizados têm prazo estimado na proposta. Sempre com data de entrega definida.',
  },
  {
    q: 'Posso começar com um site simples e evoluir depois?',
    a: 'Com certeza. Muitos clientes começam com um site ou landing page e depois adicionam automações, apps e sistemas conforme o negócio cresce. Construímos pensando na escalabilidade desde o início.',
  },
]

export default function FAQ() {
  const ref = useScrollReveal()
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" ref={ref} className="py-24 relative">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="section-tag">FAQ</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Perguntas <span className="text-gradient-green">frequentes</span>
          </h2>
          <p className="font-body text-white/40">Dúvidas comuns antes de solicitar um orçamento.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              data-reveal
              className={`bg-[#141414] border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'border-ffr-green/20' : 'border-white/5 hover:border-white/10'}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-bold text-white text-sm sm:text-base leading-snug">{item.q}</span>
                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-ffr-green/20 rotate-45' : 'bg-white/5'}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open === i ? '#00C853' : 'white'} strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
              </button>

              <div className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-body text-sm text-white/50 leading-relaxed px-6 pb-6">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-reveal className="text-center mt-10">
          <p className="font-body text-sm text-white/30 mb-4">Não encontrou sua dúvida?</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex">
            Falar diretamente conosco
          </a>
        </div>
      </div>
    </section>
  )
}

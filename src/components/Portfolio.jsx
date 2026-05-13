import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { WA_LINK } from '../constants'

const projects = [
  {
    name: 'F & F Instalações',
    category: 'Climatização & Segurança',
    desc: 'Site profissional para empresa de climatização e sistemas de segurança, com foco em captação de orçamentos e presença digital de autoridade.',
    tags: ['Site profissional', 'SEO', 'WhatsApp integrado'],
    color: '#00C853',
  },
  {
    name: 'Auto Elétrica e Mecânica do João',
    category: 'Oficina Bosch',
    desc: 'Site moderno para oficina autorizada Bosch com foco em transmitir credibilidade, transparência e facilidade de agendamento para os clientes.',
    tags: ['Site premium', 'Landing page', 'Mobile-first'],
    color: '#F5C842',
  },
]

const BrowserPreview = ({ project }) => (
  <div className="relative">
    <div className="bg-[#141414] rounded-2xl border border-white/8 overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0F0F0F] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"/>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"/>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"/>
        </div>
        <div className="flex-1 mx-3 bg-[#0D0D0D] rounded px-2 py-0.5 flex items-center gap-1.5">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span className="font-mono text-[9px] text-white/25">{project.name.toLowerCase().replace(/\s+/g, '-')}.com.br</span>
        </div>
      </div>
      <div className="p-4">
        <div className="rounded-xl overflow-hidden mb-3" style={{ background: `linear-gradient(135deg, ${project.color}15 0%, rgba(13,13,13,0.8) 100%)` }}>
          <div className="p-4">
            <div className="w-20 h-2 rounded mb-2" style={{ background: `${project.color}60` }}/>
            <div className="w-40 h-4 bg-white/20 rounded mb-1"/>
            <div className="w-32 h-3 bg-white/10 rounded mb-3"/>
            <div className="flex gap-2">
              <div className="w-20 h-6 rounded" style={{ background: `${project.color}80` }}/>
              <div className="w-16 h-6 bg-white/10 rounded"/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white/4 rounded-lg p-2">
              <div className="w-4 h-4 rounded mb-2" style={{ background: `${project.color}30` }}/>
              <div className="w-full h-1.5 bg-white/10 rounded mb-1"/>
              <div className="w-2/3 h-1.5 bg-white/5 rounded"/>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute -top-3 -right-3 font-mono text-[10px] font-medium px-2.5 py-1 rounded-full border"
      style={{ color: project.color, background: `${project.color}15`, borderColor: `${project.color}30` }}>
      {project.category}
    </div>
  </div>
)

export default function Portfolio() {
  const ref = useScrollReveal()

  return (
    <section id="portfolio" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ffr-blue/2 to-transparent pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="section-tag">Portfólio</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Nossos <span className="text-gradient-green">projetos</span>
          </h2>
          <p className="font-body text-white/40 max-w-xl mx-auto">
            Soluções digitais desenvolvidas para negócios locais que queriam fortalecer sua presença online e atrair mais clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              data-reveal
              className="group bg-[#141414] border border-white/5 rounded-2xl p-7 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <BrowserPreview project={project} />

              <div className="mt-7">
                <h3 className="font-display font-black text-xl text-white mb-1">{project.name}</h3>
                <p className="font-body text-sm text-white/40 mb-4 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="font-mono text-[10px] text-white/40 bg-white/5 border border-white/8 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display font-bold text-sm px-5 py-2.5 rounded-lg border transition-all duration-300 group-hover:scale-105"
                  style={{ color: project.color, borderColor: `${project.color}30`, background: `${project.color}08` }}>
                  Quero algo assim
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

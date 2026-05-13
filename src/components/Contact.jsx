import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const WA_LINK = "https://wa.me/5545999317831?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20FFR%20do%20Brasil%20Technology%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."

const services = [
  'Site profissional',
  'Landing page',
  'Aplicativo',
  'Automação WhatsApp',
  'E-commerce',
  'Sistema personalizado',
  'Outro',
]

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', company: '', whatsapp: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Olá, vim pelo site da FFR do Brasil Technology!%0A%0ANome: ${encodeURIComponent(form.name)}%0AEmpresa: ${encodeURIComponent(form.company)}%0AServiço: ${encodeURIComponent(form.service)}%0AMensagem: ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/5545999317831?text=${msg}`, '_blank')
    setSent(true)
  }

  const inputClass = "w-full bg-[#1A1A1A] border border-white/8 rounded-xl px-4 py-3.5 font-body text-sm text-white placeholder-white/20 focus:outline-none focus:border-ffr-green/40 focus:bg-[#1E1E1E] transition-all duration-200"

  return (
    <section id="contato" ref={ref} className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,200,83,0.04) 0%, transparent 70%)' }}/>

      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="section-tag">Contato</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Solicite sua{' '}
            <span className="text-gradient-green">análise gratuita</span>
          </h2>
          <p className="font-body text-white/40 max-w-md mx-auto">
            Conta um pouco sobre seu negócio. Em até 24h, analisamos sua situação digital atual e retornamos com uma proposta.
          </p>
        </div>

        <div data-reveal className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 bg-[#141414] border border-white/5 rounded-3xl p-7">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-ffr-green/10 border border-ffr-green/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2">Mensagem enviada!</h3>
                <p className="font-body text-white/40 text-sm">Abrimos o WhatsApp para você. Retornamos em até 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-white/30 tracking-widest uppercase block mb-1.5">Nome *</label>
                    <input type="text" required placeholder="Seu nome completo" className={inputClass}
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-white/30 tracking-widest uppercase block mb-1.5">Empresa *</label>
                    <input type="text" required placeholder="Nome do seu negócio" className={inputClass}
                      value={form.company} onChange={e => setForm({...form, company: e.target.value})}/>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-white/30 tracking-widest uppercase block mb-1.5">WhatsApp *</label>
                  <input type="tel" required placeholder="(xx) 9xxxx-xxxx" className={inputClass}
                    value={form.whatsapp} onChange={e => setForm({...form, whatsapp: e.target.value})}/>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-white/30 tracking-widest uppercase block mb-1.5">Serviço desejado *</label>
                  <select required className={`${inputClass} cursor-pointer`}
                    value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                    <option value="" className="bg-[#1A1A1A]">Selecione o serviço...</option>
                    {services.map(s => <option key={s} value={s} className="bg-[#1A1A1A]">{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-white/30 tracking-widest uppercase block mb-1.5">Mensagem</label>
                  <textarea rows={4} placeholder="Conte um pouco sobre seu negócio e o que você precisa..." className={`${inputClass} resize-none`}
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base">
                  Solicitar análise gratuita
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-5 hover:bg-[#25D366]/15 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.104 1.523 5.826L.057 23.943l6.299-1.453A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.574-.49-5.065-1.348l-.361-.214-3.741.861.887-3.638-.235-.374A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm mb-0.5">Falar direto no WhatsApp</div>
                <div className="font-body text-xs text-white/40">+55 45 99931-7831</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="ml-auto opacity-30 group-hover:opacity-60 transition-opacity">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 flex-1">
              <div className="font-mono text-[10px] text-white/20 tracking-widest uppercase mb-3">Por que solicitar?</div>
              {[
                'Sem compromisso',
                'Resposta em até 24h',
                'Análise da sua situação atual',
                'Proposta personalizada',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 mb-3 last:mb-0">
                  <div className="w-4 h-4 rounded-full bg-ffr-green/20 flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="font-body text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

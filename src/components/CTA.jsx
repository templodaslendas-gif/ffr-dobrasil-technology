import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const WA_LINK = "https://wa.me/5545999317831?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20FFR%20do%20Brasil%20Technology%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."

export default function CTA() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,200,83,0.08) 0%, transparent 70%)' }}/>

      {/* Grid accent */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}/>

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <div data-reveal>
          <div className="section-tag justify-center">Vamos começar</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.05]">
            Sua empresa está pronta para{' '}
            <span className="text-gradient-green">crescer</span>{' '}
            no digital?
          </h2>
          <p className="font-body text-white/40 text-lg mb-10 max-w-xl mx-auto">
            Fale com a FFR do Brasil Technology e veja como podemos transformar sua presença digital.
          </p>
        </div>

        <div data-reveal className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contato" className="btn-primary text-base px-8 py-4">
            Solicitar orçamento
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost text-base px-8 py-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.104 1.523 5.826L.057 23.943l6.299-1.453A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.574-.49-5.065-1.348l-.361-.214-3.741.861.887-3.638-.235-.374A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

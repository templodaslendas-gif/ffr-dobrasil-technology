import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { WA_LINK } from '../constants'

export default function Video() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-24 relative">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-10">
          <div className="section-tag">Apresentação</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Conheça a FFR do Brasil{' '}
            <span className="text-gradient-green">Technology</span>
          </h2>
          <p className="font-body text-white/40 max-w-md mx-auto">
            Veja em poucos segundos como ajudamos empresas locais a venderem mais e se organizarem melhor no digital.
          </p>
        </div>

        <div data-reveal className="relative bg-[#141414] border border-white/5 rounded-3xl overflow-hidden aspect-video flex items-center justify-center group hover:border-ffr-green/20 transition-colors duration-300 cursor-pointer">
          {/* Background */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,200,83,0.06) 0%, transparent 70%)' }}/>
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}/>

          {/* Decorative ring */}
          <div className="absolute w-48 h-48 rounded-full border border-ffr-green/8 pointer-events-none"/>
          <div className="absolute w-64 h-64 rounded-full border border-ffr-green/4 pointer-events-none"/>

          {/* Play button */}
          <div className="relative flex flex-col items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-ffr-green/10 border border-ffr-green/25 flex items-center justify-center group-hover:bg-ffr-green/18 group-hover:scale-105 group-hover:border-ffr-green/40 transition-all duration-300">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#00C853">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="font-display font-semibold text-white/80 text-sm">Vídeo de apresentação</p>
              <p className="font-body text-xs text-white/30 mt-1">FFR do Brasil Technology</p>
            </div>
          </div>
        </div>

        <div data-reveal className="text-center mt-8">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.104 1.523 5.826L.057 23.943l6.299-1.453A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.574-.49-5.065-1.348l-.361-.214-3.741.861.887-3.638-.235-.374A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  )
}

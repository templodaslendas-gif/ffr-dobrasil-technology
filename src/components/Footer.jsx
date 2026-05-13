import React from 'react'

const WA_LINK = "https://wa.me/5545999317831?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20FFR%20do%20Brasil%20Technology%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 flex items-center justify-center">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect width="36" height="36" rx="8" fill="#00C853"/>
        <path d="M8 10h12v4H12v4h7v4h-7v4H8V10z" fill="#0D0D0D"/>
        <path d="M21 10h7l-4 8 4 8h-7l-4-8 4-8z" fill="#0D0D0D" opacity="0.7"/>
      </svg>
    </div>
    <div className="leading-tight">
      <div className="font-display font-800 text-sm text-white tracking-tight">FFR do Brasil</div>
      <div className="font-mono text-[9px] text-ffr-green tracking-widest uppercase">Technology</div>
    </div>
  </div>
)

const navSections = [
  {
    title: 'Navegação',
    links: [
      { label: 'Início', href: '#inicio' },
      { label: 'Soluções', href: '#solucoes' },
      { label: 'Portfólio', href: '#portfolio' },
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { label: 'Sites profissionais', href: '#solucoes' },
      { label: 'Landing pages', href: '#solucoes' },
      { label: 'Aplicativos', href: '#solucoes' },
      { label: 'Automação WhatsApp', href: '#solucoes' },
      { label: 'E-commerce', href: '#solucoes' },
      { label: 'Sistemas personalizados', href: '#solucoes' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="font-body text-sm text-white/30 leading-relaxed mt-4 mb-6 max-w-xs">
              Ajudamos empresas a crescerem e faturarem mais no digital. Sites, apps e automações para negócios locais.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-[#25D366] hover:text-green-300 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.104 1.523 5.826L.057 23.943l6.299-1.453A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.574-.49-5.065-1.348l-.361-.214-3.741.861.887-3.638-.235-.374A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              +55 45 99931-7831
            </a>
          </div>

          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-mono text-[10px] text-white/20 tracking-widest uppercase mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-body text-sm text-white/40 hover:text-white/70 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] text-white/20 tracking-widest uppercase mb-4">Contato</h4>
            <div className="space-y-3">
              <div>
                <div className="font-mono text-[9px] text-white/15 uppercase tracking-widest mb-0.5">WhatsApp</div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="font-body text-sm text-white/40 hover:text-white/70 transition-colors">
                  +55 45 99931-7831
                </a>
              </div>
              <div>
                <div className="font-mono text-[9px] text-white/15 uppercase tracking-widest mb-0.5">E-mail</div>
                <span className="font-body text-sm text-white/20 italic">em breve</span>
              </div>
              <div>
                <div className="font-mono text-[9px] text-white/15 uppercase tracking-widest mb-2">Redes sociais</div>
                <div className="flex gap-3">
                  {['instagram', 'facebook', 'linkedin'].map((social) => (
                    <div key={social}
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center cursor-not-allowed opacity-30"
                      title="Em breve">
                      <span className="font-mono text-[8px] text-white/40 uppercase">{social[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/20">
            © {new Date().getFullYear()} FFR do Brasil Technology. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[10px] text-white/15 tracking-wide">
            Desenvolvido com 💚 pela própria FFR
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white py-16 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo-mascote.png"
                alt="Brotu mascote"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-black tracking-tighter uppercase italic">
                Brotu.
              </span>
            </div>
            <p className="text-[#FDFBF7]/50 text-sm font-bold leading-relaxed mb-6">
              Impulsionando o growth orgânico de creators que buscam relevância
              real no digital.
            </p>
            <div className="flex gap-3">
              {["ig", "tk", "yt", "x"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:bg-[#EF5E28] hover:text-black hover:border-black transition-all cursor-pointer uppercase text-[10px] font-black"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#EF5E28] mb-6">
              Growth
            </h4>
            <ul className="space-y-3 text-sm font-bold text-white/40">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  A Brotu
                </a>
              </li>
              <li>
                <a
                  href="#workflow"
                  className="hover:text-white transition-colors"
                >
                  Manifesto
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Planos de Growth
                </a>
              </li>
            </ul>
          </div>

          {/*<div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#EF5E28] mb-6">
              Comunidade
            </h4>
            <ul className="space-y-3 text-sm font-bold text-white/40">
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>*/}

          {/*<div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#EF5E28] mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm font-bold text-white/40">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>*/}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
          <p>
            &copy; {currentYear} BROTU GROWTH. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="text-center md:text-right">
            A RELEVÂNCIA É FRUTO DA CONSTÂNCIA.
          </p>
        </div>
      </div>
    </footer>
  );
}

const steps = [
  {
    emoji: "🌱",
    title: "Plantar",
    text: "Voce entra com sua essencia, nicho e voz unica.",
  },
  {
    emoji: "💧",
    title: "Cultivar",
    text: "A inteligencia da Brotu organiza sua rotina e potencializa sua criacao.",
  },
  {
    emoji: "🌤️",
    title: "Evoluir",
    text: "Constancia diaria nas redes para manter o algoritmo sempre aquecido.",
  },
  {
    emoji: "🌳",
    title: "Colher",
    text: "Alcance organico real, autoridade de marca e uma audiencia fiel.",
  },
];

export default function MetaphorSection() {
  return (
    <section
      className="py-24 bg-[#FDFBF7] relative overflow-hidden"
      id="workflow"
    >
      {/* Stickers decorativos */}
      <div className="absolute top-12 left-[24%] hidden lg:block">
        <img
          src="/sticker-1.png"
          alt="Brotu sticker"
          className="w-48 h-48 object-contain -rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 bg-[#003B5C] text-white text-xs font-black uppercase tracking-widest mb-6 border-2 border-black">
          O CAMINHO DO GROWTH
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-16 leading-[0.9] uppercase tracking-tighter">
          SUA VISÃO. <br />
          <span className="text-[#EF5E28]">NOSSA EXECUÇÃO.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line (hidden on mobile) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#1A1A1A]/10 -translate-y-1/2 hidden md:block" />

          {steps.map((item, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className="bg-white border-4 border-[#1A1A1A] p-10 shadow-[8px_8px_0_#1A1A1A] group-hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl mb-6">{item.emoji}</div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-sm text-black/60 font-bold leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-[#FFD166] p-10 border-4 border-black shadow-[10px_10px_0_#1A1A1A]">
          <p className="text-2xl sm:text-3xl font-black italic uppercase leading-tight">
            "A BROTU NAO E SOBRE FAZER MENOS, E SOBRE ALCANCAR MAIS COM A
            ESTRATEGIA CERTA."
          </p>
          <p className="mt-6 font-black text-xs uppercase opacity-50 tracking-[0.3em]">
            — MANIFESTO BROTU
          </p>
        </div>
      </div>
    </section>
  );
}

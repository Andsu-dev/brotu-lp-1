const scenarios = [
  {
    title: "O Abismo do Algoritmo",
    desc: "Um dia sem postar e sua relevancia despenca. O crescimento organico exige uma presenca que o tempo humano sozinho nao consegue sustentar.",
    icon: "📉",
    tag: "O RISCO",
  },
  {
    title: "Burnout Criativo",
    desc: "Tentar criar sob pressao mata a alma da sua marca. Voce gasta horas e acaba com conteudos vazios que nao geram autoridade.",
    icon: "🧠",
    tag: "A BARREIRA",
  },
  {
    title: "Janelas de Oportunidade",
    desc: "As tendencias passam rapido demais. Sem a agilidade da Brotu, voce chega atrasado em todas as conversas do seu nicho.",
    icon: "⌛",
    tag: "O ATRASO",
  },
  {
    title: "O Silencio da Audiencia",
    desc: "Seguidores esperam interacao. Demorar para responder e o caminho mais rapido para ser esquecido pelo seu publico e pelo algoritmo.",
    icon: "🔇",
    tag: "A FALHA",
  },
];

export default function ProblemSection() {
  return (
    <section
      className="py-32 bg-[#003B5C] relative overflow-hidden border-y-4 border-black"
      id="problem"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EF5E28] text-white text-xs font-black uppercase tracking-widest mb-6 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            O DESAFIO REAL
          </div>
          <h2 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            CRESCER NO ORGANICO <br />
            <span className="text-[#EF5E28]">EXIGE CONSTANCIA.</span>
          </h2>
          <p className="text-xl text-white/70 font-bold max-w-2xl mx-auto leading-relaxed">
            Ter um perfil relevante nao e sorte. E sobre estar presente, com
            estrategia e qualidade, todos os dias.{" "}
            <span className="text-white underline decoration-4 decoration-[#EF5E28]">
              A Brotu resolve o que te impede de ser visto.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenarios.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-4 border-black p-10 shadow-[10px_10px_0px_#1A1A1A] group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-6xl group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </span>
                <span className="px-3 py-1 bg-black text-white text-[10px] font-black tracking-widest uppercase">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter leading-tight">
                {item.title}
              </h3>
              <p className="text-black/60 font-bold text-base leading-relaxed italic">
                "{item.desc}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#EF5E28] border-4 border-black p-12 text-center relative shadow-[12px_12px_0_#1A1A1A]">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border-2 border-black px-6 py-2 text-xs font-black uppercase tracking-widest">
            A SOLUCAO BROTU
          </div>
          <p className="text-2xl sm:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
            "PARE DE CAVAR SOZINHO. <br className="sm:hidden" /> COMECE A COLHER
            COM A BROTU."
          </p>
        </div>
      </div>
    </section>
  );
}

const scenarios = [
  {
    title: "Tudo Depende de Você",
    desc: "Postar, adaptar formato, escrever legenda, responder comentários. Quando tudo passa por você, a constância vira exaustão.",
    icon: "🧱",
    tag: "O PESO",
  },
  {
    title: "Rotina Quebrada",
    desc: "Sem processo, cada post vira um recomeço. Você cria muito, mas publica pouco — e quase nunca no ritmo ideal.",
    icon: "📆",
    tag: "O CAOS",
  },
  {
    title: "Conteúdos Perdidos",
    desc: "Vídeos bons ficam esquecidos. Falta tempo para reaproveitar, organizar e extrair valor do que você já criou.",
    icon: "🗂️",
    tag: "O DESPERDÍCIO",
  },
  {
    title: "Tudo Manual",
    desc: "Publicar rede por rede, todos os dias, consome energia criativa que deveria estar indo para o conteúdo.",
    icon: "⏳",
    tag: "O ATRITO",
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
            CONSTÂNCIA NÃO FALTA IDEIA. <br />
            <span className="text-[#EF5E28]">FALTA PROCESSO.</span>
          </h2>
          <p className="text-xl text-white/70 font-semibold max-w-2xl mx-auto leading-relaxed">
            Criar conteúdo não é o problema. O problema é manter tudo rodando
            todos os dias — postar, organizar, reaproveitar e responder — sem se
            perder no caminho.{" "}
            <span className="text-white underline decoration-4 decoration-[#EF5E28]">
              A Brotu resolve isso para você.
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
            A SOLUÇÃO BROTU
          </div>
          <p className="text-2xl sm:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
            "Você cria. <br className="sm:hidden" /> A Brotu mantém tudo
            crescendo."
          </p>
        </div>
      </div>
    </section>
  );
}

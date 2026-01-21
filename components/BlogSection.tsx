import { useWaitlist } from "../context/WaitlistContext";

const upcomingPosts = [
  {
    title: "Como hackear o algoritmo do Instagram em 2024",
    category: "Growth",
    color: "bg-[#EF5E28]",
  },
  {
    title: "5 erros que estao matando seu engajamento",
    category: "Estrategia",
    color: "bg-[#003B5C]",
  },
  {
    title: "O guia definitivo para creators iniciantes",
    category: "Guia",
    color: "bg-[#FFD166]",
  },
];

export default function BlogSection() {
  const { openModal } = useWaitlist();

  return (
    <section
      className="py-24 bg-[#FDFBF7] border-t-4 border-black relative overflow-hidden"
      id="blog"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#8CC63F] text-black border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-[4px_4px_0_#000]">
            BLOG BROTU
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            CONTEUDO <br />
            <span className="text-[#EF5E28]">EM BREVE.</span>
          </h2>
          <p className="text-xl text-black/50 font-bold max-w-2xl mx-auto">
            Ta chegando conteudo de qualidade pra te ajudar a dominar o jogo do
            growth organico. Fica ligado!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_#1A1A1A] group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative"
            >
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
                <div className="bg-[#1A1A1A] text-white px-6 py-3 border-2 border-black font-black text-sm uppercase tracking-widest -rotate-6 shadow-[4px_4px_0_#EF5E28]">
                  Em Breve
                </div>
              </div>

              <div
                className={`inline-block px-3 py-1 ${post.color} text-xs font-black uppercase tracking-widest mb-4 border-2 border-black ${post.color === "bg-[#FFD166]" ? "text-black" : "text-white"}`}
              >
                {post.category}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter leading-tight mb-4">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-black/40 text-sm font-bold">
                <span>5 min de leitura</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#FFD166] border-4 border-black p-6 shadow-[8px_8px_0_#1A1A1A]">
            <img
              src="/logo-mascote.png"
              alt="Brotu mascote"
              className="w-16 h-16 object-contain"
            />
            <div className="text-center sm:text-left">
              <p className="font-black text-lg uppercase tracking-tighter">
                Quer ser avisado?
              </p>
              <p className="text-sm font-bold text-black/60">
                Entra na lista de espera e recebe tudo em primeira mao!
              </p>
            </div>
            <button
              onClick={openModal}
              className="bg-[#1A1A1A] text-white px-6 py-3 border-2 border-black font-black text-xs uppercase tracking-widest hover:bg-[#EF5E28] transition-colors"
            >
              Quero!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import MetaphorSection from "./components/MetaphorSection";
import Pricing from "./components/Pricing";
import BlogSection from "./components/BlogSection";
import WaitlistModal from "./components/WaitlistModal";
import Footer from "./components/Footer";
import Sticker from "./components/Sticker";
import { WaitlistProvider, useWaitlist } from "./context/WaitlistContext";

const features = [
  {
    title: "Curadoria de Nicho",
    desc: "Inteligencia que aprende sua voz. A Brotu nao gera posts genericos, ela entende sua marca para criar conexao real.",
    icon: "🎯",
    color: "bg-white",
    dark: false,
  },
  {
    title: "Faro de Growth",
    desc: "Monitoramos as tendencias do seu nicho 24h. A Brotu te posiciona no centro do que esta acontecendo agora.",
    icon: "📈",
    color: "bg-[#FFD166]",
    dark: false,
  },
  {
    title: "Constancia Imbativel",
    desc: "A Brotu garante que voce nunca fique em silencio. Organizamos seu calendario para uma presenca onipresente.",
    icon: "⚡",
    color: "bg-[#003B5C]",
    dark: true,
  },
  {
    title: "Engajamento Ativo",
    desc: "Interaja com sua audiencia com agilidade. A Brotu ajuda voce a responder cada comentario, aquecendo sua comunidade.",
    icon: "🤝",
    color: "bg-[#8CC63F]",
    dark: false,
  },
  {
    title: "Distribuicao Brotu",
    desc: "Sua mensagem, em todo lugar, no formato certo. Do Reels ao X, a Brotu adapta sua essencia para cada rede.",
    icon: "🔄",
    color: "bg-white",
    dark: false,
  },
  {
    title: "Analise de Relevancia",
    desc: "Chega de metricas vazias. Foque nos dados que realmente constroem autoridade e trazem seguidores qualificados.",
    icon: "💎",
    color: "bg-[#EF5E28]",
    dark: true,
  },
];

const marqueeItems = [
  "🗓️ Agende seus posts com facilidade",
  "🔥 Acompanhe o que viraliza no seu nicho",
  "💡 Fuja do bloqueio criativo",
  "🚀 Impulsione seu conteudo com IA",
  "🌱 Cresca no organico com a Brotu",
];

function AppContent() {
  const { isOpen, closeModal, openModal } = useWaitlist();

  return (
    <div className="min-h-screen selection:bg-[#EF5E28] selection:text-white">
      <Navbar />

      <main>
        <Hero />

        {/* Marquee Ticker - Creator Economy */}
        <div className="bg-[#EF5E28] py-4 overflow-hidden border-y-[4px] border-black flex items-center rotate-[-1deg] relative z-30">
          <div className="flex whitespace-nowrap animate-[marquee_45s_linear_infinite] gap-12 text-white font-black text-2xl uppercase italic">
            {[...Array(6)].map((_, i) =>
              marqueeItems.map((item, j) => (
                <span key={`${i}-${j}`}>
                  {item}
                  <span className="text-black ml-12">✦</span>
                </span>
              )),
            )}
          </div>
        </div>

        {/* Features Section */}
        <section className="py-32 bg-[#FDFBF7]" id="features">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Sticker
              text="A IMPORTANCIA DA BROTU"
              variant="blue"
              className="mb-8"
              rotation="2deg"
            />
            <h2 className="text-5xl sm:text-8xl font-black mb-12 uppercase tracking-tighter leading-none">
              MUITO MAIS QUE <br />
              <span className="text-[#EF5E28]">CONTEUDO AUTOMATICO.</span>
            </h2>
            <p className="text-xl text-black/60 mb-20 font-bold max-w-3xl mx-auto leading-relaxed">
              A Brotu e o braco direito do creator moderno. Nao trabalhamos no
              seu lugar; potencializamos sua estrategia para que seu Growth
              nunca pare. Mantemos sua marca pulsando enquanto voce foca na
              visao que so voce tem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className={`p-10 text-left border-[4px] border-black shadow-[8px_8px_0px_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group ${feat.color} ${feat.dark ? "text-white" : "text-black"}`}
                >
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">
                    {feat.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-tight">
                    {feat.title}
                  </h3>
                  <p
                    className={`text-sm font-bold leading-relaxed ${feat.dark ? "opacity-70" : "opacity-60"}`}
                  >
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProblemSection />

        <MetaphorSection />

        {/* Value Prop: Collaboration and Consistency */}
        <section className="py-24 bg-[#F5F5F5] border-y-[4px] border-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                  RECUPERE SEU TEMPO PARA{" "}
                  <span className="text-[#EF5E28]">ESTRATEGIA.</span>
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start border-l-[6px] border-[#003B5C] pl-8">
                    <div>
                      <p className="font-black text-2xl uppercase tracking-tighter">
                        Growth Sem Exaustao
                      </p>
                      <p className="text-base font-bold opacity-60 mt-2">
                        A Brotu cuida da execucao repetitiva para voce focar no
                        que e insubstituivel: sua visao.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start border-l-[6px] border-[#EF5E28] pl-8">
                    <div>
                      <p className="font-black text-2xl uppercase tracking-tighter">
                        Presenca Digital Viva
                      </p>
                      <p className="text-base font-bold opacity-60 mt-2">
                        O algoritmo exige frequencia. A Brotu entrega a
                        constancia que sua marca precisa para nunca ser
                        esquecida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[450px] bg-white border-4 border-black p-10 rotate-1 shadow-[12px_12px_0_#1A1A1A] text-center">
                <div className="space-y-6">
                  <p className="text-6xl">🔥</p>
                  <p className="font-black text-3xl uppercase tracking-tighter leading-none">
                    "A Brotu e o combustivel que faltava para o seu growth."
                  </p>
                  <p className="text-xs font-black opacity-40 uppercase tracking-[0.2em]">
                    — Creator Brotu
                  </p>
                  <div className="pt-6 border-t-2 border-black/10">
                    <button
                      onClick={openModal}
                      className="retro-btn-primary w-full py-4 font-black uppercase tracking-widest text-sm"
                    >
                      Faca sua marca crescer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Pricing />

        <BlogSection />
      </main>

      <Footer />

      {/* Modal de Waitlist */}
      <WaitlistModal isOpen={isOpen} onClose={closeModal} />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <WaitlistProvider>
      <AppContent />
    </WaitlistProvider>
  );
}

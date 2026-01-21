import { useWaitlist } from "../context/WaitlistContext";

const plans = [
  {
    name: "Iniciante",
    price: "R$ 79/mês",
    description: "Para quem está iniciando seu jardim digital.",
    features: [
      "Monitor de tendências",
      "Gestão de todas as suas redes",
      "Calendário estratégico",
      "Suporte premium",
      "Automações personalizadas",
    ],
    color: "bg-white",
    textColor: "text-[#1A1A1A]",
    buttonColor: "bg-[#EF5E28] text-white",
  },
  {
    name: "Pro",
    price: "R$ 197/mês",
    description: "Para creators que buscam crescimento acelerado.",
    features: [
      "Tudo do plano Iniciante +",
      "Automação de engajamento",
      "Analytics de relevância",
      "Criação de conteúdo com Brotu AI",
    ],
    badge: "O FAVORITO",
    color: "bg-[#EF5E28]",
    textColor: "text-white",
    buttonColor: "bg-white text-black",
  },
  {
    name: "Empresas",
    price: "R$ 497/mês",
    description: "Para marcas e agências de alto impacto.",
    features: [
      "Tudo do Iniciante + Pro +",
      "Maior quantidade de contas",
      "Mais automações por perfil",
      "Aprovação de conteúdo em equipe",
      "Dashboard de performance de todas as contas",
      "API de integração",
      "CRM",
    ],
    color: "bg-[#1A1A1A]",
    textColor: "text-white",
    buttonColor: "bg-[#FFD166] text-black",
  },
];

export default function Pricing() {
  const { openModal } = useWaitlist();

  return (
    <section
      className="py-32 bg-[#F5F5F5] border-t-4 border-black relative overflow-hidden"
      id="pricing"
    >
      {/* Stickers decorativos */}
      <div className="absolute top-0 right-[25%] z-20 hidden lg:block pointer-events-none">
        <img
          src="/sticker-2.png"
          alt="Brotu sticker"
          className="w-64 h-64 object-contain rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 bg-[#FFD166] text-black border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-[4px_4px_0_#000]">
          PLANOS DE GROWTH
        </div>
        <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
          INVISTA EM SUA <br />
          <span className="text-[#EF5E28]">RELEVANCIA.</span>
        </h2>
        <p className="text-xl text-black/50 mb-20 font-bold max-w-2xl mx-auto">
          Quanto custa ser invisivel para o seu publico? <br />
          Escolha como quer que a Brotu impulsione sua marca.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col p-12 border-4 border-[#1A1A1A] shadow-[10px_10px_0_#1A1A1A] text-left transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${plan.color} ${plan.textColor}`}
            >
              {plan.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-2 text-[10px] font-black uppercase tracking-widest border-2 border-white">
                  {plan.badge}
                </div>
              )}

              <div className="mb-10">
                <p className="text-lg font-black uppercase tracking-widest opacity-60 mb-2">
                  {plan.name}
                </p>
                <p className="text-5xl font-black mb-4 tracking-tighter">
                  {plan.price}
                </p>
                <p className="text-sm font-bold leading-relaxed opacity-70">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-4 font-bold text-sm"
                  >
                    <span className="w-6 h-6 bg-black/10 shrink-0 flex items-center justify-center border border-black/20">
                      ✓
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                onClick={openModal}
                className={`w-full py-5 font-black uppercase tracking-widest border-4 border-black shadow-[6px_6px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-center ${plan.buttonColor}`}
              >
                LISTA DE ESPERA
              </button>
            </div>
          ))}
        </div>
        <p className="mt-16 text-xs font-black uppercase opacity-40 tracking-[0.2em] italic">
          Vagas limitadas • O Growth da sua marca comeca aqui
        </p>
      </div>
    </section>
  );
}

import { useWaitlist } from "../context/WaitlistContext";

export default function Hero() {
  const { openModal } = useWaitlist();

  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      <div className="absolute top-20 -left-10 w-40 h-40 bg-[#EF5E28]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-widest mb-10 border-2 border-black shadow-[4px_4px_0px_#EF5E28]">
          CONSTRUIDO PARA CREATORS
        </div>

        <h1
          className="text-5xl sm:text-7xl lg:text-[85px]
          font-black
          leading-[1.02]
          uppercase
          tracking-tight
          text-[#1A1A1A]"
          style={{ wordSpacing: "0.25em" }}
        >
          Crie uma vez.
          <br className="hidden sm:block" />
          Publique em
          <br />
          <span className="inline-block bg-[#EF5E28] text-white border-4 border-black px-4 py-1 mt-4 -rotate-1">
            todos os lugares.
          </span>
        </h1>

        <div className="max-w-2xl mx-auto mt-6">
          <p className="text-lg sm:text-xl font-medium text-[#1A1A1A]/70 leading-relaxed mb-10">
            Automatize sua rotina de creator com a Brotu. Publique em várias
            plataformas, reaproveite conteúdos e mantenha consistência
            <span className="block font-black text-black mt-2">
              sem trabalho manual.
            </span>
          </p>
        </div>

        {/* Social Icons Row */}

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            {["instagram", "tiktok", "youtube", "x", "facebook"].map(
              (social) => (
                <div
                  key={social}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-[3px] border-black shadow-[4px_4px_0px_#003B5C] flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${social === "x" ? "x" : social}/000000`}
                    alt={social}
                    className="w-6 h-6"
                  />
                </div>
              ),
            )}
          </div>
          <p className="text-xs font-black uppercase opacity-40 mb-10 tracking-widest">
            Tudo em um só lugar
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
          <button
            onClick={openModal}
            className="w-full sm:w-auto px-12 py-5 retro-btn-primary text-lg font-black uppercase tracking-tight flex items-center justify-center gap-3"
          >
            Entrar na Lista de Espera
          </button>
          <a
            href="#features"
            className="w-full sm:w-auto px-12 py-5 retro-btn-secondary text-lg font-black uppercase tracking-tight text-center"
          >
            Ver como funciona
          </a>
        </div>
      </div>
    </section>
  );
}

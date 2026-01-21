import { useWaitlist } from "../context/WaitlistContext";

export default function Navbar() {
  const { openModal } = useWaitlist();

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7] border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center group cursor-pointer">
          <img
            src="/logo-mascote.png"
            alt="Brotu mascote"
            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="text-3xl font-black tracking-tighter uppercase italic">
            Brotu <span className="text-[#EF5E28]">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10 font-black text-xs uppercase tracking-widest">
          <a
            href="#features"
            className="hover:text-[#EF5E28] transition-colors"
          >
            Recursos
          </a>
          <a
            href="#workflow"
            className="hover:text-[#EF5E28] transition-colors"
          >
            Como funciona
          </a>
          <a href="#pricing" className="hover:text-[#EF5E28] transition-colors">
            Planos
          </a>
          <a href="#blog" className="hover:text-[#EF5E28] transition-colors">
            Blog
          </a>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={openModal}
            className="bg-[#1A1A1A] text-white px-6 py-3 border-2 border-black font-black text-xs uppercase tracking-widest shadow-[4px_4px_0_#EF5E28] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Lista de Espera
          </button>
        </div>
      </div>
    </nav>
  );
}

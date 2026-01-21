import { useState, FormEvent, ChangeEvent, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  instagram: string;
  niche: string;
}

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    instagram: "",
    niche: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Bloqueia scroll do body quando modal esta aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Fecha modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados do formulario:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    onClose();
    // Reset form after closing
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", instagram: "", niche: "" });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border-4 border-black shadow-[12px_12px_0_#1A1A1A] animate-[modalIn_0.2s_ease-out]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 bg-[#1A1A1A] text-white border-2 border-black font-black text-xl flex items-center justify-center hover:bg-[#EF5E28] transition-colors z-10"
        >
          ✕
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center">
            <img
              src="/logo-mascote.png"
              alt="Brotu mascote"
              className="w-28 h-28 object-contain mx-auto mb-6 animate-bounce"
            />
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4 text-[#1A1A1A]">
              SEMENTE PLANTADA!
            </h3>
            <p className="text-lg font-bold text-black/60 mb-6">
              Voce ta dentro, {formData.name.split(" ")[0]}! Agora e so aguardar
              que a gente vai te avisar quando for a hora de colher os
              resultados.
            </p>
            <div className="bg-[#FFD166] border-2 border-black p-4 inline-block mb-6">
              <p className="font-black text-sm uppercase tracking-widest">
                Fique de olho no seu email
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-full py-4 bg-[#1A1A1A] text-white font-black uppercase tracking-widest border-4 border-black hover:bg-[#EF5E28] transition-colors"
            >
              Fechar
            </button>
          </div>
        ) : (
          <div className="p-8 sm:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD166] text-black text-xs font-black uppercase tracking-widest mb-4 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                NÃO PERCA
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-none mb-3">
                BORA CRESCER <span className="text-[#EF5E28]">JUNTOS?</span>
              </h2>
              <p className="text-base text-black/60 font-bold">
                Garanta seu lugar e seja um dos primeiros!
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                {/* Nome */}
                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2 text-[#1A1A1A]">
                    Como a gente te chama?
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome maneiro"
                    required
                    className="w-full px-4 py-3 border-2 border-black font-bold text-base focus:outline-none focus:shadow-[4px_4px_0_#EF5E28] transition-shadow"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2 text-[#1A1A1A]">
                    Seu melhor email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@exemplo.com"
                    required
                    className="w-full px-4 py-3 border-2 border-black font-bold text-base focus:outline-none focus:shadow-[4px_4px_0_#EF5E28] transition-shadow"
                  />
                </div>

                {/* Instagram */}
                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2 text-[#1A1A1A]">
                    Seu @ no Instagram
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-base text-black/40">
                      @
                    </span>
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder="seuarroba"
                      className="w-full pl-10 pr-4 py-3 border-2 border-black font-bold text-base focus:outline-none focus:shadow-[4px_4px_0_#EF5E28] transition-shadow"
                    />
                  </div>
                </div>

                {/* Nicho */}
                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2 text-[#1A1A1A]">
                    Qual e a sua vibe?
                  </label>
                  <select
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black font-bold text-base focus:outline-none focus:shadow-[4px_4px_0_#EF5E28] transition-shadow bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Escolhe ai seu nicho</option>
                    <option value="lifestyle">Lifestyle & Dia a dia</option>
                    <option value="tech">Tech & Inovacao</option>
                    <option value="fitness">Fitness & Saude</option>
                    <option value="beauty">Beleza & Moda</option>
                    <option value="food">Gastronomia</option>
                    <option value="business">
                      Negocios & Empreendedorismo
                    </option>
                    <option value="education">Educacao & Cursos</option>
                    <option value="entertainment">
                      Entretenimento & Humor
                    </option>
                    <option value="travel">Viagens</option>
                    <option value="other">Outro nicho daora</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-4 bg-[#EF5E28] text-white font-black text-base uppercase tracking-widest border-4 border-black shadow-[6px_6px_0_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3"
              >
                Quero fazer parte
                <img
                  src="/logo-mascote.png"
                  alt="Brotu"
                  className="w-7 h-7 object-contain"
                />
              </button>

              <p className="text-center mt-4 text-xs font-bold text-black/40 uppercase tracking-widest">
                Relaxa, a gente odeia spam tanto quanto voce
              </p>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

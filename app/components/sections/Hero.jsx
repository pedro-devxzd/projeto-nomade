export default function Hero() {
  const btnPrimary =
    "relative overflow-hidden bg-[#C9A84C] text-black px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-500 hover:bg-[#E8C97A] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(201,168,76,0.25)]";

  const btnSecondary =
    "relative overflow-hidden border border-[#C9A84C] text-[#C9A84C] px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-500 hover:bg-[#C9A84C] hover:text-black hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(201,168,76,0.20)]";

  return (
    <section className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="hero-glow w-[450px] h-[450px] rounded-full bg-[#C9A84C] opacity-[0.05] blur-[140px]"></div>
      </div>

      <div className="text-center max-w-2xl w-full relative z-10">
        <div className="fade-up flex items-center justify-center gap-3 mb-8">
          <div className="w-6 h-px bg-[#C9A84C]"></div>

          <p className="text-[#C9A84C] text-xs uppercase tracking-[3px]">
            Dentística Estética
          </p>

          <div className="w-6 h-px bg-[#C9A84C]"></div>
        </div>

        <h1 className="fade-up fade-up-delay-1 font-playfair text-4xl sm:text-6xl md:text-7xl font-bold text-[#F5F5F5] leading-tight mb-3">
          Dra. Maria Alice
        </h1>

        <p className="font-playfair text-lg sm:text-xl text-[#C9A84C] italic mb-2">
          Gonçalves de Barros Vieira
        </p>

        <p className="text-[#999999] text-xs tracking-[3px] uppercase mb-8">
          CRO 74548 · Barbacena & Conselheiro Lafaiete — MG
        </p>

        <div className="w-px h-12 bg-[#2A2A2A] mx-auto mb-8"></div>

        <p className="fade-up fade-up-delay-2 text-[#999999] text-sm leading-relaxed max-w-md mx-auto mb-10 px-2">
          Especialista em Dentística Estética com atuação em facetas,
          clareamento dental e odontologia digital utilizando scanner iTero,
          oferecendo tratamentos personalizados para resultados naturais,
          precisos e duradouros.
        </p>

        <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row gap-3 justify-center px-4">
          <a
            href="https://wa.me/5532984592632"
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            Agendar Avaliação
          </a>

          <a
            href="https://www.instagram.com/marialicegbv/"
            target="_blank"
            rel="noopener noreferrer"
            className={btnSecondary}
          >
            Ver Instagram
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-16">
          <div className="text-center">
            <p className="font-playfair text-2xl text-[#C9A84C]">2020</p>
            <p className="text-[#999999] text-xs uppercase tracking-[1px] mt-1">
              Início Clínico
            </p>
          </div>

          <div className="w-px bg-[#2A2A2A]"></div>

          <div className="text-center">
            <p className="font-playfair text-2xl text-[#C9A84C]">iTero</p>
            <p className="text-[#999999] text-xs uppercase tracking-[1px] mt-1">
              Scanner Digital
            </p>
          </div>

          <div className="w-px bg-[#2A2A2A]"></div>

          <div className="text-center">
            <p className="font-playfair text-2xl text-[#C9A84C]">Digital</p>
            <p className="text-[#999999] text-xs uppercase tracking-[1px] mt-1">
              Planejamento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

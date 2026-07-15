export default function Hero() {
  const btnPrimary =
    "bg-[#C9A84C] text-black px-7 py-4 text-xs font-bold uppercase tracking-[2px] hover:bg-[#E4C46F] transition-all duration-300";

  const btnSecondary =
    "border border-[#C9A84C] text-[#C9A84C] px-7 py-4 text-xs font-bold uppercase tracking-[2px] hover:bg-[#C9A84C] hover:text-black transition-all duration-300";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#050505] px-6">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[650px] h-[650px] rounded-full bg-[#C9A84C] opacity-[0.06] blur-[180px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#C9A84C]" />
              <p className="text-[#C9A84C] uppercase tracking-[4px] text-xs">
                Dentística Estética
              </p>
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl leading-tight text-white font-bold">
              Transformando
              <span className="block text-[#C9A84C]">sorrisos</span>
              com precisão, estética e tecnologia.
            </h1>

            <p className="mt-8 text-[#B3B3B3] leading-8 text-lg max-w-xl">
              Facetas, clareamento e odontologia digital para quem busca um
              sorriso natural, moderno e planejado de forma totalmente
              personalizada.
            </p>

            <div className="mt-10">
              <h2 className="font-playfair text-3xl text-white">
                Dra. Maria Alice
              </h2>

              <p className="italic text-[#C9A84C] mt-1">
                Gonçalves de Barros Vieira
              </p>

              <p className="text-[#777] uppercase tracking-[2px] text-xs mt-3">
                CRO 74548 • Barbacena & Conselheiro Lafaiete
              </p>
            </div>

            {/* Selos */}

            <div className="flex flex-wrap gap-3 mt-10">
              <div className="border border-[#2B2B2B] px-4 py-2 text-sm text-[#C9A84C]">
                Scanner iTero
              </div>

              <div className="border border-[#2B2B2B] px-4 py-2 text-sm text-[#C9A84C]">
                Odontologia Digital
              </div>

              <div className="border border-[#2B2B2B] px-4 py-2 text-sm text-[#C9A84C]">
                Atendimento Personalizado
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <a
                href="https://wa.me/5532984592632"
                target="_blank"
                className={btnPrimary}
              >
                Agendar Avaliação
              </a>

              <a
                href="https://www.instagram.com/marialicegbv/"
                target="_blank"
                className={btnSecondary}
              >
                Ver Instagram
              </a>
            </div>
          </div>

          {/* Foto */}

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-[#C9A84C] blur-3xl opacity-20"></div>

              <img
                src="/maria-alice.png"
                alt="Dra Maria Alice"
                className="relative rounded-[40px] w-[470px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Estatísticas */}

        <div className="grid grid-cols-3 gap-6 mt-24 border-t border-[#1D1D1D] pt-12">
          <div>
            <h3 className="font-playfair text-4xl text-[#C9A84C]">2020</h3>

            <p className="uppercase tracking-[2px] text-xs text-[#888] mt-2">
              Início Clínico
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-4xl text-[#C9A84C]">3</h3>

            <p className="uppercase tracking-[2px] text-xs text-[#888] mt-2">
              Clínicas
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-4xl text-[#C9A84C]">iTero</h3>

            <p className="uppercase tracking-[2px] text-xs text-[#888] mt-2">
              Scanner Digital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

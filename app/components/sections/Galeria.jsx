import ScrollReveal from "../ScrollReveal";

export default function Galeria() {
  return (
    <section id="galeria" className="bg-[#0A0A0A] py-32 px-6">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]"></div>

            <p className="text-[#C9A84C] text-xs uppercase tracking-[4px]">
              Resultados
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <button
              className="
                border
                border-[#C9A84C]
                text-[#C9A84C]
                px-5
                py-2
                text-xs
                uppercase
                tracking-widest
                transition-all
                duration-300
                hover:bg-[#C9A84C]
                hover:text-black
              "
            >
              Clareamento Dental
            </button>

            <button
              className="
                border
                border-[#2A2A2A]
                text-[#666666]
                px-5
                py-2
                text-xs
                uppercase
                tracking-widest
                cursor-not-allowed
              "
            >
              Facetas
            </button>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl text-[#F5F5F5] mb-4">
            Transformações com naturalidade
          </h2>

          <div className="w-10 h-px bg-[#C9A84C] mb-8"></div>

          <p className="text-[#999999] text-sm leading-relaxed max-w-md mb-12">
            Cada sorriso é planejado de forma individual, buscando equilíbrio
            estético, harmonia e resultados que respeitam a naturalidade de cada
            paciente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Antes */}
            <div className="group overflow-hidden border border-[#2A2A2A]">
              <div className="relative overflow-hidden">
                <img
                  src="/caso-clareamento-antes.jpg"
                  alt="Antes do clareamento dental"
                  className="
                    w-full
                    aspect-[4/3]
                    object-cover
                    transition-all
                    duration-700
                    ease-out

                    md:grayscale
                    md:brightness-95
                    md:contrast-90

                    md:group-hover:grayscale-0
                    md:group-hover:brightness-100
                    md:group-hover:contrast-100
                    md:group-hover:scale-105
                  "
                />

                <span
                  className="
                    absolute
                    bottom-4
                    left-4
                    bg-[#0A0A0A]/90
                    px-4
                    py-2
                    text-[#C9A84C]
                    text-xs
                    uppercase
                    tracking-widest
                  "
                >
                  Antes
                </span>
              </div>
            </div>

            {/* Depois */}
            <div className="group overflow-hidden border border-[#2A2A2A]">
              <div className="relative overflow-hidden">
                <img
                  src="/caso-clareamento-depois.jpg"
                  alt="Depois do clareamento dental"
                  className="
                    w-full
                    aspect-[4/3]
                    object-cover
                    transition-all
                    duration-700
                    ease-out

                    md:grayscale
                    md:brightness-95
                    md:contrast-90

                    md:group-hover:grayscale-0
                    md:group-hover:brightness-100
                    md:group-hover:contrast-100
                    md:group-hover:scale-105
                  "
                />

                <span
                  className="
                    absolute
                    bottom-4
                    left-4
                    bg-[#C9A84C]
                    px-4
                    py-2
                    text-black
                    text-xs
                    uppercase
                    tracking-widest
                  "
                >
                  Depois
                </span>
              </div>
            </div>
          </div>

          <p className="hidden md:block text-center text-[#777777] text-xs uppercase tracking-[3px] mt-6">
            Passe o cursor sobre as imagens para revelar o resultado.
          </p>

          <div className="mt-12 border-t border-[#2A2A2A] pt-8">
            <h3 className="font-playfair text-2xl text-[#F5F5F5] mb-3">
              Clareamento Dental
            </h3>

            <div className="w-10 h-px bg-[#C9A84C] mb-5"></div>

            <p className="text-[#999999] text-sm leading-relaxed max-w-xl">
              Tratamento personalizado para melhorar a luminosidade do sorriso,
              mantendo proporções naturais e respeitando as características
              individuais de cada paciente.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

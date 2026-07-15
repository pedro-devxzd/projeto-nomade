import ScrollReveal from "../ScrollReveal";

export default function Galeria() {
  return (
    <section id="galeria" className="bg-[#0A0A0A] py-32 px-6">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto">
          {/* Cabeçalho */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[#C9A84C]" />

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
      text-[#666]
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

            <div className="w-10 h-px bg-[#C9A84C] mb-8" />

            <p className="text-[#999] text-sm leading-relaxed max-w-md">
              Cada sorriso é planejado de forma individual, buscando equilíbrio
              estético, harmonia e resultados que respeitam a naturalidade de
              cada paciente.
            </p>
          </div>

          {/* Caso */}
          <div
            className="
              group
              overflow-hidden
              border
              border-[#2A2A2A]
              transition-all
              duration-700
              hover:border-[#C9A84C]/50
              hover:shadow-[0_0_50px_rgba(201,168,76,0.08)]
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Antes */}
              <div className="relative overflow-hidden">
                <img
                  src="/caso-clareamento-antes.jpg"
                  alt="Antes do clareamento dental"
                  className="
                    w-full
                    aspect-[4/3]
                    object-cover

                    transition-all
                    duration-1000
                    ease-out

                    md:grayscale
                    md:brightness-90

                    md:group-hover:grayscale-0
                    md:group-hover:brightness-100
                    md:group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    bg-[#0A0A0A]/80
                    backdrop-blur-sm
                    px-4
                    py-2
                  "
                >
                  <span
                    className="
                      text-[#C9A84C]
                      text-xs
                      uppercase
                      tracking-[3px]
                    "
                  >
                    Antes
                  </span>
                </div>
              </div>

              {/* Depois */}
              <div
                className="
                  relative
                  overflow-hidden
                  md:border-l
                  border-[#C9A84C]/30
                "
              >
                <img
                  src="/caso-clareamento-depois.jpg"
                  alt="Depois do clareamento dental"
                  className="
                    w-full
                    aspect-[4/3]
                    object-cover

                    transition-all
                    duration-1000
                    ease-out

                    md:grayscale
                    md:brightness-90

                    md:group-hover:grayscale-0
                    md:group-hover:brightness-105
                    md:group-hover:saturate-110
                    md:group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    top-5
                    right-5
                    bg-[#C9A84C]
                    px-4
                    py-2
                  "
                >
                  <span
                    className="
                      text-black
                      text-xs
                      uppercase
                      tracking-[3px]
                      font-semibold
                    "
                  >
                    Depois
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Texto abaixo */}
          <div className="mt-8 flex justify-center">
            <p
              className="
                text-[#666]
                text-xs
                uppercase
                tracking-[3px]
              "
            >
              Passe o cursor para revelar o resultado
            </p>
          </div>

          {/* Descrição */}
          <div className="mt-12 border-t border-[#2A2A2A] pt-8">
            <h3 className="font-playfair text-2xl text-[#F5F5F5] mb-3">
              Clareamento Dental
            </h3>

            <div className="w-10 h-px bg-[#C9A84C] mb-5" />

            <p
              className="
                text-[#999]
                text-sm
                leading-relaxed
                max-w-xl
              "
            >
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

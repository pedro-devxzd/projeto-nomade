import ScrollReveal from "../ScrollReveal";

export default function Galeria() {
  return (
    <section id="galeria" className="bg-[#0A0A0A] py-32 px-6">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto">
          {/* Título */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />

            <p className="text-[#C9A84C] text-xs uppercase tracking-[4px]">
              Resultados
            </p>
          </div>

          {/* Categorias */}
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
                hover:bg-[#C9A84C]
                hover:text-black
                transition-all
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

          <p className="text-[#999] text-sm leading-relaxed max-w-md mb-12">
            Cada sorriso é planejado de forma individual, buscando equilíbrio
            estético, harmonia e resultados que respeitam a naturalidade de cada
            paciente.
          </p>

          {/* GALERIA */}
          <div
            className="
              group
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
              md:gap-0
              overflow-hidden
              border
              border-[#2A2A2A]
              transition-all
              duration-700
              hover:border-[#C9A84C]/40
            "
          >
            {/* ANTES */}
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
                  md:brightness-90

                  md:group-hover:grayscale-0
                  md:group-hover:brightness-100
                  md:group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  bg-[#0A0A0A]/90
                  px-5
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

            {/* DEPOIS */}
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
                  duration-700
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
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  bg-[#C9A84C]
                  px-5
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

          <p
            className="
              hidden
              md:block
              text-center
              text-[#666]
              text-xs
              uppercase
              tracking-[3px]
              mt-6
            "
          >
            Passe o cursor para revelar o resultado
          </p>

          {/* Descrição */}
          <div className="mt-12 border-t border-[#2A2A2A] pt-8">
            <h3 className="font-playfair text-2xl text-[#F5F5F5] mb-3">
              Clareamento Dental
            </h3>

            <div className="w-10 h-px bg-[#C9A84C] mb-5" />

            <p className="text-[#999] text-sm leading-relaxed max-w-xl">
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

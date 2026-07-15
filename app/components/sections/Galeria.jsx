export default function Galeria() {
  return (
    <section id="galeria" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-[#C9A84C]"></div>

          <p className="text-[#C9A84C] text-xs uppercase tracking-[4px]">
            Resultados
          </p>
        </div>

        <h2 className="font-playfair text-3xl sm:text-4xl text-[#F5F5F5] mb-4">
          Transformações com naturalidade
        </h2>

        <p className="text-[#999999] text-sm leading-relaxed max-w-md mb-12">
          Cada sorriso é planejado de forma individual, buscando equilíbrio
          estético, harmonia e resultados que respeitam a naturalidade de cada
          paciente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group overflow-hidden border border-[#2A2A2A]">
            <div className="relative">
              <img
                src="/caso-clareamento-antes.jpg"
                alt="Antes do clareamento dental"
                className="
                  w-full
                  aspect-[4/3]
                  object-cover
                  transition-transform
                  duration-[8000ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute bottom-4 left-4">
                <span className="bg-[#0A0A0A]/80 px-4 py-2 text-[#C9A84C] text-xs uppercase tracking-widest">
                  Antes
                </span>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden border border-[#2A2A2A]">
            <div className="relative">
              <img
                src="/caso-clareamento-depois.jpg"
                alt="Depois do clareamento dental"
                className="
                  w-full
                  aspect-[4/3]
                  object-cover
                  transition-transform
                  duration-[8000ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute bottom-4 left-4">
                <span className="bg-[#0A0A0A]/80 px-4 py-2 text-[#C9A84C] text-xs uppercase tracking-widest">
                  Depois
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#2A2A2A] pt-8">
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
    </section>
  );
}

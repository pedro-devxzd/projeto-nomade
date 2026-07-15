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
          Sorrisos planejados
          <br />
          com naturalidade
        </h2>

        <p className="text-[#999999] text-sm max-w-md leading-relaxed mb-12">
          Cada tratamento é desenvolvido de forma personalizada, respeitando
          características individuais e buscando harmonia estética.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden border border-[#2A2A2A] group">
            <img
              src="/caso-facetas.jpg"
              alt="Caso de facetas estéticas"
              className="
                w-full
                transition-transform
                duration-[8000ms]
                ease-out
                group-hover:scale-105
              "
            />
          </div>

          <div>
            <h3 className="font-playfair text-2xl text-[#F5F5F5] mb-4">
              Facetas Estéticas
            </h3>

            <div className="w-10 h-px bg-[#C9A84C] mb-6"></div>

            <p className="text-[#999999] text-sm leading-relaxed">
              Planejamento estético personalizado para melhorar proporções,
              equilíbrio e naturalidade do sorriso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

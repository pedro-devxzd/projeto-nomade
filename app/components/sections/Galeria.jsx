export default function Galeria() {
  const casos = [
    {
      imagem: "/caso-facetas.jpg",
      titulo: "Facetas Estéticas",
      descricao:
        "Planejamento personalizado para um sorriso mais harmônico e natural.",
    },
    {
      imagem: "/caso-clareamento-depois.jpg",
      titulo: "Clareamento Dental",
      descricao:
        "Resultado obtido através de protocolo personalizado de clareamento.",
    },
  ];

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

        <p className="text-[#999999] text-sm max-w-md leading-relaxed mb-12">
          Cada sorriso é planejado de forma individual, buscando equilíbrio,
          estética e resultados que respeitam a naturalidade de cada paciente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {casos.map((caso, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                border border-[#2A2A2A]
                bg-[#111111]
              "
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={caso.imagem}
                  alt={caso.titulo}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-[8000ms]
                    ease-out
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl text-[#F5F5F5] mb-2">
                  {caso.titulo}
                </h3>

                <div className="w-8 h-px bg-[#C9A84C] mb-3"></div>

                <p className="text-[#999999] text-xs leading-relaxed">
                  {caso.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="border border-[#2A2A2A] overflow-hidden">
            <img
              src="/caso-clareamento-antes.jpg"
              alt="Antes do clareamento dental"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>

          <div className="border border-[#2A2A2A] overflow-hidden">
            <img
              src="/maria-alice-jaleco.jpg"
              alt="Dra. Maria Alice"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

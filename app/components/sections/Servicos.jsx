export default function Servicos() {
  const servicos = [
    {
      icone: "◈",
      nome: "Dentística Restauradora",
      desc: "Restaurações em resina composta com precisão, estética e acabamento natural.",
    },
    {
      icone: "◇",
      nome: "Facetas Estéticas",
      desc: "Transformação do sorriso com planejamento personalizado e resultados naturais.",
    },
    {
      icone: "✦",
      nome: "Clareamento Dental",
      desc: "Protocolos personalizados para um sorriso mais luminoso e harmônico.",
    },
    {
      icone: "✧",
      nome: "Planejamento Estético",
      desc: "Análise individual para criar tratamentos alinhados ao sorriso e ao rosto.",
    },
    {
      icone: "◉",
      nome: "Odontologia Digital",
      desc: "Recursos digitais que auxiliam no planejamento e precisão dos tratamentos.",
    },
    {
      icone: "✦",
      nome: "Clínico Geral",
      desc: "Cuidados preventivos, manutenção da saúde bucal e atendimento clínico.",
    },
  ];

  return (
    <section id="servicos" className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-px bg-[#C9A84C]"></div>

          <p className="text-[#C9A84C] text-xs uppercase tracking-[4px]">
            Especialidades
          </p>
        </div>

        <h2 className="font-playfair text-3xl sm:text-4xl text-[#F5F5F5] mb-4">
          Áreas de Atuação
        </h2>

        <div className="w-10 h-px bg-[#C9A84C] mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicos.map((s, i) => (
            <div
              key={i}
              className="
                group
                bg-[#111111]
                border border-[#2A2A2A]
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#C9A84C]
                hover:shadow-[0_20px_40px_rgba(201,168,76,0.12)]
              "
            >
              <div className="flex items-center gap-3 mb-5">
                <p className="text-[#C9A84C] text-lg">{s.icone}</p>

                <h3 className="text-[#F5F5F5] text-sm font-semibold uppercase tracking-[1px]">
                  {s.nome}
                </h3>
              </div>

              <div className="w-8 h-px bg-[#C9A84C] mb-4"></div>

              <p className="text-[#999999] text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

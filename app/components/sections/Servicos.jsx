export default function Servicos() {
  const servicos = [
    {
      icone: "◈",
      nome: "Dentística Restauradora",
      desc: "Restaurações diretas em resina composta com alta precisão e acabamento estético.",
    },
    {
      icone: "◇",
      nome: "Facetas Estéticas",
      desc: "Facetas que transformam o sorriso com naturalidade, harmonia e planejamento personalizado.",
    },
    {
      icone: "✦",
      nome: "Clareamento Dental",
      desc: "Protocolos de clareamento para um sorriso mais luminoso e equilibrado.",
    },
    {
      icone: "✧",
      nome: "Planejamento Estético",
      desc: "Análise personalizada para criar tratamentos alinhados ao sorriso e ao rosto.",
    },
    {
      icone: "◉",
      nome: "Odontologia Digital",
      desc: "Recursos digitais para auxiliar no planejamento e precisão dos tratamentos.",
    },
    {
      icone: "✦",
      nome: "Clínico Geral",
      desc: "Prevenção, manutenção da saúde bucal e atendimento de necessidades clínicas.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicos.map((s, i) => (
            <div
              key={i}
              className="
                group
                bg-[#111111]
                border border-[#2A2A2A]
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#C9A84C]
                hover:shadow-[0_20px_40px_rgba(201,168,76,0.12)]
              "
            >
              <p className="text-[#C9A84C] text-2xl mb-5 transition-transform duration-500 group-hover:scale-110">
                {s.icone}
              </p>

              <div className="w-8 h-px bg-[#C9A84C] mb-5"></div>

              <h3 className="text-[#F5F5F5] text-xs font-semibold uppercase tracking-[1px] mb-3">
                {s.nome}
              </h3>

              <p className="text-[#999999] text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Servicos() {
  const servicos = [
    {
      icone: "◈",
      nome: "Dentística Restauradora",
      desc: "Restaurações diretas em resina composta com alta precisão e acabamento estético.",
    },
    {
      icone: "◇",
      nome: "Facetas em Resina",
      desc: "Facetas estéticas unitárias que transformam o sorriso com naturalidade.",
    },
    {
      icone: "✦",
      nome: "Clareamento Dental",
      desc: "Clareamento de consultório, convencional e em dentes tratados endodonticamente.",
    },
    {
      icone: "✧",
      nome: "Planejamento Estético",
      desc: "Design do sorriso com análise facial e planejamento digital personalizado.",
    },
    {
      icone: "◉",
      nome: "Odontologia Digital",
      desc: "Escaneamento intraoral com iTero e planejamento digital de tratamentos.",
    },
    {
      icone: "✦",
      nome: "Clínico Geral",
      desc: "Exodontia, profilaxia, raspagem periodontal e atendimento de urgências.",
    },
  ];

  return (
    <section id="servicos" className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[4px] mb-4">
          Especialidades
        </p>

        <h2 className="font-playfair text-4xl text-[#F5F5F5] mb-4">
          Áreas de Atuação
        </h2>

        <div className="w-10 h-px bg-[#C9A84C] mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A2A2A]">
          {servicos.map((s, i) => (
            <div
              key={i}
              className="bg-[#111111] p-8 hover:bg-[#1A1A1A] transition-colors"
            >
              <p className="text-[#C9A84C] text-2xl mb-4">{s.icone}</p>
              <div className="w-6 h-px bg-[#C9A84C] mb-4"></div>
              <h3 className="text-[#F5F5F5] text-sm font-semibold uppercase tracking-[1px] mb-3">
                {s.nome}
              </h3>
              <p className="text-[#999999] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

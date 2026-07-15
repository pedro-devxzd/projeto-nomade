import ScrollReveal from "../ScrollReveal";

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
    <section id="servicos" className="bg-[#0A0A0A] py-32 px-6">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]"></div>

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
                  bg-[#111111]
                  border
                  border-[#2A2A2A]
                  p-7
                  transition-all
                  duration-500
                  hover:border-[#C9A84C]
                  hover:-translate-y-1
                "
              >
                <p className="text-[#C9A84C] text-2xl mb-5">{s.icone}</p>

                <div className="w-8 h-px bg-[#C9A84C] mb-5"></div>

                <h3
                  className="
                  text-[#F5F5F5]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[1.5px]
                  mb-3
                "
                >
                  {s.nome}
                </h3>

                <p
                  className="
                  text-[#999999]
                  text-xs
                  leading-relaxed
                "
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

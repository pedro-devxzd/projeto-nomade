export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "Ana Paula M.",
      texto:
        "A Dra. Maria Alice é extremamente cuidadosa e atenciosa. Minha restauração ficou perfeita, parecendo dente natural.",
      estrelas: 5,
    },
    {
      nome: "Carlos R.",
      texto:
        "Fiz facetas em resina e o resultado superou minhas expectativas. Atendimento humanizado e profissionalismo exemplar.",
      estrelas: 5,
    },
    {
      nome: "Fernanda T.",
      texto:
        "O clareamento dental ficou incrível! Processo seguro, sem dor e resultado duradouro. Super recomendo.",
      estrelas: 5,
    },
    {
      nome: "Juliana A.",
      texto:
        "A Dra. explica cada etapa com clareza e paciência, o que me deixou muito mais tranquila durante o tratamento.",
      estrelas: 5,
    },
  ];

  return (
    <section className="bg-[#111111] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[4px] mb-4">
          Avaliações
        </p>

        <h2 className="font-playfair text-4xl text-[#F5F5F5] mb-4">
          O que dizem meus pacientes
        </h2>

        <div className="w-10 h-px bg-[#C9A84C] mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A2A2A]">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="bg-[#111111] p-8 hover:bg-[#1A1A1A] transition-colors"
            >
              <p className="font-playfair text-5xl text-[#C9A84C] opacity-30 leading-none mb-4">
                "
              </p>

              <p className="font-playfair text-lg text-[#F5F5F5] italic leading-relaxed mb-6">
                {d.texto}
              </p>

              <div className="text-[#C9A84C] text-xs mb-2">
                {"★".repeat(d.estrelas)}
              </div>

              <p className="text-[#999999] text-xs uppercase tracking-[2px]">
                {d.nome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

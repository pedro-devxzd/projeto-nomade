export default function Sobre() {
  const tagStyle =
    "border border-[#2A2A2A] px-3 py-1 text-[#999999] text-xs uppercase";

  return (
    <section className="bg-[#111111] py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Coluna esquerda - texto */}
        <div>
          <p className="text-[#C9A84C] text-xs uppercase tracking-[4px] mb-4">
            Sobre
          </p>

          <h2 className="font-playfair text-4xl text-[#F5F5F5] mb-6 leading-tight">
            Maria Alice Gonçalves de Barros Vieira
          </h2>

          <div className="w-10 h-px bg-[#C9A84C] mb-6"></div>

          <p className="text-[#999999] text-sm leading-relaxed mb-4">
            Cirurgiã-Dentista com atuação em Clínico Geral e Dentística
            Estética, com experiência em restaurações em resina composta,
            facetas, clareamento dental e reabilitação oral básica.
          </p>

          <p className="text-[#999999] text-sm leading-relaxed mb-8">
            Habilidade em planejamento estético, atendimento humanizado e
            resolução de urgências. Experiência prática em odontologia digital
            com scanner intraoral iTero para planejamento e execução de
            tratamentos precisos.
          </p>

          {/* Tags de habilidades */}
          <div className="flex flex-wrap gap-2">
            <span className={tagStyle}>Facetas em Resina</span>
            <span className={tagStyle}>Clareamento</span>
            <span className={tagStyle}>Scanner iTero</span>
            <span className={tagStyle}>Planejamento Estético</span>
            <span className={tagStyle}>CRO74548</span>
          </div>
        </div>

        {/* Coluna direita - foto */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] aspect-square flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#C9A84C] text-4xl mb-4">✦</p>
            <p className="text-[#999999] text-xs uppercase tracking-[2px]">
              Foto da Dra. Maria Alice
            </p>
            <p className="text-[#2A2A2A] text-xs mt-2">Adicionar imagem</p>
          </div>
        </div>
      </div>
    </section>
  );
}

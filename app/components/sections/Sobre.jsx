export default function Sobre() {
  const tagStyle =
    "border border-[#2A2A2A] px-4 py-2 text-[#999999] text-xs uppercase tracking-widest hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors";

  return (
    <section id="sobre" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <div className="w-8 h-px bg-[#C9A84C]"></div>

          <p className="text-[#C9A84C] text-xs uppercase tracking-[4px]">
            Sobre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="bg-[#111111] border border-[#2A2A2A] aspect-square relative overflow-hidden group">
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#C9A84C] z-10 pointer-events-none"></div>

              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#C9A84C] z-10 pointer-events-none"></div>

              <img
                src="/maria-alice.jpg"
                alt="Dra. Maria Alice"
                className="w-full h-full object-cover object-top transition-transform duration-[12000ms] ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#C9A84C] p-6 hidden md:block">
              <p className="font-playfair text-black text-2xl font-bold">CRO</p>

              <p className="text-black text-xs font-bold tracking-widest">
                74548
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-4xl text-[#F5F5F5] mb-2 leading-tight">
              Maria Alice Gonçalves
            </h2>

            <h2 className="font-playfair text-4xl text-[#D6D6D6] italic mb-8 leading-tight">
              de Barros Vieira
            </h2>

            <div className="w-10 h-px bg-[#C9A84C] mb-8"></div>

            <p className="text-[#999999] text-sm leading-relaxed mb-6">
              Cirurgiã-Dentista com atuação em Clínico Geral e Dentística
              Estética, com experiência em restaurações em resina composta,
              facetas, clareamento dental e reabilitação oral básica.
            </p>

            <p className="text-[#999999] text-sm leading-relaxed mb-10">
              Habilidade em planejamento estético, atendimento humanizado e
              resolução de urgências. Experiência em odontologia digital e
              planejamento de tratamentos personalizados com foco em precisão e
              naturalidade.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className={tagStyle}>Facetas Estéticas</span>

              <span className={tagStyle}>Clareamento Dental</span>

              <span className={tagStyle}>Odontologia Digital</span>

              <span className={tagStyle}>Planejamento Estético</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

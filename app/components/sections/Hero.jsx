export default function Hero() {
  const btnPrimary =
    "bg-[#C9A84C] text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-all duration-300";
  const btnSecondary =
    "border border-[#C9A84C] text-[#C9A84C] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-black transition-all duration-300";

  return (
    <section className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#C9A84C] opacity-[0.03] blur-3xl"></div>
      </div>

      <div className="text-center max-w-3xl relative z-10">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#C9A84C]"></div>
          <p className="text-[#C9A84C] text-xs uppercase tracking-[4px]">
            Cirurgiã-Dentista · Disponível para Oportunidades
          </p>
          <div className="w-8 h-px bg-[#C9A84C]"></div>
        </div>

        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-[#F5F5F5] leading-none mb-4">
          Dra. Maria Alice
        </h1>

        <p className="font-playfair text-xl text-[#C9A84C] italic mb-2">
          Gonçalves de Barros Vieira
        </p>

        <p className="text-[#999999] text-xs tracking-[4px] uppercase mb-10">
          CRO74548 · Barbacena & Conselheiro Lafaiete — MG
        </p>

        <div className="w-px h-16 bg-[#2A2A2A] mx-auto mb-10"></div>

        <p className="text-[#999999] text-base leading-relaxed max-w-lg mx-auto mb-12">
          Profissional com experiência em Dentística Estética, facetas em
          resina, clareamento dental e odontologia digital com scanner iTero.
          Atendimento humanizado e foco em resultados estéticos de excelência.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/5532984592632"
            target="_blank"
            className={btnPrimary}
          >
            Entrar em Contato
          </a>
          <a
            href="https://www.instagram.com/marialicegbv/"
            target="_blank"
            className={btnSecondary}
          >
            Ver Instagram
          </a>
        </div>

        <div className="flex justify-center gap-16 mt-20">
          <div className="text-center">
            <p className="font-playfair text-3xl text-[#C9A84C]">2020</p>
            <p className="text-[#999999] text-xs uppercase tracking-[2px] mt-1">
              Início Clínico
            </p>
          </div>
          <div className="w-px bg-[#2A2A2A]"></div>
          <div className="text-center">
            <p className="font-playfair text-3xl text-[#C9A84C]">3</p>
            <p className="text-[#999999] text-xs uppercase tracking-[2px] mt-1">
              Clínicas Atuadas
            </p>
          </div>
          <div className="w-px bg-[#2A2A2A]"></div>
          <div className="text-center">
            <p className="font-playfair text-3xl text-[#C9A84C]">244h+</p>
            <p className="text-[#999999] text-xs uppercase tracking-[2px] mt-1">
              Curso Especializado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

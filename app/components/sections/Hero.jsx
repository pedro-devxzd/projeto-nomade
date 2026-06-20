export default function Hero() {
  const btnPrimary =
    "bg-[#C9A84C] text-black px-8 py-4 text-xs font-bold uppercase";
  const btnSecondary =
    "border border-[#C9A84C] text-[#C9A84C] px-8 py-4 text-xs font-bold uppercase";

  return (
    <section className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <p className="text-[#C9A84C] text-xs uppercase mb-8">
          Odontologia Estética · Barbacena e C. Lafaiete MG
        </p>

        <h1 className="font-playfair text-5xl font-bold text-[#F5F5F5] mb-4">
          Dra. Maria Alice
        </h1>

        <p className="text-[#999999] text-sm uppercase mb-6">
          Cirurgiã-Dentista · CRO74548
        </p>

        <p className="text-[#999999] text-base max-w-xl mx-auto mb-10">
          Especialista em Dentística Estética com experiência em facetas,
          restaurações diretas, clareamento e odontologia digital com iTero.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/5532984592632"
            target="_blank"
            className={btnPrimary}
          >
            Agendar Consulta
          </a>
          <a href="#trabalhos" className={btnSecondary}>
            Ver Trabalhos
          </a>
        </div>
      </div>
    </section>
  );
}

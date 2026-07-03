export default function Contato() {
  const btnStyle =
    "bg-[#C9A84C] text-black px-8 py-4 text-xs font-bold uppercase inline-block";
  const inputStyle =
    "w-full bg-transparent border-b border-[#2A2A2A] text-[#F5F5F5] text-sm py-3 outline-none placeholder:text-[#444]";
  const labelStyle =
    "text-[#999999] text-xs uppercase tracking-[2px] block mb-2";

  return (
    <section id="contato" className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-[#C9A84C] text-xs uppercase tracking-[4px] mb-4">
            Contato
          </p>

          <h2 className="font-playfair text-4xl text-[#F5F5F5] mb-4">
            Agende sua consulta
          </h2>

          <div className="w-10 h-px bg-[#C9A84C] mb-8"></div>

          <p className="text-[#999999] text-sm leading-relaxed mb-10">
            Preencha o formulário ou entre em contato diretamente. Retorno em
            até 24 horas.
          </p>

          <div className="mb-6">
            <p className="text-[#C9A84C] text-xs uppercase tracking-[2px] mb-1">
              WhatsApp
            </p>
            <p className="text-[#999999] text-sm">(32) 98459-2632</p>
          </div>

          <div className="mb-6">
            <p className="text-[#C9A84C] text-xs uppercase tracking-[2px] mb-1">
              E-mail
            </p>
            <p className="text-[#999999] text-sm">
              contato.dramariaalice@gmail.com
            </p>
          </div>

          <div className="mb-10">
            <p className="text-[#C9A84C] text-xs uppercase tracking-[2px] mb-1">
              Localização
            </p>
            <p className="text-[#999999] text-sm">
              Barbacena / Conselheiro Lafaiete — MG
            </p>
          </div>

          <a
            href="https://wa.me/5532984592632"
            target="_blank"
            className={btnStyle}
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <label className={labelStyle}>Nome completo</label>
            <input type="text" placeholder="Seu nome" className={inputStyle} />
          </div>

          <div>
            <label className={labelStyle}>WhatsApp</label>
            <input
              type="tel"
              placeholder="(00) 0 0000-0000"
              className={inputStyle}
            />
          </div>

          <div>
            <label className={labelStyle}>Serviço de interesse</label>
            <select className="w-full bg-[#111111] border-b border-[#2A2A2A] text-[#999999] text-sm py-3 outline-none">
              <option value="">Selecione...</option>
              <option>Facetas em Resina</option>
              <option>Restauração em Resina</option>
              <option>Clareamento Dental</option>
              <option>Planejamento Estético</option>
              <option>Odontologia Digital</option>
              <option>Consulta Geral</option>
              <option>Urgência</option>
            </select>
          </div>

          <div>
            <label className={labelStyle}>Mensagem</label>
            <textarea
              placeholder="Descreva sua necessidade..."
              rows={4}
              className="w-full bg-transparent border-b border-[#2A2A2A] text-[#F5F5F5] text-sm py-3 outline-none placeholder:text-[#444] resize-none"
            />
          </div>

          <button className={btnStyle}>Solicitar Agendamento</button>
        </div>
      </div>
    </section>
  );
}

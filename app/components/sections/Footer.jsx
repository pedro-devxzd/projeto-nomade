export default function Footer() {
  const linkStyle =
    "text-[#999999] text-sm hover:text-[#C9A84C] transition-colors";
  const btnStyle =
    "inline-block mt-6 bg-[#C9A84C] text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors";

  return (
    <footer className="bg-[#111111] border-t border-[#2A2A2A] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-playfair text-[#C9A84C] text-lg mb-2">
              Dra. Maria Alice
            </p>
            <p className="text-[#999999] text-xs uppercase tracking-[2px] mb-4">
              Cirurgiã-Dentista · CRO74548
            </p>
            <p className="text-[#999999] text-sm leading-relaxed">
              Profissional disponível para novas oportunidades em Barbacena e
              Conselheiro Lafaiete — MG.
            </p>
          </div>

          <div>
            <p className="text-[#C9A84C] text-xs uppercase tracking-[3px] mb-6">
              Navegação
            </p>
            <div className="flex flex-col gap-3">
              <a href="#sobre" className={linkStyle}>
                Sobre
              </a>
              <a href="#servicos" className={linkStyle}>
                Habilidades
              </a>
              <a href="#depoimentos" className={linkStyle}>
                Referências
              </a>
              <a href="#contato" className={linkStyle}>
                Contato
              </a>
            </div>
          </div>

          <div>
            <p className="text-[#C9A84C] text-xs uppercase tracking-[3px] mb-6">
              Contato
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-[#999999] text-sm">(32) 98459-2632</p>
              <p className="text-[#999999] text-sm">
                contato.dramariaalice@gmail.com
              </p>
              <p className="text-[#999999] text-sm">
                Barbacena / C. Lafaiete — MG
              </p>
              <a
                href="https://www.instagram.com/marialicegbv/"
                target="_blank"
                className={linkStyle}
              >
                @marialicegbv
              </a>
            </div>
            <a
              href="https://wa.me/5532984592632"
              target="_blank"
              className={btnStyle}
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[#444] text-xs">
            © 2026 Dra. Maria Alice Gonçalves de Barros Vieira. Todos os
            direitos reservados.
          </p>
          <p className="text-[#444] text-xs">Desenvolvido por Projeto Nômade</p>
        </div>
      </div>
    </footer>
  );
}

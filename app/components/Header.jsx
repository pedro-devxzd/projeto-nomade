export default function Header() {
  const navLink =
    "text-[#999999] text-xs uppercase tracking-[2px] hover:text-[#C9A84C] transition-colors";
  const btnStyle =
    "bg-[#C9A84C] text-black px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors whitespace-nowrap";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <p className="font-playfair text-[#C9A84C] text-sm uppercase tracking-[2px] leading-tight">
            Dra. Maria Alice
          </p>
          <p className="text-[#999999] text-xs tracking-[1px] leading-tight">
            CRO74548
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#sobre" className={navLink}>
            Sobre
          </a>
          <a href="#servicos" className={navLink}>
            Habilidades
          </a>
          <a href="#contato" className={navLink}>
            Contato
          </a>
        </nav>

        <a
          href="https://wa.me/5532984592632"
          target="_blank"
          className={btnStyle}
        >
          Contratar
        </a>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLink =
    "text-[#999999] text-xs uppercase tracking-[2px] hover:text-[#C9A84C] transition-colors";

  const btnStyle =
    "bg-[#C9A84C] text-black px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#E8C97A] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(201,168,76,0.20)] whitespace-nowrap";

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <p className="font-playfair text-[#C9A84C] text-sm uppercase tracking-[2px] leading-tight">
            Dra. Maria Alice
          </p>

          <p className="text-[#999999] text-xs tracking-[1px] leading-tight">
            CRO 74548
          </p>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          <a href="#sobre" className={navLink}>
            Sobre
          </a>

          <a href="#servicos" className={navLink}>
            Especialidades
          </a>

          <a href="#galeria" className={navLink}>
            Resultados
          </a>

          <a href="#contato" className={navLink}>
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5532984592632"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            Agendar
          </a>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#C9A84C] text-xl"
            aria-label="Abrir menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="bg-[#0A0A0A] border-t border-[#2A2A2A] px-6 py-6 flex flex-col gap-6">
          <a href="#sobre" className={navLink} onClick={closeMenu}>
            Sobre
          </a>

          <a href="#servicos" className={navLink} onClick={closeMenu}>
            Especialidades
          </a>

          <a href="#galeria" className={navLink} onClick={closeMenu}>
            Resultados
          </a>

          <a href="#contato" className={navLink} onClick={closeMenu}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

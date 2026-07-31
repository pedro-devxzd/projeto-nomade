"use client";
import { useState, useEffect } from "react";

const casosFixos = [
  {
    id: "f1",
    titulo: "Estética — Caso 1",
    categoria: "estetica",
    antes: "/casos/caso1_antes_1.jpg",
    depois: "/casos/caso1_depois_1.jpg",
  },
  {
    id: "f2",
    titulo: "Estética — Caso 2",
    categoria: "estetica",
    antes: "/casos/caso2_antes_1.jpg",
    depois: "/casos/caso2_depois_1.jpg",
  },
  {
    id: "f3",
    titulo: "Estética Conoide",
    categoria: "estetica",
    antes: "/casos/caso_conoide_antes_1.jpg",
    depois: "/casos/caso_conoide_depois_1.jpg",
  },
  {
    id: "f4",
    titulo: "Restauração Estética",
    categoria: "restauracao",
    antes: "/casos/caso_rest1_antes.jpg",
    depois: null,
  },
];

function CasoCard({ caso }) {
  const btnStyle = "text-xs px-3 py-1 uppercase tracking-widest transition-all";
  const [showDepois, setShowDepois] = useState(false);

  return (
    <div className="bg-[#0D0D0D] border border-[#111] overflow-hidden group">
      <div
        className="relative overflow-hidden bg-[#111]"
        style={{ aspectRatio: "4/3" }}
      >
        <img
          src={showDepois && caso.depois ? caso.depois : caso.antes}
          alt={caso.titulo}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {caso.depois && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setShowDepois(false)}
              className={`${btnStyle} ${!showDepois ? "bg-[#C9A84C] text-black font-bold" : "bg-black/60 text-[#999] border border-[#333]"}`}
            >
              Antes
            </button>
            <button
              onClick={() => setShowDepois(true)}
              className={`${btnStyle} ${showDepois ? "bg-[#C9A84C] text-black font-bold" : "bg-black/60 text-[#999] border border-[#333]"}`}
            >
              Depois
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[2px] mb-1">
          {caso.categoria}
        </p>
        <p className="font-playfair text-[#F5F5F5] text-sm">{caso.titulo}</p>
      </div>
    </div>
  );
}

export default function Trabalhos() {
  const [filtro, setFiltro] = useState("todos");
  const [casosAdmin, setCasosAdmin] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dra_ma_casos");
      if (saved) setCasosAdmin(JSON.parse(saved));
    } catch {}
  }, []);

  const todos = [...casosAdmin, ...casosFixos];
  const filtrados =
    filtro === "todos" ? todos : todos.filter((c) => c.categoria === filtro);
  const filtros = ["todos", "estetica", "restauracao", "clareamento"];

  return (
    <section id="trabalhos" className="bg-[#050505] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-6 h-px bg-[#C9A84C]"></div>
          <p className="text-[#C9A84C] text-xs uppercase tracking-[4px]">
            Portfólio
          </p>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl text-[#F5F5F5] mb-4">
          Casos Clínicos
        </h2>
        <div className="w-10 h-px bg-[#C9A84C] mb-10"></div>
        <div className="flex gap-0 border-b border-[#111] mb-10">
          {filtros.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`text-xs uppercase tracking-[2px] py-3 mr-6 border-b-2 transition-all ${filtro === f ? "text-[#C9A84C] border-[#C9A84C]" : "text-[#555] border-transparent hover:text-[#999]"}`}
            >
              {f === "todos"
                ? "Todos"
                : f === "estetica"
                  ? "Estética"
                  : f === "restauracao"
                    ? "Restauração"
                    : "Clareamento"}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111]">
          {filtrados.map((caso) => (
            <CasoCard key={caso.id} caso={caso} />
          ))}
        </div>
        <div className="flex items-center justify-between mt-8">
          <p className="text-[#333] text-xs uppercase tracking-[2px]">
            Passe o mouse para ver antes e depois
          </p>
          <a
            href="/admin"
            className="text-[#333] text-xs uppercase tracking-[2px] hover:text-[#C9A84C] transition-colors"
          >
            Gerenciar casos →
          </a>
        </div>
      </div>
    </section>
  );
}

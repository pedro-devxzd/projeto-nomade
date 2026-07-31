"use client";
import { useState, useEffect } from "react";

const CLOUD_NAME = "guhfb7da";
const UPLOAD_PRESET = "xxpf3luv";
const SENHA_ADMIN = "mariaalice2026";

async function uploadToCloudinary(file, categoria) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", `dra-maria-alice/${categoria}`);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );
  return await res.json();
}

function LoginScreen({ onLogin }) {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  function handleLogin() {
    if (senha === SENHA_ADMIN) {
      sessionStorage.setItem("admin_auth", "1");
      onLogin();
    } else {
      setErro(true);
      setSenha("");
    }
  }

  return (
    <div className="min-h-screen bg-[#000] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <p className="font-playfair text-[#C9A84C] text-lg mb-1">
            Dra. Maria Alice
          </p>
          <p className="text-[#333] text-xs uppercase tracking-[3px]">
            Painel Administrativo
          </p>
        </div>
        <div className="bg-[#0D0D0D] border border-[#111] p-8">
          <label className="block text-[#555] text-xs uppercase tracking-[2px] mb-2">
            Senha
          </label>
          <input
            type="password"
            placeholder="Digite a senha"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
              setErro(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full bg-transparent border-b border-[#1A1A1A] text-[#F5F5F5] text-sm py-3 outline-none placeholder:text-[#333] focus:border-[#C9A84C] transition-colors mb-6"
          />
          {erro && (
            <p className="text-red-400 text-xs uppercase tracking-[2px] mb-4">
              Senha incorreta.
            </p>
          )}
          <button
            onClick={handleLogin}
            className="w-full bg-[#C9A84C] text-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminPanel() {
  const [casos, setCasos] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState("");
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novoCategoria, setNovoCategoria] = useState("estetica");
  const [fileAntes, setFileAntes] = useState(null);
  const [fileDepois, setFileDepois] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dra_ma_casos");
      if (saved) setCasos(JSON.parse(saved));
    } catch {}
  }, []);

  function saveCasos(list) {
    setCasos(list);
    localStorage.setItem("dra_ma_casos", JSON.stringify(list));
  }

  async function handleUpload() {
    if (!novoTitulo || !fileAntes) {
      setMsg("Informe o título e a foto Antes.");
      return;
    }
    setUploading(true);
    setMsg("Enviando fotos...");
    try {
      const resAntes = await uploadToCloudinary(fileAntes, novoCategoria);
      let urlDepois = null;
      if (fileDepois) {
        const resDepois = await uploadToCloudinary(fileDepois, novoCategoria);
        urlDepois = resDepois.secure_url;
      }
      const novo = {
        id: Date.now(),
        titulo: novoTitulo,
        categoria: novoCategoria,
        antes: resAntes.secure_url,
        depois: urlDepois,
        data: new Date().toLocaleDateString("pt-BR"),
      };
      saveCasos([novo, ...casos]);
      setMsg("✓ Caso publicado!");
      setNovoTitulo("");
      setFileAntes(null);
      setFileDepois(null);
    } catch (e) {
      setMsg("Erro ao enviar. Tente novamente.");
    }
    setUploading(false);
  }

  function handleDelete(id) {
    saveCasos(casos.filter((c) => c.id !== id));
    setMsg("Caso removido.");
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_auth");
    window.location.reload();
  }

  const labelStyle = "block text-[#555] text-xs uppercase tracking-[2px] mb-2";
  const inputStyle =
    "w-full bg-transparent border-b border-[#1A1A1A] text-[#F5F5F5] text-sm py-3 outline-none placeholder:text-[#333] focus:border-[#C9A84C] transition-colors";

  return (
    <div className="min-h-screen bg-[#000] text-[#F5F5F5] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-[#111]">
          <div>
            <p className="text-[#C9A84C] text-xs uppercase tracking-[4px] mb-1">
              Painel
            </p>
            <h1 className="font-playfair text-3xl">Gestão de Casos</h1>
          </div>
          <div className="flex gap-6">
            <a
              href="/"
              className="text-[#555] text-xs uppercase tracking-[2px] hover:text-[#C9A84C] transition-colors"
            >
              ← Site
            </a>
            <button
              onClick={handleLogout}
              className="text-[#555] text-xs uppercase tracking-[2px] hover:text-red-400 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#0D0D0D] border border-[#111] p-6 mb-10">
          <p className="text-[#C9A84C] text-xs uppercase tracking-[3px] mb-6">
            Adicionar novo caso
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelStyle}>Título do caso</label>
              <input
                type="text"
                placeholder="Ex: Facetas em Resina — Caso 3"
                className={inputStyle}
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
              />
            </div>
            <div>
              <label className={labelStyle}>Categoria</label>
              <select
                className="w-full bg-[#111] border-b border-[#1A1A1A] text-[#F5F5F5] text-sm py-3 outline-none focus:border-[#C9A84C] transition-colors"
                value={novoCategoria}
                onChange={(e) => setNovoCategoria(e.target.value)}
              >
                <option value="estetica">Estética</option>
                <option value="restauracao">Restauração</option>
                <option value="clareamento">Clareamento</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelStyle}>Foto — Antes *</label>
              <label className="block border border-dashed border-[#2A2A2A] hover:border-[#C9A84C] transition-colors p-6 text-center cursor-pointer">
                {fileAntes ? (
                  <div>
                    <img
                      src={URL.createObjectURL(fileAntes)}
                      alt="preview"
                      style={{
                        maxHeight: "120px",
                        margin: "0 auto",
                        objectFit: "cover",
                      }}
                    />
                    <p className="text-[#C9A84C] text-xs mt-2 truncate">
                      {fileAntes.name}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-[#333] text-2xl mb-2">+</p>
                    <p className="text-[#555] text-xs uppercase tracking-[2px]">
                      Clique para selecionar
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setFileAntes(e.target.files[0])}
                />
              </label>
            </div>
            <div>
              <label className={labelStyle}>Foto — Depois (opcional)</label>
              <label className="block border border-dashed border-[#2A2A2A] hover:border-[#C9A84C] transition-colors p-6 text-center cursor-pointer">
                {fileDepois ? (
                  <div>
                    <img
                      src={URL.createObjectURL(fileDepois)}
                      alt="preview"
                      style={{
                        maxHeight: "120px",
                        margin: "0 auto",
                        objectFit: "cover",
                      }}
                    />
                    <p className="text-[#C9A84C] text-xs mt-2 truncate">
                      {fileDepois.name}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-[#333] text-2xl mb-2">+</p>
                    <p className="text-[#555] text-xs uppercase tracking-[2px]">
                      Clique para selecionar
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setFileDepois(e.target.files[0])}
                />
              </label>
            </div>
          </div>
          {msg && (
            <p
              className={`text-xs uppercase tracking-[2px] mb-4 ${msg.includes("✓") ? "text-green-400" : msg.includes("Erro") ? "text-red-400" : "text-[#C9A84C]"}`}
            >
              {msg}
            </p>
          )}
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="bg-[#C9A84C] text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors disabled:opacity-50"
          >
            {uploading ? "Enviando..." : "Publicar Caso"}
          </button>
        </div>

        {/* Lista */}
        <p className="text-[#C9A84C] text-xs uppercase tracking-[3px] mb-6">
          Casos publicados ({casos.length})
        </p>
        {casos.length === 0 && (
          <p className="text-[#333] text-sm text-center py-12">
            Nenhum caso publicado ainda.
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {casos.map((caso) => (
            <div
              key={caso.id}
              className="bg-[#0D0D0D] border border-[#111] overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-px bg-[#111]">
                <img
                  src={caso.antes}
                  alt="antes"
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    objectFit: "cover",
                  }}
                />
                {caso.depois ? (
                  <img
                    src={caso.depois}
                    alt="depois"
                    style={{
                      width: "100%",
                      aspectRatio: "1",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    className="bg-[#0D0D0D] flex items-center justify-center"
                    style={{ aspectRatio: "1" }}
                  >
                    <p className="text-[#333] text-xs uppercase tracking-[2px]">
                      Sem depois
                    </p>
                  </div>
                )}
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-[#C9A84C] text-xs uppercase tracking-[2px] mb-1">
                    {caso.categoria}
                  </p>
                  <p className="text-[#F5F5F5] text-sm font-playfair">
                    {caso.titulo}
                  </p>
                  <p className="text-[#333] text-xs mt-1">{caso.data}</p>
                </div>
                <button
                  onClick={() => handleDelete(caso.id)}
                  className="text-[#555] text-xs uppercase tracking-[2px] hover:text-red-400 transition-colors ml-4"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "1") setAuthed(true);
  }, []);

  return authed ? (
    <AdminPanel />
  ) : (
    <LoginScreen onLogin={() => setAuthed(true)} />
  );
}

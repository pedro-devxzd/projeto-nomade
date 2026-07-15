"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "../ScrollReveal";

export default function Contato() {
  const [form, setForm] = useState({
    from_name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_5ymsdg8",
        "template_c0du0ua",
        form,
        "VIEfqCFL8W1Lqoc97",
      );

      setStatus("email_ok");
    } catch (error) {
      console.log("Erro EmailJS:", error);
      setStatus("email_erro");
    }

    setLoading(false);
  };

  const handleWhatsApp = () => {
    const msg = `
Olá Dra. Maria Alice!

Me chamo ${form.from_name}.

E-mail: ${form.email}

Tenho interesse em:
${form.service}

Mensagem:
${form.message}
`;

    const url = `https://wa.me/5532984592632?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
  };

  const labelStyle =
    "text-[#999999] text-xs uppercase tracking-[2px] block mb-3";

  const inputStyle =
    "w-full bg-transparent border-b border-[#2A2A2A] text-[#F5F5F5] text-sm py-3 outline-none placeholder:text-[#444] focus:border-[#C9A84C] transition-colors";

  const buttonPrimary =
    "bg-[#C9A84C] text-black px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#E8C97A] hover:-translate-y-1";

  const buttonSecondary =
    "border border-[#C9A84C] text-[#C9A84C] px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#C9A84C] hover:text-black hover:-translate-y-1";

  return (
    <section id="contato" className="bg-[#0A0A0A] py-32 px-6">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#C9A84C]"></div>

              <p className="text-[#C9A84C] text-xs uppercase tracking-[4px]">
                Contato
              </p>
            </div>

            <h2 className="font-playfair text-4xl text-[#F5F5F5] mb-4">
              Vamos cuidar do seu sorriso?
            </h2>

            <div className="w-10 h-px bg-[#C9A84C] mb-8"></div>

            <p className="text-[#999999] text-sm leading-relaxed mb-10">
              Agende uma avaliação personalizada e descubra o melhor
              planejamento para o seu sorriso.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-[#C9A84C] text-xs uppercase tracking-[2px] mb-1">
                  WhatsApp
                </p>

                <p className="text-[#999999] text-sm">(32) 98459-2632</p>
              </div>

              <div>
                <p className="text-[#C9A84C] text-xs uppercase tracking-[2px] mb-1">
                  E-mail
                </p>

                <p className="text-[#999999] text-sm">
                  contato.dramariaalice@gmail.com
                </p>
              </div>

              <div>
                <p className="text-[#C9A84C] text-xs uppercase tracking-[2px] mb-1">
                  Localização
                </p>

                <p className="text-[#999999] text-sm">
                  Barbacena / Conselheiro Lafaiete — MG
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleEmail}>
            <div className="mb-6">
              <label className={labelStyle}>Nome completo</label>

              <input
                name="from_name"
                type="text"
                placeholder="Seu nome"
                className={inputStyle}
                onChange={handleChange}
                value={form.from_name}
              />
            </div>

            <div className="mb-6">
              <label className={labelStyle}>E-mail</label>

              <input
                name="email"
                type="email"
                placeholder="seu@email.com"
                className={inputStyle}
                onChange={handleChange}
                value={form.email}
              />
            </div>

            <div className="mb-6">
              <label className={labelStyle}>WhatsApp</label>

              <input
                name="phone"
                type="tel"
                placeholder="(00) 0 0000-0000"
                className={inputStyle}
                onChange={handleChange}
                value={form.phone}
              />
            </div>

            <div className="mb-6">
              <label className={labelStyle}>Serviço de interesse</label>

              <select
                name="service"
                className="
                w-full
                bg-[#111111]
                border-b
                border-[#2A2A2A]
                text-[#999999]
                text-sm
                py-3
                outline-none
                focus:border-[#C9A84C]
                "
                onChange={handleChange}
                value={form.service}
              >
                <option value="">Selecione...</option>

                <option>Facetas em Resina</option>

                <option>Clareamento Dental</option>

                <option>Planejamento Estético</option>

                <option>Odontologia Digital</option>

                <option>Consulta Geral</option>

                <option>Urgência</option>
              </select>
            </div>

            <div className="mb-8">
              <label className={labelStyle}>Mensagem</label>

              <textarea
                name="message"
                rows={4}
                placeholder="Descreva sua necessidade..."
                className={inputStyle + " resize-none"}
                onChange={handleChange}
                value={form.message}
              />
            </div>

            {status === "email_ok" && (
              <p className="text-green-400 text-sm mb-4">
                E-mail enviado com sucesso!
              </p>
            )}

            {status === "email_erro" && (
              <p className="text-red-400 text-sm mb-4">
                Erro ao enviar. Tente pelo WhatsApp.
              </p>
            )}

            <div className="flex gap-4 flex-wrap">
              <button
                type="submit"
                disabled={loading}
                className={`${buttonPrimary} flex-1`}
              >
                {loading ? "Enviando..." : "Enviar E-mail"}
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className={`${buttonSecondary} flex-1`}
              >
                Enviar WhatsApp
              </button>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}

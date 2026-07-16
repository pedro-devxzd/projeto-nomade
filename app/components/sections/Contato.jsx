"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contato() {
  const [form, setForm] = useState({
    from_name: "",
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

    // limpa aviso quando começa preencher
    if (status === "incompleto") {
      setStatus("");
    }
  };

  const validateForm = () => {
    if (!form.from_name || !form.phone || !form.service) {
      setStatus("incompleto");
      return false;
    }

    return true;
  };

  const handleEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

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
    if (!validateForm()) return;

    const msg = `
Olá Dra. Maria Alice!

Me chamo ${form.from_name}.

Tenho interesse em:
${form.service}

${form.message}
`;

    const url = `https://wa.me/5532984592632?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
  };

  const labelStyle =
    "text-[#999999] text-xs uppercase tracking-[2px] block mb-2";

  const inputStyle =
    "w-full bg-transparent border-b border-[#2A2A2A] text-[#F5F5F5] text-sm py-3 outline-none placeholder:text-[#444] focus:border-[#C9A84C] transition-colors";

  return (
    <section id="contato" className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* INFORMAÇÕES */}

        <div>
          <p className="text-[#C9A84C] text-xs uppercase tracking-[4px] mb-4">
            Contato
          </p>

          <h2 className="font-playfair text-4xl text-[#F5F5F5] mb-4">
            Entre em contato
          </h2>

          <div className="w-10 h-px bg-[#C9A84C] mb-8"></div>

          <p className="text-[#C9A84C] text-sm mb-4">
            Informe seus dados e o tratamento desejado para continuarmos. Assim,
            poderemos entrar em contato e oferecer o melhor atendimento pelo
            WhatsApp ou E-mail.
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

          <div>
            <p className="text-[#C9A84C] text-xs uppercase tracking-[2px] mb-1">
              Localização
            </p>

            <p className="text-[#999999] text-sm">
              Barbacena / Conselheiro Lafaiete — MG
            </p>
          </div>
        </div>

        {/* FORMULARIO */}

        <div>
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

              <option>Clareamento Dental</option>

              <option>Facetas em Resina</option>

              <option>Restauração em Resina</option>

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
              placeholder="Descreva sua necessidade..."
              rows={4}
              className="
                w-full
                bg-transparent
                border-b
                border-[#2A2A2A]
                text-[#F5F5F5]
                text-sm
                py-3
                outline-none
                placeholder:text-[#444]
                focus:border-[#C9A84C]
                resize-none
              "
              onChange={handleChange}
              value={form.message}
            />
          </div>

          {status === "incompleto" && (
            <p className="text-[#C9A84C] text-sm mb-4">
              Preencha seu nome, WhatsApp e selecione o serviço antes de
              continuar.
            </p>
          )}

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
              onClick={handleEmail}
              disabled={loading}
              className="
                bg-[#C9A84C]
                text-black
                px-6
                py-3
                text-xs
                font-bold
                uppercase
                tracking-widest
                hover:bg-[#E8C97A]
                transition-colors
                flex-1
              "
            >
              {loading ? "Enviando..." : "Enviar E-mail"}
            </button>

            <button
              onClick={handleWhatsApp}
              className="
                border
                border-[#C9A84C]
                text-[#C9A84C]
                px-6
                py-3
                text-xs
                font-bold
                uppercase
                tracking-widest
                hover:bg-[#C9A84C]
                hover:text-black
                transition-colors
                flex-1
              "
            >
              Enviar WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

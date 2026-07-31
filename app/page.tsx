"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Sobre from "./components/sections/Sobre";
import Servicos from "./components/sections/Servicos";
import Trabalhos from "./components/sections/Trabalhos";
import Contato from "./components/sections/Contato";
import Footer from "./components/sections/Footer";

const HeroExperience = dynamic(
  () => import("./components/scene/HeroExperience"),
  { ssr: false },
);

export default function Home() {
  const [experienceDone, setExperienceDone] = useState(false);

  return (
    <main className="bg-[#000000]">
      <HeroExperience onComplete={() => setExperienceDone(true)} />
      <div
        style={{
          opacity: experienceDone ? 1 : 0.3,
          transition: "opacity 1s ease",
        }}
      >
        <Header />
        <Sobre />
        <Servicos />
        <Trabalhos />
        <Contato />
        <Footer />
      </div>
    </main>
  );
}

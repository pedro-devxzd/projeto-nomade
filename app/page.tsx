import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Sobre from "./components/sections/Sobre";
import Servicos from "./components/sections/Servicos";
import Contato from "./components/sections/Contato";
import Footer from "./components/sections/Footer";
import Galeria from "./components/sections/Galeria";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Galeria />
      <Contato />
      <Footer />
    </main>
  );
}

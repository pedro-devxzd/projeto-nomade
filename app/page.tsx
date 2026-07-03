import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Sobre from "./components/sections/Sobre";
import Servicos from "./components/sections/Servicos";
import Contato from "./components/sections/Contato";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Contato />
      <Footer />
    </main>
  );
}

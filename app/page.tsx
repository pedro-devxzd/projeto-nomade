import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Sobre from "./components/sections/Sobre";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Header />
      <Hero />
      <Sobre />
    </main>
  );
}

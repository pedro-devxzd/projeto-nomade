import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <div className="p-8">
        <h1 className="font-playfair text-4xl text-[#C9A84C]">
          Projeto Nômade
        </h1>
        <p className="text-[#999999] mt-4">Landing Page — Dra. Maria Alice</p>
      </div>
    </main>
  );
}

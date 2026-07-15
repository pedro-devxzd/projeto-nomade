export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-playfair text-[#C9A84C] text-sm uppercase tracking-[2px]">
              Dra. Maria Alice
            </p>

            <p className="text-[#999999] text-xs tracking-[1px]">CRO 74548</p>
          </div>

          <p className="text-[#999999] text-xs tracking-[1px] text-center">
            Desenvolvido por Pedro H. S. · Desenvolvimento Web
          </p>
        </div>
      </div>
    </footer>
  );
}

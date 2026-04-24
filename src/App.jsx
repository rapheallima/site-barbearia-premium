import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">

      {/* 1. NAVBAR / HEADER */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto border-b border-zinc-800">
        <h1 className="text-2xl font-bold tracking-tighter uppercase">Barber<span className="text-amber-500">Shop</span></h1>
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <li className="hover:text-amber-500 cursor-pointer transition">Serviços</li>
          <li className="hover:text-amber-500 cursor-pointer transition">Galeria</li>
          <li className="hover:text-amber-500 cursor-pointer transition">Localização</li>
        </ul>
      </nav>

      {/* 2. HERO SECTION (IMPACTO) */}
      <header className="relative h-[80vh] flex items-center justify-center text-center px-4 bg-[url('https://unsplash.com')] bg-cover bg-center">
        {/* Overlay para escurecer a imagem e destacar o texto */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-4">Estilo & <span className="text-amber-500">Atitude</span></h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 font-light">O melhor corte da região com o atendimento que você merece.</p>
          <a
            href="https://wa.me/5547992029056?text=Gostaria de agendar um horário."

            target="_blank"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-10 rounded-full transition-all uppercase tracking-tighter text-lg active:scale-95 inline-block"
          >
            Agendar Agora
          </a>
        </div>
      </header>

      {/* 3. SERVIÇOS (TABELA DE PREÇOS) */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 uppercase tracking-widest">Nossos <span className="text-amber-500">Serviços</span></h3>

        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-zinc-800 pb-2">
            <div>
              <h4 className="text-xl font-bold">Corte de Cabelo</h4>
              <p className="text-sm text-zinc-500 italic">Degradê, Social ou Moderno</p>
            </div>
            <span className="text-amber-500 font-bold text-xl">R$ 45,00</span>
          </div>

          <div className="flex justify-between items-end border-b border-zinc-800 pb-2">
            <div>
              <h4 className="text-xl font-bold">Barba Completa</h4>
              <p className="text-sm text-zinc-500 italic">Toalha quente e massagem</p>
            </div>
            <span className="text-amber-500 font-bold text-xl">R$ 35,00</span>
          </div>

          <div className="flex justify-between items-end border-b border-zinc-800 pb-2">
            <div>
              <h4 className="text-xl font-bold">Combo Master</h4>
              <p className="text-sm text-zinc-500 italic">Cabelo + Barba + Sobrancelha</p>
            </div>
            <span className="text-amber-500 font-bold text-xl">R$ 70,00</span>
          </div>
        </div>
      </section>

      {/* 4. ONDE ESTAMOS */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 uppercase tracking-widest text-amber-500">Onde Estamos</h3>
          <p className="text-lg mb-6">Rua do Exemplo, 123 - Centro, Jaraguá do Sul - SC</p>

          <a
            href="https://google.com" // Exemplo: Coloque as coordenadas reais aqui
            target="_blank"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold uppercase tracking-tighter transition-all border-b-2 border-amber-500 pb-1"
          >
            <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Abrir no GPS
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 py-10 text-center text-zinc-500 text-sm">
        <p>© 2024 BarberShop - Desenvolvido por Raphael Lima</p>
      </footer>
    </div>
  );
}

export default App;

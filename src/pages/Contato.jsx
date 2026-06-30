export default function Contato() {
  return (
    <section id="contato" className="min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white">
      <div className="max-w-3xl w-full text-center">

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Contato
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          Estou disponível para novos projetos, parcerias e produções audiovisuais.
        </p>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5531995439649?text=Olá!%20Vi%20seu%20portfólio%20e%20quero%20trabalhar%20com%20você."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition mb-6"
        >
          Falar no WhatsApp
        </a>

      </div>
    </section>
  );
}
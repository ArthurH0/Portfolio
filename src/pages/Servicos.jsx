export default function Servicos() {
  return (
    <section id="servicos" className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-300 text-white">
      <div className="max-w-5xl w-full">

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Serviços
        </h2>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Serviço 1 */}
          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Captação de Vídeo
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Produção de vídeos com foco em estética cinematográfica,
              iluminação e enquadramento profissional para marcas, eventos e criadores.
            </p>
          </div>

          {/* Serviço 2 */}
          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Edição de Vídeo
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Edição dinâmica com cortes precisos, ritmo visual e storytelling,
              adaptado para redes sociais ou vídeos institucionais.
            </p>
          </div>

          {/* Serviço 3 */}
          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Conteúdo para Redes Sociais
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Criação de vídeos curtos (Reels, TikTok, Shorts) focados em alcance,
              retenção e impacto visual.
            </p>
          </div>

          {/* Serviço 4 */}
          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Storytelling Visual
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvimento de narrativas visuais que conectam emoção e mensagem,
              transformando ideias em vídeos com propósito.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5531995439649"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
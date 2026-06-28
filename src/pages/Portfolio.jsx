import PortfolioCategory from "../components/PortfolioCategory";

const corporativo = [
  {
    title: "Empresa X",
    thumbnail: "/images/corporativo-1.jpg",
  },
  {
    title: "Empresa Y",
    thumbnail: "/images/corporativo-2.jpg",
  },
];

const eventos = [
  {
    title: "Evento ABC",
    thumbnail: "/images/evento-1.jpg",
  },
];

const esportes = [
  {
    title: "Campeonato",
    thumbnail: "/images/esporte-1.jpg",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 bg-zinc-900 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[4px] text-grey-500 font-semibold">
            Portfólio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Trabalhos em destaque
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
            Cada projeto é desenvolvido buscando transmitir emoção,
            fortalecer marcas e contar histórias através do audiovisual.
          </p>

        </div>

        <PortfolioCategory
          title="Corporativo"
          subtitle="Conteúdos para empresas, marcas e negócios."
          videos={corporativo}
        />

        <PortfolioCategory
          title="Eventos"
          subtitle="Cobertura de eventos sociais e corporativos."
          videos={eventos}
        />

        <PortfolioCategory
          title="Esportes"
          subtitle="Energia, velocidade e emoção em cada frame."
          videos={esportes}
        />

      </div>
    </section>
  );
}
import PortfolioCategory from "../components/PortfolioCategory";

const corporativo = [
  {
    title: "Maxtemper - Aquecimento solar",
    videoUrl: "https://youtube.com/shorts/zWYXK-YjMo4",
  },
  {
    title: "Ariella Oliveira - Sobrancelhas",
    videoUrl: "https://youtube.com/shorts/oBx2QitaZ-Y",
  },

  {
    title: "Maxtemper - Aquecimento solar",
    videoUrl: "https://youtube.com/shorts/s5lK_jT6D_U",
  },
];

const eventos = [
 {
    title: "Aniversário - Festa Junina",
    videoUrl: "https://youtu.be/Z3U3BJFShFg",
  },
  {
    title: "Chá Revelação",
    videoUrl: "https://youtube.com/shorts/BAC3TpAc2qM",
  },

  {
    title: "Aniversário 2 Anos - Eduardo",
    videoUrl: "https://youtube.com/shorts/30uUxatnqbY",
  },
];

const esportes = [
  {
    title: "Ch;a",
    videoUrl: "https://youtu.be/ZZZZZZZZZZZ",
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

      </div>
    </section>
  );
}
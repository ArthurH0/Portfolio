import { Link, useParams } from "react-router-dom";
import PortfolioCategory from "./PortfolioCategory";
import { portfolio } from "./portfolioData";

export default function SectionCategoria() {
    const { categoria } = useParams();

    const dados = portfolio[categoria];

    if (!dados) {
        return (
            <div className="bg-black min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">
                        Categoria não encontrada
                    </h1>

                    <p className="mt-4 text-zinc-400">
                        A categoria que você tentou acessar não existe.
                    </p>

                    <Link
                        to="/"
                        className="inline-block mt-8 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
                    >
                        Voltar para o início
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen pt-20 p-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">{dados.title}</h1>
            {dados.empresas.map((empresa) => (
                <PortfolioCategory
                    key={empresa.empresa}
                    subtitle={dados.subtitle}
                    videos={empresa.videos}
                    empresaTitle={empresa.empresa}
                    seeMore={false}
                />
            ))}
        </div>
    );
}
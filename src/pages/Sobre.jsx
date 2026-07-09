export default function Sobre() {
    return (
        <section id="sobre" className="min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white">
            <div className="max-w-3xl w-full">

                {/* Título */}
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    Sobre mim
                </h1>

                {/* Texto principal */}
                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">

                    <p>
                        Sou Arthur, videomaker focado em produção de vídeos publicitários e
                        conteúdo para redes sociais.
                    </p>
                    <p>
                       Também atuo com produções para o ambiente corporativo e cobertura de eventos, buscando criar vídeos que comuniquem de forma clara e envolvente.
                    </p>
                    <p>
                        Tenho grande interesse pelo universo dos esportes, que inspira parte do meu trabalho e da minha forma de contar histórias. Atualmente, sou estudante de Audiovisual e estou em constante evolução, aprimorando minhas técnicas e desenvolvendo novos projetos para entregar produções cada vez mais criativas e profissionais.                    </p>

                </div>

                {/* Skills / serviços */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">O que eu faço</h2>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-200">
                        <span className="px-4 py-2 border border-gray-700 rounded-full">
                            Captação de vídeo
                        </span>
                        <span className="px-4 py-2 border border-gray-700 rounded-full">
                            Edição
                        </span>
                        <span className="px-4 py-2 border border-gray-700 rounded-full">
                            Conteúdo estratégico para redes sociais
                        </span>
                        <span className="px-4 py-2 border border-gray-700 rounded-full">
                            Storytelling visual
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
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
                        Sou Arthur, filmmaker focado em produção de vídeos publicitários e
                        conteúdo para redes sociais.
                    </p>

                    <p>
                        Trabalho com criação de peças visuais que unem estética cinematográfica
                        e comunicação direta, ajudando marcas e criadores a se conectarem melhor
                        com seu público.
                    </p>

                    <p>
                        Atuo no audiovisual há poucos meses, com foco em evolução constante e
                        projetos práticos que desenvolvem minha linguagem visual e técnica.
                    </p>

                    <p>
                        Meu objetivo é transformar ideias em vídeos que não sejam apenas bonitos,
                        mas que transmitam mensagem e gerem conexão real.
                    </p>

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
                            Conteúdo para redes sociais
                        </span>
                        <span className="px-4 py-2 border border-gray-700 rounded-full">
                            Storytelling visual
                        </span>
                    </div>
                </div>

                <div className="mt-12">
                    <a
                        href="https://wa.me/5531995439649"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
                    >
                        Fale comigo
                    </a>
                </div>

            </div>
        </section>
    );
}
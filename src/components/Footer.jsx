import { CiInstagram  } from "react-icons/ci";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Marca */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Arthur Henrique
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
              Produção audiovisual, filmes corporativos, eventos e esportes.
              Criando histórias através da imagem.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Navegação
            </h3>

            <nav className="flex flex-col gap-3 text-gray-400">
              <a href="#home" className="hover:text-white transition">
                Home
              </a>

              <a href="#about" className="hover:text-white transition">
                Sobre
              </a>

              <a href="#portfolio" className="hover:text-white transition">
                Portfólio
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contato
              </a>
            </nav>
          </div>

          {/* Contato */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4">
              Vamos conversar
            </h3>

            <div className="space-y-4">
              <div className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <CiInstagram size={18} />
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Arthur Henrique. Todos os direitos
            reservados.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            Voltar ao topo
            <FaRegArrowAltCircleUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
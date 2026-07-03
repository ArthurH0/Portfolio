import heroImage from '../assets/ImagemArthurPortfolio.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="
  relative
  min-h-[95vh]
  bg-cover
  bg-[80%_center]
  md:bg-center
  flex
  items-center
  justify-start
"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 w-full max-w-7xl pl-16 pr-6 text-white">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
          Olá, eu sou <span className="text-orange-500"> {"Arthur\u00A0Acácio"}</span>
        </h2>

        <p className="mt-4 text-lg md:text-2xl text-zinc-300 max-w-2xl">
          Produtor audiovisual, videomaker e editor. Criando filmes que conectam pessoas, marcas e emoções. </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border hover:border-white"
          >
            Ver trabalhos
          </a>

          <a
            href="https://wa.me/31995439649"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white rounded-full transition-all duration-300 hover:bg-white hover:text-black"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  )
}
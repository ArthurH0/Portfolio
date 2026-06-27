import heroImage from '../assets/ImagemArthurPortfolio.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="
  relative
  min-h-screen
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
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Arthur Henrique
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-zinc-300 max-w-2xl">
          Produção audiovisual
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-white text-black rounded-full font-medium"
          >
            Ver trabalhos
          </a>

          <a
            href="https://wa.me/31995439649"
          target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white rounded-full"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  )
}
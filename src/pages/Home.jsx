import Contato from "./Contato";
import Hero from "./Hero";
import PortfolioSection from "./Portfolio";
import Servicos from "./Servicos";
import Sobre from "./Sobre";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sobre />
      <PortfolioSection />
      <Servicos />
      <Contato />
    </div>
  )
}
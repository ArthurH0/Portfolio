import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import Hero from '../pages/Hero'
import Sobre from '../pages/Sobre'
import Servicos from '../pages/Servicos'
import Contato from '../pages/Contato'
import PortfolioSection from '../pages/Portfolio'
import Home from '../pages/Home'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioSection />} />
      </Route>
    </Routes>
  )
}
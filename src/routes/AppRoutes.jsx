import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import SectionCategoria from "../components/SectionCategoria";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:categoria" element={<SectionCategoria />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
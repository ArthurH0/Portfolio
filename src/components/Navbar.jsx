import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoArthur from "../assets/LogoArthur.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    {
      name: "Home",
      type: "section",
      id: "home",
    },
    {
      name: "Sobre",
      type: "section",
      id: "sobre",
    },
    {
      name: "Portfólio",
      type: "section",
      id: "portfolio",
    },
    {
      name: "Serviços",
      type: "section",
      id: "servicos",
    },

    {
      name: "Contato",
      type: "section",
      id: "contato",
    },
  ];

  function handleNavigation(link) {
    setIsOpen(false);

    if (link.type === "route") {
      navigate(link.path);
      return;
    }

    if (location.pathname === "/") {
      document.getElementById(link.id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(`/#${link.id}`);
    }
  }

  function goHome() {
    setIsOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={goHome}
            className="text-xl font-bold tracking-wide text-white transition hover:scale-105 hover:text-gray-300"
          >
            <img
              src={logoArthur}
              alt="Logo Arthur"
              className="w-30 cursor-pointer"
            />          </button>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8 ">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link)}
                className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() =>
              handleNavigation({
                type: "section",
                id: "contato",
              })
            }
            className="hidden md:flex px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            Solicitar orçamento
          </button>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-3xl text-white"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-screen w-80 bg-zinc-950 z-50 transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/10">
          <span className="text-xl font-bold text-white">
            Arthur Acácio
          </span>

          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl text-white"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col px-8 pt-12 gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link)}
              className="text-left text-xl text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() =>
              handleNavigation({
                type: "section",
                id: "contato",
              })
            }
            className="mt-8 rounded-full bg-white text-black py-4 font-semibold hover:scale-105 transition"
          >
            Solicitar orçamento
          </button>
        </nav>
      </aside>
    </>
  );
}
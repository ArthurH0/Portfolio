import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Sobre', href: 'sobre' },
    { name: 'Serviços', href: 'servicos' },
    { name: 'Portfólio', href: 'portfolio' },
    { name: 'Contato', href: 'contato' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md  border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold tracking-wide text-white"
        >
          Arthur Henrique
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="contato"
          className="hidden md:flex px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition"
        >
          Solicitar orçamento
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <nav className="flex flex-col p-6 gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contato"
              className="mt-2 text-center px-5 py-3 rounded-full bg-white text-black font-medium"
            >
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
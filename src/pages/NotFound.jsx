import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-bold text-orange-500">404</h1>

      <h2 className="mt-4 text-3xl font-semibold text-white">
        Página não encontrada
      </h2>

      <p className="mt-3 max-w-md text-zinc-400">
        A página que você está procurando não existe ou foi movida.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
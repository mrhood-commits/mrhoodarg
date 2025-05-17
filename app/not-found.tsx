import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#222222] text-black dark:text-white p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Página no encontrada</h2>
      <p className="text-lg mb-8 text-center max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#ccb699] text-black rounded-full font-medium hover:bg-[#bba589] transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}

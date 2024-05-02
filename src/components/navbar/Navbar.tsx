import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to="/" className="text-2xl font-bold uppercase" > Zerone </Link>

          <div className="flex gap-4">
            <Link to="/login" className="hover:underline" > Login </Link>
            <div className="hover:underline">Projetos</div>
            <div className="hover:underline">Categorias</div>
            <Link to="/sobre" className="hover:underline" > Quem somos</Link>
            <div className="hover:underline">Perfil</div>
            <div className="hover:underline">Sair</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

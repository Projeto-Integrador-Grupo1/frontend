import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className= "text-2xl font-bold uppercase" > Zerone </Link>
          

          <div className="flex gap-4">
      
           <Link to="/login" className= "hover:underline" > Login </Link>
            <div className="hover:underline">Projetos</div>
            <div className="hover:underline">Categorias</div>
            <div className="hover:underline">Cadastrar projeto</div>
            <div className="hover:underline">Perfil</div>
            <Link to="/sobre" className="hover:underline" > Sobre nós </Link>
            <div className="hover:underline">Sair</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import imgLogo from "../../assets/img/zerone-logo.png"
import NavbarPerfil from "./navbarPerfil/NavbarPerfil"


function Navbar() {
  const { usuario } = useContext(AuthContext)

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <div className="w-full bg-indigo-100 text-black flex justify-center py-4">
        <div className="container items-center flex justify-between text-xl">
          <Link to="/" className="text-2xl font-bold uppercase">
            <img
              src={imgLogo}
              className="h-10 w-auto  bg-indigo-100"
              alt=""
            />
          </Link>
          <div className="flex gap-4 mr-4">
            <Link to="/projetos" className="hover:underline">
              Projetos
            </Link>
            <Link to="/sobre" className="hover:underline">
              Quem somos
            </Link>
            <NavbarPerfil />
          </div>
        </div>
      </div>
    )
  } else {
    navbarComponent = (
      <div className='w-full bg-indigo-100 text-black flex justify-center py-4'>
        <div className="container flex justify-between text-xl">
          <Link to="/" className="text-2xl font-bold uppercase">
            <img
              src={imgLogo}
              className="h-10 w-auto bg-indigo-100"
              alt=""
            />
          </Link>
          <div className='flex gap-4'>
            <Link to="/projetos" className="hover:underline">Projetos</Link>
            <Link to="/sobre" className="hover:underline">
              Quem somos
            </Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/cadastro" className="hover:underline">Cadastre-se</Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {navbarComponent}

    </>
  )
}

export default Navbar

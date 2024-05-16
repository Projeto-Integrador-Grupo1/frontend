import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { Toast, ToastAlert } from "../../utils/ToastAlert"
import imgLogo from "../../assets/img/zerone-logo.png"
import { Avatar, Dropdown } from "flowbite-react"
import NavbarPerfil from "./navbarPerfil/NavbarPerfil"


function Navbar() {
  const navigate = useNavigate()
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    ToastAlert('Usuário deslogado com sucesso', Toast.Sucess)
    navigate('/login')
  }

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
              Explorar
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastroCategoria" className="hover:underline">
              Cadastrar categoria
            </Link>
            <Link to="/sobre" className="hover:underline">
              Quem somos
            </Link>
            <NavbarPerfil/>
          </div>
        </div>
      </div>
    )
  } else {
    navbarComponent = (
      <div className='w-full bg-indigo-100 text-black flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to="/" className="text-2xl font-bold uppercase">
            <img
              src={imgLogo}
              className="h-10 w-auto bg-indigo-100"
              alt=""
            />
          </Link>
          <div className='flex gap-4'>
            <Link to="/projetos" className="hover:underline">Projetos</Link>
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

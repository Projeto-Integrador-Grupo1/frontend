import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { Toast, ToastAlert } from "../../utils/ToastAlert"
import imgLogo from "../../assets/img/zerone-logo.png"
import { Avatar, DarkThemeToggle, Dropdown, Flowbite } from "flowbite-react"
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
      <div className="w-full relative bg-azul-200 dark:bg-preto-400 text-black dark:text-cinza-100 flex justify-center py-4">
        <div className="container items-center flex justify-between text-xl">
          <Link to="/home" className="text-2xl font-bold uppercase">
            <img
              src={imgLogo}
              className="h-16 w-auto bg-cinza-100 rounded-xl"
              alt=""
            />
          </Link>
          <div className="flex items-center gap-4 mr-4">
            <Link to="/projetos" className="hover:underline">
              Projetos
            </Link>
            <Link to="/sobre" className="hover:underline">
              Quem somos
            </Link>
            <NavbarPerfil />
          </div>
        </div>
        <Flowbite >
          <DarkThemeToggle className=" hover:bg-transparent" />
        </Flowbite>
      </div>
    )
  } else {
    navbarComponent = (

      <div className='w-full fixed top-0 left-0 right-0 z-50 bg-azul-200 dark:bg-preto-400 text-black dark:text-cinza-100 flex justify-center py-4'>
        <div className=" container flex items-center justify-between text-xl">
          <Link to="/home" className="text-2xl font-bold uppercase">
            <img
              src={imgLogo}
              className=" h-16 w-auto mx-20 bg-cinza-100 rounded-xl"
              alt=""
            />
          </Link>
          <div className='flex mx-20 gap-4'>
            <Link to="/projetos" className="hover:underline">Projetos</Link>
            <Link to="/sobre" className="hover:underline">
              Quem somos
            </Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/cadastro" className="hover:underline">Cadastre-se</Link>
          </div>
        </div>
        <Flowbite >
          <DarkThemeToggle className=" mx-5 hover:bg-transparent" />
        </Flowbite>
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

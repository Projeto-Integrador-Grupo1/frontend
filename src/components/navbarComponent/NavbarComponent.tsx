import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, DarkThemeToggle, Flowbite, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { SignIn } from "@phosphor-icons/react";

import { AuthContext } from "../../contexts/AuthContext";

import DropdownPerfil from "./dropdownPerfil/DropdownPerfil";
import imgLogo from "../../assets/img/zerone-logo.png";
import imgLogoDark from "../../assets/img/zerone-logo-claro.png";


function NavbarComponent() {

  const { usuario } = useContext(AuthContext);

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <div className="">
        <Navbar className="fixed w-full z-50 top-0 start-0 bg-azul-200" fluid >
          <NavbarBrand >
            <Link to="/home">
              <img src={imgLogo} className="mr-4 rounded-xl bg-cinza-100 dark:bg-preto-400 dark:hidden w-32 lg:w-44 " alt="Logo Zerone" />
              <img src={imgLogoDark} className="mr-4 rounded-xl bg-cinza-100 dark:bg-preto-400 hidden dark:block w-32 lg:w-44" alt="Logo Zerone" />
            </Link>
          </NavbarBrand>

          <div className="flex md:order-2">
            <NavbarToggle />

            <DropdownPerfil />

            <Flowbite >
              <DarkThemeToggle className="bg-azul-100 mx-4 dark:bg-preto-400" />
            </Flowbite>
          </div>

          <NavbarCollapse className=" text-2xl">
            <NavbarLink>
              <Link to="/projetos" className="text-xl hover:underline focus:text-white" >
                Projetos
              </Link>
            </NavbarLink>

            <NavbarLink >
              <Link to="/sobre" className="text-xl hover:underline focus:text-white" >
                Quem somos
              </Link>
            </NavbarLink>

          </NavbarCollapse>
        </Navbar>

      </div>
    )
  } else {
    navbarComponent = (


      <Navbar className="fixed w-full z-50 top-0 start-0 bg-azul-200" fluid >
        <NavbarBrand >
          <Link to="/home">
            <img src={imgLogo} className="mr-4 rounded-xl bg-cinza-100 dark:bg-preto-400 dark:hidden w-32 lg:w-44 " alt="Logo Zerone" />
            <img src={imgLogoDark} className="mr-4 rounded-xl bg-cinza-100 dark:bg-preto-400 hidden dark:block w-32 lg:w-44" alt="Logo Zerone" />
          </Link>
        </NavbarBrand>

        <div className="flex md:order-2">
          <NavbarToggle />

          <Button size="xs" >
            <Link to="/login" className="flex items-center text-xl bg-rosa-200  p-2 rounded-lg hover:bg-azul-100 hover:text-rosa-200">
              <SignIn size={26} /> Login
            </Link>
          </Button>

          <Flowbite >
            <DarkThemeToggle className="bg-azul-100 mx-4 dark:bg-preto-400" />
          </Flowbite>
        </div>

        <NavbarCollapse className=" text-2xl">
          <NavbarLink>
            <Link to="/projetos" className="text-xl hover:underline focus:text-white" >
              Projetos
            </Link>
          </NavbarLink>

          <NavbarLink >
            <Link to="/sobre" className="text-xl hover:underline focus:text-white" >
              Quem somos
            </Link>
          </NavbarLink>
        </NavbarCollapse>

      </Navbar>
    )
  }
  return (
    <>

      {navbarComponent}
    </>
  )
}

export default NavbarComponent;

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../contexts/AuthContext'
import { ToastAlert, Toast } from '../../../utils/ToastAlert'
import imgFotoUsuario from "../../../assets/imgSemFotoUsuario.png"

import { Avatar, Dropdown } from "flowbite-react"

import { Link } from "react-router-dom"

function NavbarPerfil() {
    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        ToastAlert('Usuário deslogado com sucesso', Toast.Sucess)
        navigate('/login')
    }

    return (
        <div className="flex md:order-2">
            <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar className="border-3 rounded-full border-white" alt="User settings" img={usuario.foto === " " || null
                        ? imgFotoUsuario
                        : usuario.foto} rounded />
                }
            >
                <Dropdown.Header>
                    <span className="block text-sm">{usuario.nome}</span>
                    <span className="block truncate text-sm font-medium">{usuario.email}</span>
                </Dropdown.Header>
                <Link to="/perfil" className="hover:underline">
                    <Dropdown.Item>
                        Perfil
                    </Dropdown.Item>
                </Link>

                <Link to="/perfil" className="hover:underline">
                    <Dropdown.Item>
                        Meus projetos
                    </Dropdown.Item>
                </Link>

                <Link to="/categorias" className="hover:underline">
                    <Dropdown.Item>
                        Categorias
                    </Dropdown.Item>
                </Link>
                
                <Dropdown.Divider />

                <Link to="" onClick={logout} className="hover:underline">
                    <Dropdown.Item>
                        Sair
                    </Dropdown.Item>
                </Link>
            </Dropdown>
        </div>
    )
}

export default NavbarPerfil
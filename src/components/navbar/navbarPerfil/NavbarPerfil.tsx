import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../contexts/AuthContext'
import { ToastAlert, Toast } from '../../../utils/ToastAlert'

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
                    <Avatar className="border-3 rounded-full border-white" alt="User settings" img={usuario.foto} rounded />
                }
            >
                <Dropdown.Header>
                    <span className="block text-sm">{usuario.nome}</span>
                    <span className="block truncate text-sm font-medium">{usuario.email}</span>
                </Dropdown.Header>
                <Dropdown.Item>
                    <Link to="/perfil" className="hover:underline">Perfil</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to="/perfil" className="hover:underline">Meus projetos</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <Link to="" onClick={logout} className="hover:underline">Sair</Link>
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export default NavbarPerfil
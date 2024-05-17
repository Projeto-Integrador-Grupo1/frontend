import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

import { AuthContext } from '../../../contexts/AuthContext'
import { ToastAlert, Toast } from '../../../utils/ToastAlert'

import loginLogo from '../../../assets/planejamento.jpg'
import ProjetosUsuario from '../../../components/usuario/projetosUsuario/ProjetosUsuario'
import imgFotoUsuario from "../../../assets/imgSemFotoUsuario.png"


function Perfil() {
    let navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlert('Você precisa estar logado', Toast.Info)
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto rounded-b-2xl overflow-hidden'>
            <div className='w-full h-60 object-cover border-b-8 border-white bg-pink-100'>
                {/* <img className='w-full h-72 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" /> */}
            </div>

            <img src={usuario.foto === " " || null
                ? imgFotoUsuario
                : usuario.foto}
                alt={`Foto de perfil de ${usuario.nome}`}
                className='rounded-full w-48 mx-auto mt-[-8rem] border-8 border-white relative z-10' />

            <div className="relative mt-[-6rem] h-64 flex flex-col bg-sky-100 text-black text-2xl items-center justify-center rounded-b-2xl">
                <div className='flex mt-[5rem] flex-col items-center justify-center'>
                    <p  className=" text-center font-bold bold text-3xl">{usuario.nome} </p>
                    <p>{usuario.email}</p>
                </div>
            </div>

            <div className=" w-full flex flex-col justify-center px-6">
                <div className="container">
                    <div className='flex flex-col font-bold text-3xl mt-14 border-b-2 py-5'>
                        <div className='flex items-center justify-between '>
                            <h2 className="font-bold text-4xl">
                                Meus projetos
                            </h2>
                            <button className=" text-center text-2xl font-semibold text-white bg-green-600 rounded p-2  w-100">
                                <Link to={usuario.token !== "" ? "/cadastrarProjeto" : "/login"} >+ Criar projeto</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="my-12">
                    <ProjetosUsuario />
                </div>
            </div>

        </div >
    )
}

export default Perfil
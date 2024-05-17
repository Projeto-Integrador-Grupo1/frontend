import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

import { AuthContext } from '../../../contexts/AuthContext'
import { ToastAlert, Toast } from '../../../utils/ToastAlert'

import loginLogo from '../../../assets/planejamento.jpg'
import imgFotoUsuario from "../../../assets/imgSemFotoUsuario.png"
import ProjetosUsuario from '../../../components/usuario/projetosUsuario/ProjetosUsuario' 

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
        <div className='container mx-auto rounded-b-2xl pb-24'>

            <div className='w-full h-96 bg-azul-200 dark:bg-rosa-200 object-cover border-b-8 border-rosa-200 dark:border-azul-200 ' ></div>

            <div className='bg-azul-100'></div>

            <img src={usuario.foto === " " || null
                ? imgFotoUsuario
                : usuario.foto}
                alt={`Foto de perfil de ${usuario.nome}`}
                className='rounded-full w-52 mx-auto mt-[-8rem] border-8 border-azul-200 dark:border-rosa-200 relative z-10' />

            <div className="relative mt-[-6rem] h-60 flex flex-col bg-sky-100 text-black text-2xl items-center justify-center rounded-b-2xl">
                <div className='flex mt-[5rem] flex-col items-center justify-center dark:text-cinza-100'>
                    <p>{usuario.nome} </p>
                    <p>{usuario.email}</p>
                </div>
            </div>

            <div className=" w-full flex flex-col justify-center px-6">
                <div className="container">
                    <div className='flex flex-col font-bold text-3xl mt-14 border-b-2 py-5'>
                        <div className='flex items-center justify-between '>
                            <h2 className="font-bold text-4xl dark:text-cinza-100">
                                Meus projetos
                            </h2>
                            <button className=" text-center text-2xl font-semibold text-white bg-rosa-200 rounded p-2  w-100">
                                <Link to={usuario.token !== "" ? "/cadastrarProjeto" : "/login"}  >+ Criar projeto</Link>
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

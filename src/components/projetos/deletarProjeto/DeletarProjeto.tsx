import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Projeto from '../../../models/Projeto';
import { buscar, deletar } from '../../../services/Services'
import { RotatingLines } from 'react-loader-spinner'

function DeletarProjeto() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [projeto, setProjeto] = useState<Projeto>({} as Projeto)

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {

            await buscar(`/projetos/${id}`, setProjeto, {
                headers: {
                    'Authorization': token
                }
            })

        } catch (error: any) {

            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id) 
        }
    }, [id])

    function retornar() {
        navigate("/projetos")
    }

    async function deletarProjeto() {
        setIsLoading(true)

        try {
            await deletar(`/projetos/${id}`, {
                headers: {
                    'Authorization': token 
                }
            })

            alert('Projeto apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar Projeto')
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar projeto</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o projeto a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Projeto</header>
                <div className="p-4">
                    <p className='text-xl h-full'>{projeto.titulo}</p>
                    <p>{projeto.descricao}</p>
                </div>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarProjeto}>

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }

                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProjeto
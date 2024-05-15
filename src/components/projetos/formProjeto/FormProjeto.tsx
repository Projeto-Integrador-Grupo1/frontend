import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Projeto from '../../../models/Projeto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Services';
import { RotatingLines } from 'react-loader-spinner';


function FormularioProjeto() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomeCategoria: '',
        descricao: '',
    });

    const [projeto, setProjeto] = useState<Projeto>({
        id: 0,
        titulo: '',
        descricao: '',
        qtdDoacoes: 0,
        valorAtual: 0,
        valorMeta: 0,
        tipoMidia: '',
        linkMidia: '',
        dataLimite: '',
        data: '',
        categoria: null,
        usuario: null,
    });

    async function buscarProjetoPorId(id: string) {
        await buscar(`/projetos/${id}`, setProjeto, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {

        buscarCategorias()

        if (id !== undefined) {
            buscarProjetoPorId(id)
        }

    }, [id])

    useEffect(() => {
        setProjeto({
            ...projeto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProjeto({                           
            ...projeto,                       
            [e.target.name]: e.target.value,  
            categoria: categoria,   
            usuario: usuario, 
        });
    }

    function retornar() {
        navigate('/projetos');
    }

    async function cadastrarNovoProjeto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault() 
        setIsLoading(true) 

        if (id != undefined) { 
            try {

                await atualizar(`/projetos`, projeto, setProjeto, {
                    headers: {
                        Authorization: token,
                    },
                })

                alert('Projeto atualizado com sucesso');
                retornar()

            } catch (error: any) {

                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()

                } else {

                    alert('Erro ao atualizar o Projeto');
                }
            }
        } else { 

            try {

                await cadastrar(`/projetos`, projeto, setProjeto, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Projeto cadastrado com sucesso');
                retornar();

            } catch (error: any) {

                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()

                } else {

                    alert('Erro ao cadastrar o Projeto');
                }

            }
        }

        setIsLoading(false)
    }

    const carregandoCategoria = categoria.nomeCategoria === ''; 

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-3xl text-center mb-10">{id !== undefined ? `Editar projeto ${projeto.titulo}` : 'Cadastrar projeto'}</h1>

            <form onSubmit={cadastrarNovoProjeto} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Titulo do projeto</label>
                    <input
                        value={projeto.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Titulo"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do projeto</label>
                    <input
                        value={projeto.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Descrição"
                        name="descricao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="linkMidia">Link da foto do projeto</label>
                    <input
                        value={projeto.linkMidia}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Link da Mídia"
                        name="linkMidia"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="valorMeta">Meta de investimentos</label>
                    <input
                        value={projeto.valorMeta}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="number"
                        placeholder="Valor da meta"
                        name="valorMeta"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="dataLimite">Data limite de investimentos</label>
                    <input
                        value={projeto.dataLimite}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="date"
                        placeholder="Data"
                        name="dataLimite"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <p>Escolha uma categoria do projeto</p>

                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                        <option value="" selected disabled>Selecione uma categoria</option>
                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.nomeCategoria}</option>
                            </>
                        ))}
                    </select>
                </div>

                <button
                    disabled={carregandoCategoria} 
                    type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 mt-16 flex justify-center'>

                    {carregandoCategoria || isLoading ?

                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />

                        : id !== undefined ? 'Editar' : 'Cadastrar'}

                </button>
            </form>
        </div>
    );

}

export default FormularioProjeto
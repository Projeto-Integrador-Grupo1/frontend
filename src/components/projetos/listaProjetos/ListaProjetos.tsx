import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import Projeto from '../../../models/Projeto';
import { buscar } from '../../../services/Services';
import CardProjetos from '../cardProjetos/CardProjetos';
import { Toast, ToastAlert } from '../../../utils/ToastAlert';
import Categoria from '../../../models/Categoria';

function ListaProjetos() {

    const [projetos, setProjetos] = useState<Projeto[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);

    const projetosFiltrados = projetos.filter((projetos) => projetos.categoria?.nomeCategoria === categoriaSelecionada);
    const projetosOrdenados = projetosFiltrados.sort((a, b) => a.titulo.localeCompare(b.titulo));

    async function buscarProjetos() {
        try {
            await buscar('/projetos/all', setProjetos)
        } catch (error: any) {
            ToastAlert("Erro ao buscar as categorias", Toast.Warning)
        }
    }

    useEffect(() => {
        buscarProjetos()
    }, [projetos.length])



    async function buscarCategorias() {
        try {
            await buscar('/categorias/all', setCategorias)
        } catch (error: any) {
            ToastAlert('Não há categorias', Toast.Info)
        }
    }

    function handleCategoriaClick(categoriaNome: string) {
        setCategoriaSelecionada(categoriaNome);
    }

    useEffect(() => {
        buscarCategorias();
        buscarProjetos();
    }, [categoriaSelecionada, categorias.length])

    useEffect(() => {
        if (categorias.length > 0 && categoriaSelecionada === null) {
            setCategoriaSelecionada(categorias[0].nomeCategoria);
        }
    }, [categorias, categoriaSelecionada]);

    return (
        <>
            {projetos.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className=' '>
                <div className='container mx-auto p-4 flex  gap-4 rounded-xl bg-rose-500'>
                    {categorias.map((categoria) => (
                        <button
                            key={categoria.id}
                            onClick={() => handleCategoriaClick(categoria.nomeCategoria)}
                            className={`bg-rose-100 px-2 py-1 rounded-lg hover:bg-rose-800 hover:text-rose-100 ${categoria.nomeCategoria === categoriaSelecionada ? 'font-bold' : ''}`}
                        >
                            {categoria.nomeCategoria}
                        </button>
                    ))}
                </div>
            </div>

            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                {/* {
                    projetos.map((projeto) => (

                        <CardProjetos key={projeto.id} projeto={projeto} />

                    ))} */}

                {
                    projetosOrdenados.map((projeto) => (

                        <CardProjetos key={projeto.id} projeto={projeto} />

                    ))}
            </div>
        </>
    );

}

export default ListaProjetos;
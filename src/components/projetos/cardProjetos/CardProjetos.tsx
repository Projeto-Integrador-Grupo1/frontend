import { Link } from 'react-router-dom'
import Projeto from '../../../models/Projeto';

interface CardProjetosProps {
    projeto: Projeto
}

function CardProjetos({ projeto }: CardProjetosProps) {

    let dataDoBanco = new Date(projeto.data);

    dataDoBanco.setHours(dataDoBanco.getHours() - 3);

    let dataLocal = new Intl.DateTimeFormat(undefined, {
        dateStyle: 'full',
        timeStyle: 'medium',
    }).format(dataDoBanco)


    return (
        <div className=' bg-gray-100 border-slate-900 flex flex-col rounded overflow-hidden justify-between shadow border-2'>

            <div className=' p-4 '>
                <p>Categoria: {projeto.categoria?.nomeCategoria}</p>
            </div>

            <div className="flex w-full bg-indigo-100 py-2 px-4 items-center gap-4">
                <img src='https://pareto.io/wp-content/uploads/2023/07/header-tess-ai-urso-1.jpg' className='h-12 rounded-full' alt="" />
                <h3 className='text-lg font-semibold text-center uppercase '>{projeto.titulo}</h3>
            </div>
            <div className='p-4 '>
                <p>{projeto.descricao}</p>
            </div>
            <div className='p-4 '>
                <p>Valor atual: R$ {projeto.valorAtual.toFixed(2).replace('.',',')}</p>
                <p>Meta de investimento: R$ {projeto.valorMeta.toFixed(2).replace('.',',')}</p>
                <p>Data limite para investir: {projeto.dataLimite}</p>
                <p>Apoiadores: {projeto.qtdDoacoes}</p>
            </div>
            <div className='p-4 '>
                <p>Data início: {dataLocal}</p>
            </div>
            <div className="flex">

                <Link to={`/editarProjeto/${projeto.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarProjeto/${projeto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProjetos
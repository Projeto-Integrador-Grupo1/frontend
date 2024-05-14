import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import "./CardCategorias.css"

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="border rounded h-60 shadow">
      <div className="rounded p-4 px-8 h-full flex flex-col justify-end text-white inside-shadow relative">
        <img
          className="absolute top-0 left-0 w-full h-full -z-10"
          src="https://www.conteudoinboundmarketing.com.br/wp-content/uploads/2019/11/iStock-1047716020-1024x684.jpg"
          alt=""
        />
        <div>
          <header className="text-lg">{categoria.nomeCategoria}</header>
          <p className="text-xs truncate">{categoria.descricao}</p>
        </div>
      </div>
    </div>
    // <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
    //   <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
    //     {categoria.nomeCategoria}
    //   </header>
    //   <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.descricao}</p>
    //   <div className="flex">
    //     <Link
    //       to={`/editarCategoria/${categoria.id}`}
    //       className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
    //     >
    //       <button>Editar</button>
    //     </Link>
    //     <Link
    //       to={`/deletarCategoria/${categoria.id}`}
    //       className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
    //     >
    //       <button>Deletar</button>
    //     </Link>
    //   </div>
    // </div>
  )
}

export default CardCategorias

import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"
// import "./CardCategorias.css"
import { Button, Card, Dropdown } from "flowbite-react"
import { Trash } from "@phosphor-icons/react"

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <>
      <Card className="max-w-sm ">
        <div className="flex justify-between">

          <div>

            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {categoria.nomeCategoria}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {categoria.descricao}
            </p>
          </div>
          <div className="flex object-right-top dark:text-cinza-100 items-start">
            <Dropdown inline label="" className="">
              <Dropdown.Item>
                <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" to={`/editarCategoria/${categoria.id}`}>Editar</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" to={`/deletarCategoria/${categoria.id}`}>Deletar</Link>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </Card>


      {/* <div className="rounded p-4 px-8 h-full flex flex-col justify-end text-white inside-shadow relative">
        <div>
        <header className="text-lg">{categoria.nomeCategoria}</header>
        <p className="text-xs truncate">{categoria.descricao}</p>
        </div>
        
      </div> */}

      {/* <div className="flex justify-between">
      </div> */}

    </>
  )
}

export default CardCategorias

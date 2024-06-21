import { Link } from "react-router-dom";
import { Card, Dropdown, DropdownItem } from "flowbite-react";

import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <>
      <Card className="max-w-sm ">
        <div className="flex justify-between">
          <div>
            <h5 className="  lg:text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
              {categoria.nomeCategoria}
            </h5>
          </div>

          <div className="flex object-right-top dark:text-cinza-100 items-start">
            <Dropdown inline label="" >
              <Dropdown.Item>
                <Link
                  to={`/editarCategoria/${categoria.id}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Editar
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link
                  to={`/deletarCategoria/${categoria.id}`}
                  className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Deletar
                </Link>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </Card>
    </>
  )
}

export default CardCategoria;

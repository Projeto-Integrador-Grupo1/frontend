import Projeto from "../../../models/Projeto"
import { AuthContext } from "../../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Button, Card } from "flowbite-react"
import { Trash } from "@phosphor-icons/react"

interface CardProjetosProps {
  projeto: Projeto
}

function CardProjetos({ projeto }: CardProjetosProps) {
  let dataDoBanco = new Date(projeto.data)

  const { usuario } = useContext(AuthContext)

  let dataDoBanco = new Date(projeto.data)

  let dataLocal = new Intl.DateTimeFormat(undefined, {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(dataDoBanco)

  let dataLocal = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
  }).format(dataDoBanco)

  let cardComponent

  if (usuario.token !== "" && usuario.email === projeto.usuario?.email) {
    cardComponent = (
      <div className=" flex flex-col justify-between ">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={projeto.linkMidia}
        >
          <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {projeto.titulo}
          </h5>

          <div className="flex w-ful items-center gap-4">
            <img
              src={
                projeto.usuario?.foto === " " || null
                  ? "https://tempodepolitica.com.br/wp-content/uploads/2020/05/sh_ong_111901871.jpg"
                  : projeto.usuario?.foto
              }
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <p className="text-base font-semibold text-slate-500">
              {projeto.usuario?.nome}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold text-gray-600 dark:text-gray-400 py-0">
              Apoiadores: {projeto.qtdDoacoes}
            </p>
            <p className="font-semibold text-gray-600 dark:text-gray-400 my-0">
              Início: {dataLocal}
            </p>
          </div>

          <div className="flex justify-between">
            <Button className="px-20 bg-blue-500">
              <Link to={`/editarProjeto/${projeto.id}`}>Editar</Link>
            </Button>

            <Button className="px-4 bg-red-500">
              <Link to={`/deletarProjeto/${projeto.id}`}>
                {" "}
                <Trash size={20} />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    )
  } else {
    cardComponent = (
      <div className=" flex flex-col justify-between ">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={projeto.linkMidia}
        >
          <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {projeto.titulo}
          </h5>

          <div className="flex w-full items-center gap-4">
            <img
              src={
                projeto.usuario?.foto === " " || null
                  ? "https://tempodepolitica.com.br/wp-content/uploads/2020/05/sh_ong_111901871.jpg"
                  : projeto.usuario?.foto
              }
              className="h-8 w-8 rounded-full"
              alt=""
            />
            <p className="text-base font-semibold text-slate-500">
              {projeto.usuario?.nome}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold text-gray-600 dark:text-gray-400 py-0">
              Apoiadores: {projeto.qtdDoacoes}
            </p>
            <p className="font-semibold text-gray-600 dark:text-gray-400 my-0">
              Início: {dataLocal}
            </p>
          </div>

          <Button className="px-6 bg-blue-500 ">
            Conheça este projeto
            <svg
              className="-mr-1 mt-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      </div>
    )
  }

  return <>{cardComponent}</>
}

export default CardProjetos

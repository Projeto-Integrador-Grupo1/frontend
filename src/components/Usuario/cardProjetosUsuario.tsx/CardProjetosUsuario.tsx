import Projeto from "../../../models/Projeto"
import { AuthContext } from "../../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Button, Card } from "flowbite-react"
import { Trash } from "@phosphor-icons/react"

interface CardProjetosUsuarioProps {
    projeto: Projeto
}

function CardProjetosUsuario({ projeto }: CardProjetosUsuarioProps) {

    const { usuario } = useContext(AuthContext)

    let dataDoBanco = new Date(projeto.data)

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
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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

                        <Link to={`/editarProjeto/${projeto.id}`}>

                            <Button className="px-20 bg-blue-500">
                                Editar
                            </Button>
                        </Link>

                        <Link to={`/deletarProjeto/${projeto.id}`}>
                            <Button className="px-4 bg-red-500">
                                <Trash size={20} />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        )
    }

    return <>{cardComponent}</>
}

export default CardProjetosUsuario

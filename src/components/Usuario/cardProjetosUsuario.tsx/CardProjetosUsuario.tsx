import Projeto from "../../../models/Projeto"
import { AuthContext } from "../../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Button, Card } from "flowbite-react"
import { ArrowRight, Trash } from "@phosphor-icons/react"
import imgFotoUsuario from "../../../assets/imgSemFotoUsuario.png"

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
                    className="max-w-xl"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={projeto.linkMidia}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {projeto.titulo}
                    </h5>

                    <div className="flex w-ful items-center gap-4 " style={{}}>
                        <img
                            src={
                                projeto.usuario?.foto === " " || null
                                    ? imgFotoUsuario
                                    : projeto.usuario?.foto
                            }
                            className="w-8 h-8 rounded-full"
                            alt=""
                        />
                        <p className="text-base dark:text-cinza-100 font-semibold text-slate-500">
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
                            <div >
                                <Button className="px-20 max-sm:px-14 max-md:px-20 max-lg:px-20 max-xl:px-16 max-2xl:px-14 bg-azul-200">
                                    Editar
                                </Button>
                            </div>

                        </Link>

                        <Link to={`/deletarProjeto/${projeto.id}`}>
                            <Button className="px-2 bg-red-500">
                                <Trash size={20} />
                            </Button>
                        </Link>

                    </div>
                    <Link className="flex justify-center items-center pt-4 font-semibold dark:text-cinza-100" to={`/projeto/${projeto.id}`}>
                        Ver meu projeto
                        <ArrowRight className="-mr-1 mt-1 ml-2 h-4 w-4 " size={20} />
                    </Link>
                </Card>
            </div>
        )
    }

    return <>{cardComponent}</>
}

export default CardProjetosUsuario

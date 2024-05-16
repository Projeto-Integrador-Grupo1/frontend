import Projeto from "../../../models/Projeto"
import { AuthContext } from "../../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Button, Card } from "flowbite-react"

interface CardProjetosProps {
    projeto: Projeto
}

function CardProjetos({ projeto }: CardProjetosProps) {

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
                            Investimentos: {projeto.qtdDoacoes}
                        </p>
                        <p className="font-semibold text-gray-600 dark:text-gray-400 my-0">
                            Início: {dataLocal}
                        </p>
                    </div>

                    <Button className="px-6 bg-green-600 ">
                        <Link to={`/projeto/${projeto.id}`}>Ver meu projeto</Link>

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
    } else {
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
                            Investimentos: {projeto.qtdDoacoes}
                        </p>
                        <p className="font-semibold text-gray-600 dark:text-gray-400 my-0">
                            Início: {dataLocal}
                        </p>
                    </div>

                    <Button className="px-6 bg-blue-600 ">
                        <Link to={`/projeto/${projeto.id}`}>Conheça este projeto</Link>

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

import { useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Card } from "flowbite-react";

import { AuthContext } from "../../../contexts/AuthContext";

import Projeto from "../../../models/Projeto";


interface CardProjetoProps {
  projeto: Projeto;
}

function CardProjeto({ projeto }: CardProjetoProps) {

  const { usuario } = useContext(AuthContext);

  const nomes = projeto.usuario.nome.split(' ');
  const inicialPrimeiroNome = nomes[0][0];
  const inicialUltimoNome = nomes.length > 1 ? nomes[nomes.length - 1][0] : '';
  const iniciais = `${inicialPrimeiroNome}${inicialUltimoNome}`.toUpperCase();

  let dataDoBanco = new Date(projeto.data);

  let dataLocal = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
  }).format(dataDoBanco);

  let cardComponent;

  if (usuario.token !== "" && usuario.email === projeto.usuario?.email) {
    cardComponent = (
      <div className=" flex flex-col justify-between ">
        <Card
          className="max-w-xl card"
          renderImage={() => (
            <img src={projeto.linkMidia} alt={projeto.titulo} className="object-cover h-64 rounded-t-lg" />
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 lg:truncate dark:text-white" title={projeto.titulo}>
            {projeto.titulo}
          </h5>

          <div className="flex w-full items-center gap-4">
            {projeto.usuario?.foto && projeto.usuario?.foto.trim() !== '' ?
              <Avatar img={projeto.usuario?.foto} rounded /> :
              <Avatar placeholderInitials={iniciais} rounded />
            }

            <p className="text-base dark:text-cinza-100 font-semibold text-slate-500">
              {projeto.usuario?.nome}
            </p>
          </div>

          <div className="justify-between">
            <p className="font-semibold text-gray-600 dark:text-gray-400 py-0">
              Investimentos: {projeto.qtdDoacoes}
            </p>

            <p className="font-semibold text-gray-600 dark:text-gray-400 my-0">
              Início: {dataLocal}
            </p>
          </div>

          <Button className="px-6 bg-rosa-200 ">
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
          renderImage={() => (
            <img src={projeto.linkMidia} alt={projeto.titulo} className="object-cover h-64 rounded-t-lg" />
          )}
        >
          <h5 className=" text-xl lg:text-2xl font-bold tracking-tight text-gray-900 lg:truncate dark:text-white" title={projeto.titulo}>
            {projeto.titulo}
          </h5>

          <div className="flex w-full items-center gap-4">
            {projeto.usuario?.foto && projeto.usuario?.foto.trim() !== '' ?
              <Avatar img={projeto.usuario?.foto} rounded /> :
              <Avatar placeholderInitials={iniciais} rounded />
            }

            <p className="text-base dark:text-cinza-100 font-semibold text-slate-500">
              {projeto.usuario?.nome}
            </p>
          </div>

          <div className="justify-between">
            <p className="font-semibold text-gray-600 text-sm dark:text-gray-400 py-0">
              Investimentos: {projeto.qtdDoacoes}
            </p>
            <p className="font-semibold text-gray-600 text-sm dark:text-gray-400 my-0">
              Início: {dataLocal}
            </p>
          </div>

          <Button className="px-6 bg-rosa-200 ">
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

  return (
    <>
      {cardComponent}
    </>
  )
}

export default CardProjeto;

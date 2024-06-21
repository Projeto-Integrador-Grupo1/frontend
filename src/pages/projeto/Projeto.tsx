import { ChangeEvent, useContext, useEffect, useState } from "react";
import { DNA, RotatingLines } from "react-loader-spinner";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Progress } from "flowbite-react";

import moment from "moment";

import { AuthContext } from "../../contexts/AuthContext";
import { Toast, ToastAlert } from "../../utils/ToastAlert";
import { atualizar, buscar } from "../../services/Services";

import ProjetoModel from "../../models/Projeto";

function Projeto() {

  const navigate = useNavigate();

  const [projeto, setProjeto] = useState<ProjetoModel>({
    id: 0,
    titulo: "",
    descricao: "",
    qtdDoacoes: 0,
    valorAtual: 0,
    valorMeta: 0,
    tipoMidia: "",
    linkMidia: "",
    dataLimite: "",
    data: "",
    categoria: null,
    usuario: null,
  })

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disableButton, setdisableButton] = useState<boolean>(false);
  const [valorDoacao, setValorDoacao] = useState<number>(0);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const dataAtual = new Date().toISOString().split('T')[0];

  const meta = ((projeto.valorAtual / projeto.valorMeta) * 100);


  async function buscarPorId(id: string) {
    setIsLoading(true);
    try {
      await buscar(`/projetos/${id}`, setProjeto, {
        headers: {
          Authorization: token,
        },
      })

    } catch (error: any) {
      ToastAlert("Erro ao buscar projeto", Toast.Error);
      navigate("/projetos");
    }

    setIsLoading(false);
  }

  function diasRestantes(data: string) {
    let eventdate = moment(data);
    let todaysdate = moment();
    let diff = eventdate.diff(todaysdate, "days");

    return diff < 0 ? 0 : diff;
  }

  async function chamarApi() {
    try {
      await atualizar("/projetos", projeto, setProjeto, {
        headers: {
          Authorization: token,
        },
      })

      ToastAlert("Doação realizada com sucesso", Toast.Sucess);
      navigate("/projetos");

    } catch (error: any) {
      if (error.toString().includes("403")) {
        ToastAlert("O token expirou, favor logar novamente", Toast.Error);
        handleLogout();

      } else {
        ToastAlert("Erro ao realizar a doação. Tente novamente", Toast.Error);
      }
    }
  }

  async function doar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    setdisableButton(true);

    if (valorDoacao > 0) {
      setProjeto({
        ...projeto,
        qtdDoacoes: projeto.qtdDoacoes + 1,
        valorAtual: projeto.valorAtual + valorDoacao,
      })

    } else {
      ToastAlert("Digite um valor maior que 0", Toast.Error);
      setdisableButton(false);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id])

  useEffect(() => {
    if (valorDoacao > 0) {
      setIsLoading(true);
      chamarApi();
    }
  }, [projeto])

  return (
    <>
      {isLoading ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="container px-10 mx-auto my-12 dark:text-cinza-100">
          <h1 className="font-bold text-3xl mb-4">{projeto.titulo}</h1>
          <div className="lg:flex justify-between gap-16">
            <img
              src={projeto.linkMidia}
              alt="imagem projeto"
              className="aspect-video mb-5 lg:w-2/4 object-cover"
            />
            <div className="w-full">
              <Progress
                progress={meta}
                progressLabelPosition="inside"
                textLabel=""
                textLabelPosition="outside"
                size="lg"
                color="green"
                labelProgress
                labelText
                className=" text-cinza-100 dark:bg-preto-300"
              />

              <h2 className="text-2xl mt-5 font-bold">
                Valor Arrecadado: R$ {projeto.valorAtual?.toFixed(2).replace(".", ",")}
              </h2>

              <span className="text-gray-500">
                Meta: R${" "}
                {projeto.valorMeta?.toFixed(2).replace(".", ",")}
              </span>

              <h2 className="text-2xl font-bold mt-4">{projeto.qtdDoacoes}</h2>
              <span className="text-gray-500">doações</span>

              <h2 className="text-2xl font-bold mt-4">
                {diasRestantes(projeto.dataLimite)}
              </h2>

              <span className="text-gray-500">dias restantes</span>

              <div className="border-t py-2 mt-8">
                {token !== "" ? (
                  projeto.dataLimite < dataAtual ?
                    <p>Este projeto não está mais recebendo doações</p>
                    :
                    <>
                      <h3 className="text-xl font-bold my-4">Faça uma doação:</h3>

                      <form onSubmit={doar} className="flex gap-2 dark:text-">
                        <label htmlFor="valor">
                          <span>R$ </span>
                          <input
                            id="valor"
                            type="number"
                            placeholder="Digite um valor"
                            className="border border-slate-700 rounded p-2 dark:bg-preto-300"
                            name="valor"
                            value={valorDoacao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              setValorDoacao(+e.target.value)
                            }
                          />
                        </label>
                        <Button
                          className="bg-rosa-200"
                          disabled={disableButton}
                          type="submit"
                        >
                          {disableButton ? (
                            <RotatingLines
                              strokeColor="white"
                              strokeWidth="5"
                              animationDuration="0.75"
                              width="24"
                              visible={true}
                            />
                          ) : (
                            "Apoiar"
                          )}
                        </Button>
                      </form>
                    </>
                ) : (
                  <Link to="/login">
                    <Button className="mt-4 bg-rosa-200">
                      Apoiar
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <h3 className="border-b py-2 my-8 text-xl font-bold">
            Descrição do projeto
          </h3>

          <p className="">{projeto.descricao}</p>
        </div>
      )}
    </>
  )
}

export default Projeto;

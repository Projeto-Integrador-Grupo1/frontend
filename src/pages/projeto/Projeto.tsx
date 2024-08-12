import { ChangeEvent, useContext, useEffect, useState } from "react";
import { DNA, RotatingLines } from "react-loader-spinner";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Modal, Progress } from "flowbite-react";

import moment from "moment";

import { AuthContext } from "../../contexts/AuthContext";
import { Toast, ToastAlert } from "../../utils/ToastAlert";
import { atualizar, buscar, deletar } from "../../services/Services";

import ProjetoModel from "../../models/Projeto";
import { ArrowRight, ArrowSquareOut } from "@phosphor-icons/react";
import { FcCheckmark } from "react-icons/fc";
import { HiOutlineExclamationCircle } from "react-icons/hi";



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

  const descricaoComQuebras = projeto.descricao.split('\n').map((linha, index) => (
    <p key={index}>{linha}</p>
  ));

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disableButton, setdisableButton] = useState<boolean>(false);
  const [valorDoacao, setValorDoacao] = useState<number>(0);
  const [openModal, setOpenModal] = useState(false);

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
      if (meta < 100) {
        if (valorDoacao <= (projeto.valorMeta - projeto.valorAtual)) {


          setProjeto({
            ...projeto,
            qtdDoacoes: projeto.qtdDoacoes + 1,
            valorAtual: projeto.valorAtual + valorDoacao,
          })
          ToastAlert("Doação realizada com sucesso", Toast.Sucess);
        } else {
          const valorMaximo = (projeto.valorMeta - projeto.valorAtual);
          ToastAlert(`Valor máximo para doação: R$ ${valorMaximo.toFixed(2).replace('.', ',')}`, Toast.Info);
          setdisableButton(false);
        }

      } else {
        setProjeto({
          ...projeto,
        })
        ToastAlert("Projeto com 100% de arrecadação", Toast.Info);

      }

    } else {
      ToastAlert("Digite um valor maior que 0", Toast.Error);
      setdisableButton(false);
    }
  }

  async function deletarProjeto() {
    setIsLoading(true);

    try {
      await deletar(`/projetos/${id}`, {
        headers: {
          'Authorization': token
        }
      })
      const valorTransferido = (projeto.valorAtual * 0.7);
      ToastAlert(`Valor transferido: R$ ${valorTransferido.toFixed(2).replace('.', ',')}`, Toast.Sucess);
    } catch (error) {
      ToastAlert('Erro ao transferir valores. Por favor, tente novamente.', Toast.Error);
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/meusProjetos");
  }

  function dataLimite() {
    return <p>Este projeto não está mais recebendo doações</p>
  }

  function projetoFinalizado() {
    return <p>Este projeto já recebeu o total de doações possíveis</p>;
  }

  function formularioDoacao(valorDoacao: number, setValorDoacao: (value: number) => void, disableButton: boolean, doar: (e: React.FormEvent) => void) {
    return (
      <form onSubmit={doar}>
        <h3 className="text-xl font-bold my-4">Faça uma doação:</h3>
        <div className="flex gap-2">
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

          <Button className="bg-rosa-200" disabled={disableButton} type="submit">
            {disableButton ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Apoiar</span>
            )}
          </Button>
        </div>
      </form>
    );
  }

  function botoesProjeto(projetoId: number, setOpenModal: (open: boolean) => void) {
    return (
      <div className="flex gap-4">
        <Link to={`/editarProjeto/${projetoId}`}>
          <button className="flex items-center gap-2 text-center text-xl lg:text-2xl font-semibold text-white bg-azul-200 rounded p-2 w-100">
            Editar Projeto
          </button>
        </Link>
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 text-center text-xl lg:text-2xl font-semibold text-white bg-rosa-200 rounded p-2 w-100"
        >
          Receber Valor
        </button>
      </div>
    );
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
      ) :
        (
          <div className="container px-10 mx-auto my-12 dark:text-cinza-100">
            <h1 className="font-bold text-3xl mb-4">{projeto.titulo}</h1>
            <div className="lg:flex justify-between gap-16">
              <img
                src={projeto.linkMidia}
                alt="imagem projeto"
                className="aspect-video mb-5 lg:w-2/4 object-cover"
              />
              <div className="w-full">
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-600">
                  <div
                    className="bg-azul-200 text-sm font-bold text-cinza-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${meta}%` }}
                  >
                    {meta.toFixed(2).replace(".", ",") + '%'}
                  </div>
                </div>

                <h2 className="text-2xl mt-5 font-bold">
                  Valor Arrecadado: <span>R$ {projeto.valorAtual?.toFixed(2).replace(".", ",")}</span>
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
                  {token !== "" ?
                    (usuario.id !== projeto.usuario?.id ?
                      (projeto.dataLimite < dataAtual ?
                        (dataLimite()) :

                        (projeto.valorMeta === projeto.valorAtual ?
                          projetoFinalizado() :

                          formularioDoacao(
                            valorDoacao,
                            setValorDoacao,
                            disableButton,
                            doar
                          )
                        )
                      ) :
                      (
                        botoesProjeto(
                          projeto.id,
                          setOpenModal
                        )
                      )

                    ) :
                    (
                      <Link to="/login">
                        <Button className="mt-4 bg-rosa-200">
                          Apoiar
                        </Button>
                      </Link>
                    )
                  }

                  {projeto.valorAtual === 0 ?
                    (
                      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} dismissible popup>
                        <Modal.Header />
                        <Modal.Body>
                          <div className="">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="text-lg text-center font-normal text-gray-500 dark:text-gray-400 mb-5">
                              Você não possui valores para receber no momento!
                            </h3>

                            <div className="flex justify-center gap-4">
                              <Button color="gray" onClick={() => setOpenModal(false)}>
                                <span>Voltar</span>
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    ) :

                    (projeto.valorMeta === projeto.valorAtual ?
                      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} dismissible popup>
                        <Modal.Header />
                        <Modal.Body>
                          <div className="">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
                              Deseja retirar o total arrecadado agora?
                            </h3>
                            <ul className=" list-disc p-5 dark:text-cinza-100">
                              <li> Não será possível receber mais doações para este projeto;</li>
                              <li> Este projeto será deletado da base de dados; </li>
                              <li> O valor a ser transferido refere-se à 70% do valor arrecadado. </li>

                            </ul>
                            <p className="text-rosa-200 dark:text-azul-200 text-xs mb-5">
                              Obs.: Conforme termo de uso da plataforma, 30% do valor arrecadado será destinado à Zerone.
                            </p>
                            <ul>
                              <li>

                              </li>
                            </ul>
                            <div className="flex justify-center gap-4">
                              <Button color="failure" onClick={deletarProjeto}>
                                <span>Receber Valor</span>
                              </Button>
                              <Button color="gray" onClick={() => setOpenModal(false)}>
                                <span>Cancelar</span>
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal> :

                      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} dismissible popup>
                        <Modal.Header />
                        <Modal.Body>
                          <div className="">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className=" mb-5 text-center text-lg font-normal text-gray-500 dark:text-gray-400">
                              Valores arecadados só podem ser retirados após atingir 100% da meta.
                            </h3>

                            <div className="flex justify-center gap-4">
                              <Button color="failure" onClick={deletarProjeto} disabled>
                                <span>Receber Valor</span>
                              </Button>
                              <Button color="gray" onClick={() => setOpenModal(false)}>
                                <span>Cancelar</span>
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    )
                  }
                </div>
              </div>
            </div>

            <h3 className="border-b py-2 my-8 text-xl font-bold">
              Descrição do projeto
            </h3>

            <p className="text-justify">{descricaoComQuebras}</p>
          </div>
        )
      }
    </>
  )
}

export default Projeto;

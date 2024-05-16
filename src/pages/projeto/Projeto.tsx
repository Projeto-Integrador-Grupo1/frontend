import { ChangeEvent, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ProjetoModel from "../../models/Projeto"
import { Toast, ToastAlert } from "../../utils/ToastAlert"
import { AuthContext } from "../../contexts/AuthContext"
import { atualizar, buscar } from "../../services/Services"
import { DNA, RotatingLines } from "react-loader-spinner"
import moment from "moment"

function Projeto() {
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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [disableButton, setdisableButton] = useState<boolean>(false)
  const [valorDoacao, setValorDoacao] = useState<number>(0)
  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token
  const { id } = useParams<{ id: string }>()

  let navigate = useNavigate()

  async function buscarPorId(id: string) {
    setIsLoading(true)
    try {
      await buscar(`/projetos/${id}`, setProjeto, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error: any) {
      ToastAlert("Erro ao buscar projeto", Toast.Error)
      navigate("/projetos")
    }
    setIsLoading(false)
  }

  function diasRestantes(data: string) {
    let eventdate = moment(data)
    let todaysdate = moment()
    return eventdate.diff(todaysdate, "days")
  }

  async function chamarApi() {
    try {
      await atualizar("/projetos", projeto, setProjeto, {
        headers: {
          Authorization: token,
        },
      })
      ToastAlert("Doação realizada com sucesso", Toast.Sucess)
      navigate("/projetos")
    } catch (error: any) {
      if (error.toString().includes("403")) {
        ToastAlert("O token expirou, favor logar novamente", Toast.Error)
        handleLogout()
      } else {
        ToastAlert("Erro ao atualizar o Projeto", Toast.Error)
      }
    }
  }

  async function doar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    setdisableButton(true)

    if (valorDoacao > 0) {
      setProjeto({
        ...projeto,
        qtdDoacoes: projeto.qtdDoacoes + 1,
        valorAtual: projeto.valorAtual + valorDoacao,
      })
    } else {
      ToastAlert("Digite um valor maior que 0", Toast.Error)
      setdisableButton(false)
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlert("Você precisa estar logado", Toast.Info)
      navigate("/login")
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  useEffect(() => {
    if (valorDoacao > 0) {
      setIsLoading(true)
      chamarApi()
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
        <div className="container mx-auto my-12">
          <h1 className="font-bold text-3xl mb-4">{projeto.titulo}</h1>
          <div className="flex justify-between gap-16">
            <img
              src={projeto.linkMidia}
              alt="imagem projeto"
              className="aspect-video w-2/4 object-cover"
            />
            <div className="w-full">
              <h2 className="text-2xl font-bold">
                R$ {projeto.valorAtual?.toFixed(2).replace(".", ",")}
              </h2>
              <span className="text-gray-500">
                arrecadado da meta de R${" "}
                {projeto.valorMeta?.toFixed(2).replace(".", ",")}
              </span>

              <h2 className="text-2xl font-bold mt-4">{projeto.qtdDoacoes}</h2>
              <span className="text-gray-500">doações</span>

              <h2 className="text-2xl font-bold mt-4">
                {diasRestantes(projeto.dataLimite)}
              </h2>
              <span className="text-gray-500">dias restantes</span>

              <div className="border-t py-2 mt-8">
                <h3 className="text-xl font-bold my-4">Faça uma doação:</h3>

                <form onSubmit={doar} className="flex gap-2">
                  <label htmlFor="valor">
                    <span>R$ </span>
                    <input
                      id="valor"
                      type="number"
                      placeholder="Digite um valor"
                      className="border border-slate-700 rounded p-2"
                      name="valor"
                      value={valorDoacao}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setValorDoacao(+e.target.value)
                      }
                    />
                  </label>
                  <button
                    disabled={disableButton}
                    type="submit"
                    className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold flex justify-center items-center p-2"
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
                      "Enviar"
                    )}
                  </button>
                </form>
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

export default Projeto

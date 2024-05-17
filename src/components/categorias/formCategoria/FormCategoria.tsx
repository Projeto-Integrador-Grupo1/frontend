import { ChangeEvent, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Categoria from "../../../models/Categoria"
import { atualizar, buscar, cadastrar } from "../../../services/Services"
import { Toast, ToastAlert } from "../../../utils/ToastAlert"
import { RotatingLines } from "react-loader-spinner"
import { Button, Checkbox, Label, TextInput } from "flowbite-react"

function FormularioCategoria() {

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    })
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    })

    console.log(JSON.stringify(categoria))
  }

  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        })

        ToastAlert('Categoria atualizado com sucesso', Toast.Sucess)
        retornar()
      } catch (error: any) {
        if (error.toString().includes("403")) {
          ToastAlert('O token expirou, favor logar novamente', Toast.Info)
          handleLogout()
        } else {
          ToastAlert('Erro ao atualizar o Categoria', Toast.Warning)
        }
        setIsLoading(false)
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        })

        ToastAlert("Categoria cadastrado com sucesso", Toast.Sucess)
      } catch (error: any) {
        if (error.toString().includes("403")) {
          ToastAlert("O token expirou, favor logar novamente", Toast.Info)
          handleLogout()
        } else {
          ToastAlert("Erro ao cadastrado o Categoria", Toast.Warning)
        }
        setIsLoading(false)
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  useEffect(() => {
    if (token === "") {
      ToastAlert("Você precisa estar logado", Toast.Info)
      navigate("/login")
    }
  }, [token])

  return (

    <div className="flex justify-center mx-[30vw] shadow-xl dark:shadow-lg shadow-cinza-300 dark:shadow-preto-600 bg-cinza-100 dark:bg-preto-300 py-[10vh] rounded-2xl font-bold">


      <form className="flex max-w-md flex-col gap-4" onSubmit={gerarNovoCategoria}>
        <h1 className="text-4xl text-center my-8 dark:text-cinza-100">
          {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
        </h1>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="nomeCategoria"
              value="Nome da categoria"
            />
          </div>
          <TextInput
            id="nomeCategoria"
            type="text"
            placeholder="Nome da Categoria"
            name="nomeCategoria"
            value={categoria.nomeCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="descricao"
              value="Descrição"
            />
          </div>
          <TextInput
            id="descricao"
            type="text"
            sizing="lg"
            placeholder="Descrição"
            name="descricao"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <Button type="submit" className="bg-rosa-200">
          {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>{id === undefined ? "Cadastrar" : "Editar"}</span>}
        </Button>
      </form>

    </div>
  )
}

export default FormularioCategoria

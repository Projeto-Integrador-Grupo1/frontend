import { ChangeEvent, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Categoria from "../../../models/Categoria"
import { atualizar, buscar, cadastrar } from "../../../services/Services"
import { Toast, ToastAlert } from "../../../utils/ToastAlert"
import { RotatingLines } from "react-loader-spinner"

function FormularioCategoria() {

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout} = useContext(AuthContext)
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
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastre um novo categoria" : "Editar categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nomeCategoria">Nome da categoria</label>
          <input
            type="text"
            placeholder="Nome categoria"
            name="nomeCategoria"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nomeCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="descricao">Descrição do categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded flex justify-center text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto"
          type="submit"
          disabled = {isLoading}
        >
          {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>{id === undefined ? "Cadastrar" : "Editar"}</span>}
        </button>
      </form>
    </div>
  )
}

export default FormularioCategoria

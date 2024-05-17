import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { AuthContext } from "../../../contexts/AuthContext"
import Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Services"
import { Button, Card, Dropdown } from "flowbite-react"

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente")
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/categorias")
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`, {
        headers: {
          Authorization: token,
        },
      })

      alert("Categoria apagado com sucesso")
    } catch (error) {
      alert("Erro ao apagar o Categoria")
    }

    retornar()
  }
  return (
    <>


      <div className="container max-w-[30%] mx-auto">
        <h1 className="text-xl text-center my-4 dark:text-cinza-100">
          Deseja apagar esta categoria?
        </h1>



        <Card className="mx-16 py-4">

          <div className="flex flex-col items-center ">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {categoria.nomeCategoria}
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {categoria.descricao}
            </p>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <Button
                className="inline-flex items-center border-preto-600 dark:border-cinza-100 rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-preto-600 dark:text-cinza-100 "
                onClick={retornar}
              >
                Não
              </Button>
              <Button
                className="inline-flex bg-red-400 hover:bg-red-600 items-center rounded-lg border  px-4 py-2 text-center text-sm font-medium text-gray-900"
                onClick={deletarCategoria}
              >
                Sim
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </>
  )
}

export default DeletarCategoria

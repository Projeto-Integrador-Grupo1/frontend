import { useContext, useEffect, useState } from "react"
import { DNA } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Categoria from "../../../models/Categoria"
import { buscar } from "../../../services/Services"
import CardCategorias from "../cardCategorias/CardCategorias"
import { Toast, ToastAlert } from "../../../utils/ToastAlert"

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarCategorias() {
    try {
      await buscar("/categorias/all", setCategorias, {
        headers: { Authorization: token },
      })
    } catch (error: any) {
      if (error.toString().includes("403")) {
        ToastAlert("O token expirou, favor logar novamente", Toast.Error)
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlert("Você precisa estar logado", Toast.Warning)
      navigate("/login")
    }
  }, [token])

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])
  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategorias

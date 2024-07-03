import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Card } from "flowbite-react";

import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Services";
import { Toast, ToastAlert } from "../../../utils/ToastAlert";

import Categoria from "../../../models/Categoria";

function DeletarCategoria() {

  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error: any) {
      if (error.toString().includes("403")) {
        ToastAlert("O token expirou, favor logar novamente", Toast.Error);
        handleLogout();
      }
    }
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`, {
        headers: {
          Authorization: token,
        },
      })

      ToastAlert("Categoria apagada com sucesso", Toast.Sucess);
    } catch (error) {
      ToastAlert("Erro ao apagar a Categoria", Toast.Error);
    }

    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  useEffect(() => {
    if (token === "") {
      ToastAlert("Você precisa estar logado", Toast.Warning);
      navigate("/login");
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id])

  return (
    <>
      <div className="container lg:max-w-[40%] xl:max-w-[30%] mx-auto">
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
              >Não</Button>

              <Button
                className="inline-flex bg-red-400 hover:bg-red-600 items-center rounded-lg border  px-4 py-2 text-center text-sm font-medium text-gray-900"
                onClick={deletarCategoria}
              >Sim</Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default DeletarCategoria;

import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { RotatingLines } from "react-loader-spinner";

import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Services";
import { Toast, ToastAlert } from "../../../utils/ToastAlert";

import Categoria from "../../../models/Categoria";

function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    })
  }

  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        })

        ToastAlert('Categoria atualizada com sucesso', Toast.Sucess)
        retornar()

      } catch (error: any) {
        if (error.toString().includes("403")) {
          ToastAlert('O token expirou, favor logar novamente', Toast.Info);
          handleLogout();

        } else {
          ToastAlert('Erro ao atualizar a Categoria', Toast.Warning);
        }

        setIsLoading(false);
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        })

        ToastAlert("Categoria cadastrada com sucesso", Toast.Sucess);
      } catch (error: any) {

        if (error.toString().includes("403")) {
          ToastAlert("O token expirou, favor logar novamente", Toast.Info);
          handleLogout();

        } else {
          ToastAlert("Erro ao cadastrado a Categoria", Toast.Warning);
        }

        setIsLoading(false);
      }
    }

    retornar()
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    })
  }

  function retornar() {
    navigate("/categorias")
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  useEffect(() => {
    if (token === "") {
      ToastAlert("Você precisa estar logado", Toast.Info)
      navigate("/login")
    }
  }, [token])

  return (
    <>

      <div className="justify-center lg:py-14">
        <div className='my-2'>
          <Link to="/categorias" className='hover:underline m-[10vw] lg:m-[30vw] dark:text-cinza-100 my-6'>
            Voltar
          </Link>
        </div>

        <div className="flex justify-center mx-[10vw] lg:mx-[30vw] shadow-xl dark:shadow-lg shadow-cinza-300 dark:shadow-preto-600 bg-cinza-100 dark:bg-preto-300 py-[3vh] lg:py-[10vh] rounded-2xl font-bold">
          <form className="flex max-w-md flex-col gap-4 w-[80%]" onSubmit={gerarNovoCategoria}>
            <h2 className="text-slate-900 dark:text-cinza-100 my-4 text-center text-2xl lg:text-4xl">
              {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
            </h2>

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
              {isLoading ?
                <RotatingLines
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
      </div>
    </>
  )
}

export default FormCategoria;

import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { RotatingLines } from "react-loader-spinner";

import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar } from "../../../services/Services";
import { Toast, ToastAlert } from "../../../utils/ToastAlert";

import Usuario from "../../../models/Usuario";

function EditarUsuario() {
  const navigate = useNavigate();

  const [perfil, setPerfil] = useState<Usuario>({} as Usuario);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/usuarios/${id}`, (data) => {
      setPerfil({ ...data, senha: '' });
    }, {
      headers: {
        Authorization: token,
      },
    })
  }

  async function editarPerfil(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/usuarios/atualizar`, perfil, setPerfil, {
          headers: {
            Authorization: token,
          },
        })

        ToastAlert('Usuario atualizado com sucesso', Toast.Sucess);
        retornar();

      } catch (error: any) {
        if (error.toString().includes("403")) {
          ToastAlert('O token expirou, favor logar novamente', Toast.Info);
          handleLogout();

        } else {
          ToastAlert('Erro ao atualizar o usuario', Toast.Warning);
        }

        setIsLoading(false);
      }
    } else {
      ToastAlert('Id indefinido', Toast.Info);
    }

    retornar();
  }

  function retornar() {
    navigate("/perfil");
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setPerfil({
      ...perfil,
      [e.target.name]: e.target.value,
    })
  }


  useEffect(() => {
    if (token === "") {
      ToastAlert("Você precisa estar logado", Toast.Info);
      navigate("/login");
    }
  }, [token])


  return (
    <>
      <div className="justify-center lg:py-14">
        <div className='my-2'>
          <Link to="/perfil" className='hover:underline m-[10vw] lg:m-[30vw] dark:text-cinza-100 my-6'>
            Voltar
          </Link>
        </div>

        <div className="flex justify-center mx-[10vw] lg:mx-[30vw] shadow-xl dark:shadow-lg shadow-cinza-300 dark:shadow-preto-600 bg-cinza-100 dark:bg-preto-300 py-[3vh] lg:py-[10vh] rounded-2xl font-bold">

          <form className="flex max-w-md flex-col gap-4 w-[80%]" onSubmit={editarPerfil}>
            <h2 className="text-slate-900 dark:text-cinza-100 my-4 text-center text-2xl lg:text-4xl">
              Editar Perfil
            </h2>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="nome" value="Nome" />
              </div>

              <TextInput
                id="nome"
                name="nome"
                type="text"
                autoComplete="nome"
                placeholder="Nome"
                required
                value={perfil.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="E-mail" />
              </div>

              <TextInput
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="email@email.com"
                required
                value={perfil.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="foto" value="Foto" />
              </div>

              <TextInput
                id="foto"
                name="foto"
                type="foto"
                autoComplete="foto"
                placeholder="foto"
                value={perfil.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="senha" value="Senha" />
              </div>

              <TextInput
                id="senha"
                name="senha"
                type="password"
                autoComplete="senha"
                placeholder="senha"
                required
                value={perfil.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
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
                <span>Editar</span>
              }
            </Button>
          </form>

        </div>
      </div>
    </>
  )
}

export default EditarUsuario;


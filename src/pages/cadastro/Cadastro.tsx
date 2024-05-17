import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/Services"
import { RotatingLines } from "react-loader-spinner"
import { Toast, ToastAlert } from "../../utils/ToastAlert"
import { Button, Label, TextInput } from "flowbite-react"

function Cadastro() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [confirmarSenha, setConfirmarSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
  })

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true)

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        ToastAlert("Usuário cadastrado com sucesso", Toast.Sucess)
      } catch (error) {
        ToastAlert("Erro ao cadastrar usuário", Toast.Error)
      }
    } else {
      ToastAlert("Dados inconsistentes. Verifique as informações de cadastro.", Toast.Warning)
      setUsuario({ ...usuario, senha: "" })
      setConfirmarSenha("")
    }

    setIsLoading(false)
  }

  function retornar() {
    navigate("/login")
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  return (
    <>
      <div className='py-[5vh]'>


        <div className="flex justify-center mx-[30vw] my-[5vh] shadow-xl shadow-cinza-300 dark:shadow-preto-600 bg-cinza-100 dark:bg-preto-300 py-[10vh] rounded-2xl font-bold">
          <form className="flex w-[80%] flex-col gap-4" onSubmit={cadastrarNovoUsuario}>
            <h2 className="text-slate-900 dark:text-cinza-100 my-4 text-center text-5xl">
              Cadastro
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
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
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
                value={usuario.email}
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
                required
                value={usuario.foto}
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
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirmarSenha" value="Confirmar Senha" />
              </div>
              <TextInput
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="confirmarSenha"
                type="password"
                required
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
              />
            </div>

            <Button type="submit" className='bg-rosa-200 mt-6'>
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>Cadastrar</span>}
            </Button>

            <hr className="border-cinza-200 w-full" />


            <p className="text-center text-sm text-gray-500">
              Já tem conta?{' '}
              <Link to="/login" className="font-semibold leading-6 text-rosa-200 hover:underline">
                Entrar
              </Link>
            </p>
          </form>


        </div>
      </div>
    </>
  )
}

export default Cadastro

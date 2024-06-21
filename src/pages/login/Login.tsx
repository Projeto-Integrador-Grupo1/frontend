import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { RotatingLines } from "react-loader-spinner";

import { AuthContext } from "../../contexts/AuthContext";

import UsuarioLogin from "../../models/UsuarioLogin";

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario])

  return (
    <>
      <div className="justify-center lg:py-14">
        <div className="flex justify-center mx-[10vw] lg:mx-[30vw] shadow-xl dark:shadow-lg shadow-cinza-300 dark:shadow-preto-600 bg-cinza-100 dark:bg-preto-300 py-[3vh] lg:py-[10vh] rounded-2xl font-bold">
          <form
            className="flex max-w-md flex-col gap-4 w-[80%]"
            action="#"
            method="POST"
            onSubmit={login}
          >
            <h2 className="text-slate-900 dark:text-cinza-100 my-4 text-center text-4xl">
              Login
            </h2>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="E-mail" />
              </div>

              <TextInput
                id="email1"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="email@email.com"
                required
                value={usuarioLogin.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
                placeholder="********"
                required
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <Button type="submit" className="bg-rosa-200 mt-6">
              {isLoading ?
                (<RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
                ) :
                (<span>Entrar</span>)
              }
            </Button>

            <hr className="border-cinza-200 w-full" />

            <p className=" text-center text-sm text-gray-500">
              Ainda não tem conta?{" "}
              <Link
                to="/cadastro"
                className="font-semibold leading-6 text-rosa-200 hover:underline"
              >
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;

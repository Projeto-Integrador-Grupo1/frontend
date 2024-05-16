import { ChangeEvent, useContext, useEffect, useState } from 'react';
import Logo from '../../assets/img/zerone-logo.png'

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';

import UsuarioLogin from '../../models/UsuarioLogin';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

function Login() {

  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  return (
    <>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>

      <div className="flex justify-center mx-[20vw] my-[5vh] bg-blue-100 py-[10vh] rounded-2xl font-bold">
        <form className="flex max-w-md flex-col gap-4" action="#" method="POST" onSubmit={login}>
          <div className="">
            <img
              className="h-40"
              src={Logo}
              alt="Your Company"
            />

          </div>
          <h2 className="text-slate-900 text-5xl">
            Login
          </h2>
          <div className="flex flex-col w-full">
            <label htmlFor="email">
              Email
            </label>
            <input placeholder='email@email.com'
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha">
              Senha
            </label>
            <input placeholder='senha'
              id="senha"
              name="senha"
              type="password"
              // autoComplete="current-password"
              required
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>Entrar</span>}
            </button>

            <p className="mt-10 text-center text-sm text-gray-500">
              Ainda não tem conta?{' '}
              <Link to="/cadastro" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Cadastre-se
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;
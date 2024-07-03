import { ReactNode, createContext, useState } from "react";

import { logar } from "../services/Services";
import { Toast, ToastAlert } from "../utils/ToastAlert";

import UsuarioLogin from "../models/UsuarioLogin";
import Usuario from "../models/Usuario";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;

}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    token: ""
  })

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true)
    try {
      await logar(`/usuarios/logar`, userLogin, setUsuario)
      ToastAlert("Usuário logado com sucesso", Toast.Sucess)
      setIsLoading(false)

    } catch (error) {
      ToastAlert("Dados de usuário inconsistentes", Toast.Warning)
      setIsLoading(false)
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      email: "",
      senha: "",
      foto: "",
      token: ""
    })
  }

  return (
    <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
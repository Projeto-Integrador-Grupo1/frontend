import { BrowserRouter, Route, Routes } from "react-router-dom"
import FooterComponent from "./components/footerComponent/FooterComponent"
import NavbarComponent from "./components/navbarComponent/NavbarComponent"
import Home from "./pages/home/Home"
import Sobre from "./pages/sobre/Sobre"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import Projetos from "./pages/projetos/Projetos"
import { AuthProvider } from "./contexts/AuthContext"
import FormCategoria from "./components/categorias/formCategoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import DeletarProjeto from "./components/projetos/deletarProjeto/DeletarProjeto"
import Projeto from "./pages/projeto/Projeto"
import MeusProjetos from "./pages/usuario/meusProjetos/MeusProjetos"
import Categorias from "./pages/categorias/Categorias"
import FormProjeto from "./components/projetos/formProjeto/FormProjeto"
import EditarUsuario from "./pages/usuario/editarUsuario/EditarUsuario"
import Perfil from "./pages/usuario/perfil/Perfil"
import Admin from "./pages/admin/Admin"
import Erros from "./pages/erros/Erros"

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <NavbarComponent />
          <div className="min-h-[90vh] py-24 bg-cinza-100 dark:bg-gray-700">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/cadastroCategoria" element={<FormCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/cadastrarProjeto" element={<FormProjeto />} />
              <Route path="/editarProjeto/:id" element={<FormProjeto />} />
              <Route path="/deletarProjeto/:id" element={<DeletarProjeto />} />
              <Route path="/projeto/:id" element={<Projeto />} />
              <Route path="/meusProjetos" element={<MeusProjetos />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/perfil/:id" element={<Perfil />} />
              <Route path="/editarUsuario/:id" element={<EditarUsuario />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/erros" element={<Erros />} />
            </Routes>
          </div>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App

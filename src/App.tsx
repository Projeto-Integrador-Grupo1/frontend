import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Sobre from "./pages/sobre/Sobre"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import Projetos from "./pages/projetos/Projetos"
import { AuthProvider } from "./contexts/AuthContext"
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias"
import FormCategoria from "./components/categorias/formCategoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import ModalProjeto from "./components/projetos/modalProjeto/ModalProjeto"
import DeletarProjeto from "./components/projetos/deletarProjeto/DeletarProjeto"
import Projeto from "./pages/projeto/Projeto"
import Perfil from "./pages/usuario/perfil/Perfil"
import NavbarPerfil from "./components/navbar/navbarPerfil/NavbarPerfil"
import PageCategorias from "./pages/categorias/PageCategorias"

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[85vh] py-16 bg-cinza-100 dark:bg-gray-700">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/categorias" element={<PageCategorias />} />
            <Route path="/cadastroCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/cadastrarProjeto" element={<ModalProjeto />} />
            <Route path="/editarProjeto/:id" element={<ModalProjeto />} />
            <Route path="/deletarProjeto/:id" element={<DeletarProjeto />} />
            <Route
              path="/deletarCategoria/:id"
              element={<DeletarCategoria />}
            />
            <Route path="/projeto/:id" element={<Projeto />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/perfils" element={<NavbarPerfil />} />
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App

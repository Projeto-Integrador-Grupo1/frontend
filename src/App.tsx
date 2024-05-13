import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Sobre from "./pages/sobre/Sobre"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias"
import FormCategoria from "./components/categorias/formCategoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route
              path="/deletarCategoria/:id"
              element={<DeletarCategoria />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App

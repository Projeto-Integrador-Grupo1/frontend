import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DNA } from "react-loader-spinner";

import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Services";
import { Toast, ToastAlert } from "../../utils/ToastAlert";

import CardCategoria from "../../components/categorias/cardCategoria/CardCategoria";
import Categoria from "../../models/Categoria";

function Categorias() {

  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const categoriasEmOrdem = categorias.sort((a, b) => a.nomeCategoria.localeCompare(b.nomeCategoria));

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar("/categorias/all", setCategorias, {
        headers: { Authorization: token },
      })

    } catch (error: any) {
      if (error.toString().includes("403")) {
        ToastAlert("O token expirou, favor logar novamente", Toast.Error);
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlert("Você precisa estar logado", Toast.Warning);
      navigate("/login");
    }
  }, [token])

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length])

  return (
    <div className='container mx-auto my-4 px-6 rounded-2xl  overflow-hidden  '>
      <div className=" w-full flex flex-col justify-center">
        <div className="container">
          <div className='flex flex-col font-bold text-3xl mt-14 border-b-2 py-5'>
            <div className='flex items-center justify-between '>
              <h2 className="font-bold text-xl lg:text-4xl dark:text-cinza-100">
                Minhas categorias
              </h2>

              <button className=" text-center text-xl lg:text-2xl font-semibold text-white bg-rosa-200 rounded p-2 w-100">
                <Link to="/cadastroCategoria">+ Criar categoria</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="my-12">
          {categorias.length === 0 && (
            <DNA
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper mx-auto"
            />
          )}

          <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoriasEmOrdem.map((categoria) => (
                  <CardCategoria key={categoria.id} categoria={categoria} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Categorias;
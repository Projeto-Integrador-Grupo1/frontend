import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";;
import { DNA } from 'react-loader-spinner'

import { AuthContext } from '../../../contexts/AuthContext'
import { buscar } from '../../../services/Services'
import { ToastAlert, Toast } from '../../../utils/ToastAlert'

import CardMeusProjetos from '../../../components/projetos/cardMeusProjetos/CardMeusProjetos'
import Projeto from '../../../models/Projeto'

function MeusProjetos() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  const [projetos, setProjetos] = useState<Projeto[]>([]);

  async function buscarProjetos() {
    try {
      await buscar('/projetos/all', setProjetos);
    } catch (error: any) {
      ToastAlert("Erro ao buscar as categorias", Toast.Warning);
    }
  }

  useEffect(() => {
    buscarProjetos();
  }, [projetos.length])

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlert('Você precisa estar logado', Toast.Info);
      navigate("/login");
    }
  }, [usuario.token])

  return (
    <div className='container mx-auto rounded-b-2xl pb-24'>
      <div className=" w-full flex flex-col justify-center px-6">
        <div className="container">
          <div className='flex flex-col font-bold text-3xl mt-14 border-b-2 py-5'>
            <div className='flex items-center justify-between '>
              <h2 className="font-bold text-xl lg:text-4xl dark:text-cinza-100">
                Meus projetos
              </h2>
              
              <button className=" text-center text-xl lg:text-2xl font-semibold text-white bg-rosa-200 rounded p-2  w-100">
                <Link to={usuario.token !== "" ? "/cadastrarProjeto" : "/login"}  >+ Criar projeto</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="my-12">

          {projetos.length === 0 && (
            <DNA
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper mx-auto"
            />
          )}
          <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

            {
              projetos.map((projeto) => (
                <CardMeusProjetos key={projeto.id} projeto={projeto} />
              ))}
          </div>
        </div>
      </div>

    </div >
  )
}

export default MeusProjetos;

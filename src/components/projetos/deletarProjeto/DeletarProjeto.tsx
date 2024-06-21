import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from 'flowbite-react';

import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, deletar } from '../../../services/Services';
import { Toast, ToastAlert } from '../../../utils/ToastAlert';

import Projeto from '../../../models/Projeto';

function DeletarProjeto() {

  const navigate = useNavigate();

  const [projeto, setProjeto] = useState<Projeto>({} as Projeto);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/projetos/${id}`, setProjeto, {
        headers: {
          'Authorization': token
        }
      })

    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlert('O token expirou, favor logar novamente', Toast.Error);
        handleLogout();
      }
    }
  }

  async function deletarProjeto() {
    setIsLoading(true);

    try {
      await deletar(`/projetos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      ToastAlert('Projeto apagado com sucesso', Toast.Sucess);
    } catch (error) {
      ToastAlert('Erro ao apagar Projeto', Toast.Error);
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/meusProjetos");
  }

  useEffect(() => {
    if (token === '') {
      ToastAlert('Você precisa estar logado', Toast.Warning);
      navigate('/login');
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  return (
    <>
      <div className=" lg:max-w-[30%] mx-10 lg:mx-auto">
        <h1 className="text-xl text-center my-4 dark:text-cinza-100">
          Deseja apagar este Projeto?
        </h1>

        <Card
          className="max-w-sm "
          imgSrc={projeto.linkMidia} horizontal
        >

          <div className="flex flex-col ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {projeto.titulo}
            </h5>
            
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {projeto.descricao}
            </p>

            <div className="mt-4 flex space-x-3 lg:mt-6">
              <Button
                className="inline-flex items-center border-preto-600 dark:border-cinza-100 rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-preto-600 dark:text-cinza-100 "
                onClick={retornar}
              >Não</Button>
              <Button
                className="inline-flex bg-red-400 hover:bg-red-600 items-center rounded-lg border  px-4 py-2 text-center text-sm font-medium text-gray-900"
                onClick={deletarProjeto}
              >Sim</Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default DeletarProjeto;
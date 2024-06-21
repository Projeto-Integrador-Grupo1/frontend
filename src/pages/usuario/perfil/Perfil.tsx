import { useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from 'flowbite-react';
import { Pencil } from '@phosphor-icons/react';

import { AuthContext } from '../../../contexts/AuthContext';
import { ToastAlert, Toast } from '../../../utils/ToastAlert';


function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlert('Você precisa estar logado', Toast.Info);
      navigate("/login");
    }
  }, [usuario.token])

  return (
    <>
      <div className='container mx-auto rounded-b-2xl pb-24'>
        <div className=" w-full flex flex-col px-6">
          <div className="container">
            <div className='flex flex-col font-bold text-3xl mt-14 border-b-2 py-5'>
              <div className='flex items-center justify-between '>
                <h2 className="font-bold text-xl lg:text-4xl dark:text-cinza-100">
                  Meu Perfil
                </h2>

                <button className=" text-center text-xl lg:text-2xl font-semibold text-white bg-rosa-200 rounded p-2  w-100">
                  <Link to={`/atualizarUsuario/${usuario.id}`}  >
                    <div className='flex items-center gap-3'>
                      Editar Perfil
                      <Pencil size={24} />
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='my-10 mx-16 flex justify-start'>

          {usuario.foto && usuario.foto.trim() !== '' ?
            <Avatar img={usuario.foto} size="xl" rounded>

              <div className="space-y-1 mx-6 font-bold dark:text-white">
                <div className='text-2xl'>{usuario.nome}</div>
                <div className="text-xl text-gray-500 dark:text-gray-400">{usuario.email}</div>
              </div>
            </Avatar> :
            <Avatar className='' placeholderInitials={usuario.nome} size="xl" rounded>

              <div className="space-y-1 mx-6 font-bold dark:text-white">
                <div className='text-2xl'>{usuario.nome}</div>
                <div className="text-xl text-gray-500 dark:text-gray-400">{usuario.email}</div>
              </div>
            </Avatar>
          }

        </div>


      </div >
    </>
  )
}

export default Perfil;

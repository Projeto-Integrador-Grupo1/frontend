import FormularioProjeto from '../formProjeto/FormProjeto';
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom"

function ModalProjeto() {
    return (
        <>
            {/* <Popup
                trigger={ 
                    <button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>
                        Novo projeto
                    </button>
                } modal>

                <div className='mx-500'>
                    <FormularioProjeto />
                </div>
            </Popup> */}

            {/* <div className=" dark:text-cinza-100 hover:underline">
            </div> */}
            <div className="justify-center  ">
                <div className='my-2'>

                <Link to="/perfil" className='hover:underline p-[30vw] dark:text-cinza-100 my-6'>
                    Voltar
                </Link>
                </div>

                <FormularioProjeto />
            </div>
            {/* <div className=' flex flex-col rounded overflow-hidden justify-between'>
                <div className=" w-full flex justify-center">
                    <div className="container">


                    </div>
                </div>
            </div> */}
        </>
    );
}

export default ModalProjeto;
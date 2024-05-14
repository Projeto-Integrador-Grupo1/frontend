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

            <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
                <div className="bg-gray-50 w-full flex justify-center">
                    <div className="container">

                        <div className="mx-[20vw] pt-[1vh] hover:underline">
                            <Link to="/projetos" >
                                Voltar
                            </Link>
                        </div>

                        <div className="justify-center mx-[20vw] my-[5vh] py-[6vh] rounded-2xl bg-white shadow-md">
                            <FormularioProjeto />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalProjeto;
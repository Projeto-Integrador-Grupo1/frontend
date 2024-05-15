import ListaProjetos from "../../components/projetos/listaProjetos/ListaProjetos";
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";


function Projetos() {

    const { usuario } = useContext(AuthContext)

    return (
        <>
            <div className="bg-gray-50 w-full flex justify-center">
                <div className="container ">
                    {/* <button className=" text-center font-semibold text-white bg-indigo-900 rounded p-2 mt-5 ml-[80vw]">
                        <Link to={usuario.token !== "" ? "/cadastrarProjeto" : "/login"} >+ Iniciar um projeto</Link>
                    </button> */}

                    <div className="flex justify-center gap-6">
                        <div className="rounded p-4">
                            <ListaProjetos />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default Projetos;
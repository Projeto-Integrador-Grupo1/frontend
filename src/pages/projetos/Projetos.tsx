import ListaProjetos from "../../components/projetos/listaProjetos/ListaProjetos";
import { Link } from "react-router-dom"

function Projetos() {

    return (
        <>
            <div className="bg-gray-50 w-full flex justify-center">
                <div className="container">
                    <button className=" text-center font-semibold text-white bg-indigo-900 rounded p-2 mt-5 mx-[1.3vw]">
                        <Link to="/cadastrarProjeto">Cadastrar Projetos</Link>
                    </button>

                    <div className=" flex justify-between gap-6">
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
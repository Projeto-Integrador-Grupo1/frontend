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
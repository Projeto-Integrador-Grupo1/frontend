import { Link } from "react-router-dom"
import ListaCategorias from "../../components/categorias/listaCategorias/ListaCategorias"

function PageCategorias() {

    return (
        <div className='container mx-auto my-4 px-6 rounded-2xl  overflow-hidden  '>
            <div className=" w-full flex flex-col justify-center">
                <div className="container">

                    <div className='flex flex-col font-bold text-3xl mt-14 border-b-2 py-5'>
                        <div className='flex items-center justify-between '>
                            <h2 className="font-bold text-4xl">
                                Minhas categorias
                            </h2>

                            <button className=" text-center text-2xl font-semibold text-white bg-green-600 rounded p-2 w-100">
                                <Link to="/cadastroCategoria">+ Criar categoria</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="my-12">
                    <ListaCategorias />
                </div>
            </div>
        </div >
    )
}

export default PageCategorias
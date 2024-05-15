import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import Projeto from '../../../models/Projeto';
import { buscar } from '../../../services/Services';
import CardProjetos from '../cardProjetos/CardProjetos';
import { Toast, ToastAlert } from '../../../utils/ToastAlert';

function ListaProjetos() {

    const [projetos, setProjetos] = useState<Projeto[]>([]);

    async function buscarProjetos() {
        try {
            await buscar('/projetos/all', setProjetos)
        } catch (error: any) {
            ToastAlert("Erro ao buscar as categorias", Toast.Warning)
        }
    }

    useEffect(() => {
        buscarProjetos()
    }, [projetos.length])

    return (
        <>
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
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                {
                    projetos.map((projeto) => (

                        <CardProjetos key={projeto.id} projeto={projeto} />

                    ))}
            </div>
        </>
    );

}

export default ListaProjetos;
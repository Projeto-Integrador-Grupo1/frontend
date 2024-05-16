import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import Projeto from '../../../models/Projeto';
import { buscar } from '../../../services/Services';
import CardProjetos from '../../projetos/cardProjetos/CardProjetos';
import { Toast, ToastAlert } from '../../../utils/ToastAlert';

function ProjetosHome() {

    const [projetos, setProjetos] = useState<Projeto[]>([]);

    const projetosFiltrados = projetos.filter((projetos) => projetos.data );

    console.log(projetosFiltrados
    );
    
    const sortedProjects = [...projetos].sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

    const recentProjects = sortedProjects.slice(0, 4);

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

            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

                {recentProjects.map((projeto) => (

                    <div >
                        <div>
                            <CardProjetos key={projeto.id} projeto={projeto} />
                        </div>
                    </div>

                ))}
            </div>
        </>
    );

}

export default ProjetosHome;
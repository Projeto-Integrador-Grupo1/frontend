import { useContext, useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Projeto from '../../../models/Projeto';
import { buscar } from '../../../services/Services';
import CardProjetos from '../cardProjetos/CardProjetos';

function ListaProjetos(){

    const [projetos, setProjetos] = useState<Projeto[]>([]);

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    async function buscarProjetos() {

        try {  

            await buscar('/projetos/all', setProjetos, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {

            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
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
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    projetos.map((projeto) => (  

                        <CardProjetos key={projeto.id} projeto={projeto} />

                    ))}
            </div>
        </>
    );

}

export default ListaProjetos;
import { useEffect, useState } from 'react';
import Carousel from '../../components/carousel/Carousel'
import ProjetosHome from '../../components/home/listaProjetosHome/projetosHome'
import ListaProjetos from '../../components/projetos/listaProjetos/ListaProjetos'
import Projeto from '../../models/Projeto';
import { ToastAlert, Toast } from '../../utils/ToastAlert';
import { buscar } from '../../services/Services';
import CardProjetos from '../../components/projetos/cardProjetos/CardProjetos';


function Home() {

  const [projetos, setProjetos] = useState<Projeto[]>([]);

  const dataRecente = [...projetos].sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
  const maisApoiadores = [...projetos].sort((a, b) => b.qtdDoacoes - a.qtdDoacoes);

  const projetosDestaque = maisApoiadores.slice(0, 4);
  const projetosRecentes = dataRecente.slice(0, 4);

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
      <div className=" bg-blue-50 relative isolate flex items-center flex-col">

        <div className="relative w-screen overflow-hidden  text-center">
          <div>
            <Carousel />
          </div>
        </div>

        <div className="bg-blue-50 mt-26 w-full flex justify-center">
          <div className="container">
            <h2 className=" font-bold text-3xl my-6 border-b-2 py-4 ">
              Projetos em destaque:
            </h2>
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {projetosDestaque.map((projeto) => (
                <div >
                  <div>
                    <CardProjetos key={projeto.id} projeto={projeto} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" w-full flex justify-center">
          <div className="container">
            <h2 className="font-bold text-3xl my-4 border-b-2 py-2">
              Projetos mais recentes:
            </h2>
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {projetosRecentes.map((projeto) => (

                <div >
                  <div>
                    <CardProjetos key={projeto.id} projeto={projeto} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home

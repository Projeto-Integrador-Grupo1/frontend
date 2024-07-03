import { useEffect, useState } from 'react';
import { Banner, BannerCollapseButton, Button, Carousel } from "flowbite-react";

import { ToastAlert, Toast } from '../../utils/ToastAlert';
import { buscar } from '../../services/Services';

import Projeto from '../../models/Projeto';
import CardProjeto from '../../components/projetos/cardProjeto/CardProjeto';
import planejamento from "../../assets/img/carousel/planejamento.jpg";
import porquinho from "../../assets/img/carousel/porquinho.jpg"
import financiamento from "../../assets/img/carousel/financiamento.jpg"
import { DNA } from 'react-loader-spinner';

function Home() {

  const [projetos, setProjetos] = useState<Projeto[]>([]);

  const dataRecente = [...projetos].sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
  const maisApoiadores = [...projetos].sort((a, b) => b.qtdDoacoes - a.qtdDoacoes);

  const projetosDestaque = maisApoiadores.slice(0, 4);
  const projetosRecentes = dataRecente.slice(0, 4);

  async function buscarProjetos() {
    try {
      await buscar('/projetos/all', setProjetos);
    } catch (error: any) {
      ToastAlert("Erro ao buscar as categorias", Toast.Warning);
    }
  }

  useEffect(() => {
    buscarProjetos();
  }, [projetos.length])

  return (
    <>
      <div className=" lg:mx-10 h-[30vh] lg:h-[50vh] sm:h-64 xl:h-80 2xl:h-[50vh] ">
        <Carousel slideInterval={5000} pauseOnHover>
          <div className="items-center bg-rosa-200 dark:bg-rosa-300 py-40 px-10 lg:px-[10vw]">
            <h1 className="text-xl lg:text-4xl text-center font-bold tracking-tight text-rosa-100 dark:text-preto-400 sm:text-6xl">
              Sua ajuda pode contribuir positivamente para o desenvolvimento da
              sociedade!
            </h1>

            <hr className='my-3 lg:m-5' />

            <p className='text-center text-sm lg:text-2xl text-preto-100 dark:text-cinza-100'>
              Com o seu apoio, podemos transformar ideias em realidade e fazer a diferença nas vidas das pessoas.
            </p>
            <p className="lg:mt-6 text-center text-sm lg:text-2xl leading-8 text-preto-100 dark:text-cinza-100 xl:px-60">
              Junte-se a nós na jornada para trazer inovação e impacto positivo ao mundo!
            </p>

          </div>

          <img src={porquinho} alt="..." />
          <img src={planejamento} alt="..." />
          <img src={financiamento} alt="..." />
        </Carousel>
      </div>

      <div className="  relative isolate flex items-center flex-col">
        <div className=" w-full flex justify-center pt-16">
        </div>

        <div className=" w-full flex justify-center pt-16">
          <div className="container">
            <h2 className=" font-bold text-3xl my-6 border-b-2 py-4 px-6 dark:text-cinza-100">
              Projetos em destaque:
            </h2>

            <div className='container py-6 px-6 mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {projetosDestaque.length === 0 && (
                <DNA
                  visible={true}
                  height="200"
                  width="200"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper mx-auto"
                />
              )}
              {projetosDestaque.map((projeto) => (
                <div >
                  <div>
                    <CardProjeto key={projeto.id} projeto={projeto} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" w-full flex justify-center pt-10 pb-16">
          <div className="container">
            <h2 className="font-bold text-3xl my-4 border-b-2 py-4 px-6 dark:text-cinza-100">
              Projetos mais recentes:
            </h2>

            <div className='container py-8 px-6 mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

              {projetosRecentes.length === 0 && (
                <DNA
                  visible={true}
                  height="200"
                  width="200"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper mx-auto"
                />
              )}
              {projetosRecentes.map((projeto) => (
                <div >
                  <div>
                    <CardProjeto key={projeto.id} projeto={projeto} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className=" w-full flex justify-center pt-16">
          <div className="container">
            <h2 className=" font-bold text-3xl my-6 border-b-2 py-4 px-6 dark:text-cinza-100">
              Assista nosso comercial:
            </h2>
          </div>
        </div>
        <iframe
          src="https://www.youtube.com/embed/GTmqTa_R6q8"
          title="Zerone Comercial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='w-[70vw] h-[30vh] lg:h-[30vh] xl:h-[73vh]'
        >

        </iframe>
      </div>


    </>
  )
}

export default Home;

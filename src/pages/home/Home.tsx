import Carousel from '../../components/carousel/Carousel'
import CarouselCard from '../../components/carouselCard/CarouselCard'
import ProjetosHome from '../../components/home/listaProjetosHome/projetosHome'


function Home() {
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
              Projetos em Destaque esta semana:
            </h2>
            <CarouselCard />
          </div>
        </div>

        <div className=" w-full flex justify-center">
          <div className="container">
            <h2 className="font-bold text-3xl my-4 border-b-2 py-2">
              Projetos mais recentes:
            </h2>
            <div className=" flex my-10 justify-between gap-6">
              <ProjetosHome />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

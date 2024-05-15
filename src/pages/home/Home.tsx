import Carousel from '../../components/carousel/Carousel'
import { Link } from "react-router-dom"
import CarouselCard from '../../components/carouselCard/CarouselCard'


function Home() {
  return (
    <>
        <div className=" bg-blue-50 relative isolate flex items-center flex-col">

          <div className="relative w-screen overflow-hidden  text-center">
            <div>
              <Carousel />
            </div>
            {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sua ajuda pode contribuir positivamente para o desenvolvimento da
              sociedade!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              nostrum id! Autem velit illum fugit enim inventore rem
              repellendus, voluptates excepturi! Quis temporibus tempora
              voluptatum consequuntur neque, unde impedit magni.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/projetos"
                className="text-sm font-semibold leading-6 text-white bg-indigo-900 rounded p-4 hover:bg-indigo-300"
              >
                Confira todos os projetos
              </Link>
            </div> */}

          </div>

          <div className="bg-blue-50 mt-26 w-full flex justify-center">
            <div className="container">
              <h2 className=" font-bold text-3xl my-6 border-b-2 py-6 ">
                Projetos em Destaque esta semana:
              </h2>

              <CarouselCard/>

              
              {/* <div className=" flex p-4 my-10 justify-between gap-6">
                <div className="">
                  <div className="rounded p-4 bg-white shadow-md">
                    <img
                      src="https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg?class=ogImageWide"
                      alt=""
                      className="object-cover h-52 rounded w-full"
                    />

                    <h3 className="text-lg font-bold uppercase py-6 pb-4">
                      Nome do projeto
                    </h3>

                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ipsam exercitationem provident nihil molestias,
                      reprehenderit tenetur eos. Laudantium at accusamus aut
                      fuga, qui omnis provident quasi nemo vero odit odio amet?
                    </p>

                    <button className=" text-center font-semibold text-white bg-indigo-900 rounded p-2 mt-4">
                      <Link to="/page-project">Conheça este projeto</Link>
                    </button>
                  </div>
                </div>

                <div className="">
                  <div className="rounded p-4 bg-white shadow-md">
                    <img
                      src="https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg?class=ogImageWide"
                      alt=""
                      className="object-cover h-52 rounded w-full"
                    />

                    <h3 className="text-lg font-bold uppercase py-6 pb-4">
                      Nome do projeto
                    </h3>

                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ipsam exercitationem provident nihil molestias,
                      reprehenderit tenetur eos. Laudantium at accusamus aut
                      fuga, qui omnis provident quasi nemo vero odit odio amet?
                    </p>

                    <button className=" text-center font-semibold text-white bg-indigo-900 rounded p-2 mt-4">
                      <Link to="/page-project">Conheça este projeto</Link>
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          

          <div className="bg-blue-50 w-full flex justify-center">
            <div className="container">
              <h2 className=" font-bold text-3xl my-4 border-b-2 py-2">
                Projetos que se tornaram reais:
              </h2>
              <div className=" flex my-10 justify-between gap-6">
                <div className="">
                  <div className="rounded p-4 bg-white shadow-md">
                    <img
                      src="https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg?class=ogImageWide"
                      alt=""
                      className="object-cover h-52 rounded w-full"
                    />

                    <h3 className="text-lg font-bold uppercase py-6 pb-4">
                      Nome do projeto
                    </h3>



                    <button className=" text-center font-semibold text-white bg-indigo-900 rounded p-2 mt-4">
                      <Link to="/projetos">Conheça este projeto</Link>
                    </button>
                  </div>
                </div>

                <div className="">
                  <div className="rounded p-4 bg-white shadow-md">
                    <img
                      src="https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg?class=ogImageWide"
                      alt=""
                      className="object-cover h-52 rounded w-full"
                    />

                    <h3 className="text-lg font-bold uppercase py-6 pb-4">
                      Nome do projeto
                    </h3>

                    <button className=" text-center font-semibold text-white bg-indigo-900 rounded p-2 mt-4">
                      <Link to="/projetos">Conheça este projeto</Link>
                    </button>
                  </div>
                </div>

                <div className="">
                  <div className="rounded p-4 bg-white shadow-md">
                    <img
                      src="https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg?class=ogImageWide"
                      alt=""
                      className="object-cover h-52 rounded w-full"
                    />

                    <h3 className="text-lg font-bold uppercase py-6 pb-4">
                      Nome do projeto
                    </h3>

       

                    <button className=" text-center font-semibold text-white bg-indigo-900 rounded p-2 mt-4">
                      <Link to="/projetos">Conheça este projeto</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home

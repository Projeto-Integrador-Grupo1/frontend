import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div className="bg-white ">
        <div className="relative isolate px-6 pt-14 lg:px-8">

          <div className="text-center bg-blue-100 m-4 p-32 ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Sua ajuda pode contribuir positivamente para o desenvolvimento da sociedade!</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum id! Autem velit illum fugit enim inventore rem repellendus, voluptates excepturi! Quis temporibus tempora voluptatum consequuntur neque, unde impedit magni.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/projetos" className="text-sm font-semibold leading-6 text-gray-900">Confira todos os projetos <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          <div>
            <h2 className=" font-bold text-3xl my-4 border-b-4 py-2 ">Projetos em Destaque esta semana:</h2>
            <div className=" flex p-4 my-10 justify-between ">

              <div className="min-w-[25vw] mx-5">
                <div className='flex flex-col rounded overflow-hidden justify-between'>
                  <div>
                    <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                      <h3 className='text-lg font-bold text-center uppercase '>Nome do projeto</h3>
                    </div>
                    <div className=' flex p-4 '>
                      <img src="https://theimgstudio.com/wp-content/uploads/2021/01/right-mobilesadf-asdfasfaRecovered-Recovered.png" alt="" width="250px" />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exercitationem provident nihil molestias, reprehenderit tenetur eos. Laudantium at accusamus aut fuga, qui omnis provident quasi nemo vero odit odio amet?</p>
                    </div>
                  </div>
                  <div className="flex">
                    <button>
                      <Link to="/page-project" className=" text-center font-semibold text-blue-900 rounded-xl	 bg-blue-100 m-5 p-2 ">Conheça este projeto <span aria-hidden="true">→</span></Link>
                    </button>
                  </div>
                </div>
              </div>

              <div className="min-w-[25vw] mx-5">
                <div className='flex flex-col rounded overflow-hidden justify-between'>
                  <div>
                    <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                      <h3 className='text-lg font-bold text-center uppercase '>Nome do projeto</h3>
                    </div>
                    <div className=' flex p-4 '>
                      <img src="https://theimgstudio.com/wp-content/uploads/2021/01/right-mobilesadf-asdfasfaRecovered-Recovered.png" alt="" width="250px" />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exercitationem provident nihil molestias, reprehenderit tenetur eos. Laudantium at accusamus aut fuga, qui omnis provident quasi nemo vero odit odio amet?</p>
                    </div>
                  </div>
                  <div className="flex">
                  <button>
                      <Link to="/page-project" className=" text-center font-semibold text-blue-900 rounded-xl	 bg-blue-100 m-5 p-2 ">Conheça este projeto <span aria-hidden="true">→</span></Link>
                    </button>
                  </div>
                </div>
              </div>





            </div>
          </div>



          <div>
            <h2 className=" font-bold text-3xl my-4 border-b-4 py-2 ">Projetos que se tornaram reais:</h2>
            <div className=" flex p-4 my-10 justify-between ">

              <div className="min-w-[25vw] mx-5">
                <div className='flex flex-col rounded overflow-hidden justify-between'>
                  <div>
                    <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                      <h3 className='text-lg font-bold text-center uppercase '>Nome do projeto</h3>
                    </div>
                    <div className=' flex p-4 '>
                      <img src="https://theimgstudio.com/wp-content/uploads/2021/01/right-mobilesadf-asdfasfaRecovered-Recovered.png" alt="" width="250px" />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exercitationem provident nihil molestias, reprehenderit tenetur eos. Laudantium at accusamus aut fuga, qui omnis provident quasi nemo vero odit odio amet?</p>
                    </div>
                  </div>
                  <div className="flex">
                    <button>
                      <Link to="/page-project" className=" text-center font-semibold text-blue-900 rounded-xl	 bg-blue-100 m-5 p-2 ">Conheça este projeto <span aria-hidden="true">→</span></Link>
                    </button>
                  </div>
                </div>
              </div>

              <div className="min-w-[25vw] mx-5">
                <div className='flex flex-col rounded overflow-hidden justify-between'>
                  <div>
                    <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                      <h3 className='text-lg font-bold text-center uppercase '>Nome do projeto</h3>
                    </div>
                    <div className=' flex p-4 '>
                      <img src="https://theimgstudio.com/wp-content/uploads/2021/01/right-mobilesadf-asdfasfaRecovered-Recovered.png" alt="" width="250px" />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exercitationem provident nihil molestias, reprehenderit tenetur eos. Laudantium at accusamus aut fuga, qui omnis provident quasi nemo vero odit odio amet?</p>
                    </div>
                  </div>
                  <div className="flex">
                  <button>
                      <Link to="/page-project" className=" text-center font-semibold text-blue-900 rounded-xl	 bg-blue-100 m-5 p-2 ">Conheça este projeto <span aria-hidden="true">→</span></Link>
                    </button>
                  </div>
                </div>
              </div>

              <div className="min-w-[25vw] mx-5">
                <div className='flex flex-col rounded overflow-hidden justify-between'>
                  <div>
                    <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                      <h3 className='text-lg font-bold text-center uppercase '>Nome do projeto</h3>
                    </div>
                    <div className=' flex p-4 '>
                      <img src="https://theimgstudio.com/wp-content/uploads/2021/01/right-mobilesadf-asdfasfaRecovered-Recovered.png" alt="" width="250px" />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exercitationem provident nihil molestias, reprehenderit tenetur eos. Laudantium at accusamus aut fuga, qui omnis provident quasi nemo vero odit odio amet?</p>
                    </div>
                  </div>
                  <div className="flex">
                  <button>
                      <Link to="/page-project" className=" text-center font-semibold text-blue-900 rounded-xl	 bg-blue-100 m-5 p-2 ">Conheça este projeto <span aria-hidden="true">→</span></Link>
                    </button>
                  </div>
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

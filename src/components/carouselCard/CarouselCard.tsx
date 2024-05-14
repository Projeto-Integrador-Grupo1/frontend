import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from "react-router-dom";

function Carrossel() {

    return (
        <>
            <Swiper

                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >

                <SwiperSlide className="">
                    <div className="flex">
                        <div className=" flex p-4 my-10 justify-between gap-6">
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

                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Ipsam exercitationem provident nihil molestias,
                                        reprehenderit tenetur eos. Laudantium at accusamus aut
                                        fuga, qui omnis provident quasi nemo vero odit odio amet?
                                    </p>

                                    <button className=" text-center font-semibold text-white bg-indigo-900 rounded p-2 mt-4">
                                        <Link to="/projetos">Conheça este projeto</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex">
                        <div className=" flex p-4 my-10 justify-between gap-6">
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

                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Ipsam exercitationem provident nihil molestias,
                                        reprehenderit tenetur eos. Laudantium at accusamus aut
                                        fuga, qui omnis provident quasi nemo vero odit odio amet?
                                    </p>

                                    <button className=" text-center font-semibold text-white bg-indigo-900 rounded p-2 mt-4">
                                        <Link to="/projetos">Conheça este projeto</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex">
                        <div className=" flex p-4 my-10 justify-between gap-6">
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

                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Ipsam exercitationem provident nihil molestias,
                                        reprehenderit tenetur eos. Laudantium at accusamus aut
                                        fuga, qui omnis provident quasi nemo vero odit odio amet?
                                    </p>

                                    <button className=" text-center font-semibold text-white bg-indigo-900 rounded p-2 mt-4">
                                        <Link to="/projetos">Conheça este projeto</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel
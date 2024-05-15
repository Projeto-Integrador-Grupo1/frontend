import { Swiper, SwiperSlide } from "swiper/react";
import planejamento from "../../assets/planejamento.jpg";
import porquinho from "../../assets/porquinho.jpg" 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./Carousel.css";

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

        <SwiperSlide className="bg-gradient-to-r from-blue-50 to-blue-400 p-20 py-32">
          <div className="items-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sua ajuda pode contribuir positivamente para o desenvolvimento da
              sociedade!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800 px-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              nostrum id! Autem velit illum fugit enim inventore rem
              repellendus, voluptates excepturi! Quis temporibus tempora
              voluptatum consequuntur neque, unde impedit magni.
            </p>
            <div className="mt-20 flex items-center justify-center gap-x-6">
              <Link
                to="/projetos"
                className="text-sm font-semibold leading-6 text-white bg-blue-900 rounded p-4 hover:bg-indigo-300"
              >
                Confira todos os projetos
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={planejamento} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={porquinho} alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default Carrossel
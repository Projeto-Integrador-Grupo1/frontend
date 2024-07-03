import { Link } from "react-router-dom";
import { Banner, BannerCollapseButton, Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsGithub } from "react-icons/bs";
import { HiX } from "react-icons/hi";

import imgLogo from "../../assets/img/zerone-logo-claro.png";

function FooterComponent() {
  return (
    <>
      <Banner className="z-50 fixed bottom-5 right-5">
        <div className="flex w-[calc(100%-2rem)] flex-col justify-between rounded-lg bg-preto-500 p-4 shadow-sm  md:flex-row lg:max-w-7xl">
          <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
            <div
              className="mb-2 flex items-center border-gray-200  md:mb-0 md:mr-4 md:border-r md:pr-4"
            >
              <img src={imgLogo} className="mr-2 h-14" alt="Flowbite Logo" />
              <span className="self-center whitespace-nowrap text-lg font-semibold  md:pr-6">
              </span>
            </div>
            <p className="flex items-center text-sm font-normal text-cinza-100">
              Este site foi desenvolvido para fins educacionais.
            </p>
          </div>
          <div className="flex shrink-0 items-center">
            <BannerCollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
              <HiX className="h-4 w-4" />
            </BannerCollapseButton>
          </div>
        </div>
      </Banner>

      <Footer container className="rounded-none px-10 bg-azul-200">
        <div className="w-full">
          <div className="grid w-full lg:justify-between sm:flex sm:justify-center md:flex md:grid-cols-1">
            <div className=" pb-10">
              <Link className="flex justify-center" to="/home">
                <img src={imgLogo} className="mr-3 rounded-xl bg-preto-400 w-32 lg:w-40 " alt="Logo Zerone" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8  sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle className=" text-preto-400 text-lg lg:text-xl" title="A Zerone" />

                <FooterLinkGroup className=" text-preto-400" col >
                  <Link to="/sobre#sobre" className="hover:underline cursor-pointer">Quem Somos</Link>

                  <Link to="/sobre#valores" className="hover:underline cursor-pointer">Nossos Valores</Link>

                  <Link to="/sobre#problema" className="hover:underline cursor-pointer">Problema Social</Link>

                  <Link to="/sobre#equipe" className="hover:underline cursor-pointer">Nosso Time</Link>
                  <Link to="/tutoriais" className="hover:underline cursor-pointer">Perguntas Frequentes</Link>

                  <Link to='/erros' className="hover:underline">Reportar Erro</Link>
                </FooterLinkGroup>
              </div>

              <div>
                <FooterTitle className=" text-preto-400 text-lg lg:text-xl" title="Projetos" />

                <FooterLinkGroup className=" text-preto-400" col>
                  <Link to='/projetos' className="hover:underline">Ambiental</Link>
                  <Link to='/projetos' className="hover:underline">Cultura</Link>
                  <Link to='/projetos' className="hover:underline">Sustentabilidade</Link>
                  <Link to='/projetos' className="hover:underline">Tecnologia</Link>
                  <Link to='/projetos' className="hover:underline">Turma 73</Link>
                  <Link to='/projetos' className="hover:underline">Todos os Projetos</Link>
                </FooterLinkGroup>
              </div>

              <div>
                <FooterTitle className=" text-preto-400 text-lg lg:text-xl" title="Desenvolvido por:" />

                <FooterLinkGroup className=" text-preto-400" col>
                  <a
                    className="hover:underline"
                    href="https://drive.google.com/uc?export=download&id=1NaYJEkVGnH44tl-uZt9nMs2qIs_gndP3"
                    target="blank"
                    download
                  >
                    Alan Alves
                  </a>
                  <a
                    className="hover:underline"
                    href="https://drive.google.com/uc?export=download&id=1jBQ3nZGxtRACJ6-e2PJBs36XSyOhEwKt"
                    target="blank"
                    download
                  >
                    Alexia Bezerra
                  </a>
                  <a
                    className="hover:underline"
                    href="https://drive.google.com/uc?export=download&id=1elwXdfr0uzVytSHfUljUJap1K8o8UoSF"
                    target="blank"
                    download
                  >
                    Erick Costa
                  </a>
                  <a
                    className="hover:underline"
                    href="https://drive.google.com/uc?export=download&id=1p3B505kqTyKk2W0Df84Rqq9OLoqLiC2G"
                    target="blank"
                    download
                  >
                    Ketlyn Aldere
                  </a>
                  <a
                    className="hover:underline"
                    href="https://drive.google.com/uc?export=download&id=1zjrV_B66z2ZG29Xgzow_ZDTiawyVFcLD"
                    target="blank"
                    download
                  >
                    Valdeniza Fontineles
                  </a>
                  <a
                    className="hover:underline"
                    href="https://drive.google.com/uc?export=download&id=1ByoKwC1Gjp_ffm6fpHJsZTEtxjN4HP70"
                    target="blank"
                    download
                  >
                    Vinícius Franco
                  </a>
                </FooterLinkGroup>
              </div>
            </div>
          </div>

          <FooterDivider />
          <div className=" w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright className="text-preto-400" href="#" by="Zerone™ | Todos os direitos reservados." year={2024} />
            <div className="mt-4 text-preto-400 flex items-center space-x-6 sm:mt-0 sm:justify-center">

              <span className="dark:text-cinza-100">Veja o projeto no GitHub: </span>

              <FooterIcon
                className="text-preto-400 dark:text-cinza-300"
                href="https://github.com/Projeto-Integrador-Grupo1/frontend"
                target="blank"
                icon={BsGithub}
              />

              <FooterIcon
                className="text-preto-400 dark:text-cinza-300 "
                href="https://github.com/Projeto-Integrador-Grupo1/backend"
                target="blank"
                icon={BsGithub}
              />
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}

export default FooterComponent;

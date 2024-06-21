import { Link } from "react-router-dom";
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLinkGroup, FooterTitle } from "flowbite-react"; 
import { BsGithub } from "react-icons/bs";

import imgLogo from "../../assets/img/zerone-logo-claro.png";

function FooterComponent() {
  return (
    <>
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
                <FooterTitle className=" text-preto-400" title="A Zerone" />

                <FooterLinkGroup className=" text-preto-400" col >
                  <span className="hover:underline cursor-pointer">Quem somos</span>
                  <span className="hover:underline cursor-pointer">Nossos Valores</span>
                  <span className="hover:underline cursor-pointer">Nosso time</span>
                </FooterLinkGroup>
              </div>

              <div>
                <FooterTitle className=" text-preto-400" title="Projetos" />

                <FooterLinkGroup className=" text-preto-400" col>
                  <span className="hover:underline cursor-pointer">Tecnologia</span>
                  <span className="hover:underline cursor-pointer">Cultura</span>
                  <span className="hover:underline cursor-pointer">Sustentabilidade</span>
                  <span className="hover:underline cursor-pointer">Todos os Projetos</span>
                </FooterLinkGroup>
              </div>

              <div>
                <FooterTitle className=" text-preto-400" title="Desenvolvido por:" />
                
                <FooterLinkGroup className=" text-preto-400" col>
                  <span className="hover:underline cursor-pointer">Alan Alves</span>
                  <span className="hover:underline cursor-pointer">Alexia Bezerra</span>
                  <span className="hover:underline cursor-pointer">Erick Costa</span>
                  <span className="hover:underline cursor-pointer">Ketlyn Aldere</span>
                  <span className="hover:underline cursor-pointer">Valdeniza Fontineles</span>
                  <span className="hover:underline cursor-pointer">Vinicius Franco</span>
                </FooterLinkGroup>
              </div>
            </div>
          </div>

          <FooterDivider />
          <div className=" w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright className="text-preto-400" href="#" by="Zerone™ | Todos os direitos reservados." year={2024} />
            <div className="mt-4 text-preto-400 flex space-x-6 sm:mt-0 sm:justify-center">

              <FooterIcon
                className="text-preto-400 dark:text-cinza-300"
                href="https://github.com/Projeto-Integrador-Grupo1/frontend"
                target="blank"
                icon={BsGithub}
              />

              <FooterIcon
                className="text-preto-400 dark:text-cinza-300"
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

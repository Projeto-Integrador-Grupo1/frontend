import imgAlan from '../../assets/alan.jpg';
import imgAlexia from '../../assets/alexia.jpg';
import imgErick from '../../assets/erick.jpg';
import imgKetlyn from '../../assets/ketlyn.jpg';
import imgValdeniza from '../../assets/valdeniza.jpg';
import imgVinicius from '../../assets/vinicius.jpg';
import imgGitHub from '../../assets/github.png';
import imgLinkedin from '../../assets/linkedin.png';


const links = [
  { name: 'Projetos', href: '#' },
]

const valores = [
  {
    name: 'Transparência',
    description: 'Agimos com honestidade e transparência em todas as nossas interações, garantindo que os criadores e apoiadores tenham confiança em nossa plataforma.',
    imageUrl: imgLinkedin,
  },
  {
    name: 'Inovação',
    description: 'Buscamos constantemente novas formas de melhorar e aprimorar nossa plataforma para atender às necessidades em constante evolução.',
    imageUrl: imgLinkedin,
  },
  {
    name: 'Sustentabilidade',
    description: 'Operamos de forma sustentável, considerando o impacto ambiental e social das operações e incentivando práticas responsáveis entre os usuários.',
    imageUrl: imgLinkedin,
  }
]

const equipe = [
  {
    name: 'Alan Alves',
    role: 'Software Engineer',
    imageUrl: imgAlan,
    linkedin: 'https://www.linkedin.com/in/alanalvess/',
    gitHub: 'https://github.com/alanalvess'
  },

  {
    name: 'Alexia Bezerra',
    role: 'Software Engineer',
    imageUrl: imgAlexia,
    linkedin: 'https://www.linkedin.com/in/alexia-bezerra/',
    gitHub: 'https://github.com/Lexarlab '
  },

  {
    name: 'Erick Costa',
    role: 'Software Engineer',
    imageUrl: imgErick,
    linkedin: 'https://www.linkedin.com/in/erick-costa-3301/',
    gitHub: 'https://github.com/erick-costa'
  },

  {
    name: 'Ketlyn Aldere',
    role: 'Software Engineer',
    imageUrl: imgKetlyn,
    linkedin: 'https://www.linkedin.com/in/ketlyn-santos-02506629b/',
    gitHub: 'https://github.com/Ketlyn1612'
  },

  {
    name: 'Valdeniza Fontineles',
    role: 'Software Engineer',
    imageUrl: imgValdeniza,
    linkedin: 'https://www.linkedin.com/in/valdeniza-fontineles-66761727b/',
    gitHub: 'https://github.com/denizafontineles'
  },

  {
    name: 'Vinicius Franco',
    role: 'Software Engineer',
    imageUrl: imgVinicius,
    linkedin: 'https://www.linkedin.com/in/vinifrancodev/',
    gitHub: 'https://github.com/VncioFranco'
  }
]

function Sobre() {
  return (
    <div>

      {/* Header */}

      <div className="relative isolate overflow-hidden bg-gray-900 py-32 sm:py-36">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">Quem somos</h2>
            <p className="text-xl font-semibold leading-8 text-gray-300 sm:text-2xl sm:leading-9 pt-16 sm:pt-16 ">
              Venha conosco na missão de impulsionar a inovação e gerar um impacto positivo global.
            </p>

          </div>
          <div className="mx-auto pt-16 sm:pt-12 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-xl sm:text-xl font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Valores */}

      <section className=" bg-white px-6 py-16 sm:py-28 lg:px-8 ">
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none px-6">
          <div className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nossos valores</h2>
            <div className="pt-14 sm:py-16">
              <ul role="list" className="grid gap-x-16 gap-y-12 sm:grid-cols-3 sm:mx-auto sm:gap-y-16 xl:col-span-2">
                {valores.map((valor) => (
                  <li >
                    <div className='flex flex-col' >
                      {/* <img
                          className="mx-auto h-10 w-10 rounded-full"
                          src={valor.imageUrl}
                          alt=""
                        /> */}

                      <div className="mt-4 flex items-center justify-center space-x-3 gap-4 text-2xl">
                        <p className=" font-semibold text-gray-900">{valor.name}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-center space-x-3 gap-4 text-lg">
                        <p className=" text-gray-900">{valor.description}</p>
                      </div>
                    </div>

                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Social */}

      <div className="bg-blue-100 py-24 sm:py-16">
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2 mx-auto max-w-7xl px-6 lg:px-8 pb-12 ">
            <div className="flex flex-col-reverse justify-center items-center mt-[-1rem] ">
              <p className="text-xl leading-7 text-black-300 flex justify-center items-center">A implementação de projetos sustentáveis requer financiamento adequado.
                Criar parcerias entre governos, empresas e organizações da sociedade civil são essenciais para mobilizar recursos e investir em iniciativas que beneficiem a todos.
                O problema social discutido neste projeto será a falta de acesso a financiamentos para iniciativas sociais, culturais, empreendedoras, criativas, dentre outras.
                Tal proposta engloba  projetos que possuem maiores dificuldades em conseguir financiamento bancário ou aporte financeiro de outras instituições, obtendo assim o apoio da comunidade global.</p>
              <h3 className="text-3xl font-bold leading-9 tracking-tight text-black pb-10">Qual o problema social que queremos resolver?</h3>
            </div>
            <div className="flex flex-col-reverse justify-center items-center py-5">
              <p className="text-xl leading-7 text-black-300">
                A ODS 17 apoia que tenha uma distribuição mais equitativa de recursos entre países desenvolvidos e em desenvolvimento e a criação de
                parcerias entre as mais diversas instituições têm um impacto significativo e traz consequências positivas. Ao unir recursos, conhecimentos e habilidades de diferentes entidades,
                essas parcerias promovem a inovação colaborativa e fortalecem a resiliência das comunidades. Isso resulta em soluções mais eficazes para os desafios ambientais,
                sociais e econômicos, promovendo o crescimento econômico sustentável, o empoderamento local e o alcance de metas globais de desenvolvimento.</p>
              <h3 className="text-3xl font-bold leading-9 tracking-tight text-black pb-10">
                O efeito das parcerias para o desenvolvimento sustentável na sociedade.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Contato */}

      <div className="bg-white-400 py-24 sm:py-26">
        <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conheça nosso time</h2>
            <p className="mt-10 text-xl leading-7 text-gray-600">
              "Somos um grupo dinâmico de pessoas apaixonadas pelo que fazemos e dedicadas a entregar os melhores resultados aos nossos clientes".
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {equipe.map((equipe) => (
              <li key={equipe.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-28 w-28 rounded-full" src={equipe.imageUrl} alt="" />
                  <div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">{equipe.name}</h3>
                    <p className="text-base font-semibold leading-6 text-gray-500">{equipe.role}</p>
                    <li key={equipe.name}>
                      <div className="flex items-center gap-x-1">
                        <a href={equipe.linkedin}>
                          <img className="h-8 w-8" src={imgLinkedin} alt="" />
                        </a>
                        <a href={equipe.gitHub}>
                          <img className="h-8 w-8" src={imgGitHub} alt="" />
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sobre

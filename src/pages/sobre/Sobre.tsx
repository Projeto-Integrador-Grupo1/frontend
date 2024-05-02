


function Sobre() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
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
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Quem somos</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Somos uma plataforma que viabiliza a sustentabilidade financeira de fazeres criativos e causas através do Financiamento Coletivo.
            </p>
          </div>

        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:pb-24">
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-16 grid grid-cols-1 gap-24 sm:mt-20 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col">
              <dd className="text-2xl font-bold leading-9 tracking-tight text-black mb-5">Qual o problema social que queremos resolver?</dd>
              <dt className="text-base leading-7  text-black">
                A implementação de projetos sustentáveis requer financiamento adequado. <b />
                Criar parcerias entre governos, empresas e organizações da sociedade civil são essenciais para mobilizar recursos e investir em iniciativas que beneficiem a todos.
                O problema social discutido neste projeto será a falta de acesso a financiamentos para iniciativas sociais, culturais, empreendedoras, criativas, dentre outras. Tal proposta engloba  projetos que possuem maiores dificuldades em conseguir financiamento bancário ou aporte financeiro de outras instituições, obtendo assim o apoio da comunidade global.
              </dt>
            </div>
            <div>
              <dd className="text-2xl font-bold leading-9 tracking-tight  text-black mb-5">Qual o impacto da criação de parcerias para o desenvolvimento sustentável na sociedade?</dd>
              <dt className="text-base leading-7  text-black">A ODS 17 apoia que tenha uma distribuição mais equitativa de recursos entre países desenvolvidos e em desenvolvimento e a criação de parcerias entre as mais diversas instituições têm um impacto significativo e traz consequências positivas. Ao unir recursos, conhecimentos e habilidades de diferentes entidades, essas parcerias promovem a inovação colaborativa e fortalecem a resiliência das comunidades. Isso resulta em soluções mais eficazes para os desafios ambientais, sociais e econômicos, promovendo o crescimento econômico sustentável, o empoderamento local e o alcance de metas globais de desenvolvimento.
              </dt>
            </div>
          </div>
        </div>
    </div>
    </div >


  )

}

export default Sobre
